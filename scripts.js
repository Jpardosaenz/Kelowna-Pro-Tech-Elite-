/*
==========================================================================
SECCIÓN: LÓGICA JAVASCRIPT
==========================================================================
*/

document.addEventListener("DOMContentLoaded", () => {
  /*
  ----------------------------------------------------------------------
  FUNCIONALIDAD 1: Menú de Navegación Móvil
  ----------------------------------------------------------------------
  */

  const menuTrigger = document.querySelector(".kpem-menu-trigger");
  const menuCloseButton = document.querySelector(".menu-close-button");

  function openMenu() {
    document.body.classList.add("menu-is-open");
    menuTrigger.setAttribute("aria-expanded", "true");
  }

  function closeMenu() {
    document.body.classList.remove("menu-is-open");
    menuTrigger.setAttribute("aria-expanded", "false");
  }

  if (menuTrigger) {
    menuTrigger.addEventListener("click", openMenu);
  }

  if (menuCloseButton) {
    menuCloseButton.addEventListener("click", closeMenu);
  }

  const mobileMenu = document.querySelector("#mobile-navigation");
  if (mobileMenu) {
    mobileMenu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", closeMenu);
    });
  }

  /*
  ----------------------------------------------------------------------
  FUNCIONALIDAD 2: Botón Flotante CTA
  ----------------------------------------------------------------------
  */

  const floatingCtaContainer = document.querySelector(".floating-cta-container");

  if (floatingCtaContainer) {
    const computedDisplay = window
      .getComputedStyle(floatingCtaContainer)
      .getPropertyValue("display");
    const visibleDisplay =
      computedDisplay && computedDisplay !== "none" ? computedDisplay : "flex";

    const baseTransition = floatingCtaContainer.style.transition
      ? `${floatingCtaContainer.style.transition}, opacity 0.3s ease, transform 0.3s ease`
      : "opacity 0.3s ease, transform 0.3s ease";

    floatingCtaContainer.style.transition = baseTransition;
    floatingCtaContainer.style.display = "none";
    floatingCtaContainer.style.opacity = "0";
    floatingCtaContainer.style.transform = "translateY(12px)";

    const threshold = 400;
    const idleDelay = 2000;
    let isVisible = false;
    let idleTimer = null;

    const showCTA = () => {
      if (!isVisible) {
        floatingCtaContainer.style.display = visibleDisplay;
        requestAnimationFrame(() => {
          floatingCtaContainer.style.opacity = "1";
          floatingCtaContainer.style.transform = "translateY(0)";
        });
        isVisible = true;
      } else {
        floatingCtaContainer.style.opacity = "1";
        floatingCtaContainer.style.transform = "translateY(0)";
      }
    };

    const hideCTA = () => {
      if (!isVisible) return;

      floatingCtaContainer.style.opacity = "0";
      floatingCtaContainer.style.transform = "translateY(12px)";
      isVisible = false;
      clearTimeout(idleTimer);

      setTimeout(() => {
        if (!isVisible) {
          floatingCtaContainer.style.display = "none";
        }
      }, 300);
    };

    const dimCTA = () => {
      if (!isVisible) return;
      floatingCtaContainer.style.opacity = "0.35";
      floatingCtaContainer.style.transform = "translateY(6px)";
    };

    const resetIdleTimer = () => {
      if (!isVisible) return;
      floatingCtaContainer.style.opacity = "1";
      floatingCtaContainer.style.transform = "translateY(0)";
      clearTimeout(idleTimer);
      idleTimer = setTimeout(dimCTA, idleDelay);
    };

    const handleScroll = () => {
      if (window.scrollY > threshold) {
        showCTA();
        resetIdleTimer();
      } else {
        hideCTA();
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    ["mouseenter", "focusin"].forEach((eventName) => {
      floatingCtaContainer.addEventListener(eventName, () => {
        if (!isVisible) return;
        floatingCtaContainer.style.opacity = "1";
        floatingCtaContainer.style.transform = "translateY(0)";
        clearTimeout(idleTimer);
      });
    });

    ["mouseleave", "focusout"].forEach((eventName) => {
      floatingCtaContainer.addEventListener(eventName, () => {
        resetIdleTimer();
      });
    });
  }

  const mainButton = document.querySelector(".main-cta-button");
  const options = document.querySelector(".cta-options");

  if (mainButton && options) {
    // Evento: Abrir/Cerrar menú al hacer clic en el botón CTA
    mainButton.addEventListener("click", function (e) {
      e.preventDefault();

      // Cierra otros menús antes de abrir este
      document.querySelectorAll(".cta-options").forEach((menu) => {
        if (menu !== options) {
          menu.classList.remove("show-options");
        }
      });

      // Alternar visibilidad del menú actual (solo uno abierto a la vez)
      if (options.classList.contains("show-options")) {
        options.classList.remove("show-options");
      } else {
        document
          .querySelectorAll(".cta-options")
          .forEach((menu) => menu.classList.remove("show-options"));
        options.classList.add("show-options");
      }
    });

    // Evento: Cerrar menú si se hace clic fuera de él
    document.addEventListener("click", function (event) {
      const isClickInside =
        mainButton.contains(event.target) || options.contains(event.target);

      if (!isClickInside) {
        options.classList.remove("show-options");
      }
    });
  }
});

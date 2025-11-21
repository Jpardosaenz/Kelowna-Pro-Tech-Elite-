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
    const threshold = 100;
    let isVisible = false;
    let idleTimer = null;
    const idleDelay = 2000;

    const showCTA = () => {
      if (!isVisible) {
        floatingCtaContainer.style.display = visibleDisplay;
        requestAnimationFrame(() => {
          floatingCtaContainer.style.opacity = "1";
          floatingCtaContainer.style.transform = "translateY(0)";
        });
        isVisible = true;
      } else {
        // Ensure it's fully visible if it was dimmed
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
      // Always restore full visibility on interaction
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
    
    // Reset timer on interaction
    ["touchstart", "click"].forEach(evt => {
        floatingCtaContainer.addEventListener(evt, resetIdleTimer);
    });
  }
});


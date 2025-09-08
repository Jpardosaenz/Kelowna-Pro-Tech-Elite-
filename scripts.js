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

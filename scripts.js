/*
==========================================================================
SECCIÓN: LÓGICA JAVASCRIPT
==========================================================================
*/

document.addEventListener('DOMContentLoaded', () => {

  /*
  ----------------------------------------------------------------------
  FUNCIONALIDAD 1: Menú de Navegación Móvil
  ----------------------------------------------------------------------
  */

  const menuTrigger = document.querySelector('.kpem-menu-trigger');
  const menuCloseButton = document.querySelector('.menu-close-button');

  function openMenu() {
    document.body.classList.add('menu-is-open');
    menuTrigger.setAttribute('aria-expanded', 'true');
  }

  function closeMenu() {
    document.body.classList.remove('menu-is-open');
    menuTrigger.setAttribute('aria-expanded', 'false');
  }

  if (menuTrigger) {
    menuTrigger.addEventListener('click', openMenu);
  }

  if (menuCloseButton) {
    menuCloseButton.addEventListener('click', closeMenu);
  }

  const mobileMenu = document.querySelector('#mobile-navigation');
  if (mobileMenu) {
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', closeMenu);
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
    mainButton.addEventListener("click", function (e) {
      e.preventDefault();
      options.classList.toggle("show-options");
    });
  }

});

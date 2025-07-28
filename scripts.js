/*
==========================================================================
SECCIÓN: LÓGICA JAVASCRIPT
==========================================================================
*/

// Este evento asegura que el código se ejecute solo después de que
// toda la estructura HTML de la página se haya cargado.
document.addEventListener('DOMContentLoaded', () => {

  /*
  ----------------------------------------------------------------------
  FUNCIONALIDAD 1: Menú de Navegación Móvil
  ----------------------------------------------------------------------
  */

  // 1. Identificar las piezas del DOM (Document Object Model)
  const menuTrigger = document.querySelector('.kpem-menu-trigger');
  const menuCloseButton = document.querySelector('.menu-close-button');

  // 2. Definir las acciones (funciones reutilizables)
  function openMenu() {
    // Añade la clase 'menu-is-open' al body. El CSS reaccionará a esto.
    document.body.classList.add('menu-is-open');
    // Actualiza el atributo ARIA para accesibilidad, informando que el menú está expandido.
    menuTrigger.setAttribute('aria-expanded', 'true');
  }

  function closeMenu() {
    // Quita la clase 'menu-is-open' del body para ocultar el menú.
    document.body.classList.remove('menu-is-open');
    // Actualiza el atributo ARIA para accesibilidad.
    menuTrigger.setAttribute('aria-expanded', 'false');
  }

  // 3. Conectar los botones a las acciones (Añadir "Event Listeners")
  // Si el botón de abrir existe, escuchar por clics y ejecutar openMenu.
  if (menuTrigger) {
    menuTrigger.addEventListener('click', openMenu);
  }
  
  // Si el botón de cerrar existe, escuchar por clics y ejecutar closeMenu.
  if (menuCloseButton) {
    menuCloseButton.addEventListener('click', closeMenu);
  }

  // 4. (Mejora de UX) Cerrar el menú si se hace clic en un enlace.
  const mobileMenu = document.querySelector('#mobile-navigation');
  if (mobileMenu) {
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', closeMenu);
    });
  }

});

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

    const threshold = 300; // Only show after scrolling past the Hero
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

    ["touchstart", "click"].forEach(evt => {
      floatingCtaContainer.addEventListener(evt, resetIdleTimer);
    });
  }
});

/*
==========================================================================
HERO TESTIMONIAL CAROUSEL - Auto-rotating con pausa en hover/touch
==========================================================================
*/
(function () {
  const carouselItems = document.querySelectorAll('.carousel-item');
  const carouselLink = document.querySelector('.hero-carousel-link');

  if (carouselItems.length === 0 || !carouselLink) return;

  let currentIndex = 0;
  let intervalId = null;
  let isPaused = false;

  function showNextTestimonial() {
    if (isPaused) return;

    // Remove active class from current
    carouselItems[currentIndex].classList.remove('active');

    // Move to next (loop back to 0 if at end)
    currentIndex = (currentIndex + 1) % carouselItems.length;

    // Add active class to new current
    carouselItems[currentIndex].classList.add('active');
  }

  // Start auto-rotation every 4 seconds
  function startRotation() {
    if (!intervalId) {
      intervalId = setInterval(showNextTestimonial, 4000);
    }
  }

  // Pause on hover (desktop)
  carouselLink.addEventListener('mouseenter', function () {
    isPaused = true;
  });

  carouselLink.addEventListener('mouseleave', function () {
    isPaused = false;
  });

  // Pause on touch/click (mobile)
  carouselLink.addEventListener('touchstart', function () {
    isPaused = true;
  });

  carouselLink.addEventListener('touchend', function () {
    setTimeout(function () {
      isPaused = false;
    }, 2000); // Resume after 2 seconds
  });

  // Start the rotation
  startRotation();
})();


/*
==========================================================================
TRACKING: PHONE & SMS CLICKS (GA4 Conversion Events)
==========================================================================
Tracks all tel: and sms: link clicks across the entire site.
Critical for measuring conversion sources (Website vs GMB).
*/

document.addEventListener('DOMContentLoaded', function () {
  // Track all tel: links (phone clicks)
  const telLinks = document.querySelectorAll('a[href^="tel:"]');

  telLinks.forEach(link => {
    link.addEventListener('click', function () {
      const phoneNumber = this.getAttribute('href');
      const linkText = this.textContent.trim();
      const linkClass = this.className;

      // Send event to GA4
      if (typeof gtag === 'function') {
        const phoneEventParams = {
          'event_category': 'conversion',
          'event_label': linkText || 'Phone Click',
          'phone_number': phoneNumber,
          'link_class': linkClass,
          'page_location': window.location.pathname
        };
        if (this.id === 'main-cta-button' || this.closest('.floating-cta-container')) {
          phoneEventParams['button_location'] = 'floating_widget';
        }
        gtag('event', 'phone_click', phoneEventParams);
      }
    });
  });

  // Track all sms: links (SMS clicks)
  const smsLinks = document.querySelectorAll('a[href^="sms:"]');

  smsLinks.forEach(link => {
    link.addEventListener('click', function () {
      const phoneNumber = this.getAttribute('href');
      const linkText = this.textContent.trim();
      const linkClass = this.className;

      // Send event to GA4
      if (typeof gtag === 'function') {
        gtag('event', 'sms_click', {
          'event_category': 'conversion',
          'event_label': linkText || 'SMS Click',
          'phone_number': phoneNumber,
          'link_class': linkClass,
          'page_location': window.location.pathname
        });
      }

    });
  });

  // Track service card clicks
  document.querySelectorAll('#service-tiles .tile').forEach(tile => {
    tile.addEventListener('click', () => {
      const serviceTitle = tile.querySelector('.title')?.textContent || 'Unknown Service';
      const isMostPopular = tile.querySelector('.tag') !== null;

      if (typeof gtag === 'function') {
        gtag('event', 'service_card_click', {
          'event_category': 'Engagement',
          'event_label': serviceTitle,
          'service_section': 'service_tiles',
          'is_featured': isMostPopular
        });
      }
    });
  });

});

/*
==========================================================================
IMAGE ZOOM — click-to-enlarge for elements with [data-zoom]
==========================================================================
No-op if the page has no [data-zoom] elements. Requires .img-zoom-overlay
CSS (see page-level <style> block).
*/
document.addEventListener('DOMContentLoaded', function () {
  const zoomables = document.querySelectorAll('[data-zoom]');
  if (!zoomables.length) return;

  const overlay = document.createElement('div');
  overlay.className = 'img-zoom-overlay';
  overlay.setAttribute('role', 'dialog');
  overlay.setAttribute('aria-modal', 'true');
  overlay.innerHTML = '<img class="img-zoom-overlay__img" alt="">';
  document.body.appendChild(overlay);
  const overlayImg = overlay.querySelector('img');

  function openZoom(src, alt) {
    overlayImg.src = src;
    overlayImg.alt = alt;
    overlay.classList.add('is-open');
  }
  function closeZoom() {
    overlay.classList.remove('is-open');
  }

  zoomables.forEach(function (el) {
    el.addEventListener('click', function () {
      openZoom(el.dataset.zoom || el.src, el.alt);
    });
    el.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openZoom(el.dataset.zoom || el.src, el.alt);
      }
    });
  });

  overlay.addEventListener('click', closeZoom);
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeZoom();
  });
});

/*
==========================================================================
RISK SCAN BARS — reveal-on-scroll for .ppi-scan__row, once each
==========================================================================
No-op if the page has no .ppi-scan__row elements. CSS handles the actual
fill width via the --w custom property; this only adds "is-visible" once
so the fill transition plays as the row enters view.
*/
document.addEventListener('DOMContentLoaded', function () {
  const rows = document.querySelectorAll('.ppi-scan__row');
  if (!rows.length) return;

  if (!('IntersectionObserver' in window)) {
    rows.forEach(function (row) { row.classList.add('is-visible'); });
    return;
  }

  const observer = new IntersectionObserver(function (entries, obs) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      obs.unobserve(entry.target);
    });
  }, { threshold: 0.4 });

  rows.forEach(function (row) { observer.observe(row); });
});

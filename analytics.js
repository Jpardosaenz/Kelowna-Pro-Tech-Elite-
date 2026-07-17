(function () {
  'use strict';

  const PRODUCTION_HOSTNAME = 'kelownaprotechmobilemech.com';
  const MEASUREMENT_ID = 'G-1GDM77733G';

  if (window.location.hostname !== PRODUCTION_HOSTNAME) {
    return;
  }

  window.dataLayer = window.dataLayer || [];
  window.gtag = function () {
    window.dataLayer.push(arguments);
  };

  window.gtag('js', new Date());
  window.gtag('config', MEASUREMENT_ID);

  const googleTag = document.createElement('script');
  googleTag.async = true;
  googleTag.src = `https://www.googletagmanager.com/gtag/js?id=${MEASUREMENT_ID}`;
  document.head.appendChild(googleTag);
})();

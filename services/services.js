(function () {
  // Fade-in on scroll
  const fadeEls = document.querySelectorAll('.fade-in');
  if ('IntersectionObserver' in window) {
    const fadeObs = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('visible'); fadeObs.unobserve(e.target); }
      });
    }, { threshold: 0.08 });
    fadeEls.forEach(function (el) { fadeObs.observe(el); });
  } else {
    fadeEls.forEach(function (el) { el.classList.add('visible'); });
  }

  // Animated counters
  function animateCounter(el) {
    const target = parseFloat(el.dataset.count);
    const prefix = el.dataset.prefix || '';
    const suffix = el.dataset.suffix || '';
    const isDecimal = el.dataset.count.indexOf('.') !== -1;
    const duration = 1400;
    const startVal = isDecimal ? target - 0.9 : 0;
    let startTime = null;

    function step(ts) {
      if (!startTime) startTime = ts;
      const progress = Math.min((ts - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const cur = startVal + (target - startVal) * eased;
      el.textContent = prefix + (isDecimal ? cur.toFixed(1) : Math.floor(cur)) + suffix;
      if (progress < 1) { requestAnimationFrame(step); }
      else { el.textContent = prefix + (isDecimal ? target.toFixed(1) : target) + suffix; }
    }
    requestAnimationFrame(step);
  }

  const statNums = document.querySelectorAll('.stat-num[data-count]');
  if ('IntersectionObserver' in window && statNums.length) {
    const statObs = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { animateCounter(e.target); statObs.unobserve(e.target); }
      });
    }, { threshold: 0.5 });
    statNums.forEach(function (el) { statObs.observe(el); });
  }
})();

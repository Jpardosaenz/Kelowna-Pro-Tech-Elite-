(function () {
  // Fade-in on scroll
  var fadeEls = document.querySelectorAll('.fade-in');
  if ('IntersectionObserver' in window) {
    var fadeObs = new IntersectionObserver(function (entries) {
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
    var target = parseFloat(el.dataset.count);
    var prefix = el.dataset.prefix || '';
    var suffix = el.dataset.suffix || '';
    var isDecimal = el.dataset.count.indexOf('.') !== -1;
    var duration = 1400;
    var startVal = isDecimal ? target - 0.9 : 0;
    var startTime = null;

    function step(ts) {
      if (!startTime) startTime = ts;
      var progress = Math.min((ts - startTime) / duration, 1);
      var eased = 1 - Math.pow(1 - progress, 3);
      var cur = startVal + (target - startVal) * eased;
      el.textContent = prefix + (isDecimal ? cur.toFixed(1) : Math.floor(cur)) + suffix;
      if (progress < 1) { requestAnimationFrame(step); }
      else { el.textContent = prefix + (isDecimal ? target.toFixed(1) : target) + suffix; }
    }
    requestAnimationFrame(step);
  }

  var statNums = document.querySelectorAll('.stat-num[data-count]');
  if ('IntersectionObserver' in window && statNums.length) {
    var statObs = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { animateCounter(e.target); statObs.unobserve(e.target); }
      });
    }, { threshold: 0.5 });
    statNums.forEach(function (el) { statObs.observe(el); });
  }
})();

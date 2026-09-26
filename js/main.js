// Access to Justice Education Initiative: menu behaviour only.
(function () {
  var nav = document.getElementById('nav');
  var hero = document.getElementById('top');
  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelectorAll('.nav-menu a[href^="#"]');

  // White navigation bar once the visitor scrolls past the banner
  function onScroll() {
    var limit = hero ? hero.offsetHeight - 80 : 40;
    nav.classList.toggle('scrolled', window.scrollY > limit);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Mobile menu
  toggle.addEventListener('click', function () {
    var open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open);
    var fr = document.documentElement.lang === 'fr';
    toggle.setAttribute('aria-label', open ? (fr ? 'Fermer le menu' : 'Close menu') : (fr ? 'Ouvrir le menu' : 'Open menu'));
  });
  document.querySelectorAll('.nav-menu a').forEach(function (a) {
    a.addEventListener('click', function () {
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });

  // Underline the menu item of the section on screen
  if ('IntersectionObserver' in window) {
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          links.forEach(function (a) {
            a.classList.toggle('active', a.getAttribute('href') === '#' + e.target.id);
          });
        }
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    links.forEach(function (a) {
      var s = document.querySelector(a.getAttribute('href'));
      if (s) spy.observe(s);
    });
  }

  var y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
})();

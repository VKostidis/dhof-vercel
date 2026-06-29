(function () {
  'use strict';

  /* ── nav.js ─────────────────────────────────────────────────────────────── */

  var SELECTOR = {
    toggle:   '[data-nav-toggle]',
    drawer:   '[data-nav-drawer]',
    dropdown: '[data-dropdown]',
  };

  var STATE = {
    open:     'is-open',
    active:   'is-active',
    noScroll: 'dhof-no-scroll',
  };

  function initDrawer() {
    var toggle = document.querySelector(SELECTOR.toggle);
    var drawer = document.querySelector(SELECTOR.drawer);
    if (!toggle || !drawer) return;

    function setOpen(open) {
      drawer.classList.toggle(STATE.open, open);
      toggle.classList.toggle(STATE.open, open);
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
      drawer.setAttribute('aria-hidden', String(!open));
      document.body.classList.toggle(STATE.noScroll, open);
    }

    var close = function () { setOpen(false); };
    var isOpen = function () { return drawer.classList.contains(STATE.open); };

    toggle.addEventListener('click', function () { setOpen(!isOpen()); });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && isOpen()) { close(); toggle.focus(); }
    });

    drawer.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', close);
    });

    window.matchMedia('(min-width: 901px)').addEventListener('change', function (e) {
      if (e.matches && isOpen()) close();
    });
  }

  function initDropdowns() {
    document.querySelectorAll(SELECTOR.dropdown).forEach(function (item) {
      var btn = item.querySelector('.dhof-nav-item__chevron-btn');
      if (!btn) return;

      var open  = function () { item.classList.add(STATE.open);    btn.setAttribute('aria-expanded', 'true');  };
      var close = function () { item.classList.remove(STATE.open); btn.setAttribute('aria-expanded', 'false'); };
      var isOpen = function () { return item.classList.contains(STATE.open); };

      btn.addEventListener('click', function (e) {
        e.stopPropagation();
        isOpen() ? close() : open();
      });

      document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && isOpen()) { close(); btn.focus(); }
      });
    });

    document.addEventListener('click', function (e) {
      if (!e.target.closest(SELECTOR.dropdown)) {
        document.querySelectorAll('[data-dropdown].is-open').forEach(function (item) {
          item.classList.remove(STATE.open);
          var t = item.querySelector('.dhof-nav-item__trigger');
          if (t) t.setAttribute('aria-expanded', 'false');
        });
      }
    });
  }

  function markActive() {
    var path = window.location.pathname;

    document.querySelectorAll('.dhof-header__nav a').forEach(function (link) {
      try {
        var href = new URL(link.href, window.location.origin).pathname;
        if (href === path || (href !== '/' && path.startsWith(href))) {
          link.classList.add(STATE.active);
        }
      } catch (e) {}
    });

    document.querySelectorAll('.dhof-nav-item__trigger').forEach(function (wrapper) {
      if (path.startsWith('/our-services/')) {
        wrapper.classList.add(STATE.active);
      }
    });

    document.querySelectorAll('.dhof-drawer__nav a').forEach(function (link) {
      try {
        var href = new URL(link.href, window.location.origin).pathname;
        if (href === path || (href !== '/' && path.startsWith(href))) {
          link.classList.add(STATE.active);
        }
      } catch (e) {}
    });
  }

  function syncHeaderHeight() {
    var header = document.querySelector('.dhof-header');
    if (!header) return;
    function set() {
      document.documentElement.style.setProperty('--header-h', header.offsetHeight + 'px');
    }
    set();
    window.addEventListener('resize', set, { passive: true });
  }

  function initNav() {
    syncHeaderHeight();
    initDrawer();
    initDropdowns();
    markActive();
  }

  /* ── main.js ─────────────────────────────────────────────────────────────── */

  function initHeaderScroll() {
    var header = document.querySelector('.dhof-header');
    if (!header) return;
    var update = function () { header.classList.toggle('is-scrolled', window.scrollY > 40); };
    update();
    window.addEventListener('scroll', update, { passive: true });
  }

  function initBackToTop() {
    var btn = document.getElementById('dhof-btt');
    if (!btn) return;
    window.addEventListener('scroll', function () {
      btn.classList.toggle('is-visible', window.scrollY > 400);
    }, { passive: true });
    btn.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ── case-studies scroll nav ─────────────────────────────────────────────── */
  function initWorkScroll() {
    var grid = document.getElementById('dhof-work-grid');
    var prev = document.getElementById('dhof-work-prev');
    var next = document.getElementById('dhof-work-next');
    if (!grid || !prev || !next) return;
    var card = grid.querySelector('.dhof-case-card');
    if (!card) return;
    next.addEventListener('click', function () {
      grid.scrollBy({ left: card.offsetWidth + 24, behavior: 'smooth' });
    });
    prev.addEventListener('click', function () {
      grid.scrollBy({ left: -(card.offsetWidth + 24), behavior: 'smooth' });
    });
  }

  /* ── footer day-of-week ──────────────────────────────────────────────────── */
  function initFooterDay() {
    var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    var el = document.getElementById('dhof-footer-farewell');
    if (el) el.textContent = 'Enjoy the rest of your ' + days[new Date().getDay()] + '.';
  }

  /* ── boot ────────────────────────────────────────────────────────────────── */
  function ready(fn) {
    if (document.readyState !== 'loading') { fn(); }
    else { document.addEventListener('DOMContentLoaded', fn); }
  }

  ready(function () {
    initNav();
    initHeaderScroll();
    initBackToTop();
    initWorkScroll();
    initFooterDay();
  });
}());

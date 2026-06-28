/* ============================================================
   CORE.JS — Cabinet MHBM Avocats-Conseils
   Version Production — Juin 2025
   ============================================================ */

const MHBM = (function () {
  'use strict';

  /* ════════════════════════════════════
     1. LANGUE
  ════════════════════════════════════ */
  const lang = {
    current: localStorage.getItem('mhbm_lang') || 'fr',

    apply: function (l) {
      l = l || lang.current;
      lang.current = l;
      localStorage.setItem('mhbm_lang', l);

      const dict = l === 'ar' ? window.LANG_AR : window.LANG_FR;
      if (!dict) return;

      /* Appliquer les chaînes data-i18n */
      document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (dict[key] !== undefined) {
          if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
            el.placeholder = dict[key];
          } else {
            el.textContent = dict[key];
          }
        }
      });

      /* RTL / LTR */
      const isRTL = l === 'ar';
      document.documentElement.lang = l;
      document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
      document.body.classList.toggle('rtl', isRTL);

      /* Isolation bidi des éléments numériques en mode RTL */
      /* Tous les éléments [data-bidi-ltr] restent toujours LTR */
      document.querySelectorAll('[data-bidi-ltr], bdi').forEach(el => {
        el.setAttribute('dir', 'ltr');
      });

      /* Mise à jour des boutons de langue */
      document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === l);
      });
    },

    init: function () {
      lang.apply(lang.current);
      document.addEventListener('click', function (e) {
        const btn = e.target.closest('.lang-btn');
        if (btn && btn.dataset.lang) {
          lang.apply(btn.dataset.lang);
        }
      });
    }
  };

  /* ════════════════════════════════════
     2. NAVIGATION
  ════════════════════════════════════ */
  const nav = {
    init: function () {
      const navbar = document.getElementById('navbar');
      const hamburger = document.getElementById('hamburger');
      const navMenu = document.getElementById('nav-menu');
      const topbar = document.getElementById('topbar');
      const topbarClose = document.getElementById('topbar-close');

      /* Sticky + scrolled state */
      let lastScroll = 0;
      window.addEventListener('scroll', function () {
        const scroll = window.scrollY;
        if (navbar) {
          navbar.classList.toggle('scrolled', scroll > 50);
          navbar.classList.toggle('hidden', scroll > lastScroll && scroll > 200);
          lastScroll = scroll;
        }
      }, { passive: true });

      /* Hamburger */
      if (hamburger && navMenu) {
        hamburger.addEventListener('click', function () {
          const open = navMenu.classList.toggle('open');
          hamburger.setAttribute('aria-expanded', String(open));
          hamburger.classList.toggle('open', open);
          document.body.classList.toggle('nav-open', open);
        });
      }

      /* Fermer la nav mobile en cliquant dehors */
      document.addEventListener('click', function (e) {
        if (navMenu && navMenu.classList.contains('open')) {
          if (!navbar.contains(e.target)) {
            navMenu.classList.remove('open');
            hamburger && hamburger.setAttribute('aria-expanded', 'false');
            hamburger && hamburger.classList.remove('open');
            document.body.classList.remove('nav-open');
          }
        }
      });

      /* Dropdowns desktop au survol + focus */
      document.querySelectorAll('.has-dropdown').forEach(item => {
        const toggle = item.querySelector('.nav-link');
        if (toggle) {
          toggle.addEventListener('click', function (e) {
            if (window.innerWidth < 1024) {
              e.preventDefault();
              item.classList.toggle('open');
            }
          });
        }
      });

      /* Topbar close */
      if (topbarClose) {
        topbarClose.addEventListener('click', function () {
          if (topbar) topbar.style.display = 'none';
          sessionStorage.setItem('topbar_closed', '1');
        });
        if (sessionStorage.getItem('topbar_closed') === '1' && topbar) {
          topbar.style.display = 'none';
        }
      }
    }
  };

  /* ════════════════════════════════════
     3. ANIMATIONS (Intersection Observer)
  ════════════════════════════════════ */
  const animations = {
    init: function () {
      if (!('IntersectionObserver' in window)) return;

      const revealObs = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            revealObs.unobserve(entry.target);
          }
        });
      }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

      document.querySelectorAll('[data-reveal]').forEach(el => revealObs.observe(el));

      /* Stagger children */
      document.querySelectorAll('[data-stagger]').forEach(parent => {
        Array.from(parent.children).forEach((child, i) => {
          child.style.transitionDelay = (i * 80) + 'ms';
          child.setAttribute('data-reveal', '');
          revealObs.observe(child);
        });
      });
    }
  };

  /* ════════════════════════════════════
     4. COMPTEURS ANIMÉS
  ════════════════════════════════════ */
  const counters = {
    init: function () {
      if (!('IntersectionObserver' in window)) return;

      const obs = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            counters.animate(entry.target);
            obs.unobserve(entry.target);
          }
        });
      }, { threshold: 0.5 });

      document.querySelectorAll('[data-counter]').forEach(el => obs.observe(el));
    },

    animate: function (el) {
      const target = parseInt(el.getAttribute('data-counter'), 10);
      const prefix = el.getAttribute('data-prefix') || '';
      const suffix = el.getAttribute('data-suffix') || '';
      const duration = 1800;
      const start = performance.now();

      function step(now) {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const value = Math.round(eased * target);
        /* Toujours chiffres latins (unicode-bidi géré via CSS/dir=ltr) */
        el.textContent = prefix + value.toLocaleString('fr-FR') + suffix;
        if (progress < 1) requestAnimationFrame(step);
      }
      requestAnimationFrame(step);
    }
  };

  /* ════════════════════════════════════
     5. BACK TO TOP
  ════════════════════════════════════ */
  const backToTop = {
    init: function () {
      const btn = document.getElementById('back-to-top');
      if (!btn) return;

      window.addEventListener('scroll', function () {
        btn.classList.toggle('visible', window.scrollY > 400);
      }, { passive: true });

      btn.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }
  };

  /* ════════════════════════════════════
     6. COOKIES
  ════════════════════════════════════ */
  const cookies = {
    init: function () {
      const banner = document.getElementById('cookie-banner');
      const acceptBtn = document.getElementById('cookie-accept');
      const manageBtn = document.getElementById('cookie-manage');

      if (!banner) return;
      if (localStorage.getItem('mhbm_cookies') === 'accepted') {
        banner.classList.add('hidden');
        return;
      }
      setTimeout(() => banner.classList.add('visible'), 1500);

      if (acceptBtn) {
        acceptBtn.addEventListener('click', function () {
          localStorage.setItem('mhbm_cookies', 'accepted');
          banner.classList.remove('visible');
          banner.classList.add('hidden');
        });
      }
      if (manageBtn) {
        manageBtn.addEventListener('click', function () {
          banner.classList.remove('visible');
        });
      }
    }
  };

  /* ════════════════════════════════════
     7. FORMULAIRE (simulation)
  ════════════════════════════════════ */
  const form = {
    init: function () {
      document.querySelectorAll('form[data-mhbm-form]').forEach(f => {
        f.addEventListener('submit', function (e) {
          e.preventDefault();
          const btn = f.querySelector('[type="submit"]');
          if (btn) {
            btn.disabled = true;
            btn.textContent = '…';
          }
          setTimeout(() => {
            const success = f.querySelector('.form-success');
            if (success) {
              f.style.display = 'none';
              success.style.display = 'block';
            } else {
              toast.show(MHBM.t('form_success_title') || 'Message envoyé !', 'success');
            }
          }, 1200);
        });
      });
    }
  };

  /* ════════════════════════════════════
     8. TOAST
  ════════════════════════════════════ */
  const toast = {
    show: function (msg, type = 'info') {
      const el = document.createElement('div');
      el.className = `toast toast-${type}`;
      el.textContent = msg;
      document.body.appendChild(el);
      requestAnimationFrame(() => el.classList.add('visible'));
      setTimeout(() => {
        el.classList.remove('visible');
        setTimeout(() => el.remove(), 400);
      }, 4000);
    }
  };

  /* ════════════════════════════════════
     9. ACCORDÉON
  ════════════════════════════════════ */
  const accordion = {
    init: function () {
      document.querySelectorAll('.accordion-item').forEach(item => {
        const trigger = item.querySelector('.accordion-trigger');
        if (!trigger) return;
        trigger.addEventListener('click', function () {
          const open = item.classList.contains('open');
          // Fermer tous
          document.querySelectorAll('.accordion-item.open').forEach(o => o.classList.remove('open'));
          if (!open) item.classList.add('open');
        });
      });
    }
  };

  /* ════════════════════════════════════
     10. SMOOTH SCROLL
  ════════════════════════════════════ */
  const smoothScroll = {
    init: function () {
      document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', function (e) {
          const id = link.getAttribute('href').slice(1);
          const target = document.getElementById(id);
          if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        });
      });
    }
  };

  /* ════════════════════════════════════
     11. HELPER : traduction rapide
  ════════════════════════════════════ */
  function t(key) {
    const dict = lang.current === 'ar' ? window.LANG_AR : window.LANG_FR;
    return dict ? (dict[key] || key) : key;
  }

  /* ════════════════════════════════════
     INIT
  ════════════════════════════════════ */
  document.addEventListener('DOMContentLoaded', function () {
    lang.init();
    nav.init();
    animations.init();
    counters.init();
    backToTop.init();
    cookies.init();
    form.init();
    accordion.init();
    smoothScroll.init();
  });

  return { lang, nav, animations, counters, toast, accordion, t };

})();

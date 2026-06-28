/* ============================================================
   PAGE TEMPLATE — Cabinet MHBM Avocats-Conseils
   Génère : topbar + navbar + footer + cookie banner + back-to-top
   Version Production — Juin 2025
   ============================================================ */

(function () {
  'use strict';

  /* ─── 1. Calcul du chemin de base ─── */
  const path = window.location.pathname;
  const depth = (path.match(/\//g) || []).length;
  // espace-client = profondeur 3 → ../../ ; pages = profondeur 2 → ../
  const base = depth >= 3 ? '../../' : '../';

  /* ─── 2. Injection du <head> complémentaire ─── */
  // Polices (si pas déjà chargées)
  if (!document.querySelector('link[href*="fonts.googleapis"]')) {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=DM+Sans:wght@300;400;500;600&family=Tajawal:wght@300;400;500;700&display=swap';
    document.head.appendChild(link);
  }

  /* ─── 3. Topbar ─── */
  const topbar = document.createElement('div');
  topbar.className = 'topbar';
  topbar.id = 'topbar';
  topbar.innerHTML = `
    <div class="topbar-inner">
      <p class="topbar-msg" data-i18n="topbar_msg">Vous vivez à l'étranger ? Consultez un avocat tunisien en ligne — Réponse sous 24h</p>
      <a href="${base}pages/consultation-ligne.html" class="topbar-cta" data-i18n="topbar_cta">Prendre rendez-vous →</a>
    </div>
    <button class="topbar-close" id="topbar-close" aria-label="Fermer">×</button>
  `;
  document.body.prepend(topbar);

  /* ─── 4. Navbar ─── */
  const isEspaceClient = path.includes('espace-client');
  const navbar = document.createElement('header');
  navbar.className = 'navbar';
  navbar.id = 'navbar';
  navbar.innerHTML = `
    <div class="nav-container">
      <div class="nav-top-row">
        <a href="${base}index.html" class="nav-logo" aria-label="Cabinet MHBM Avocat — Accueil">
          <div class="logo-placeholder-nav">
            <span class="logo-text-main">MHBM</span>
            <span class="logo-text-sub">Avocat</span>
          </div>
          <!-- Remplacer par : <img src="${base}assets/images/logo-mhbm-principal.svg" alt="Cabinet MHBM Avocat" width="200" height="60"> -->
        </a>
        <div class="nav-contact-quick">
          <a href="tel:+21673264360" class="nav-phone" dir="ltr"><span class="icon-wrap"><svg width="16" height="16"><use href="${base}assets/icons/icons.svg#icon-phone"/></svg></span><bdi dir="ltr">+216 73 264 360</bdi></a>
        </div>
        <div class="nav-actions-top">
          <div class="lang-switcher" id="lang-switcher">
            <button class="lang-btn active" data-lang="fr" aria-label="Français">FR</button>
            <span class="lang-sep">|</span>
            <button class="lang-btn" data-lang="ar" aria-label="العربية">AR</button>
          </div>
          <button class="hamburger" id="hamburger" aria-label="Menu" aria-expanded="false">
            <span></span><span></span><span></span>
          </button>
        </div>
      </div>

      <nav class="nav-menu" id="nav-menu" role="navigation" aria-label="Navigation principale">
        <ul class="nav-list">
          <li><a href="${base}index.html" class="nav-link" data-i18n="nav_home">Accueil</a></li>

          <li class="has-dropdown">
            <a href="${base}pages/cabinet.html" class="nav-link" data-i18n="nav_cabinet">Le Cabinet</a>
            <ul class="dropdown">
              <li><a href="${base}pages/presentation.html" data-i18n="nav_presentation">Présentation</a></li>
              <li><a href="${base}pages/equipe.html" data-i18n="nav_equipe">L'Équipe</a></li>
              <li><a href="${base}pages/valeurs.html" data-i18n="nav_valeurs">Nos Valeurs</a></li>
              <li><a href="${base}pages/bureaux.html" data-i18n="nav_bureaux">Nos Bureaux</a></li>
            </ul>
          </li>

          <li class="has-dropdown">
            <a href="${base}pages/expertises.html" class="nav-link" data-i18n="nav_expertises">Expertises</a>
            <ul class="dropdown dropdown-wide">
              <li><a href="${base}pages/expertise-succession.html" data-i18n="nav_exp_succession">Droit Successoral</a></li>
              <li><a href="${base}pages/expertise-immobilier.html" data-i18n="nav_exp_immobilier">Droit Immobilier</a></li>
              <li><a href="${base}pages/expertise-divorce.html" data-i18n="nav_exp_divorce">Divorce International</a></li>
              <li><a href="${base}pages/expertise-affaires.html" data-i18n="nav_exp_affaires">Droit des Affaires</a></li>
              <li><a href="${base}pages/expertise-penal.html" data-i18n="nav_exp_penal">Droit Pénal</a></li>
              <li><a href="${base}pages/expertise-nationalite.html" data-i18n="nav_exp_nationalite">Nationalité Tunisienne</a></li>
              <li><a href="${base}pages/expertise-arbitrage.html" data-i18n="nav_exp_arbitrage">Arbitrage & Médiation</a></li>
              <li><a href="${base}pages/expertise-recouvrement.html" data-i18n="nav_exp_recouvrement">Recouvrement</a></li>
              <li><a href="${base}pages/expertise-travail.html" data-i18n="nav_exp_travail">Droit du Travail</a></li>
              <li><a href="${base}pages/expertise-famille.html" data-i18n="nav_exp_famille">Droit de la Famille</a></li>
              <li><a href="${base}pages/expertise-accidents.html" data-i18n="nav_exp_accidents">Accidents & Indemnisation</a></li>
              <li><a href="${base}pages/expertise-baux.html" data-i18n="nav_exp_baux">Baux & Litiges</a></li>
            </ul>
          </li>

          <li><a href="${base}pages/tunisiens-etranger.html" class="nav-link" data-i18n="nav_etranger">Tunisiens à l'Étranger</a></li>
          <li><a href="${base}pages/consultation-ligne.html" class="nav-link" data-i18n="nav_consultation">Consultation</a></li>

          <li class="has-dropdown">
            <a href="${base}pages/ressources.html" class="nav-link" data-i18n="nav_ressources">Ressources</a>
            <ul class="dropdown">
              <li><a href="${base}pages/blog.html" data-i18n="nav_blog">Blog & Articles</a></li>
              <li><a href="${base}pages/guides.html" data-i18n="nav_guides">Guides Pratiques</a></li>
              <li><a href="${base}pages/faq.html" data-i18n="nav_faq">FAQ</a></li>
            </ul>
          </li>

          <li><a href="${base}pages/honoraires.html" class="nav-link" data-i18n="nav_honoraires">Honoraires</a></li>
          <li><a href="${base}pages/contact.html" class="nav-link" data-i18n="nav_contact">Contact</a></li>
        </ul>

        <div class="nav-cta-group">
          <a href="${base}pages/espace-client/login.html" class="btn btn-outline-white btn-sm" data-i18n="nav_espace_client">Espace Client</a>
          <a href="${base}pages/consultation-ligne.html" class="btn btn-accent btn-sm" data-i18n="nav_rdv">Prendre RDV</a>
        </div>
      </nav>
    </div>
  `;
  document.body.insertBefore(navbar, document.body.children[1] || document.body.firstChild.nextSibling);

  /* ─── 5. Footer ─── */
  const footer = document.createElement('footer');
  footer.className = 'site-footer';
  footer.innerHTML = `
    <div class="footer-main">
      <div class="footer-container">

        <div class="footer-brand">
          <a href="${base}index.html" class="footer-logo" aria-label="Accueil">
            <div class="logo-placeholder-footer">
              <span class="logo-text-main">MHBM</span>
              <span class="logo-text-sub">Avocat</span>
            </div>
            <!-- Remplacer par : <img src="${base}assets/images/logo-mhbm-blanc.svg" alt="Cabinet MHBM Avocat" width="160" height="48"> -->
          </a>
          <p class="footer-tagline" data-i18n="footer_tagline">Cabinet de référence en droit tunisien, fondé en 2010. Expertise, discrétion et engagement pour chaque client.</p>
          <div class="footer-socials">
            <a href="#" class="social-link" aria-label="LinkedIn" rel="noopener noreferrer"><svg width="20" height="20"><use href="${base}assets/icons/icons.svg#icon-linkedin"/></svg></a>
            <a href="#" class="social-link" aria-label="Facebook" rel="noopener noreferrer"><svg width="20" height="20"><use href="${base}assets/icons/icons.svg#icon-facebook"/></svg></a>
            <a href="#" class="social-link" aria-label="Instagram" rel="noopener noreferrer"><svg width="20" height="20"><use href="${base}assets/icons/icons.svg#icon-instagram"/></svg></a>
            <a href="#" class="social-link" aria-label="YouTube" rel="noopener noreferrer"><svg width="20" height="20"><use href="${base}assets/icons/icons.svg#icon-youtube"/></svg></a>
            <a href="#" class="social-link" aria-label="X (Twitter)" rel="noopener noreferrer"><svg width="20" height="20"><use href="${base}assets/icons/icons.svg#icon-x"/></svg></a>
            <a href="https://wa.me/21698258015" class="social-link" aria-label="WhatsApp" rel="noopener noreferrer"><svg width="20" height="20"><use href="${base}assets/icons/icons.svg#icon-whatsapp"/></svg></a>
          </div>
        </div>

        <div class="footer-nav">
          <h3 class="footer-col-title" data-i18n="footer_nav_title">Navigation</h3>
          <ul>
            <li><a href="${base}index.html" data-i18n="nav_home">Accueil</a></li>
            <li><a href="${base}pages/cabinet.html" data-i18n="nav_cabinet">Le Cabinet</a></li>
            <li><a href="${base}pages/equipe.html" data-i18n="nav_equipe">L'Équipe</a></li>
            <li><a href="${base}pages/expertises.html" data-i18n="nav_expertises">Expertises</a></li>
            <li><a href="${base}pages/tunisiens-etranger.html" data-i18n="nav_etranger">Tunisiens à l'Étranger</a></li>
            <li><a href="${base}pages/consultation-ligne.html" data-i18n="nav_consultation">Consultation en Ligne</a></li>
            <li><a href="${base}pages/blog.html" data-i18n="nav_blog">Blog & Articles</a></li>
            <li><a href="${base}pages/faq.html" data-i18n="nav_faq">FAQ</a></li>
            <li><a href="${base}pages/honoraires.html" data-i18n="nav_honoraires">Honoraires</a></li>
            <li><a href="${base}pages/contact.html" data-i18n="nav_contact">Contact</a></li>
          </ul>
        </div>

        <div class="footer-contact-col">
          <h3 class="footer-col-title" data-i18n="footer_contact_title">Contact</h3>
          <address>
            <p><svg width="16" height="16"><use href="${base}assets/icons/icons.svg#icon-pin"/></svg> <span data-i18n="footer_address">Rue des Fleurs, M'saken, Sousse 4070, Tunisie</span></p>
            <p><svg width="16" height="16"><use href="${base}assets/icons/icons.svg#icon-phone"/></svg> <a href="tel:+21673264360" dir="ltr"><bdi dir="ltr">+216 73 264 360</bdi></a></p>
            <p><svg width="16" height="16"><use href="${base}assets/icons/icons.svg#icon-whatsapp"/></svg> <a href="https://wa.me/21698258015" rel="noopener noreferrer" dir="ltr"><bdi dir="ltr">+216 98 258 015</bdi></a></p>
            <p><svg width="16" height="16"><use href="${base}assets/icons/icons.svg#icon-mail"/></svg> <a href="mailto:contact@mhbm-avocat.com">contact@mhbm-avocat.com</a></p>
            <p><svg width="16" height="16"><use href="${base}assets/icons/icons.svg#icon-globe"/></svg> <a href="https://www.mhbm-avocat.com" rel="noopener noreferrer">www.mhbm-avocat.com</a></p>
          </address>
        </div>

        <div class="footer-hours-col">
          <h3 class="footer-col-title" data-i18n="footer_hours_title">Horaires</h3>
          <table class="hours-table">
            <tr><td data-i18n="footer_hours_1">Lundi – Vendredi</td><td><bdi dir="ltr" data-i18n="footer_hours_1_val">08:00 – 17:30</bdi></td></tr>
            <tr><td data-i18n="footer_hours_2">Samedi</td><td><bdi dir="ltr" data-i18n="footer_hours_2_val">08:00 – 13:30</bdi></td></tr>
            <tr><td data-i18n="footer_hours_3">Dimanche</td><td data-i18n="footer_hours_3_val">Fermé</td></tr>
          </table>
          <p class="hours-note" data-i18n="footer_hours_note">Consultations en ligne disponibles en dehors des horaires sur rendez-vous</p>
          <a href="${base}pages/espace-client/login.html" class="btn btn-outline-white btn-sm footer-client-btn" data-i18n="nav_espace_client">Espace Client</a>
        </div>

      </div>
    </div>

    <div class="footer-bottom">
      <div class="footer-container">
        <div class="footer-legal-links">
          <a href="${base}pages/mentions-legales.html" data-i18n="footer_legal">Mentions légales</a>
          <a href="${base}pages/confidentialite.html" data-i18n="footer_privacy">Confidentialité</a>
          <a href="${base}pages/cookies.html" data-i18n="footer_cookies">Cookies</a>
        </div>
        <div class="footer-copy">
          <p data-i18n="footer_copy">© 2025 Cabinet MHBM Avocat — Tous droits réservés</p>
          <p data-i18n="footer_copy2">Maître Mohamed Haithem Ben Makhlouf, Avocat près de la Cour de Cassation, inscrit au Barreau de Tunisie</p>
        </div>
        <p class="footer-disclaimer" data-i18n="footer_disclaimer">Les informations publiées sur ce site ont un caractère général et informatif…</p>
      </div>
    </div>
  `;
  document.body.appendChild(footer);

  /* ─── 6. Cookie Banner ─── */
  const cookieBanner = document.createElement('div');
  cookieBanner.className = 'cookie-banner';
  cookieBanner.id = 'cookie-banner';
  cookieBanner.setAttribute('role', 'dialog');
  cookieBanner.setAttribute('aria-label', 'Consentement cookies');
  cookieBanner.innerHTML = `
    <p class="cookie-msg" data-i18n="cookie_msg">Ce site utilise des cookies pour améliorer votre expérience et analyser notre trafic.</p>
    <div class="cookie-actions">
      <button class="btn btn-accent btn-sm" id="cookie-accept" data-i18n="cookie_accept">Accepter tous les cookies</button>
      <button class="btn btn-outline btn-sm" id="cookie-manage" data-i18n="cookie_manage">Gérer mes préférences</button>
    </div>
  `;
  document.body.appendChild(cookieBanner);

  /* ─── 7. Back to top ─── */
  const btt = document.createElement('button');
  btt.className = 'back-to-top';
  btt.id = 'back-to-top';
  btt.setAttribute('aria-label', 'Retour en haut');
  btt.innerHTML = `<svg width="20" height="20"><use href="${base}assets/icons/icons.svg#icon-arrow-up"/></svg>`;
  document.body.appendChild(btt);

  /* ─── 8. Chargement des scripts (ordre important) ─── */
  function loadScript(src, defer) {
    const s = document.createElement('script');
    s.src = src;
    if (defer) s.defer = true;
    document.head.appendChild(s);
  }

  // Charger les dicos de langue si pas déjà chargés
  if (!window.LANG_FR) loadScript(base + 'assets/js/lang/fr.js');
  if (!window.LANG_AR) loadScript(base + 'assets/js/lang/ar.js');

  // Charger core.js après les dicos
  if (!window.MHBM) {
    const coreScript = document.createElement('script');
    coreScript.src = base + 'assets/js/core.js';
    coreScript.defer = true;
    document.head.appendChild(coreScript);
  }

  /* ─── 9. Marquer le lien actif ─── */
  document.addEventListener('DOMContentLoaded', function () {
    const currentPath = window.location.pathname;
    document.querySelectorAll('.nav-list a').forEach(link => {
      const href = link.getAttribute('href');
      if (href && currentPath.endsWith(href.replace(/^.*\//, ''))) {
        link.classList.add('active');
        const parent = link.closest('li.has-dropdown');
        if (parent) parent.querySelector('.nav-link').classList.add('active');
      }
    });
  });

})();

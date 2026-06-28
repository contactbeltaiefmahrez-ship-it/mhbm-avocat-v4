/* ============================================================
   CLIENT-DATA.JS — Espace Client (Démonstration)
   ⚠️ Simulation UX uniquement — aucune sécurité réelle
   Version Production — Juin 2025
   ============================================================ */

/* ── Données du client démo ── */
const DEMO_CLIENT = {
  id: 'demo-001',
  nom: 'Beltaief',
  prenom: 'Mahrez',
  nom_ar: 'باللطيّف',
  prenom_ar: 'محرز',
  email: 'mahrez.beltaief@email.fr',
  phone: '+33 6 12 34 56 78',
  pays: 'France',
  ville: 'Paris',
  avatar: 'MB',
  dateInscription: '2023-09-15',
};

/* ── Dossiers ── */
const DEMO_DOSSIERS = [
  {
    id: 'DOS-2024-087',
    titre: 'Succession — Bien immobilier M\'saken',
    type: 'Droit Successoral',
    statut: 'en_cours',
    statut_label: 'En cours',
    date_ouverture: '2024-01-15',
    derniere_action: '2024-03-10',
    avocat: 'Me Haithem Ben Makhlouf',
    description: 'Liquidation de succession suite au décès du père en janvier 2024. Bien immobilier sis M\'saken + compte bancaire BNA.',
    etapes: [
      { date: '2024-01-15', label: 'Ouverture du dossier', done: true },
      { date: '2024-01-22', label: 'Collecte des actes d\'état civil', done: true },
      { date: '2024-02-05', label: 'Dépôt de la déclaration de succession', done: true },
      { date: '2024-03-01', label: 'Liquidation du compte bancaire', done: true },
      { date: '2024-04-01', label: 'Partage du bien immobilier', done: false },
      { date: '2024-05-01', label: 'Clôture du dossier', done: false },
    ]
  },
  {
    id: 'DOS-2024-041',
    titre: 'Acquisition appartement — Sousse Nord',
    type: 'Droit Immobilier',
    statut: 'attente',
    statut_label: 'En attente',
    date_ouverture: '2024-02-20',
    derniere_action: '2024-03-05',
    avocat: 'Me Aymen Guezguez',
    description: 'Vérification du titre foncier et accompagnement jusqu\'à la signature de l\'acte de vente définitif.',
    etapes: [
      { date: '2024-02-20', label: 'Ouverture du dossier', done: true },
      { date: '2024-02-28', label: 'Vérification titre foncier', done: true },
      { date: '2024-03-15', label: 'Rédaction compromis de vente', done: false },
      { date: '2024-04-10', label: 'Signature acte définitif', done: false },
    ]
  },
  {
    id: 'DOS-2023-219',
    titre: 'Procuration générale — gestion patrimoniale',
    type: 'Procuration',
    statut: 'cloture',
    statut_label: 'Clôturé',
    date_ouverture: '2023-11-10',
    derniere_action: '2023-12-20',
    avocat: 'Me Haithem Ben Makhlouf',
    description: 'Rédaction et légalisation d\'une procuration générale pour gestion du patrimoine familial en Tunisie.',
    etapes: [
      { date: '2023-11-10', label: 'Ouverture du dossier', done: true },
      { date: '2023-11-20', label: 'Rédaction de la procuration', done: true },
      { date: '2023-12-05', label: 'Légalisation consulaire', done: true },
      { date: '2023-12-20', label: 'Clôture', done: true },
    ]
  }
];

/* ── Documents ── */
const DEMO_DOCUMENTS = [
  { id: 'DOC-001', nom: 'Acte de décès — Beltaief Abdelaziz', type: 'PDF', dossier: 'DOS-2024-087', date: '2024-01-16', size: '245 Ko', partage_par: 'Cabinet MHBM' },
  { id: 'DOC-002', nom: 'Titre foncier — appartement Sousse Nord', type: 'PDF', dossier: 'DOS-2024-041', date: '2024-02-25', size: '1.2 Mo', partage_par: 'Cabinet MHBM' },
  { id: 'DOC-003', nom: 'Procuration générale signée', type: 'PDF', dossier: 'DOS-2023-219', date: '2023-12-20', size: '312 Ko', partage_par: 'Cabinet MHBM' },
  { id: 'DOC-004', nom: 'Déclaration de succession', type: 'PDF', dossier: 'DOS-2024-087', date: '2024-02-05', size: '180 Ko', partage_par: 'Cabinet MHBM' },
  { id: 'DOC-005', nom: 'Pièces d\'identité fournies', type: 'ZIP', dossier: 'DOS-2024-087', date: '2024-01-18', size: '3.4 Mo', partage_par: 'M. Beltaief' },
];

/* ── Messages ── */
const DEMO_MESSAGES = [
  {
    id: 'MSG-001',
    de: 'Me Haithem Ben Makhlouf',
    objet: 'Étape 4 — Partage du bien immobilier',
    date: '2024-03-10',
    lu: false,
    dossier: 'DOS-2024-087',
    corps: 'Monsieur Beltaief, je vous informe que nous sommes prêts à procéder au partage du bien immobilier. Merci de confirmer votre disponibilité pour une consultation vidéo la semaine prochaine afin de valider les modalités.'
  },
  {
    id: 'MSG-002',
    de: 'Me Aymen Guezguez',
    objet: 'Titre foncier — résultat vérification',
    date: '2024-02-28',
    lu: true,
    dossier: 'DOS-2024-041',
    corps: 'Après vérification complète du titre foncier, nous n\'avons constaté aucune hypothèque ni servitude non déclarée. L\'acquisition peut se poursuivre en toute sécurité.'
  },
  {
    id: 'MSG-003',
    de: 'Secrétariat Cabinet MHBM',
    objet: 'Facture FAC-2024-031',
    date: '2024-03-01',
    lu: true,
    dossier: 'DOS-2024-087',
    corps: 'Veuillez trouver ci-joint la facture FAC-2024-031 correspondant à nos prestations du mois de février 2024. Règlement par virement dans un délai de 15 jours.'
  }
];

/* ── Consultations ── */
const DEMO_CONSULTATIONS = [
  { id: 'CSL-001', type: 'Vidéo (Zoom)', date: '2024-03-15', heure: '14:30', duree: '45 min', avocat: 'Me Haithem Ben Makhlouf', statut: 'confirme', dossier: 'DOS-2024-087' },
  { id: 'CSL-002', type: 'WhatsApp', date: '2024-02-20', heure: '10:00', duree: '20 min', avocat: 'Me Aymen Guezguez', statut: 'termine', dossier: 'DOS-2024-041' },
  { id: 'CSL-003', type: 'Avis juridique écrit', date: '2024-01-22', heure: '—', duree: '—', avocat: 'Me Haithem Ben Makhlouf', statut: 'termine', dossier: 'DOS-2024-087' },
];

/* ── Paiements ── */
const DEMO_PAIEMENTS = [
  { id: 'FAC-2024-031', dossier: 'DOS-2024-087', montant: 800, devise: 'TND', date: '2024-03-01', statut: 'impaye', echeance: '2024-03-16', description: 'Honoraires — Phase 1 succession' },
  { id: 'FAC-2024-012', dossier: 'DOS-2024-041', montant: 500, devise: 'TND', date: '2024-02-22', statut: 'paye', echeance: '2024-03-08', description: 'Honoraires — Vérification titre foncier' },
  { id: 'FAC-2023-087', dossier: 'DOS-2023-219', montant: 1200, devise: 'TND', date: '2023-12-20', statut: 'paye', echeance: '2024-01-04', description: 'Honoraires — Procuration générale (forfait)' },
];

/* ── Notifications ── */
const DEMO_NOTIFICATIONS = [
  { id: 'NOT-001', type: 'message', titre: 'Nouveau message de Me Ben Makhlouf', date: '2024-03-10', lu: false },
  { id: 'NOT-002', type: 'document', titre: 'Document partagé : Déclaration de succession', date: '2024-02-05', lu: false },
  { id: 'NOT-003', type: 'paiement', titre: 'Facture FAC-2024-031 disponible', date: '2024-03-01', lu: true },
  { id: 'NOT-004', type: 'rdv', titre: 'Rappel consultation vidéo — 15 mars 14h30', date: '2024-03-14', lu: true },
  { id: 'NOT-005', type: 'dossier', titre: 'Mise à jour dossier DOS-2024-087', date: '2024-03-10', lu: false },
];

/* ════════════════════════════════════
   SYSTÈME D'AUTH (Simulation)
════════════════════════════════════ */
const MHBM_AUTH = {

  /* ── Connexion ── */
  login: function (email, password) {
    /* ⚠️ Simulation : tout identifiant est accepté */
    if (!email || !password) return { success: false, error: 'Identifiants requis.' };
    const session = {
      client: { ...DEMO_CLIENT, email: email },
      loginAt: new Date().toISOString()
    };
    sessionStorage.setItem('mhbm_session', JSON.stringify(session));
    return { success: true };
  },

  /* ── Connexion démo ── */
  demoLogin: function () {
    const session = {
      client: DEMO_CLIENT,
      loginAt: new Date().toISOString(),
      isDemo: true
    };
    sessionStorage.setItem('mhbm_session', JSON.stringify(session));
    return { success: true };
  },

  /* ── Inscription (simulation) ── */
  register: function (nom, email, phone, password) {
    if (!nom || !email || !password) return { success: false, error: 'Tous les champs obligatoires doivent être remplis.' };
    if (password.length < 8) return { success: false, error: 'Le mot de passe doit contenir au moins 8 caractères.' };
    /* Simuler l'envoi du code de vérification */
    const code = Math.floor(100000 + Math.random() * 900000).toString();
    sessionStorage.setItem('mhbm_reg_code', code);
    sessionStorage.setItem('mhbm_reg_pending', JSON.stringify({ nom, email, phone }));
    console.info('[MHBM Demo] Code de vérification simulé :', code); /* En prod : envoi par email */
    return { success: true, pendingVerification: true };
  },

  /* ── Vérification code ── */
  verify: function (code) {
    const storedCode = sessionStorage.getItem('mhbm_reg_code');
    const pendingStr = sessionStorage.getItem('mhbm_reg_pending');
    if (!storedCode || !pendingStr) return { success: false, error: 'Session expirée.' };
    if (code.trim() !== storedCode) return { success: false, error: 'Code incorrect. Veuillez réessayer.' };
    const pending = JSON.parse(pendingStr);
    const session = {
      client: {
        ...DEMO_CLIENT,
        nom: pending.nom.split(' ').slice(-1)[0] || 'Client',
        prenom: pending.nom.split(' ')[0],
        email: pending.email,
        phone: pending.phone || '',
        avatar: (pending.nom.charAt(0) + (pending.nom.split(' ')[1] || '').charAt(0)).toUpperCase()
      },
      loginAt: new Date().toISOString(),
      isNewAccount: true
    };
    sessionStorage.setItem('mhbm_session', JSON.stringify(session));
    sessionStorage.removeItem('mhbm_reg_code');
    sessionStorage.removeItem('mhbm_reg_pending');
    return { success: true };
  },

  /* ── Déconnexion ── */
  logout: function () {
    sessionStorage.removeItem('mhbm_session');
    window.location.href = 'login.html';
  },

  /* ── Obtenir la session ── */
  getSession: function () {
    const s = sessionStorage.getItem('mhbm_session');
    return s ? JSON.parse(s) : null;
  },

  /* ── Protéger une page ── */
  requireAuth: function () {
    const session = MHBM_AUTH.getSession();
    if (!session) {
      window.location.href = 'login.html';
      return null;
    }
    return session;
  },

  /* ── Données démo ── */
  getDossiers: function () { return DEMO_DOSSIERS; },
  getDocuments: function () { return DEMO_DOCUMENTS; },
  getMessages: function () { return DEMO_MESSAGES; },
  getConsultations: function () { return DEMO_CONSULTATIONS; },
  getPaiements: function () { return DEMO_PAIEMENTS; },
  getNotifications: function () { return DEMO_NOTIFICATIONS; },
  getUnreadCount: function () { return DEMO_NOTIFICATIONS.filter(n => !n.lu).length; },
};

window.MHBM_AUTH = MHBM_AUTH;

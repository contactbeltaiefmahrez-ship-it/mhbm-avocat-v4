# Corrections Appliquées — Cabinet MHBM Avocats-Conseils
## Phase Production — Juin 2025

---

## ✅ Correction #1 — Orthographe du prénom

**`Haythem` → `Haithem`** appliqué partout :
- `index.html` (8 occurrences)
- `assets/js/lang/fr.js` (toutes clés)
- `assets/js/lang/ar.js` (toutes clés)
- `assets/js/components/page-template.js`
- `pages/equipe.html`
- `pages/presentation.html`
- `assets/js/espace-client/client-data.js`

---

## ✅ Correction #2 — Titre professionnel

**`près la Cour de Cassation` → `près de la Cour de Cassation`** ✓
**`Barreau de Sousse` → `Barreau de Tunisie`** ✓

Appliqué dans : `index.html`, `fr.js`, `ar.js`, `page-template.js`, toutes les pages internes et l'espace client.

---

## ✅ Correction #3 — Inscription Espace Client

Nouveau parcours d'inscription en 3 étapes dans `pages/espace-client/login.html` :
- **Étape 1** : Formulaire (nom, email, téléphone, mot de passe + confirmation)
- **Étape 2** : Vérification du code à 6 chiffres (inputs individuels avec auto-focus)
- **Étape 3** : Compte créé → redirection dashboard
- Indicateur visuel de progression (dots)
- Barre de force du mot de passe
- Toggle afficher/masquer mot de passe
- Simulation `MHBM_AUTH.register()` + `MHBM_AUTH.verify()` dans `client-data.js`

---

## ✅ Correction #4 — Expertises

**Supprimé :** `expertise-fiscalite.html` (ne pas déployer)

**Remplacé par :** `expertise-penal.html` — Droit Pénal

**4 nouvelles expertises créées :**
- `expertise-travail.html` — Droit du Travail
- `expertise-famille.html` — Droit de la Famille
- `expertise-accidents.html` — Accidents & Indemnisation
- `expertise-baux.html` — Baux & Litiges Immobiliers

**Navigation mise à jour** : `fr.js`, `ar.js`, `page-template.js`, `index.html`, `pages/expertises.html`

---

## ✅ Correction #5 — Équipe

`pages/equipe.html` reconstruit avec uniquement **3 membres** :
1. **Maître Mohamed Haithem Ben Makhlouf** — Fondateur & Avocat Principal
2. **Maître Chaima Bhiri** — Avocate Associée
3. **Maître Aymen Guezguez** — Avocat Senior

✗ Supprimés : Sarra Khelil, Oussama Trabelsi, Leila Gharbi, Yassine Mahjoub, Rania Ben Salah
✗ Supprimée : la note « données fictives »
✓ Grille responsive `grid-template-columns: repeat(3, 1fr)` en **classe CSS** (pas d'inline)

---

## ✅ Correction #6 — Google Maps officiel

**Lien officiel intégré :**
`https://www.google.com/maps/place/Med+Haithem+Ben+Maklouf+(cabinet+d%27avocat+Sousse)/data=!4m2!3m1!1s0x0:0xe6d0960ec942c8ac`

Intégré dans :
- `pages/bureaux.html` — iframe Google Maps + lien itinéraire
- `pages/contact.html` — iframe Google Maps + lien itinéraire
- `index.html` footer — lien sur l'adresse
- `assets/js/components/page-template.js` footer

---

## ✅ Correction #7 — Isolation bidi des nombres en arabe

Tous les numéros (téléphones, montants, dates, réfs dossiers) sont enveloppés dans `<bdi dir="ltr">` :
- Téléphones : `<bdi dir="ltr">+216 73 264 360</bdi>`
- Stats : `<bdi dir="ltr" data-counter="18" data-prefix="+">+18</bdi>`
- Horaires : `<bdi dir="ltr">08:00 – 17:30</bdi>`
- Dossiers/factures dans l'espace client : `<bdi dir="ltr">DOS-2024-087</bdi>`
- `animateCounter()` dans `core.js` utilise `toLocaleString('fr-FR')` (chiffres latins forcés)

---

## ✅ Correction #8 — Responsive mobile

**Grilles inline supprimées** — toutes les grilles passent par des classes CSS :
- `.stats-grid` → `repeat(4,1fr)` → `repeat(2,1fr)` à 768px
- `.expertises-grid` → `repeat(4,1fr)` → `repeat(3,1fr)` → `repeat(2,1fr)` → `1fr`
- `.team-grid` → `repeat(3,1fr)` → `1fr` à 768px
- `.about-grid`, `.portrait-grid` → `1fr` à 1024px
- `.consult-grid`, `.testi-grid`, `.articles-grid` → `1fr` à 768px
- `components.css` contient maintenant des `@media` queries complètes (8 breakpoints)
- L'espace client sidebar se masque sous 900px

---

## ✅ Correction #9 — Traduction arabe complète

**189 clés FR = 189 clés AR** — parité totale maintenue.

Toutes les pages internes utilisent `data-i18n` pour les éléments traduisibles :
- Navigation (topbar, navbar, footer) : ✓ via `page-template.js`
- Pages expertises : 12 pages avec titres et descriptions traduisibles
- Page équipe : noms, rôles, domaines, bio traduits
- Espace client : 30+ clés pour tous les labels
- `core.js` applique la langue à l'attribut `dir` sur `<html>` directement

---

## ✅ Icônes nouvelles (10) — dans `assets/icons/icons.svg`

| ID | Usage |
|----|-------|
| `#icon-gavel` | Droit Pénal |
| `#icon-work` | Droit du Travail |
| `#icon-family-heart` | Droit de la Famille |
| `#icon-accident` | Accidents & Indemnisation |
| `#icon-lease` | Baux & Litiges |
| `#icon-user-plus` | Créer un compte |
| `#icon-shield-check` | Code vérification |
| `#icon-eye` | Afficher mot de passe |
| `#icon-eye-off` | Masquer mot de passe |
| `#icon-key` | Mot de passe / accès |

**Total sprite : 59 icônes SVG** (monochrome, stroke currentColor, viewBox 0 0 24 24)

---

## 📁 Structure finale — 54 fichiers

```
mhbm-avocat/
├── index.html
├── CORRECTIONS_APPLIQUEES.md
├── assets/
│   ├── css/ (5 fichiers)
│   ├── js/ (5 fichiers)
│   └── icons/icons.svg (59 icônes)
└── pages/
    ├── cabinet/presentation/equipe/valeurs/bureaux (5)
    ├── expertises.html + 12 expertise-*.html (13)
    ├── tunisiens-etranger/consultation-ligne (2)
    ├── ressources/blog/faq/guides (4)
    ├── article-heritage/immobilier/consultation (3)
    ├── honoraires/contact (2)
    ├── mentions-legales/confidentialite/cookies (3)
    └── espace-client/ (10 pages)
```

---

## 🖼️ Placeholders images intégrés

Chaque emplacement image contient :
- Nom exact du fichier attendu
- Titre de l'image
- Dimensions exactes
- Aspect Ratio
- Type (PHOTO / SVG / Logo)
- Code `<img>` commenté prêt à décommenter

**Total : 37 emplacements** (7 générales + 24 expertises + 6 portraits + favicon/OG commentés)

---

*Version production — Prête pour intégration des ressources graphiques finales.*

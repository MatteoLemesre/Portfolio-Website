const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    fetch(this.action, {
      method: "POST",
      body: new FormData(this),
      headers: { Accept: "application/json" },
    })
      .then((response) => {
        if (response.ok) {
          document.getElementById("successMessage").style.display = "block";
          this.reset();
          setTimeout(() => {
            document.getElementById("successMessage").style.display = "none";
          }, 5000);
        } else {
          alert("Oops! Something went wrong. Please try again.");
        }
      })
      .catch((error) => {
        alert("Error: " + error.message);
      });
  });
}

/* ── Burger menu ─────────────────────────────────────────── */
const burger = document.querySelector('.nav-burger');
const nav = document.querySelector('nav');
if (burger) {
  burger.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('nav--open');
    burger.setAttribute('aria-expanded', isOpen);
  });
  document.querySelectorAll('nav .right a').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('nav--open');
      burger.setAttribute('aria-expanded', 'false');
    });
  });
}

/* ── Language toggle ─────────────────────────────────────── */
const translations = {
  en: {
    nav_experience: 'Experience',
    nav_education: 'Education',
    nav_projects: 'Projects',
    nav_contact: 'Contact',
    hero_h2: 'Hello, I am a Data Scientist',
    hero_bio: 'Graduate from École Centrale de Nantes (Nantes, France), 23 years old, specialized in Applied Mathematics and Data Science, I am currently working at Qualidata as a Data Scientist.',
    cv_fr: 'Download CV (French)',
    cv_en: 'Download CV (English)',
    label_experience: 'Experience',
    label_education: 'Education',
    label_projects: 'Projects',
    label_contact: 'Contact',
    qualidata_role: 'Data Scientist',
    qualidata_period: 'Feb 2026 – Now',
    qualidata_desc: 'Building data architecture solutions and analytical dashboards to support business decision-making.',
    alstom_role: 'Data Engineer – Internship',
    alstom_period: 'Apr 2025 – Sep 2025',
    alstom_desc: 'Designed and implemented a BIM library to streamline project information access across engineering teams. Developed data extraction scripts, automated asset tagging and led a four-member team.',
    ststan_role: 'Mathematics Oral Examiner',
    ststan_period: 'Sep 2024 – Mar 2025',
    ststan_desc: 'Conducted weekly oral exams (colles) for groups of three students in analysis, algebra and mathematical reasoning — preparing them for entrance into top French engineering schools.',
    helloasso_role: 'Data Scientist – Internship',
    helloasso_period: 'Apr 2024 – Aug 2024',
    helloasso_desc: 'Predicted short- and long-term marketing benefits to guide strategic decisions. Benchmarked ARIMA/SARIMAX, Gradient Boosting and LSTM models with full hyperparameter optimization.',
    cn_role: "Engineer's Degree — Applied Mathematics & Data Science",
    cn_period: 'Sep 2022 – Sep 2025',
    cn_desc: 'Machine Learning, Statistical Learning, Numerical Probabilities, Optimization, and Statistical Data Modeling.',
    janson_role: 'Classes Préparatoires aux Grandes Écoles',
    janson_period: 'Sep 2020 – Jun 2022',
    janson_desc: 'Intensive 2-year program preparing for the national competitive exams for admission to top French engineering schools.',
    therese_role: 'High School Diploma — Science',
    therese_period: 'Sep 2017 – Jun 2020',
    therese_desc: 'French Baccalauréat with a science specialization, obtained with honors (mention Très Bien).',
    ls2n_role: 'Epidemiological Analysis',
    ls2n_period: 'Sep 2023 – Mar 2024',
    ls2n_desc: 'Compared COVID-19 dynamics across territories using Unbalanced Optimal Transport theory, with interactive visualizations built in Streamlit.',
    sncf_role: 'Data Science Challenge',
    sncf_period: 'Nov 2023 – Dec 2023',
    sncf_desc: 'Predicted passenger load on SNCF trains from temporal, geographic and contextual data — full pipeline from exploration to RNN and gradient boosting models.',
    contact_heading: "Let's get in touch.",
    contact_sub: 'Feel free to send me a message for any opportunity or collaboration.',
    label_name: 'Name',
    label_email: 'Email',
    label_message: 'Message',
    btn_submit: 'Send Message',
  },
  fr: {
    nav_experience: 'Expériences',
    nav_education: 'Formation',
    nav_projects: 'Projets',
    nav_contact: 'Contact',
    hero_h2: 'Bonjour, je suis Data Scientist',
    hero_bio: "Diplômé de l'École Centrale de Nantes (Nantes, France), 23 ans, spécialisé en Mathématiques Appliquées et Data Science, je travaille actuellement chez Qualidata en tant que Data Scientist.",
    cv_fr: 'Télécharger mon CV (Français)',
    cv_en: 'Télécharger mon CV (Anglais)',
    label_experience: 'Expériences',
    label_education: 'Formation',
    label_projects: 'Projets',
    label_contact: 'Contact',
    qualidata_role: 'Data Scientist',
    qualidata_period: "Fév. 2026 – Aujourd'hui",
    qualidata_desc: "Construction d'architectures de données et de tableaux de bord analytiques pour soutenir la prise de décision.",
    alstom_role: 'Ingénieur Data – Stage',
    alstom_period: 'Avr. 2025 – Sep. 2025',
    alstom_desc: "Conception et déploiement d'une bibliothèque BIM pour centraliser les informations projets. Développement de scripts d'extraction de données, automatisation du tagging des assets et management d'une équipe de quatre personnes.",
    ststan_role: 'Examinateur Oral de Mathématiques',
    ststan_period: 'Sep. 2024 – Mar. 2025',
    ststan_desc: "Conduite d'interrogations orales hebdomadaires (colles) pour des groupes de trois étudiants en analyse, algèbre et raisonnement mathématique, en préparation aux concours des grandes écoles d'ingénieurs.",
    helloasso_role: 'Data Scientist – Stage',
    helloasso_period: 'Avr. 2024 – Août 2024',
    helloasso_desc: "Prédiction des bénéfices marketing à court et long terme pour orienter les décisions stratégiques. Comparaison des modèles ARIMA/SARIMAX, Gradient Boosting et LSTM avec optimisation complète des hyperparamètres.",
    cn_role: "Diplôme d'Ingénieur — Mathématiques Appliquées & Science des Données",
    cn_period: 'Sep. 2022 – Sep. 2025',
    cn_desc: 'Machine Learning, Apprentissage Statistique, Probabilités Numériques, Optimisation et Modélisation Statistique des Données.',
    janson_role: 'Classes Préparatoires aux Grandes Écoles',
    janson_period: 'Sep. 2020 – Jun. 2022',
    janson_desc: "Programme intensif de 2 ans de préparation aux concours nationaux d'admission dans les grandes écoles d'ingénieurs.",
    therese_role: 'Baccalauréat Général — Scientifique',
    therese_period: 'Sep. 2017 – Jun. 2020',
    therese_desc: 'Baccalauréat français, spécialité sciences, obtenu avec mention Très Bien.',
    ls2n_role: 'Analyse Épidémiologique',
    ls2n_period: 'Sep. 2023 – Mar. 2024',
    ls2n_desc: 'Comparaison des dynamiques COVID-19 entre territoires via la théorie du Transport Optimal Non Équilibré, avec des visualisations interactives développées sous Streamlit.',
    sncf_role: 'Challenge Data Science',
    sncf_period: 'Nov. 2023 – Déc. 2023',
    sncf_desc: "Prédiction du taux d'occupation des trains SNCF à partir de données temporelles, géographiques et contextuelles — pipeline complet de l'exploration aux modèles RNN et gradient boosting.",
    contact_heading: 'Prenons contact.',
    contact_sub: "N'hésitez pas à m'envoyer un message pour toute opportunité ou collaboration.",
    label_name: 'Nom',
    label_email: 'Email',
    label_message: 'Message',
    btn_submit: 'Envoyer',
  }
};

var currentLang = 'en';

function applyLang(lang) {
  currentLang = lang;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (translations[lang][key]) el.textContent = translations[lang][key];
  });
  document.querySelectorAll('.lang-btn').forEach(b => b.classList.toggle('lang-btn--active', b.dataset.lang === lang));
}

document.querySelectorAll('.lang-btn').forEach(btn => btn.addEventListener('click', () => applyLang(btn.dataset.lang)));

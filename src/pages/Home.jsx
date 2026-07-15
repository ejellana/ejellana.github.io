import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import RotatingRole from '../components/RotatingRole';
import ScrollReveal from '../components/ScrollReveal';
import {
  fadeUp,
  fadeIn,
  blurUp,
  scaleIn,
  staggerContainer,
  chipPopIn,
  bentoCard,
  projectCard,
  certCard,
  socialIcon,
  heroChild,
  slideLeft,
  slideRight,
  VIEWPORT,
  VIEWPORT_LAZY,
} from '../hooks/useScrollAnimation';

// ── SOLID icons ────────────────────────────────────────
import {
  faEnvelope,
  faArrowUpRightFromSquare,
} from '@fortawesome/free-solid-svg-icons';

// ── BRAND icons ────────────────────────────────────────
import {
  faGithub,
  faLinkedinIn,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';

// CV file
import cvFile from '../assets/PDFs/CV_Ellana-EmmanuelJacob.pdf';

// About Me profile image
import imgMe from '../assets/images/about/me2.JPEG';

// Project images
import imgN8BLeadGen from '../assets/images/Projects/N8N-B2BLeadGen.png';
import imgAnimalTraceability from '../assets/images/Projects/AnimalDiseaseTraceability.png';
import imgParkPeek from '../assets/images/Projects/ParkPeek.png';
import imgHeartDisease from '../assets/images/Projects/HeartDiseasePrediction.png';
import imgDineDash from '../assets/images/Projects/DineDash.png';
import imgMushroom from '../assets/images/Projects/MushroomDataset.png';
import imgCommuteSync from '../assets/images/Projects/CommuteSync.png';
import imgMerchQuest from '../assets/images/Projects/MerchQuest.png';
import imgJeepneyRush from '../assets/images/Projects/JeepneyRush.png';
import imgFourPics1Word from '../assets/images/Projects/4Pics1Word.png';
import imgPurpleBugStore from '../assets/images/Projects/PurpleBugStore.png';
import imgPAWS from '../assets/images/Projects/PAWS.png';
import imgTwitterClone from '../assets/images/Projects/Twitter-Clone.png';

// Certificate images
import certCompTiaTech from '../assets/images/certificates/CompTIA Tech+ certificate_page-0001.jpg';
import certDataAnalyticsEssentials from '../assets/images/certificates/Data-Analytics-Essentials_page-0001.jpg';
import certGoogleDataAnalytics from '../assets/images/certificates/Google_Data_Analytics_Cert_page-0001.jpg';
import certIbmToolsDataScience from '../assets/images/certificates/IBM-tools-for-data-science_page-0001.jpg';
import certIbmWhatIsDataScience from '../assets/images/certificates/IBM-what-is-data-science_page-0001.jpg';
import certAseanAiHackathon from '../assets/images/certificates/certificate_Emmanuel_Jacob_C__Ellana_page-0001.jpg';


const certificatesData = [
  {
    title: "CompTIA Tech+ Certificate",
    image: certCompTiaTech,
    year: "2025",
    issuer: "CompTIA",
    verifyUrl: "http://verify.CompTIA.org",
    viewUrl: certCompTiaTech
  },
  {
    title: "Data Analytics Essentials",
    image: certDataAnalyticsEssentials,
    year: "2026",
    issuer: "Cisco",
    verifyUrl: "https://www.netacad.com",
    viewUrl: certDataAnalyticsEssentials
  },
  {
    title: "Google Data Analytics Certificate",
    image: certGoogleDataAnalytics,
    year: "2026",
    issuer: "Google",
    verifyUrl: "https://coursera.org/verify/professional-cert/DSG2L2G3LDYO",
    viewUrl: certGoogleDataAnalytics
  },
  {
    title: "IBM Tools for Data Science",
    image: certIbmToolsDataScience,
    year: "2026",
    issuer: "IBM",
    verifyUrl: "https://coursera.org/verify/CEUJ4FG718VH",
    viewUrl: certIbmToolsDataScience
  },
  {
    title: "IBM What is Data Science",
    image: certIbmWhatIsDataScience,
    year: "2025",
    issuer: "IBM",
    verifyUrl: "https://coursera.org/verify/MXR0L3YYSTBO",
    viewUrl: certIbmWhatIsDataScience
  },
  {
    title: "ASEAN AI Hackathon 2026 Certificate of Participation",
    image: certAseanAiHackathon,
    year: "2026",
    issuer: "P2A & ASEAN AI Council",
    verifyUrl: "https://www.p2a.asia",
    viewUrl: certAseanAiHackathon
  }
];

// Maps skill chip text → Simple Icons slug (https://simpleicons.org)
const skillIcons = {
  Python: 'python',
  SQL: 'mysql',
  Excel: 'microsoftexcel',
  Jupyter: 'jupyter',
  HTML: 'html5',
  CSS: 'css3',
  JavaScript: 'javascript',
  React: 'react',
  'C#': 'csharp',
  Git: 'git',
  GitHub: 'github',
  'VS Code': 'visualstudiocode',
  Figma: 'figma',
  'MS Access': 'microsoftaccess',
  'MS Word': 'microsoftword',
  Canva: 'canva',
  Tableau: 'tableau',
  PowerBI: 'powerbi',
  'Vue.js': 'vuedotjs',
  Laravel: 'laravel',
  Tailwind: 'tailwindcss',
  N8N: 'n8n',
};

// Skill categories — same technologies as before, now organized for the
// vertical icon-card layout instead of chips inside bento cards.
// `labeled: true` marks the one category (Professional Skills) that keeps
// its text labels, since those icons aren't universally recognizable.
const skillCategories = [
  {
    title: 'Data & Analytics',
    description: 'Extracting insights from data to support informed decision-making.',
    skills: ['Python', 'SQL', 'Excel', 'Jupyter', 'Tableau', 'PowerBI'],
    labeled: false,
  },
  {
    title: 'Development',
    description: 'Building modern, scalable, and responsive software applications.',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Vue.js', 'Laravel', 'C#', 'Python', 'Tailwind'],
    labeled: false,
  },
  {
    title: 'Tools & Platforms',
    description: 'Leveraging modern tools to streamline development and collaboration.',
    skills: ['Git', 'GitHub', 'VS Code', 'Figma', 'N8N', 'Canva', 'Excel', 'MS Word'],
    labeled: false,
  },
  {
    title: 'Professional Skills',
    description: 'Applying collaboration, problem-solving, and communication in software development.',
    skills: [
      { name: 'Team Work', icon: 'groups' },
      { name: 'Communication', icon: 'chat' },
      { name: 'Creativity', icon: 'lightbulb' },
      { name: 'Productivity', icon: 'speed' },
      { name: 'Project Management', icon: 'task' },
      { name: 'Problem Solving', icon: 'psychology' },
      { name: 'Adaptability', icon: 'change_circle' },
    ],
    labeled: true,
  },
];

function SkillIcon({ skill }) {
  const slug = skillIcons[skill];
  if (!slug) return null;

  // Fallback chain: primary colored CDN -> jsDelivr (latest) -> unpkg (latest).
  // If every source fails, swap in a visible text-badge instead of going
  // blank, so a broken icon is always noticeable and never looks "missing".
  const sources = [
    `https://cdn.simpleicons.org/${slug}`,
    `https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/${slug}.svg`,
    `https://unpkg.com/simple-icons@latest/icons/${slug}.svg`,
  ];

  return (
    <img
      src={sources[0]}
      alt={`${skill} icon`}
      loading="lazy"
      data-attempt="0"
      onError={(e) => {
        const img = e.currentTarget;
        const next = Number(img.dataset.attempt) + 1;

        if (next < sources.length) {
          img.dataset.attempt = String(next);
          img.src = sources[next];
          return;
        }

        // All sources failed — replace with a text badge instead of hiding.
        const wrapper = img.parentElement;
        if (wrapper) {
          img.remove();
          const badge = document.createElement('span');
          badge.textContent = skill.slice(0, 2).toUpperCase();
          badge.style.cssText = 'font-family:"Poppins",sans-serif;font-weight:700;font-size:0.8rem;color:#666;';
          wrapper.appendChild(badge);
        }
      }}
    />
  );
}

// Maps skill names to their official brand colors for high-end glowing hover states
const skillColors = {
  Python: '#3776AB',
  SQL: '#4479A1',
  Excel: '#107C41',
  Jupyter: '#F37626',
  HTML: '#E34F26',
  CSS: '#1572B6',
  JavaScript: '#F7DF1E',
  React: '#61DAFB',
  'C#': '#239120',
  Git: '#F05032',
  GitHub: '#181717',
  'VS Code': '#007ACC',
  Figma: '#F24E1E',
  'MS Access': '#BA141A',
  'MS Word': '#2B579A',
  Canva: '#00C4CC',
  Tableau: '#E97627',
  PowerBI: '#F2C811',
  'Vue.js': '#4FC08D',
  Laravel: '#FF2D20',
  Tailwind: '#06B6D4',
  N8N: '#FF6D5A',
  // Professional skills color mappings
  'Team Work': '#4CAF50',
  'Communication': '#2196F3',
  'Creativity': '#FF9800',
  'Productivity': '#9C27B0',
  'Project Management': '#E91E63',
  'Problem Solving': '#00BCD4',
  'Adaptability': '#8BC34A'
};

// ── Premium Icon Card Grid — replaces the old skill chips ─────────────
// `labeled`: true keeps the text label under each icon (Professional Skills).
// false renders a larger, label-less "icon-only" card (technical skills),
// since those logos are already recognizable on their own.
function SkillIconGrid({ skills, labeled = true, direction = 'left' }) {
  const cardVariant = direction === 'left' ? slideLeft : slideRight;

  return (
    <motion.div
      className="skill-icons-grid"
      // Faster stagger for icon grids — they're small and numerous
      variants={staggerContainer(0.04)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.1 }}
    >
      {skills.map((skill) => {
        const name = typeof skill === 'string' ? skill : skill.name;
        const brandColor = skillColors[name] || '#111111';

        return (
          <motion.div
            key={name}
            className={`skill-icon-card ${labeled ? '' : 'skill-icon-card--icon-only'}`}
            variants={cardVariant}
            whileHover={{
              // Lighter lift — premium cards don't jump around
              y: -4,
              scale: 1.03,
              transition: { duration: 0.3, ease: [0.25, 1, 0.5, 1] },
            }}
            whileTap={{ scale: 0.96 }}
            style={{
              willChange: 'transform',
              '--brand-hover-border': `${brandColor}66`,
              '--brand-hover-shadow-1': `${brandColor}22`,
              '--brand-hover-shadow-2': `${brandColor}18`,
            }}
            title={name}
          >
            <span className={`skill-icon-card__icon ${labeled ? '' : 'skill-icon-card__icon--large'}`}>
              {typeof skill === 'string' ? (
                <SkillIcon skill={skill} />
              ) : (
                <span className="material-symbols-outlined" style={{ color: brandColor }}>
                  {skill.icon}
                </span>
              )}
            </span>
            {labeled && <span className="skill-icon-card__label">{name}</span>}
          </motion.div>
        );
      })}
    </motion.div>
  );
}

// ── Premium Profile Card — About section portrait with floating tech badges ──
// Card slides in from the right (handled by the ScrollReveal wrapper around
// it); the badges themselves reveal a beat later, once the card is in view.
function ProfileCard({ image, alt }) {
  return (
    <motion.div
      className="profile-card"
      whileHover={{
        // Only animate GPU-safe transforms — no boxShadow (triggers repaint)
        y: -6,
        scale: 1.015,
        transition: { duration: 0.4, ease: [0.25, 1, 0.5, 1] },
      }}
      style={{ willChange: 'transform' }}
    >
      <img src={image} alt={alt} className="profile-card__image" />

      {/* Top-right badge — programming */}
      <motion.div
        className="profile-badge profile-badge--top"
        initial={{ opacity: 0, scale: 0.6, y: 12 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={VIEWPORT}
        transition={{ duration: 0.55, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        whileHover={{
          y: -4,
          rotate: -4,
          scale: 1.06,
          transition: { duration: 0.3, ease: [0.25, 1, 0.5, 1] },
        }}
      >
        <span className="material-symbols-outlined">code</span>
      </motion.div>

      {/* Bottom-left badge — data / analytics */}
      <motion.div
        className="profile-badge profile-badge--bottom"
        initial={{ opacity: 0, scale: 0.6, y: -12 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={VIEWPORT}
        transition={{ duration: 0.55, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
        whileHover={{
          y: -4,
          rotate: 4,
          scale: 1.06,
          transition: { duration: 0.3, ease: [0.25, 1, 0.5, 1] },
        }}
      >
        <span className="material-symbols-outlined">database</span>
      </motion.div>
    </motion.div>
  );
}

// Local slide-in variants for the About section's two columns.
// Reduced offset (24px vs 56px) — more refined, less theatrical.
const slideInLeft = {
  hidden:  { opacity: 0, x: -24 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const slideInRight = {
  hidden:  { opacity: 0, x: 24 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function Home() {
  return (
    <div id="home">

      {/* ── Hero / Introduction Section ───────────────────── */}
      <section className="hero" id="home">
        <div className="container">
          {/* Left-aligned content column — ~55-60% of the container width */}
          <div className="hero-content">

            {/* "Hello," greeting */}
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            >
              Hello,
            </motion.h2>

            {/* Main name headline */}
            <motion.h1
              className="title-accent"
              initial={{ opacity: 0, y: 36 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: 0.25 }}
            >
              I'm Emmanuel Ellana
            </motion.h1>

            {/* Tagline with rotating role */}
            <motion.p
              className="tagline tagline--large"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.45 }}
            >
              Aspiring <RotatingRole />
            </motion.p>

            {/* Action buttons — social icons + CV download, staggered pop-in */}
            <motion.div
              className="hero-actions"
              variants={staggerContainer(0.07)}
              initial="hidden"
              animate="visible"
              style={{ transitionDelay: '0.75s' }}
            >
              {[
                { href: "https://www.instagram.com/ej.ellana/", icon: faInstagram, label: "Instagram" },
                { href: "https://github.com/ejellana", icon: faGithub, label: "GitHub" },
                { href: "https://www.linkedin.com/in/emmanuel-ellana-ba8a9a182/", icon: faLinkedinIn, label: "LinkedIn" },
              ].map(({ href, icon, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="hero-icon-btn"
                  variants={socialIcon}
                  whileHover={{
                    y: -4,
                    scale: 1.04,
                    transition: { duration: 0.35, ease: [0.25, 1, 0.5, 1] },
                  }}
                  whileTap={{ scale: 0.95 }}
                  style={{ willChange: 'transform' }}
                >
                  <FontAwesomeIcon icon={icon} />
                </motion.a>
              ))}

              <motion.a
                href={cvFile}
                download="CV_Ellana-EmmanuelJacob.pdf"
                aria-label="Download CV"
                className="hero-cv-btn"
                variants={socialIcon}
                whileHover={{
                  y: -4,
                  scale: 1.02,
                  transition: { duration: 0.35, ease: [0.25, 1, 0.5, 1] },
                }}
                whileTap={{ scale: 0.97 }}
                style={{ willChange: 'transform' }}
              >
                Download CV
              </motion.a>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── About Me Section ─────────────────────────────── */}
      <section id="about" className="section about">
        <div className="container">
          <div className="about-content">

            {/* Left column — heading + description, slides in from the left */}
            <ScrollReveal variant={slideInLeft} className="about-text-col">
              <h2 className="title-accent about-heading">About Me</h2>
              <p className="about-paragraph">
                I am Emmanuel Jacob C. Ellana, a Bachelor of Science in Computer Science student specializing in Data Science and Analytics at Mapúa Malayan Colleges Laguna.
                I am a consistent Dean's Lister and an Iskolar ng Laguna who enjoys continuously learning and taking on new challenges.
                Outside of academics, I enjoy playing video games, watching movies, listening to music, and spending time exploring new interests.
                I value creativity, curiosity, and personal growth, and I strive to maintain a balance between my studies and the activities I enjoy.
              </p>
            </ScrollReveal>

            {/* Right column — profile card, slides in from the right, badges follow */}
            <ScrollReveal variant={slideInRight} delay={0.1} className="about-image-col">
              <ProfileCard image={imgMe} alt="Emmanuel Jacob C. Ellana" />
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* ── Skills Section ─────────────────────────────── */}
      <section id="skills" className="section skills">
        <div className="container">
          <ScrollReveal variant={fadeUp}>
            <h2 className="skills-heading">Skills</h2>
          </ScrollReveal>

          <div className="skills-categories">
            {skillCategories.map((category, index) => (
              <ScrollReveal
                key={category.title}
                variant={fadeUp}
                delay={index * 0.1}
                className="skill-category"
              >
                <div className="skill-category__heading-wrap">
                  <h3 className="skill-category__title">{category.title}</h3>
                </div>
                <p className="skill-category__desc">{category.description}</p>
                <SkillIconGrid
                  skills={category.skills}
                  labeled={category.labeled}
                  direction={index % 2 === 0 ? 'left' : 'right'}
                />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Projects Section ──────────────────────────────── */}
      <section id="projects" className="section projects">
        <div className="container projects-container">
          <ScrollReveal variant={fadeUp}>
            <h2 className="title-accent">My Projects</h2>
          </ScrollReveal>
          <ScrollReveal variant={fadeIn} delay={0.12}>
            <p className="projects-subtitle">
              A collection of the tools, models, and applications I've built — spanning data science,
              full-stack development, and creative problem-solving, from early prototypes to fully working products.
            </p>
          </ScrollReveal>

          {/* Projects horizontal scroller — 5 columns × 2 rows */}
          <div className="projects-scroller">
            {/*
              VIEWPORT_LAZY (amount: 0.05) fires the stagger container as soon
              as 5% of the track is visible — early enough that cards are
              fully animated before the user reaches them.
              stagger 0.09s gives each card a distinct, unhurried reveal.
            */}
            <motion.div
              className="projects-track"
              variants={staggerContainer(0.09)}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT_LAZY}
            >
              {(() => {
                const projects = [
                  {
                    img: imgN8BLeadGen,
                    alt: "PhilLeads: B2B Lead Gen",
                    title: "PhilLeads: B2B Lead Gen",
                    year: "2026",
                    desc: "An AI-powered system that automates B2B lead discovery using intelligent ETL pipelines and a comprehensive data analytics dashboard.",
                    techStack: ["N8N", "React", "Leaflet"],
                    projectUrl: "https://github.com/ejellana/B2B-LeadGen",
                  },
                  {
                    img: imgPurpleBugStore,
                    alt: "PurpleBug Store",
                    title: "PurpleBug Store",
                    year: "2026",
                    desc: "An e-commerce platform for the Purple Bug brand, designed to showcase and sell the latest products with a modern, user-friendly interface.",
                    techStack: ["Vue", "Laravel"],
                    projectUrl: "https://github.com/ejellana/Ellana_EmmanuelJacob_Exam",
                  },
                  {
                    img: imgAnimalTraceability,
                    alt: "Animal Disease Traceability System",
                    title: "Animal Disease Traceability",
                    year: "2026",
                    desc: "A secure blockchain and Data Analytics framework built to provide tamper-proof livestock disease tracking.",
                    techStack: ["React", "Go", "Blockchain"],
                    projectUrl: "https://github.com/dsmbrnLois/Thesis",
                  },
                  {
                    img: imgParkPeek,
                    alt: "ParkPeek",
                    title: "ParkPeek",
                    year: "2025",
                    desc: "A mobile parking app featuring peak-volume prediction powered by clustering and time-series analysis.",
                    techStack: ["React", "React Native", "ML"],
                    projectUrl: "https://github.com/dsmbrnLois/ParkPeek_Admin-V",
                  },
                  {
                    img: imgHeartDisease,
                    alt: "Heart Disease Prediction",
                    title: "Heart Disease Prediction",
                    year: "2025",
                    desc: "An AI system utilizing neural networks to predict patient heart disease risk via web and mobile apps.",
                    techStack: ["React", "Kotlin", "ML"],
                    projectUrl: "https://github.com/ejellana/Heart-RiskDetection",
                  },
                  {
                    img: imgMushroom,
                    alt: "Mushroom Dataset",
                    title: "Mushroom Dataset",
                    year: "2025",
                    desc: "A data mining project utilizing Information Gain to optimize decision tree classifications.",
                    techStack: ["Clustering", "ML"],
                    projectUrl: "https://canva.link/zj1p3e41qhgb1w5",
                  },
                  {
                    img: imgDineDash,
                    alt: "DineDash",
                    title: "DineDash",
                    year: "2024",
                    desc: "A full-stack food delivery platform featuring order tracking and a comprehensive admin dashboard.",
                    techStack: ["ASP.NET"],
                    projectUrl: "https://github.com/abc1dee/IT114L-FinalProject-BurgerShop",
                  },
                  {
                    img: imgTwitterClone,
                    alt: "Twitter Clone",
                    title: "Twitter Clone",
                    year: "2024",
                    desc: "A full-stack twitter clone with real-time updates, user authentication, and post management.",
                    techStack: ["HTML", "CSS", "JavaScript"],
                    projectUrl: "https://github.com/ejellana/Twitter-Clone",
                  },
                  {
                    img: imgPAWS,
                    alt: "PAWS",
                    title: "PAWS",
                    year: "2024",
                    desc: "A platform empowering animal rehabilitation centers by simplifying volunteer management and care initiatives.",
                    techStack: ["ASP.NET"],
                    projectUrl: "https://github.com/ejellana/PAWS-Animal-Rehabilitation-Center",
                  },
                  {
                    img: imgCommuteSync,
                    alt: "CommuteSync",
                    title: "CommuteSync",
                    year: "2023",
                    desc: "A smart transit prototype offering real-time routes, ride-hailing integration, and seat reservations.",
                    techStack: ["Canva"],
                    projectUrl: "https://canva.link/jmbpa0ygorsr2ou",
                  },
                  {
                    img: imgJeepneyRush,
                    alt: "JeepneyRush",
                    title: "JeepneyRush",
                    year: "2023",
                    desc: "A top-down C# survival game where players transport passengers through a zombie apocalypse.",
                    techStack: ["C#"],
                    projectUrl: "https://github.com/ejellana/Jeepney-Rush-Zombie-Escape",
                  },
                  {
                    img: imgMerchQuest,
                    alt: "MerchQuest",
                    title: "MerchQuest",
                    year: "2023",
                    desc: "A UI/UX prototype for a virtual assistant that streamlines shopping through personalized recommendations.",
                    techStack: ["Canva"],
                    projectUrl: "https://canva.link/xcaqka7jx2k5vtk",
                  },
                  {
                    img: imgFourPics1Word,
                    alt: "4Pics1Word",
                    title: "4Pics1Word",
                    year: "2022",
                    desc: "A Python Tkinter recreation of the classic puzzle game built with OOP principles.",
                    techStack: ["Python"],
                    projectUrl: null,
                  },
                ];

                // Split into rows of 5 for desktop (rows side-by-side in horizontal track)
                // Mobile will flatten this automatically via CSS
                const cardsPerRow = 5;
                const rows = [];
                for (let i = 0; i < projects.length; i += cardsPerRow) {
                  rows.push(projects.slice(i, i + cardsPerRow));
                }

                return (
                  <>
                    {rows.map((row, rowIndex) => (
                      <div key={`row-${rowIndex}`} className="projects-row">
                        {row.map((project) => (
                          <motion.div
                            key={project.title}
                            className="project-card"
                            variants={projectCard}
                            whileHover={{
                              y: -6,
                              scale: 1.015,
                              transition: { duration: 0.35, ease: [0.25, 1, 0.5, 1] },
                            }}
                            style={{ willChange: 'transform' }}
                          >
                            {/* ── 1:1 image container ── */}
                            <div className="project-card__image-wrap">
                              <img
                                src={project.img}
                                alt={project.alt}
                                loading="lazy"
                                className="project-card__image"
                              />
                            </div>

                            {/* ── Info panel: title + year, description, tech stack + share icon ── */}
                            <div className="project-card__info">
                              <div className="project-card__row">
                                <h3 className="project-card__title">{project.title}</h3>
                                <span className="project-card__year">{project.year}</span>
                              </div>

                              <p className="project-card__desc">{project.desc}</p>

                              {/* Tech Stack Badges + Share Button Row */}
                              <div className="project-card__footer">
                                {/* Tech Stack Badges */}
                                {project.techStack && project.techStack.length > 0 && (
                                  <div className="project-card__tech-stack">
                                    {project.techStack.map((tech) => (
                                      <span key={tech} className="tech-badge">
                                        {tech}
                                      </span>
                                    ))}
                                  </div>
                                )}

                                {/* Share/Link Button */}
                                <div className="project-card__share-wrap">
                                  {project.projectUrl ? (
                                    <motion.a
                                      href={project.projectUrl}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      aria-label={`View ${project.title} repository`}
                                      className="project-card__share"
                                      whileHover={{
                                        y: -3,
                                        scale: 1.1,
                                        transition: { duration: 0.25, ease: [0.25, 1, 0.5, 1] },
                                      }}
                                      whileTap={{ scale: 0.92 }}
                                    >
                                      <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                                    </motion.a>
                                  ) : (
                                    <span
                                      className="project-card__share project-card__share--disabled"
                                      aria-label="No repository available"
                                      title="No repository available"
                                    >
                                      <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                                    </span>
                                  )}
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    ))}
                  </>
                );
              })()}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Certificates Section ──────────────────────────── */}
      <section id="certificates" className="section certificates">
        <div className="container projects-container">
          <ScrollReveal variant={fadeUp}>
            <h2 className="title-accent">My Certificates</h2>
          </ScrollReveal>
          <ScrollReveal variant={fadeIn} delay={0.12}>
            <p className="certificates-subtitle">
              Verified achievements and certifications in data, development, and technology.
            </p>
          </ScrollReveal>

          <div className="certs-scroller">
            {/*
              Certificates use the same cardReveal variant as projects
              for a consistent system-wide reveal language.
              Stagger 0.09s — unhurried, each cert feels distinct.
            */}
            <motion.div
              className="certs-track"
              variants={staggerContainer(0.09)}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT_LAZY}
            >
              {certificatesData.map((cert, index) => (
                <motion.article
                  className="cert-card"
                  key={index}
                  variants={certCard}
                  whileHover={{
                    y: -6,
                    scale: 1.01,
                    transition: { duration: 0.35, ease: [0.25, 1, 0.5, 1] },
                  }}
                  style={{ willChange: 'transform' }}
                >
                  <div className="cert-card__image-wrap">
                    <motion.img
                      src={cert.image}
                      alt={cert.title}
                      loading="lazy"
                      className="cert-card__image"
                      whileHover={{
                        scale: 1.03,
                        transition: { duration: 0.45, ease: [0.25, 1, 0.5, 1] },
                      }}
                    />
                  </div>
                  <div className="cert-card__body">
                    <div className="cert-card__content">
                      <h3 className="cert-card__title" title={cert.title}>{cert.title}</h3>
                      <p className="cert-card__meta">
                        <span className="cert-card__year">{cert.year}</span> &bull; {cert.issuer}
                      </p>
                    </div>
                    <div className="cert-card__actions">
                      <motion.a
                        href={cert.verifyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cert-btn cert-btn--primary"
                        whileHover={{ y: -2, transition: { duration: 0.25, ease: [0.25, 1, 0.5, 1] } }}
                        whileTap={{ scale: 0.96 }}
                      >
                        <span className="material-symbols-outlined" style={{ fontSize: '14px' }}>verified</span>
                        Verify
                      </motion.a>
                      <motion.a
                        href={cert.viewUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cert-btn cert-btn--outline"
                        whileHover={{ y: -2, transition: { duration: 0.25, ease: [0.25, 1, 0.5, 1] } }}
                        whileTap={{ scale: 0.96 }}
                      >
                        View
                      </motion.a>
                    </div>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Contact Section ───────────────────────────────── */}
      <section id="contact" className="section contact">
        <div className="container">
          <div className="contact-hero">

            <ScrollReveal variant={fadeUp}>
              <h2 className="contact-title title-accent">Let's Build Something Together</h2>
            </ScrollReveal>

            <ScrollReveal variant={fadeIn} delay={0.14}>
              <p className="contact-description">
                I'm always open to new opportunities, collaborations, or just a friendly chat.
              </p>
            </ScrollReveal>

            {/* Contact cards — GitHub, LinkedIn, Email */}
            <motion.div
              className="contact-cards"
              variants={staggerContainer(0.1)}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT}
            >
              {[
                {
                  href: "https://www.instagram.com/ej.ellana/",
                  icon: faInstagram,
                  label: "Instagram",
                  external: true,
                },
                {
                  href: "https://www.linkedin.com/in/emmanuel-ellana-ba8a9a182/",
                  icon: faLinkedinIn,
                  label: "LinkedIn",
                  external: true,
                },
                {
                  href: "mailto:emman.ellana@gmail.com",
                  icon: faEnvelope,
                  label: "Email",
                  external: false,
                },
              ].map(({ href, icon, label, external }) => (
                <motion.a
                  key={label}
                  href={href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                  className="contact-card"
                  variants={fadeUp}
                  whileHover={{
                    // GPU-only transforms — no borderColor/boxShadow (handled by CSS)
                    y: -5,
                    scale: 1.02,
                    transition: { duration: 0.35, ease: [0.25, 1, 0.5, 1] },
                  }}
                  whileTap={{ scale: 0.97 }}
                  style={{ willChange: 'transform' }}
                >
                  <span className="contact-card__icon">
                    <FontAwesomeIcon icon={icon} />
                  </span>
                  <span className="contact-card__label">{label}</span>
                </motion.a>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

    </div>
  );
}
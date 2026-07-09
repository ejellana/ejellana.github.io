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
  VIEWPORT,
} from '../hooks/useScrollAnimation';

// ── SOLID icons ────────────────────────────────────────
import {
  faPaperPlane,
  faPhone,
  faArrowUpRightFromSquare,
  faPalette,
  faFilePdf,
} from '@fortawesome/free-solid-svg-icons';

// ── BRAND icons ────────────────────────────────────────
import {
  faGithub,
  faLinkedinIn,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';

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

// About Me image
import imgMe from '../assets/images/About/me.jpg';

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
    id: "COMP001022950800",
    issuer: "CompTIA",
    verifyUrl: "http://verify.CompTIA.org",
    viewUrl: certCompTiaTech
  },
  {
    title: "Data Analytics Essentials",
    image: certDataAnalyticsEssentials,
    id: "aa6928fe-764a-4ce9-a6c1-7bea55406410",
    issuer: "Cisco",
    verifyUrl: "https://www.netacad.com",
    viewUrl: certDataAnalyticsEssentials
  },
  {
    title: "Google Data Analytics Certificate",
    image: certGoogleDataAnalytics,
    id: "DSG2L2G3LDYO",
    issuer: "Google",
    verifyUrl: "https://coursera.org/verify/professional-cert/DSG2L2G3LDYO",
    viewUrl: certGoogleDataAnalytics
  },
  {
    title: "IBM Tools for Data Science",
    image: certIbmToolsDataScience,
    id: "CEUJ4FG718VH",
    issuer: "IBM",
    verifyUrl: "https://coursera.org/verify/CEUJ4FG718VH",
    viewUrl: certIbmToolsDataScience
  },
  {
    title: "IBM What is Data Science",
    image: certIbmWhatIsDataScience,
    id: "MXR0L3YYSTBO",
    issuer: "IBM",
    verifyUrl: "https://coursera.org/verify/MXR0L3YYSTBO",
    viewUrl: certIbmWhatIsDataScience
  },
  {
    title: "ASEAN AI Hackathon 2026 Certificate of Participation",
    image: certAseanAiHackathon,
    id: "P2A2026AI0341",
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
  'C++': 'cplusplus',
  'ASP.NET': 'dotnet',
  Git: 'git',
  GitHub: 'github',
  'VS Code': 'visualstudiocode',
  Figma: 'figma',
  'MS Access': 'microsoftaccess',
  Canva: 'canva',
  Vite: 'vite',
  Tableau: 'tableau',
  PowerBI: 'powerbi',
  'React Native': 'react',
  Laravel: 'laravel',
  Bootstrap: 'bootstrap',
  Tailwind: 'tailwindcss',
  N8N: 'n8n',
};

function SkillIcon({ skill }) {
  const slug = skillIcons[skill];
  if (!slug) return null;

  return (
    <img
      src={`https://cdn.simpleicons.org/${slug}`}
      alt={`${skill} icon`}
      className="chip-icon"
      loading="lazy"
      onError={(e) => {
        const img = e.currentTarget;
        if (img.dataset.triedFallback) {
          img.style.display = 'none';
          return;
        }
        img.dataset.triedFallback = 'true';
        img.src = `https://cdn.jsdelivr.net/npm/simple-icons@v12/icons/${slug}.svg`;
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
  'React Native': '#61DAFB',
  'C#': '#239120',
  'C++': '#00599C',
  'ASP.NET': '#512BD4',
  Git: '#F05032',
  GitHub: '#181717',
  'VS Code': '#007ACC',
  Figma: '#F24E1E',
  'MS Access': '#BA141A',
  Canva: '#00C4CC',
  Vite: '#646CFF',
  Tableau: '#E97627',
  PowerBI: '#F2C811',
  Laravel: '#FF2D20',
  Bootstrap: '#7952B3',
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

// ── Reusable animated bento card ─────────────────────────────
function BentoCard({ children, className }) {
  return (
    <motion.div
      className={`bento-card ${className}`}
      variants={bentoCard}
      whileHover={{
        y: -12,
        scale: 1.02,
        transition: { duration: 0.4, ease: [0.23, 1, 0.32, 1] },
      }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={VIEWPORT}
    >
      <div className="bento-card__accent" />
      {children}
    </motion.div>
  );
}
// ── Premium Category Icon ─────────────────────────────
function CategoryIcon({ iconName }) {
  return (
    <motion.div
      className="category-icon-wrapper"
      whileHover={{
        scale: 1.12,
        rotate: 8,
        transition: { duration: 0.4, ease: [0.23, 1, 0.32, 1] }
      }}
    >
      <span className="material-symbols-outlined category-icon">{iconName}</span>
    </motion.div>
  );
}

// ── Premium Animated Skill Chips ───────────────────────────
function AnimatedChips({ skills }) {
  return (
    <motion.div
      className="skill-chips"
      variants={staggerContainer(0.035)}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT}
    >
      {skills.map((skill) => {
        const name = typeof skill === 'string' ? skill : skill.name;
        const brandColor = skillColors[name] || '#111111';
        const isDarkBrand = brandColor === '#181717' || brandColor === '#0a0a0a' || brandColor === '#111111';

        return (
          <motion.span
            key={name}
            className="chip"
            variants={chipPopIn}
            whileHover={{
              y: -5,
              scale: 1.08,
              borderColor: brandColor,
              color: isDarkBrand ? '#fff' : '#111',
              backgroundColor: isDarkBrand ? brandColor : '#fff',
              boxShadow: `0 10px 30px ${brandColor}25, 0 4px 12px ${brandColor}18`,
              transition: { duration: 0.25, ease: [0.23, 1, 0.32, 1] },
            }}
            whileTap={{ scale: 0.96 }}
          >
            {typeof skill === 'string' ? (
              <>
                <SkillIcon skill={skill} />
                <span className="chip-text">{skill}</span>
              </>
            ) : (
              <>
                <span className="material-symbols-outlined chip-icon" style={{ color: brandColor }}>
                  {skill.icon}
                </span>
                <span className="chip-text">{skill.name}</span>
              </>
            )}
          </motion.span>
        );
      })}
    </motion.div>
  );
}

export default function Home() {
  return (
    <div id="home">

      {/* ── Hero / Introduction Section ───────────────────── */}
      <section className="hero" id="home">
        <div className="container">

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

          {/* Social icons — staggered pop-in */}
          <motion.div
            className="hero-social"
            variants={staggerContainer(0.07)}
            initial="hidden"
            animate="visible"
            style={{ transitionDelay: '0.75s' }}
          >
            {[
              { href: "https://www.instagram.com/ej.ellana/", icon: faInstagram, label: "Instagram" },
              { href: "https://github.com/ejellana", icon: faGithub, label: "GitHub" },
              { href: "https://www.linkedin.com/in/emmanuel-ellana-ba8a9a182/", icon: faLinkedinIn, label: "LinkedIn" },
              { href: "#", icon: faFilePdf, label: "Resume" }, // Resume placeholder
            ].map(({ href, icon, label }) => (
              <motion.a
                key={label}
                href={href}
                target={label === "Resume" ? undefined : "_blank"}
                rel="noopener noreferrer"
                aria-label={label}
                variants={socialIcon}
                whileHover={{
                  y: -5,
                  scale: 1.12,
                  background: '#111',
                  color: '#fff',
                  transition: { duration: 0.22, ease: [0.22, 1, 0.36, 1] },
                }}
                whileTap={{ scale: 0.94 }}
              >
                <FontAwesomeIcon icon={icon} />
              </motion.a>
            ))}
          </motion.div>

        </div>
      </section>

      {/* ── About Me Section ─────────────────────────────── */}
      <section id="about" className="section about">
        <div className="container">
          <ScrollReveal variant={fadeUp}>
            <h2 className="title-accent">About Me</h2>
          </ScrollReveal>

          <div className="about-content">
            <ScrollReveal variant={fadeUp} delay={0.15} className="about-text">
              <p>
                I am Emmanuel Jacob C. Ellana, a Bachelor of Science in Computer Science student specializing in Data Science and Analytics at Mapúa Malayan Colleges Laguna (2022–Present), and a consistent Dean's Lister and Iskolar ng Laguna scholar.
                My experience includes developing projects in machine learning, full-stack development, and data analytics such as blockchain-based systems, predictive models, and web applications.
                I am actively involved in the Junior Philippine Computer Society (JPCS) and have participated in hackathons and competitions including the ASEAN AI Hackathon and BPI DataWave.
              </p>
            </ScrollReveal>
            <ScrollReveal variant={fadeUp} delay={0.25} className="about-image-wrap">
              <img src={imgMe} alt="Emmanuel Jacob C. Ellana" className="about-image" />
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

          <motion.div
            className="bento-grid"
            variants={staggerContainer(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
          >
            {/* Row 1 */}
            <BentoCard className="bento-card--analytics">
              <div className="bento-card__header">
                <CategoryIcon iconName="analytics" />
                <h3 className="bento-card__title">Data &amp; Analytics</h3>
              </div>
              <p className="bento-card__desc">
                Transforming raw data into actionable insights through analysis, cleaning, and visualization using Python and SQL. Focused on building structured datasets and meaningful interpretations that support decision-making.
              </p>
              <AnimatedChips skills={['Python', 'SQL', 'Excel', 'Jupyter', 'Tableau', 'PowerBI']} />
            </BentoCard>

            <BentoCard className="bento-card--dev">
              <div className="bento-card__header">
                <CategoryIcon iconName="code" />
                <h3 className="bento-card__title">Development</h3>
              </div>
              <p className="bento-card__desc">
                Building responsive and scalable web and software applications using modern frameworks and programming languages. Focused on clean code, performance, and user-centered design.
              </p>
              <AnimatedChips skills={['HTML', 'CSS', 'JavaScript', 'React', 'React Native', 'C#', 'C++', 'Python', 'ASP.NET', 'Laravel', 'Bootstrap', 'Tailwind']} />
            </BentoCard>

            {/* Row 2 */}
            <BentoCard className="bento-card--tools">
              <div className="bento-card__header">
                <CategoryIcon iconName="build" />
                <h3 className="bento-card__title">Tools &amp; Platforms</h3>
              </div>
              <p className="bento-card__desc">
                Leveraging industry-standard tools for version control, development workflow, design, and deployment. Skilled in collaborating and building efficiently using modern developer ecosystems.
              </p>
              <AnimatedChips skills={['Git', 'GitHub', 'VS Code', 'Figma', 'N8N', 'Canva', 'Vite']} />
            </BentoCard>

            <BentoCard className="bento-card--professional">
              <div className="bento-card__header">
                <CategoryIcon iconName="groups" />
                <h3 className="bento-card__title">Professional Skills</h3>
              </div>
              <p className="bento-card__desc">
                Strong foundation in collaboration, critical thinking, and communication. Able to adapt quickly, solve complex problems, and contribute effectively in team-driven environments.
              </p>
              <AnimatedChips skills={[
                { name: 'Team Work', icon: 'groups' },
                { name: 'Communication', icon: 'chat' },
                { name: 'Creativity', icon: 'lightbulb' },
                { name: 'Productivity', icon: 'speed' },
                { name: 'Project Management', icon: 'task' },
                { name: 'Problem Solving', icon: 'psychology' },
                { name: 'Adaptability', icon: 'change_circle' },
              ]} />
            </BentoCard>
          </motion.div>
        </div>
      </section>

      {/* ── Projects Section ──────────────────────────────── */}
      <section id="projects" className="section projects">
        <div className="container projects-container">
          <ScrollReveal variant={fadeUp}>
            <h2 className="title-accent">My Projects</h2>
          </ScrollReveal>
          <ScrollReveal variant={fadeIn} delay={0.12}>
            <p className="projects-subtitle">Hover or tap to see details</p>
          </ScrollReveal>

          {/* Projects grid — 5 columns × 2 rows, staggered reveal */}
          <motion.div
            className="projects-grid"
            variants={staggerContainer(0.07)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.05 }}
          >
            {[
              {
                img: imgN8BLeadGen,
                alt: "N8N B2B Lead Gen",
                title: "N8N-B2B Lead Gen",
                desc: "An AI-powered B2B lead generation system that automates lead discovery, enrichment, and categorization using ETL pipelines, multiple data sources, and intelligent data processing.",
                githubHref: "#",
                canvaHref: "#",
              },
              {
                img: imgAnimalTraceability,
                alt: "Animal Disease Traceability System",
                title: "Animal Disease Traceability",
                desc: "A permissioned blockchain, real-time data analytics, and machine learning framework built with Hyperledger Fabric and React to provide secure, tamper-proof animal disease traceability for municipal livestock management.",
                githubHref: "#",
                canvaHref: "#",
              },
              {
                img: imgParkPeek,
                alt: "ParkPeek",
                title: "ParkPeek",
                desc: "A mobile-app based parking occupancy system featuring a peak-volume predictive model powered by clustering and time-series analysis.",
                githubHref: "#",
                canvaHref: "#",
              },
              {
                img: imgHeartDisease,
                alt: "Heart Disease Prediction",
                title: "Heart Disease Prediction",
                desc: "An AI-powered heart disease risk prediction system that uses neural networks and K-Means clustering to classify patients into Low, Mid, or High Risk through web and Android applications.",
                githubHref: "#",
                canvaHref: "#",
              },
              {
                img: imgDineDash,
                alt: "DineDash",
                title: "DineDash",
                desc: "A full-stack online food ordering platform with user authentication, shopping cart, order tracking, and an admin dashboard for managing inventory, orders, and sales.",
                githubHref: "#",
                canvaHref: "#",
              },
              {
                img: imgMushroom,
                alt: "Mushroom Dataset",
                title: "Mushroom Dataset",
                desc: "A data mining project that uses Information Gain to evaluate feature importance and optimize decision tree classification on a mushroom dataset.",
                githubHref: "#",
                canvaHref: "#",
              },
              {
                img: imgCommuteSync,
                alt: "CommuteSync",
                title: "CommuteSync",
                desc: "A technopreneurship prototype for a smart commuting platform that leverages data analytics to provide real-time traffic updates, optimized routes, ride-hailing integration, online payments, and seat reservations.",
                githubHref: "#",
                canvaHref: "#",
              },
              {
                img: imgMerchQuest,
                alt: "MerchQuest",
                title: "MerchQuest",
                desc: "A UI/UX design project for a virtual shopping assistant that simplifies product discovery with personalized recommendations, price comparisons, and an intuitive shopping experience.",
                githubHref: "#",
                canvaHref: "#",
              },
              {
                img: imgJeepneyRush,
                alt: "JeepneyRush",
                title: "JeepneyRush",
                desc: "A top-down, immersive C# game where you transport people across a zombie-infested city.",
                githubHref: "#",
                canvaHref: "#",
              },
              {
                img: imgFourPics1Word,
                alt: "4Pics1Word",
                title: "4Pics1Word",
                desc: "Classic 4 Pics 1 Word game built with Python Tkinter and OOP principles.",
                githubHref: "#",
                canvaHref: "#",
              },
            ].map((project) => (
              <motion.div
                key={project.title}
                className="project-card"
                variants={projectCard}
                whileHover={{
                  y: -10,
                  scale: 1.02,
                  boxShadow: '0 24px 52px rgba(0,0,0,0.20)',
                  transition: { duration: 0.32, ease: [0.22, 1, 0.36, 1] },
                }}
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

                {/* ── Hover overlay (title + desc) ── */}
                <div className="project-overlay">
                  <div className="project-overlay__content">
                    <h3>{project.title}</h3>
                    <p>{project.desc}</p>
                  </div>
                </div>

                {/* ── Always-visible footer: title + icons ── */}
                <div className="project-card__footer">
                  <span className="project-card__title">{project.title}</span>
                  <div className="project-card__icons">
                    {/* GitHub — add href later */}
                    <motion.a
                      href={project.githubHref}
                      aria-label={`${project.title} on GitHub`}
                      className="project-icon-btn"
                      whileHover={{
                        y: -3,
                        scale: 1.15,
                        transition: { duration: 0.2, ease: [0.22, 1, 0.36, 1] },
                      }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <FontAwesomeIcon icon={faGithub} />
                    </motion.a>
                    {/* Canva — add href later */}
                    <motion.a
                      href={project.canvaHref}
                      aria-label={`${project.title} on Canva`}
                      className="project-icon-btn"
                      whileHover={{
                        y: -3,
                        scale: 1.15,
                        transition: { duration: 0.2, ease: [0.22, 1, 0.36, 1] },
                      }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <FontAwesomeIcon icon={faPalette} />
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
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
            <motion.div
              className="certs-track"
              variants={staggerContainer(0.1)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
            >
              {certificatesData.map((cert, index) => (
                <motion.article
                  className="cert-card"
                  key={index}
                  variants={certCard}
                  whileHover={{
                    y: -8,
                    boxShadow: '0 12px 32px rgba(0,0,0,0.09), 0 20px 44px rgba(0,0,0,0.10)',
                    transition: { duration: 0.28, ease: [0.22, 1, 0.36, 1] },
                  }}
                >
                  <div className="cert-card__image-wrap">
                    <motion.img
                      src={cert.image}
                      alt={cert.title}
                      loading="lazy"
                      whileHover={{
                        scale: 1.06,
                        transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
                      }}
                      style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                    />
                  </div>
                  <div className="cert-card__body">
                    <div>
                      <h3 className="cert-card__title" title={cert.title}>{cert.title}</h3>
                      <p className="cert-card__meta">
                        ID: <span className="cert-card__id">{cert.id}</span> &bull; {cert.issuer}
                      </p>
                    </div>
                    <div className="cert-card__actions">
                      <motion.a
                        href={cert.verifyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cert-btn cert-btn--primary"
                        whileHover={{ y: -2, transition: { duration: 0.2 } }}
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
                        whileHover={{ y: -2, transition: { duration: 0.2 } }}
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
          <ScrollReveal variant={fadeUp}>
            <h2 className="title-accent">Contact Me</h2>
          </ScrollReveal>

          <ScrollReveal variant={fadeUp} delay={0.12}>
            <p className="contact-intro">
              I'm always open to new opportunities, collaborations, or just a friendly chat.
              Reach out via email/phone!
            </p>
          </ScrollReveal>

          <motion.div
            className="contact-info"
            variants={staggerContainer(0.12)}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
          >
            <motion.p variants={fadeUp}>
              <FontAwesomeIcon icon={faPaperPlane} className="contact-icon" />
              <motion.a
                href="mailto:emman.ellana@gmail.com"
                whileHover={{ x: 4, transition: { duration: 0.2 } }}
              >
                emman.ellana@gmail.com
              </motion.a>
            </motion.p>

            <motion.p variants={fadeUp}>
              <FontAwesomeIcon icon={faPhone} className="contact-icon" />
              <motion.a
                href="tel:+639291046945"
                whileHover={{ x: 4, transition: { duration: 0.2 } }}
              >
                0929 104 6945
              </motion.a>
            </motion.p>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
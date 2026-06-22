import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// ── SOLID icons ────────────────────────────────────────
import {
  faPaperPlane,
  faPhone,
  faArrowUpRightFromSquare,
} from '@fortawesome/free-solid-svg-icons';

// ── BRAND icons ────────────────────────────────────────
import {
  faGithub,
  faLinkedinIn,
  faInstagram,
  faFacebook,
  faTwitter
} from '@fortawesome/free-brands-svg-icons';

// Project images
import myGame from '../assets/images/myGame.png';
import merchQuest from '../assets/images/merchqueststts.png';
import fourPeks from '../assets/images/4peks.png';
import paws from '../assets/images/paws.png';

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

export default function Home() {
  return (
    <div id="home">
      {/* Hero / Introduction Section */}
      <section className="hero" id="home">
        <div className="container">
          <h2>Hello,</h2>
          <h1 className="title-accent">I'm Emmanuel Ellana</h1>
          <p className="tagline">Aspiring Data/Business Analyst</p>
          <p className="subtitle">
            4th Year Computer Science Student, Specializing in Data Science & Analytics from<br />
            Mapúa Malayan Colleges Laguna
          </p>

          {/* All social icons in hero */}
          <div className="hero-social">
            <a href="https://www.instagram.com/ej.ellana/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FontAwesomeIcon icon={faInstagram} />
            </a>

            <a href="https://www.facebook.com/ejellana17" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FontAwesomeIcon icon={faFacebook} />
            </a>

            <a href="https://twitter.com/ejellana_" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <FontAwesomeIcon icon={faTwitter} />
            </a>

            <a href="https://github.com/ejellana" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FontAwesomeIcon icon={faGithub} />
            </a>

            <a href="https://www.linkedin.com/in/emmanuel-ellana-ba8a9a182/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="section about">
        <div className="container">
          <h2 className="title-accent">About Me</h2>

          <p>
            I am Emmanuel Jacob C. Ellana, a Bachelor of Science in Computer Science student specializing in Data Science and Analytics at Mapúa Malayan Colleges Laguna (2022–Present), and a consistent Dean’s Lister and Iskolar ng Laguna scholar.
            My experience includes developing projects in machine learning, full-stack development, and data analytics such as blockchain-based systems, predictive models, and web applications.
            I am actively involved in the Junior Philippine Computer Society (JPCS) and have participated in hackathons and competitions including the ASEAN AI Hackathon and BPI DataWave.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section skills">
        <div className="container">
          <h2 className="title-accent">My Skills</h2>

          <div className="bento-grid">

            {/* Data & Analytics */}
            <div className="bento-card bento-card--analytics">
              <div className="bento-card__header">
                <span className="material-symbols-outlined bento-card__icon">
                  analytics
                </span>
                <h3 className="bento-card__title">Data &amp; Analytics</h3>
              </div>

              <p className="bento-card__desc">
                Transforming raw data into actionable insights through analysis, cleaning, and visualization using Python and SQL. Focused on building structured datasets and meaningful interpretations that support decision-making.
              </p>

              <div className="skill-chips">
                {['Python', 'SQL', 'Excel', 'Data Analysis', 'Jupyter'].map(skill => (
                  <span key={skill} className="chip">{skill}</span>
                ))}
              </div>
            </div>

            {/* Development */}
            <div className="bento-card bento-card--dev">
              <div className="bento-card__header">
                <span className="material-symbols-outlined bento-card__icon">
                  code
                </span>
                <h3 className="bento-card__title">Development</h3>
              </div>

              <p className="bento-card__desc">
                Building responsive and scalable web and software applications using modern frameworks and programming languages. Focused on clean code, performance, and user-centered design.
              </p>

              <div className="skill-chips">
                {['HTML', 'CSS', 'JavaScript', 'React', 'C#', 'C++', 'Python', 'ASP.NET'].map(skill => (
                  <span key={skill} className="chip">{skill}</span>
                ))}
              </div>
            </div>

            {/* Tools & Platforms */}
            <div className="bento-card bento-card--tools">
              <div className="bento-card__header">
                <span className="material-symbols-outlined bento-card__icon">
                  build
                </span>
                <h3 className="bento-card__title">Tools &amp; Platforms</h3>
              </div>

              <p className="bento-card__desc">
                Leveraging industry-standard tools for version control, development workflow, design, and deployment. Skilled in collaborating and building efficiently using modern developer ecosystems.
              </p>

              <div className="skill-chips">
                {['Git', 'GitHub', 'VS Code', 'Figma', 'MS Access', 'Canva', 'Vite'].map(skill => (
                  <span key={skill} className="chip">{skill}</span>
                ))}
              </div>
            </div>

            {/* Professional Skills */}
            <div className="bento-card bento-card--professional">
              <div className="bento-card__header">
                <span className="material-symbols-outlined bento-card__icon">
                  groups
                </span>
                <h3 className="bento-card__title">Professional Skills</h3>
              </div>

              <p className="bento-card__desc">
                Strong foundation in collaboration, critical thinking, and communication. Able to adapt quickly, solve complex problems, and contribute effectively in team-driven environments.
              </p>

              <div className="skill-chips">
                {['Team Work', 'Communication', 'Creativity', 'Productivity', 'Project Management', 'Problem Solving', 'Adaptability'].map(skill => (
                  <span key={skill} className="chip">{skill}</span>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section projects">
        <div className="container">
          <h2 className="title-accent">My Projects</h2>
          <p className="projects-subtitle">Hover or tap to see details • Scroll horizontally</p>

          <div className="projects-scroller">
            <div className="projects-track">
              <div className="project-card">
                <img src={myGame} alt="Jeepney Rush: Zombie Escape" loading="lazy" />
                <div className="project-overlay">
                  <h3>Jeepney Rush: Zombie Escape</h3>
                  <p>A top-down, immersive C# game where you transport people across a zombie-infested city.</p>
                  <a
                    href="https://github.com/ejellana/Jeepney-Rush-Zombie-Escape"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="View on GitHub"
                  >
                    <FontAwesomeIcon icon={faGithub} />
                  </a>
                </div>
              </div>

              <div className="project-card">
                <img src={merchQuest} alt="MerchQuest" loading="lazy" />
                <div className="project-overlay">
                  <h3>MerchQuest</h3>
                  <p>Web-based e-commerce prototype with a virtual shopping assistant to guide you step-by-step.</p>
                  <a
                    href="https://www.canva.com/design/DAFi-0G04V8/pyTdqk4jCBj3CW69XDRVHQ/edit?utm_content=DAFi-0G04V8&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="View Project"
                  >
                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                  </a>
                </div>
              </div>

              <div className="project-card">
                <img src={fourPeks} alt="4Pics1Word" loading="lazy" />
                <div className="project-overlay">
                  <h3>4Pics1Word</h3>
                  <p>Classic 4 Pics 1 Word game built with Python Tkinter and OOP principles.</p>
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="View on GitHub"
                  >
                    <FontAwesomeIcon icon={faGithub} />
                  </a>
                </div>
              </div>

              <div className="project-card">
                <img
                  src="https://img.freepik.com/free-vector/twitter-app-new-logo-x-black-background_1017-45425.jpg"
                  alt="Twitter Clone"
                  loading="lazy"
                />
                <div className="project-overlay">
                  <h3>Twitter Clone</h3>
                  <p>A dynamic platform mimicking Twitter – browse, tweet, follow users, and stay updated.</p>
                  <a
                    href="https://github.com/ejellana/Twitter-Clone"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="View on GitHub"
                  >
                    <FontAwesomeIcon icon={faGithub} />
                  </a>
                </div>
              </div>

              <div className="project-card">
                <img src={paws} alt="PAWS" loading="lazy" />
                <div className="project-overlay">
                  <h3>PAWS</h3>
                  <p>An ASP.NET website for Animal Welfare Society volunteer registration with MS Access database.</p>
                  <a
                    href="https://github.com/ejellana/PAWS-Animal-Rehabilitation-Center"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="View on GitHub"
                  >
                    <FontAwesomeIcon icon={faGithub} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section id="certificates" className="section certificates">
        <div className="container">
          <h2 className="title-accent">My Certificates</h2>
          <p className="certificates-subtitle">
            Verified achievements and certifications in data, development, and technology.
          </p>

          <div className="certs-scroller">
            <div className="certs-track">
              {certificatesData.map((cert, index) => (
                <article className="cert-card" key={index}>
                  <div className="cert-card__image-wrap">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      loading="lazy"
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
                      <a href={cert.verifyUrl} target="_blank" rel="noopener noreferrer" className="cert-btn cert-btn--primary">
                        <span className="material-symbols-outlined" style={{ fontSize: '14px' }}>verified</span>
                        Verify
                      </a>
                      <a href={cert.viewUrl} target="_blank" rel="noopener noreferrer" className="cert-btn cert-btn--outline">
                        View
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section contact">
        <div className="container">
          <h2 className="title-accent">Contact Me</h2>
          <p className="contact-intro">
            I'm always open to new opportunities, collaborations, or just a friendly chat.
            Reach out via email/phone!
          </p>

          <div className="contact-info">
            <p>
              <FontAwesomeIcon icon={faPaperPlane} className="contact-icon" />
              <a href="mailto:emman.ellana@gmail.com">emman.ellana@gmail.com</a>
            </p>
            <p>
              <FontAwesomeIcon icon={faPhone} className="contact-icon" />
              <a href="tel:+639291046945">0929 104 6945</a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
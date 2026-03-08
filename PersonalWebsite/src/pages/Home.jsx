import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// ── SOLID icons ────────────────────────────────────────
import {
  faPaperPlane,
  faPhone,
  faArrowUpRightFromSquare,
  faUser,
  faEnvelope,
  faCommentDots
} from '@fortawesome/free-solid-svg-icons';

// ── BRAND icons ────────────────────────────────────────
import {
  faGithub,
  faLinkedinIn,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';

// Project images
import myGame from '../assets/images/myGame.png';
import merchQuest from '../assets/images/merchqueststts.png';
import fourPeks from '../assets/images/4peks.png';
import paws from '../assets/images/paws.png';

export default function Home() {
  return (
    <div id="home">
      {/* Hero / Introduction Section */}
      <section className="hero" id="home">
        <div className="container">
          <h2>Hello,</h2>
          <h1>I'm Emmanuel</h1>
          <p className="tagline">Aspiring Web Developer/Designer</p>
          <p className="subtitle">
            2nd Year Computer Science Student from<br />
            Mapua Malayan Colleges Laguna
          </p>

          {/* Social icons in hero */}
          <div className="hero-social">
            <a
              href="https://www.instagram.com/ej.ellana/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
            <a
              href="https://www.linkedin.com/in/YOUR-REAL-LINKEDIN-USERNAME/" // ← CHANGE THIS to your actual profile
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FontAwesomeIcon icon={faLinkedinIn} size="2x" />
            </a>
          </div>

          <div className="hero-buttons">
            <a href="#projects" className="btn primary">View Projects</a>
            <a href="#contact" className="btn outline">Get in Touch</a>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="section about">
        <div className="container">
          <h2>About Me</h2>
          <p>
            I'm Emmanuel Jacob C. Ellana, and I'm studying to become a Web Designer/Developer at Mapua Malayan Colleges Laguna.
            I really like working with computers and exploring the world of technology.
            Outside of my studies, I enjoy playing basketball, video games, driving around, and exploring beautiful places.
            I believe that combining my love for technology with these experiences helps me grow in both my career and personal life.
          </p>
        </div>
      </section>

      {/* Skills Section */}
        <section id="skills" className="section skills">
        <div className="container">
            <h2>My Skills</h2>

            <div className="skills-wrapper">
            <div className="skill-group">
                <h3>Technical Skills</h3>
                <div className="skill-list">
                <div className="skill-item" style={{ '--progress': '75%' }}>
                    <div className="skill-header">
                    <span>Python</span>
                    <span className="percent">75%</span>
                    </div>
                    <div className="progress-bar">
                    <div className="progress-fill"></div>
                    </div>
                </div>

                <div className="skill-item" style={{ '--progress': '70%' }}>
                    <div className="skill-header">
                    <span>C#</span>
                    <span className="percent">70%</span>
                    </div>
                    <div className="progress-bar">
                    <div className="progress-fill"></div>
                    </div>
                </div>

                <div className="skill-item" style={{ '--progress': '50%' }}>
                    <div className="skill-header">
                    <span>C++</span>
                    <span className="percent">50%</span>
                    </div>
                    <div className="progress-bar">
                    <div className="progress-fill"></div>
                    </div>
                </div>

                <div className="skill-item" style={{ '--progress': '70%' }}>
                    <div className="skill-header">
                    <span>HTML</span>
                    <span className="percent">70%</span>
                    </div>
                    <div className="progress-bar">
                    <div className="progress-fill"></div>
                    </div>
                </div>

                <div className="skill-item" style={{ '--progress': '60%' }}>
                    <div className="skill-header">
                    <span>CSS</span>
                    <span className="percent">60%</span>
                    </div>
                    <div className="progress-bar">
                    <div className="progress-fill"></div>
                    </div>
                </div>
                </div>
            </div>

            {/* Professional Skills – same structure */}
            <div className="skill-group">
                <h3>Professional Skills</h3>
                <div className="skill-list">
                <div className="skill-item" style={{ '--progress': '85%' }}>
                    <div className="skill-header">
                    <span>Team Work</span>
                    <span className="percent">85%</span>
                    </div>
                    <div className="progress-bar">
                    <div className="progress-fill"></div>
                    </div>
                </div>

                {/* Repeat for Creativity 75%, Productivity 75%, Communication 85%, Project Management 80% */}
                <div className="skill-item" style={{ '--progress': '75%' }}>
                    <div className="skill-header"><span>Creativity</span><span className="percent">75%</span></div>
                    <div className="progress-bar"><div className="progress-fill"></div></div>
                </div>
                <div className="skill-item" style={{ '--progress': '75%' }}>
                    <div className="skill-header"><span>Productivity</span><span className="percent">75%</span></div>
                    <div className="progress-bar"><div className="progress-fill"></div></div>
                </div>
                <div className="skill-item" style={{ '--progress': '85%' }}>
                    <div className="skill-header"><span>Communication</span><span className="percent">85%</span></div>
                    <div className="progress-bar"><div className="progress-fill"></div></div>
                </div>
                <div className="skill-item" style={{ '--progress': '80%' }}>
                    <div className="skill-header"><span>Project Management</span><span className="percent">80%</span></div>
                    <div className="progress-bar"><div className="progress-fill"></div></div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>

      {/* Projects Section */}
        <section id="projects" className="section projects">
        <div className="container">
            <h2>My Projects</h2>
            <p className="projects-subtitle">Hover or tap to see details • Scroll horizontally</p>

            <div className="projects-scroller">
            <div className="projects-track">

                {/* Project 1 */}
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

                {/* Project 2 */}
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

                {/* Project 3 */}
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

                {/* Project 4 */}
                <div className="project-card">
                <img 
                    src="https://img.freepik.com/free-vector/twitter-app-new-logo-x-black-background_1017-45425.jpg" 
                    alt="Twitter Clone" 
                    loading="lazy" 
                />
                <div className="project-overlay">
                    <h3>Twitter Clone</h3>
                    <p>Dynamic platform mimicking Twitter – browse, tweet, follow users, and stay updated.</p>
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

                {/* Project 5 */}
                <div className="project-card">
                <img src={paws} alt="PAWS" loading="lazy" />
                <div className="project-overlay">
                    <h3>PAWS</h3>
                    <p>ASP.NET website for Animal Welfare Society volunteer registration with MS Access database.</p>
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

      {/* Contact Section */}
      <section id="contact" className="section contact">
        <div className="container">
          <h2>Contact Me</h2>
          <p className="contact-intro">
            I'm always open to new opportunities, collaborations, or just a friendly chat. 
            Reach out using the form below or via email/phone!
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

          <form className="contact-form">
            <div className="form-group">
              <FontAwesomeIcon icon={faUser} className="form-icon" />
              <input type="text" placeholder="Your Name" required />
            </div>
            <div className="form-group">
              <FontAwesomeIcon icon={faEnvelope} className="form-icon" />
              <input type="email" placeholder="Your Email" required />
            </div>
            <div className="form-group">
              <FontAwesomeIcon icon={faCommentDots} className="form-icon" />
              <textarea placeholder="Your Message" rows="6" required></textarea>
            </div>
            <button type="submit" className="btn primary">Send Message</button>
          </form>
        </div>
      </section>
    </div>
  );
}
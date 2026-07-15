import { motion } from 'framer-motion';
import PracticumHeader from './PracticumHeader';
import PracticumFooter from './PracticumFooter';
import NatureCards from './NatureCards';

// images
import introImg   from '../assets/images/Practicum/introduction.jpeg';
import companyImg from '../assets/images/Practicum/company.jpeg';
import natureImg  from '../assets/images/Practicum/nature-of-work.jpeg';

// Placeholder image component with full ProfileCard styling from Home.jsx
function ImagePlaceholder({ src, alt }) {
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
      {src ? (
        <img
          src={src}
          alt={alt}
          className="profile-card__image"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      ) : (
        <div
          className="profile-card__image"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'var(--bg-tertiary)',
            border: '2px dashed var(--border)',
            color: 'var(--text-muted)',
            fontSize: '0.9rem',
            fontWeight: 500,
          }}
        >
          Image coming soon
        </div>
      )}

      {/* Top-right badge — programming */}
      <motion.div
        className="profile-badge profile-badge--top"
        initial={{ opacity: 0, scale: 0.6, y: 12 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
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
        viewport={{ once: false, amount: 0.3 }}
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

// Slide-in variants for content sections
// Reduced offset (24px vs 56px) — more refined, less theatrical.
const slideInLeft = {
  hidden:  { opacity: 0, x: -24 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const slideInRight = {
  hidden:  { opacity: 0, x: 24 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function PracticumPage() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      fontFamily: '"Poppins", sans-serif',
      lineHeight: 1.6,
      color: 'var(--text-primary)',
      backgroundColor: 'var(--bg-primary)',
    }}>
      <PracticumHeader />
      
      <main style={{ flex: 1 }}>
        
        {/* ── HERO SECTION ─────────────────────────────────────── */}
        <section className="hero" id="hero">
          <div className="container">
            <div className="hero-content">
              {/* Main headline */}
              <motion.h1
                className="title-accent"
                initial={{ opacity: 0, y: 36 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: 0.25 }}
              >
                CS Practicum
              </motion.h1>

              {/* Subtitle — company */}
              <motion.p
                className="tagline tagline--large"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.45 }}
              >
                PurpleBug Inc.
              </motion.p>

              {/* Date range */}
              <motion.p
                className="tagline"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.55 }}
              >
                May – August 2026
              </motion.p>

              {/* Download Report button */}
              <motion.div
                className="hero-actions"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.75 }}
              >
                <motion.a
                  href="#"
                  aria-label="Download Report"
                  className="hero-cv-btn"
                  whileHover={{
                    y: -6,
                    scale: 1.03,
                    borderColor: '#0a0a0a',
                    boxShadow: '0 18px 38px rgba(0, 0, 0, 0.12)',
                    transition: { duration: 0.3, ease: [0.23, 1, 0.32, 1] },
                  }}
                  whileTap={{ scale: 0.97 }}
                >
                  Download Report
                </motion.a>
              </motion.div>

            </div>
          </div>
        </section>

        {/* ── INTRODUCTION SECTION ─────────────────────────────── */}
        <section id="introduction" className="section about">
          <div className="container">
            <div className="about-content">

              {/* Left column — text */}
              <motion.div
                className="about-text-col"
                variants={slideInLeft}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                <h2 className="title-accent about-heading">Introduction</h2>
                <p className="about-paragraph">
                  My On-the-Job Training (OJT) at PurpleBug Inc. has provided me with valuable hands-on experience in applying the knowledge and skills I have learned in my Computer Science program. Throughout my internship, I was given opportunities to work on real-world projects involving software development, technical documentation, website migration, and business process automation. These experiences allowed me to improve both my technical and professional skills while working in a collaborative environment. The internship also helped me understand how technology is applied to solve business challenges and deliver digital solutions for clients.
                </p>
              </motion.div>

              {/* Right column — image placeholder */}
              <motion.div
                className="about-image-col"
                variants={slideInRight}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
              >
                <ImagePlaceholder src={introImg}   alt="Introduction" />
              </motion.div>

            </div>
          </div>
        </section>

        {/* ── COMPANY SECTION (REVERSED LAYOUT) ────────────────── */}
        <section id="company" className="section about" style={{ 
          background: 'linear-gradient(180deg, var(--bg-primary) 0%, var(--bg-secondary) 100%)' 
        }}>
          <div className="container">
            <div className="about-content">

              {/* Left column — image placeholder */}
              <motion.div
                className="about-image-col"
                variants={slideInLeft}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                <ImagePlaceholder src={companyImg} alt="Company" />
              </motion.div>

              {/* Right column — text */}
              <motion.div
                className="about-text-col"
                variants={slideInRight}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
              >
                <h2 className="title-accent about-heading">Company</h2>
                <p className="about-paragraph">
                  PurpleBug Inc. is a digital marketing company that provides innovative digital solutions to help businesses strengthen their online presence and improve their operations. In addition to its digital marketing services, the company develops websites, B2B Software-as-a-Service (SaaS) solutions, AI-powered chatbot systems such as Smicos, and business automation solutions. The company serves a variety of clients by combining marketing strategies with modern technologies to deliver efficient and user-friendly digital products. Through these services, PurpleBug Inc. continues to support organizations in their digital transformation initiatives.
                </p>
              </motion.div>

            </div>
          </div>
        </section>

        {/* ── NATURE SECTION ───────────────────────────────────── */}
        <section id="nature" className="section about" style={{ 
          background: 'linear-gradient(180deg, var(--bg-secondary) 0%, var(--bg-tertiary) 100%)' 
        }}>
          <div className="container">
            <div className="about-content">

              {/* Left column — text */}
              <motion.div
                className="about-text-col"
                variants={slideInLeft}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                <h2 className="title-accent about-heading">Nature of Work</h2>
                <p className="about-paragraph">
                  As an IT Business Analyst Intern, I was assigned to various technical and documentation-related tasks that supported the company's software development projects. My primary responsibility was developing an AI-powered B2B Lead Generation System using n8n, where I also designed and developed a React.js analytics dashboard to visualize the collected lead data after proposing the enhancement to my supervisor. Aside from my main project, I worked on Customer Solution Documents (CSD), User Training documentation, website migration, content inventory, web scraping, and Smicos chatbot workflow documentation for different client projects. These responsibilities helped me gain practical experience in software development, technical writing, data organization, and business analysis.
                </p>
              </motion.div>

              {/* Right column — image placeholder */}
              <motion.div
                className="about-image-col"
                variants={slideInRight}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
              >
                <ImagePlaceholder src={natureImg} alt="Nature of Work" />
              </motion.div>

            </div>

            {/* ── Nature Cards — below the two-column block ── */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.1 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              style={{ marginTop: '4rem' }}
            >
              <p style={{
                textAlign: 'center',
                color: 'var(--text-muted)',
                fontSize: '0.9rem',
                marginBottom: '2rem',
                letterSpacing: '0.02em',
              }}>
                Key technical areas I contributed to
              </p>
              <NatureCards />
            </motion.div>

          </div>
        </section>

        {/* ── REFLECTION SECTION ─────────────────────────────── */}
        <section
          id="reflection"
          className="section"
          style={{
            background: 'linear-gradient(180deg, var(--bg-tertiary) 0%, var(--bg-secondary) 100%)',
          }}
        >
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              style={{ maxWidth: '800px', margin: '0 auto' }}
            >
              <h2
                className="title-accent"
                style={{
                  fontSize: 'clamp(2.2rem, 3.4vw, 3.2rem)',
                  marginBottom: '2rem',
                  textAlign: 'center',
                }}
              >
                Reflection
              </h2>

              <p
                className="about-paragraph"
                style={{ textAlign: 'left', marginBottom: '1.5rem' }}
              >
                My internship at PurpleBug Inc. allowed me to apply the knowledge and skills I learned in school to real-world projects. Working on the n8n B2B Lead Generation System, React.js dashboard, Smicos chatbot workflows, and technical documentation gave me valuable hands-on experience in the IT industry.
              </p>

              <p
                className="about-paragraph"
                style={{ textAlign: 'left', marginBottom: '1.5rem' }}
              >
                Throughout my internship, I learned how to use new technologies, create technical documentation, and collaborate with my supervisors and teammates. I also improved my problem-solving, communication, time management, and analytical skills while completing different tasks and meeting project deadlines.
              </p>

              <p
                className="about-paragraph"
                style={{ textAlign: 'left' }}
              >
                Overall, this internship helped me become more confident in my technical abilities and prepared me for my future career in software development and business analysis. I am grateful to PurpleBug Inc. for providing a supportive environment where I was able to learn, grow, and gain meaningful industry experience.
              </p>
            </motion.div>
          </div>
        </section>
      </main>

      <PracticumFooter />
    </div>
  );
}
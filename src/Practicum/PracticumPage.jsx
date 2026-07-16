import { motion } from 'framer-motion';
import PracticumHeader from './PracticumHeader';
import PracticumFooter from './PracticumFooter';
import NatureCards from './NatureCards';

import companyImg from '../assets/images/Practicum/company.jpeg';
import reportPDF from '../assets/PDFs/ELLANA-CS199F-REPORT.pdf';

// ─── TOKENS ───────────────────────────────────────────────────
const ease = [0.22, 1, 0.36, 1];

// ─── MOTION PRESETS ──────────────────────────────────────────
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: false, amount: 0.25 },
  transition: { duration: 0.6, ease, delay },
});

const slideInLeft = {
  hidden: { opacity: 0, x: -28 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.65, ease } },
};
const slideInRight = {
  hidden: { opacity: 0, x: 28 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.65, ease } },
};

// ─── INTRO INFO CARD ─────────────────────────────────────────
const infoRows = [
  { icon: 'domain', label: 'Industry', value: 'Digital Marketing & IT Consulting' },
  { icon: 'folder_open', label: 'Department', value: 'IT Development' },
  { icon: 'person', label: 'Role', value: 'IT Business Analyst Intern' },
  { icon: 'schedule', label: 'Duration', value: '480 Hours' },
];

function IntroInfoCard() {
  return (
    <motion.div
      style={{
        width: '100%',
        borderRadius: '1.25rem',
        border: '1px solid var(--border)',
        background: 'var(--bg-secondary)',
        overflow: 'hidden',
        boxShadow: '0 2px 16px rgba(0,0,0,0.05)',
      }}
      whileHover={{
        y: -5,
        boxShadow: '0 12px 36px rgba(0,0,0,0.09)',
        transition: { duration: 0.35, ease },
      }}
    >
      {infoRows.map((row, i) => (
        <motion.div
          key={row.label}
          initial={{ opacity: 0, x: 18 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.45, delay: 0.12 + i * 0.09, ease }}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            padding: '1.15rem 1.5rem',
            borderBottom: i < infoRows.length - 1
              ? '1px solid var(--border)'
              : 'none',
          }}
        >
          {/* Icon chip */}
          <div style={{
            width: '2.25rem',
            height: '2.25rem',
            borderRadius: '0.65rem',
            background: 'var(--bg-tertiary)',
            border: '1px solid var(--border)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
          }}>
            <span
              className="material-symbols-outlined"
              style={{ fontSize: '1.05rem', color: 'var(--text-secondary)' }}
            >
              {row.icon}
            </span>
          </div>

          {/* Text */}
          <div style={{ minWidth: 0 }}>
            <p style={{
              margin: 0,
              fontSize: '0.65rem',
              fontWeight: 700,
              letterSpacing: '0.1em',
              color: 'var(--text-muted)',
              textTransform: 'uppercase',
              marginBottom: '0.18rem',
            }}>
              {row.label}
            </p>
            <p style={{
              margin: 0,
              fontSize: '0.9rem',
              fontWeight: 600,
              color: 'var(--text-primary)',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}>
              {row.value}
            </p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}

// ─── IMAGE CARD ───────────────────────────────────────────────
function ImageCard({ src, alt }) {
  return (
    <motion.div
      className="profile-card"
      whileHover={{
        y: -5,
        boxShadow: '0 18px 42px rgba(0,0,0,0.12)',
        transition: { duration: 0.35, ease },
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

      <motion.div
        className="profile-badge profile-badge--top"
        initial={{ opacity: 0, scale: 0.6, y: 10 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.5, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
        whileHover={{ y: -4, rotate: -4, scale: 1.07, transition: { duration: 0.25, ease } }}
      >
        <span className="material-symbols-outlined">code</span>
      </motion.div>

      <motion.div
        className="profile-badge profile-badge--bottom"
        initial={{ opacity: 0, scale: 0.6, y: -10 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.5, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
        whileHover={{ y: -4, rotate: 4, scale: 1.07, transition: { duration: 0.25, ease } }}
      >
        <span className="material-symbols-outlined">database</span>
      </motion.div>
    </motion.div>
  );
}

// ─── SECTION LABEL ────────────────────────────────────────────
function SectionLabel({ children }) {
  return (
    <p style={{
      margin: '0 0 0.75rem',
      fontSize: '0.68rem',
      fontWeight: 700,
      letterSpacing: '0.13em',
      textTransform: 'uppercase',
      color: 'var(--text-muted)',
    }}>
      {children}
    </p>
  );
}

// ─── REFLECTION CARD ─────────────────────────────────────────
function ReflectionCard({ children }) {
  return (
    <div style={{
      borderLeft: '3px solid var(--border)',
      paddingLeft: '1.5rem',
      marginBottom: '1.75rem',
    }}>
      {children}
    </div>
  );
}

// ─── PAGE ─────────────────────────────────────────────────────
export default function PracticumPage() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      fontFamily: '"Poppins", sans-serif',
      lineHeight: 1.65,
      color: 'var(--text-primary)',
      backgroundColor: 'var(--bg-primary)',
    }}>
      <PracticumHeader />

      <main style={{ flex: 1 }}>

        {/* ── HERO ──────────────────────────────────────────── */}
        <section className="hero" id="hero">
          <div className="container">
            <div className="hero-content">

              <motion.h1
                className="title-accent"
                initial={{ opacity: 0, y: 32 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease, delay: 0.25 }}
              >
                CS Practicum
              </motion.h1>

              <motion.p
                className="tagline tagline--large"
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease, delay: 0.42 }}
              >
                PurpleBug Inc.
              </motion.p>

              <motion.p
                className="tagline"
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, ease, delay: 0.6 }}
              >
                May – August 2026
              </motion.p>

              <motion.div
                className="hero-actions"
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, ease, delay: 0.74 }}
              >
                <motion.a
                  href={reportPDF}
                  download="ELLANA-CS199F-REPORT.pdf"
                  aria-label="Download Report"
                  className="hero-cv-btn"
                  whileHover={{
                    y: -5,
                    scale: 1.025,
                    boxShadow: '0 16px 36px rgba(0,0,0,0.11)',
                    transition: { duration: 0.28, ease },
                  }}
                  whileTap={{ scale: 0.97 }}
                >
                  Download Report
                </motion.a>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── INTRODUCTION ──────────────────────────────────── */}
        <section id="introduction" className="section about">
          <div className="container">
            <div className="about-content">

              <motion.div
                className="about-text-col"
                variants={slideInLeft}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.25 }}
              >
                <SectionLabel>01 — Introduction</SectionLabel>
                <h2 className="title-accent about-heading">
                  First-hand experience in the field
                </h2>
                <p className="about-paragraph">
                  My On-the-Job Training at PurpleBug Inc. gave me direct exposure to the
                  full cycle of software delivery from gathering business requirements and
                  writing technical documentation to contributing to live product development.
                  Working alongside developers and project managers, I gained confidence in
                  translating complex technical ideas into actionable specifications and
                  learned how digital solutions are shaped to meet real client needs.
                </p>
              </motion.div>

              <motion.div
                className="about-image-col"
                variants={slideInRight}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.25 }}
                transition={{ delay: 0.1 }}
              >
                <IntroInfoCard />
              </motion.div>

            </div>
          </div>
        </section>

        {/* ── COMPANY ───────────────────────────────────────── */}
        <section
          id="company"
          className="section about"
          style={{
            background: 'linear-gradient(180deg, var(--bg-primary) 0%, var(--bg-secondary) 100%)',
          }}
        >
          <div className="container">
            <div className="about-content">

              <motion.div
                className="about-image-col"
                variants={slideInLeft}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.25 }}
              >
                <ImageCard src={companyImg} alt="PurpleBug Inc. office" />
              </motion.div>

              <motion.div
                className="about-text-col"
                variants={slideInRight}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.25 }}
                transition={{ delay: 0.1 }}
              >
                <SectionLabel>02 — Company</SectionLabel>
                <h2 className="title-accent about-heading">
                  About PurpleBug Inc.
                </h2>
                <p className="about-paragraph">
                  PurpleBug Inc. is a digital marketing and technology company that helps
                  businesses strengthen their online presence through a suite of modern
                  solutions from web development and B2B SaaS platforms to AI-powered
                  chatbot systems like Smicos and business process automation. By blending
                  marketing strategy with purpose-built technology, the company supports
                  organizations at every stage of their digital transformation.
                </p>
              </motion.div>

            </div>
          </div>
        </section>

        {/* ── NATURE OF WORK ────────────────────────────────── */}
        <section
          id="nature"
          className="section"
          style={{
            background: 'linear-gradient(180deg, var(--bg-secondary) 0%, var(--bg-tertiary) 100%)',
          }}
        >
          <div className="container">

            <motion.div
              {...fadeUp(0)}
              style={{ textAlign: 'center', marginBottom: '1rem' }}
            >
              <SectionLabel>03 — Nature of Work</SectionLabel>
            </motion.div>

            <motion.div
              {...fadeUp(0.08)}
              style={{ textAlign: 'center', marginBottom: '2rem' }}
            >
              <h2
                className="title-accent"
                style={{ fontSize: 'clamp(1.9rem, 3vw, 2.8rem)', marginBottom: '1.1rem' }}
              >
                What I worked on
              </h2>
              <p
                className="about-paragraph"
                style={{ maxWidth: '620px', margin: '0 auto', color: 'var(--text-secondary)', textAlign: 'center' }}
              >
                As an IT Business Analyst Intern, I contributed to several active projects
                spanning AI-powered lead generation, front-end development, and chatbot
                workflow design. My primary deliverable was a B2B Lead Generation System
                built on n8n, paired with a React.js dashboard to surface and organize the
                collected business data for the sales team.
              </p>
            </motion.div>

            <motion.p
              {...fadeUp(0.15)}
              style={{
                textAlign: 'center',
                color: 'var(--text-muted)',
                fontSize: '0.72rem',
                fontWeight: 700,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                marginBottom: '2.25rem',
              }}
            >
              Summary of Internship Hours Rendered
            </motion.p>

            <NatureCards />

          </div>
        </section>

        {/* ── REFLECTION ────────────────────────────────────── */}
        <section
          id="reflection"
          className="section"
          style={{
            background: 'linear-gradient(180deg, var(--bg-tertiary) 0%, var(--bg-secondary) 100%)',
          }}
        >
          <div className="container">
            <motion.div
              {...fadeUp(0)}
              style={{ maxWidth: '740px', margin: '0 auto' }}
            >
              <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
                <SectionLabel>04 — Reflection</SectionLabel>
                <h2
                  className="title-accent"
                  style={{ fontSize: 'clamp(1.9rem, 3vw, 2.8rem)', marginBottom: 0 }}
                >
                  Looking back
                </h2>
              </div>

              {/* Decorative rule */}
              <div style={{
                width: '3rem',
                height: '3px',
                borderRadius: '999px',
                background: 'var(--border)',
                margin: '0 auto 2.5rem',
              }} />

              <ReflectionCard>
                <p className="about-paragraph" style={{ marginBottom: 0 }}>
                  Working on the n8n B2B Lead Generation System, the React.js dashboard,
                  Smicos chatbot workflows, and several technical documentation projects gave
                  me a clear picture of how software actually ships from the first whiteboard
                  sketch to a tested, deployed feature. Each project came with its own
                  constraints and stakeholders, and navigating that complexity taught me as
                  much as any classroom exercise.
                </p>
              </ReflectionCard>

              <ReflectionCard>
                <p className="about-paragraph" style={{ marginBottom: 0 }}>
                  Beyond the technical skills, this internship sharpened how I communicate.
                  Writing documentation that non-technical stakeholders could act on, sitting
                  in on client calls, and collaborating with developers who had different
                  working styles pushed me to be clearer, more precise, and more patient. I
                  came to see that good analysis work is really about bridging gaps between
                  what a client wants and what an engineer can build.
                </p>
              </ReflectionCard>

              <ReflectionCard>
                <p className="about-paragraph" style={{ marginBottom: 0 }}>
                  I leave this internship with a stronger foundation in both software
                  development and business analysis, and a genuine interest in building
                  products that solve real problems. I am grateful to the team at PurpleBug
                  Inc. for creating an environment where curiosity was encouraged and
                  meaningful work was always within reach.
                </p>
              </ReflectionCard>

            </motion.div>
          </div>
        </section>

      </main>

      <PracticumFooter />
    </div>
  );
}
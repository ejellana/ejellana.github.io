import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons';

// CV file — same asset used in the Hero download button
import cvFile from '../assets/PDFs/CV_Ellana-EmmanuelJacob.pdf';

// "Home" is intentionally not a nav link — the EJ logo already scrolls
// back to the Hero section, so a separate Home item would be redundant.
const NAV_LINKS = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#certificates', label: 'Certificates' },
  { href: '#contact', label: 'Contact' },
];

// Still observe #home for scroll-position tracking parity with before,
// even though it has no corresponding nav link to highlight.
const SECTION_IDS = ['home', ...NAV_LINKS.map((l) => l.href.slice(1))];

const SOCIAL_LINKS = [
  { href: 'https://github.com/ejellana', icon: faGithub, label: 'GitHub' },
  { href: 'https://www.linkedin.com/in/emmanuel-ellana-ba8a9a182/', icon: faLinkedinIn, label: 'LinkedIn' },
  { href: 'https://www.instagram.com/ej.ellana/', icon: faInstagram, label: 'Instagram' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setIsMenuOpen((v) => !v);
  const closeMenu = () => setIsMenuOpen(false);

  // ── Active section via IntersectionObserver ───────────────
  useEffect(() => {
    const observers = [];

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { threshold: 0.3, rootMargin: '-60px 0px -40% 0px' }
      );

      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  // ── Header appearance changes once the page has scrolled ──
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // ── Lock body scroll when mobile menu is open ─────────────
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMenuOpen]);

  return (
    <>
      <style>{`
        .header {
          position: sticky;
          top: 0;
          z-index: 1000;
          padding: 1.1rem 0;
          background: #000000;
          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
          box-shadow: 0 1px 0 rgba(255, 255, 255, 0.02);
          transition: padding 0.35s ease, box-shadow 0.4s ease, border-color 0.4s ease;
        }

        .header--scrolled {
          padding: 0.75rem 0;
          border-bottom-color: rgba(255, 255, 255, 0.09);
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.28);
        }

        .header .container {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo a {
          color: white;
          text-decoration: none;
          font-size: 1.55rem;
          font-weight: 800;
          letter-spacing: -0.3px;
          display: inline-block;
          transition: opacity 0.25s ease, transform 0.25s ease;
        }

        .logo a:hover {
          opacity: 0.78;
          transform: translateY(-1px);
        }

        /* ── Desktop nav — sliding pill active indicator ── */
        .nav-desktop ul {
          display: flex;
          align-items: center;
          list-style: none;
          gap: 0.35rem;
          margin: 0;
          padding: 0;
        }

        .nav-item {
          position: relative;
        }

        .nav-item a {
          position: relative;
          display: inline-block;
          color: rgba(255, 255, 255, 0.68);
          text-decoration: none;
          font-weight: 500;
          font-size: 0.93rem;
          letter-spacing: 0.01em;
          padding: 0.5rem 0.95rem;
          border-radius: 999px;
          transition: color 0.25s ease;
        }

        .nav-item a:hover {
          color: #ffffff;
        }

        .nav-item a.nav-link--active {
          color: #ffffff;
          font-weight: 600;
        }

        .nav-pill {
          position: absolute;
          inset: 0;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 999px;
          z-index: -1;
        }

        .nav-link-label {
          position: relative;
          z-index: 1;
        }

        /* ── Burger button ── */
        .burger-btn {
          display: none;
          align-items: center;
          justify-content: center;
          width: 42px;
          height: 42px;
          background: transparent;
          border: none;
          border-radius: 12px;
          color: white;
          cursor: pointer;
          font-size: 1.25rem;
          transition: background 0.25s ease;
        }

        .burger-btn:hover,
        .burger-btn:focus-visible {
          background: rgba(255, 255, 255, 0.08);
        }

        .burger-icon-wrap {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* ── Mobile backdrop ── */
        .menu-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.55);
          backdrop-filter: blur(6px);
          -webkit-backdrop-filter: blur(6px);
          z-index: 998;
        }

        /* ── Mobile drawer ── */
        .nav-mobile {
          position: fixed;
          top: 0;
          right: 0;
          width: 84%;
          max-width: 340px;
          height: 100vh;
          display: flex;
          flex-direction: column;
          background: #0a0a0a;
          color: white;
          z-index: 999;
          box-shadow: -18px 0 50px rgba(0, 0, 0, 0.5);
          border-left: 1px solid rgba(255, 255, 255, 0.07);
        }

        .mobile-menu-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1.5rem 1.5rem 1rem;
        }

        .mobile-menu-header .logo a {
          font-size: 1.3rem;
        }

        .close-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 12px;
          color: white;
          font-size: 1.1rem;
          cursor: pointer;
          transition: background 0.25s ease, transform 0.25s ease;
        }

        .close-btn:hover {
          background: rgba(255, 255, 255, 0.12);
        }

        .mobile-menu-list {
          list-style: none;
          padding: 0.75rem 1.5rem 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }

        .mobile-menu-list a {
          position: relative;
          display: block;
          color: rgba(255, 255, 255, 0.78);
          text-decoration: none;
          font-size: 1.18rem;
          font-weight: 600;
          letter-spacing: -0.1px;
          padding: 0.85rem 0.9rem;
          border-radius: 14px;
          transition: background 0.25s ease, color 0.25s ease, padding-left 0.25s ease;
        }

        .mobile-menu-list a:hover,
        .mobile-menu-list a:focus {
          color: #ffffff;
          background: rgba(255, 255, 255, 0.06);
          padding-left: 1.15rem;
        }

        .mobile-menu-list a.nav-link--active {
          color: #ffffff;
          background: rgba(255, 255, 255, 0.09);
        }

        .mobile-menu-divider {
          margin: 1.35rem 1.5rem 1.25rem;
          border: none;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
        }

        .mobile-menu-footer {
          margin-top: auto;
          padding: 0 1.5rem 2.25rem;
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .mobile-cv-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          padding: 0.85rem 1.2rem;
          background: #ffffff;
          color: #0a0a0a;
          font-weight: 600;
          font-size: 0.98rem;
          text-decoration: none;
          border-radius: 999px;
          transition: opacity 0.25s ease, transform 0.25s ease;
        }

        .mobile-cv-btn:hover {
          opacity: 0.88;
          transform: translateY(-2px);
        }

        .mobile-social-row {
          display: flex;
          justify-content: center;
          gap: 0.7rem;
        }

        .mobile-social-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 42px;
          height: 42px;
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.09);
          color: rgba(255, 255, 255, 0.85);
          font-size: 1rem;
          text-decoration: none;
          transition: background 0.25s ease, color 0.25s ease, transform 0.25s ease;
        }

        .mobile-social-btn:hover {
          background: rgba(255, 255, 255, 0.1);
          color: #ffffff;
          transform: translateY(-2px);
        }

        @media (max-width: 768px) {
          .nav-desktop {
            display: none;
          }
          .burger-btn {
            display: flex;
          }
          .logo a {
            font-size: 1.4rem;
          }
        }

        @media (min-width: 769px) {
          .burger-btn {
            display: none !important;
          }
        }

        @media (max-width: 380px) {
          .nav-mobile {
            width: 88%;
          }
          .mobile-menu-list a {
            font-size: 1.08rem;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .header, .header--scrolled, .logo a, .nav-item a,
          .burger-btn, .close-btn, .mobile-menu-list a,
          .mobile-cv-btn, .mobile-social-btn {
            transition: none !important;
          }
        }
      `}</style>

      {/* Header entrance animation on mount */}
      <motion.header
        className={`header${isScrolled ? ' header--scrolled' : ''}`}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
      >
        <div className="container">
          <h1 className="logo">
            <a href="#home" onClick={closeMenu}>EJ</a>
          </h1>

          <nav className="nav-desktop">
            <ul>
              {NAV_LINKS.map(({ href, label }) => {
                const isActive = activeSection === href.slice(1);
                return (
                  <li key={href} className="nav-item">
                    <a
                      href={href}
                      onClick={closeMenu}
                      className={isActive ? 'nav-link--active' : ''}
                    >
                      {isActive && (
                        <motion.span
                          className="nav-pill"
                          layoutId="nav-pill"
                          transition={{ type: 'spring', stiffness: 420, damping: 34 }}
                        />
                      )}
                      <span className="nav-link-label">{label}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          <button
            className="burger-btn"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            <motion.span
              className="burger-icon-wrap"
              animate={{ rotate: isMenuOpen ? 90 : 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
            </motion.span>
          </button>
        </div>

        {/* Mobile menu — AnimatePresence for smooth mount/unmount */}
        <AnimatePresence>
          {isMenuOpen && (
            <>
              <motion.div
                className="menu-backdrop"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                onClick={closeMenu}
              />
              <motion.nav
                className="nav-mobile"
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="mobile-menu-header">
                  <h2 className="logo">
                    <a href="#home" onClick={closeMenu}>EJ</a>
                  </h2>
                  <button className="close-btn" onClick={closeMenu} aria-label="Close menu">
                    <FontAwesomeIcon icon={faTimes} />
                  </button>
                </div>

                <ul className="mobile-menu-list">
                  {NAV_LINKS.map(({ href, label }, i) => (
                    <motion.li
                      key={href}
                      initial={{ opacity: 0, x: 24 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.38,
                        delay: 0.08 + i * 0.05,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                    >
                      <a
                        href={href}
                        onClick={closeMenu}
                        className={activeSection === href.slice(1) ? 'nav-link--active' : ''}
                      >
                        {label}
                      </a>
                    </motion.li>
                  ))}
                </ul>

                <hr className="mobile-menu-divider" />

                <motion.div
                  className="mobile-menu-footer"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.08 + NAV_LINKS.length * 0.05, ease: [0.22, 1, 0.36, 1] }}
                >
                  <a
                    href={cvFile}
                    download="CV_Ellana-EmmanuelJacob.pdf"
                    className="mobile-cv-btn"
                  >
                    Download CV
                  </a>

                  <div className="mobile-social-row">
                    {SOCIAL_LINKS.map(({ href, icon, label }) => (
                      <a
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={label}
                        className="mobile-social-btn"
                      >
                        <FontAwesomeIcon icon={icon} />
                      </a>
                    ))}
                  </div>
                </motion.div>
              </motion.nav>
            </>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}
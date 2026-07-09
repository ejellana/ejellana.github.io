import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const NAV_LINKS = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#certificates', label: 'Certificates' },
  { href: '#contact', label: 'Contact' },
];

const SECTION_IDS = NAV_LINKS.map((l) => l.href.slice(1));

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
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

  // ── Lock body scroll when mobile menu is open ─────────────
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMenuOpen]);

  return (
    <>
      <style>{`
        .header {
          background: #000000;
          color: white;
          padding: 1.2rem 0;
          position: sticky;
          top: 0;
          z-index: 1000;
          box-shadow: 0 2px 10px rgba(0,0,0,0.3);
        }

        .header .container {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo a {
          color: white;
          text-decoration: none;
          font-size: 1.8rem;
          font-weight: 700;
          letter-spacing: -0.5px;
          transition: opacity 0.2s ease;
        }

        .logo a:hover {
          opacity: 0.75;
        }

        .nav-desktop ul {
          display: flex;
          list-style: none;
          gap: 2.2rem;
          margin: 0;
          padding: 0;
        }

        .nav-desktop a {
          color: rgba(255,255,255,0.72);
          text-decoration: none;
          font-weight: 500;
          font-size: 0.95rem;
          position: relative;
          padding-bottom: 4px;
          transition: color 0.25s ease;
          letter-spacing: 0.01em;
        }

        /* Animated underline for active link */
        .nav-desktop a::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: -2px;
          width: 100%;
          height: 2px;
          background: #ffffff;
          border-radius: 2px;
          transform: scaleX(0);
          transform-origin: left center;
          transition: transform 0.3s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .nav-desktop a:hover {
          color: #ffffff;
        }

        .nav-desktop a:hover::after {
          transform: scaleX(1);
        }

        /* Active section highlight */
        .nav-desktop a.nav-link--active {
          color: #ffffff;
        }

        .nav-desktop a.nav-link--active::after {
          transform: scaleX(1);
        }

        .burger-btn {
          display: none;
          background: none;
          border: none;
          color: white;
          cursor: pointer;
          padding: 0.5rem;
          font-size: 1.8rem;
          transition: opacity 0.2s ease;
        }

        .burger-btn:hover {
          opacity: 0.7;
        }

        /* Mobile backdrop */
        .menu-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.5);
          backdrop-filter: blur(4px);
          z-index: 998;
        }

        /* Mobile drawer */
        .nav-mobile {
          position: fixed;
          top: 0;
          right: 0;
          width: 80%;
          max-width: 320px;
          height: 100vh;
          background: #000000;
          color: white;
          z-index: 999;
          box-shadow: -10px 0 30px rgba(0,0,0,0.4);
        }

        .mobile-menu-header {
          display: flex;
          justify-content: flex-end;
          padding: 1.5rem 1.5rem 0;
        }

        .close-btn {
          background: none;
          border: none;
          color: white;
          font-size: 2rem;
          cursor: pointer;
          padding: 0.5rem;
          transition: transform 0.2s ease, color 0.2s ease;
        }

        .close-btn:hover {
          transform: rotate(90deg);
          color: rgba(255,255,255,0.6);
        }

        .mobile-menu-list {
          list-style: none;
          padding: 4rem 2rem 2rem;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 2.8rem;
          text-align: right;
        }

        .mobile-menu-list a {
          color: white;
          text-decoration: none;
          font-size: 1.9rem;
          font-weight: 600;
          transition: all 0.3s ease;
          display: block;
        }

        .mobile-menu-list a.nav-link--active,
        .mobile-menu-list a:hover,
        .mobile-menu-list a:focus {
          color: rgba(255,255,255,0.6);
          transform: translateX(-12px);
        }

        @media (max-width: 768px) {
          .nav-desktop {
            display: none;
          }
          .burger-btn {
            display: block;
          }
          .logo a {
            font-size: 1.5rem;
          }
        }

        @media (min-width: 769px) {
          .burger-btn {
            display: none !important;
          }
        }
      `}</style>

      {/* Header entrance animation on mount */}
      <motion.header
        className="header"
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
              {NAV_LINKS.map(({ href, label }) => (
                <li key={href}>
                  <a
                    href={href}
                    onClick={closeMenu}
                    className={activeSection === href.slice(1) ? 'nav-link--active' : ''}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <button
            className="burger-btn"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} size="xl" />
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
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="mobile-menu-header">
                  <button className="close-btn" onClick={closeMenu} aria-label="Close menu">
                    <FontAwesomeIcon icon={faTimes} size="2x" />
                  </button>
                </div>

                <ul className="mobile-menu-list">
                  {NAV_LINKS.map(({ href, label }, i) => (
                    <motion.li
                      key={href}
                      initial={{ opacity: 0, x: 40 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.35,
                        delay: i * 0.06,
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
              </motion.nav>
            </>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}
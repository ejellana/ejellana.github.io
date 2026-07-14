import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

const NAV_LINKS = [
  { href: '#about',        label: 'About'        },
  { href: '#skills',       label: 'Skills'       },
  { href: '#projects',     label: 'Projects'     },
  { href: '#certificates', label: 'Certificates' },
  { href: '#contact',      label: 'Contact'      },
];

const SECTION_IDS = ['home', ...NAV_LINKS.map((l) => l.href.slice(1))];



/* ─── Framer Motion variants ──────────────────────────────────────────── */
const drawerVariants = {
  hidden:  { x: '100%', opacity: 0   },
  visible: { x: 0,      opacity: 1,
    transition: { type: 'spring', stiffness: 340, damping: 38, mass: 0.9 } },
  exit:    { x: '100%', opacity: 0,
    transition: { duration: 0.28, ease: [0.4, 0, 1, 1] } },
};

const backdropVariants = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.22, ease: 'easeOut' } },
  exit:    { opacity: 0, transition: { duration: 0.22, ease: 'easeIn'  } },
};

const navItemVariants = {
  hidden:  { opacity: 0, x: 20 },
  visible: (i) => ({
    opacity: 1, x: 0,
    transition: { delay: i * 0.05 + 0.06, duration: 0.28, ease: [0.22, 1, 0.36, 1] },
  }),
};

/* ─── Component ───────────────────────────────────────────────────────── */
export default function Header() {
  const [isMenuOpen, setIsMenuOpen]       = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled]       = useState(false);
  const [theme, setTheme]                 = useState('light');

  const toggleMenu = () => setIsMenuOpen((v) => !v);
  const closeMenu  = () => setIsMenuOpen(false);

  /* Theme init */
  useEffect(() => {
    const saved    = localStorage.getItem('theme');
    const sysDark  = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const resolved = saved || (sysDark ? 'dark' : 'light');
    setTheme(resolved);
    if (resolved === 'dark') document.documentElement.classList.add('dark');
  }, []);

  const toggleTheme = () => {
    const next = theme === 'light' ? 'dark' : 'light';
    setTheme(next);
    document.documentElement.classList.toggle('dark', next === 'dark');
    localStorage.setItem('theme', next);
  };

  /* Active section observer */
  useEffect(() => {
    const obs = [];
    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const o = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { threshold: 0.3, rootMargin: '-60px 0px -40% 0px' }
      );
      o.observe(el);
      obs.push(o);
    });
    return () => obs.forEach((o) => o.disconnect());
  }, []);

  /* Scroll-shrink */
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* Lock body scroll while drawer open */
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMenuOpen]);

  return (
    <>
      <style>{`
        /* ── Header shell ── */
        .header {
          position: sticky;
          top: 0;
          z-index: 1000;
          padding: 1rem 0;
          background: var(--bg-primary);
          border-bottom: 1px solid var(--border);
          transition:
            padding       0.35s ease,
            box-shadow    0.35s ease,
            border-color  0.35s ease,
            background-color var(--transition-theme);
        }
        .header--scrolled {
          padding: 0.7rem 0;
          box-shadow: 0 4px 24px var(--shadow);
        }
        .header .container {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        /* ── Logo ── */
        .logo a {
          color: var(--text-primary);
          text-decoration: none;
          font-size: 1.55rem;
          font-weight: 800;
          letter-spacing: -0.3px;
          display: inline-block;
          line-height: 1;
          transition: opacity 0.25s ease, transform 0.25s ease;
        }
        .logo a:hover { opacity: 0.72; transform: translateY(-1px); }

        /* ── Desktop nav ── */
        .nav-desktop ul {
          display: flex;
          align-items: center;
          list-style: none;
          gap: 0.35rem;
          margin: 0;
          padding: 0;
        }
        .nav-item a {
          position: relative;
          display: inline-block;
          color: var(--text-secondary);
          text-decoration: none;
          font-weight: 500;
          font-size: 0.93rem;
          letter-spacing: 0.01em;
          padding: 0.5rem 0.95rem;
          border-radius: 999px;
          transition: color 0.25s ease;
        }
        .nav-item a:hover { color: var(--text-primary); }
        .nav-item a.nav-link--active {
          color: var(--text-primary);
          font-weight: 600;
        }
        .nav-pill {
          position: absolute;
          inset: 0;
          background: var(--nav-pill-bg);
          border: 1px solid var(--nav-pill-border);
          border-radius: 999px;
          z-index: -1;
        }

        /* ── Shared controls (theme toggle + burger) ── */
        .header-controls {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        /* ── Theme toggle ── */
        .theme-toggle {
          transition:
            color        0.25s cubic-bezier(0.23, 1, 0.32, 1),
            border-color 0.25s cubic-bezier(0.23, 1, 0.32, 1),
            box-shadow   0.25s cubic-bezier(0.23, 1, 0.32, 1),
            transform    0.25s cubic-bezier(0.23, 1, 0.32, 1);
        }

        /* ── Burger button ── */
        .burger-btn {
          display: none;
          align-items: center;
          justify-content: center;
          width: 42px;
          height: 42px;
          border-radius: 999px;
          background: var(--bg-card);
          border: 1px solid var(--border);
          color: var(--text-secondary);
          font-size: 1.1rem;
          cursor: pointer;
          box-shadow: 0 2px 8px var(--shadow);
          transition:
            color        0.25s ease,
            border-color 0.25s ease,
            background   0.25s ease,
            box-shadow   0.25s ease,
            transform    0.25s ease;
        }
        .burger-btn:hover {
          color: var(--text-primary);
          border-color: var(--border-hover);
          box-shadow: 0 4px 14px var(--shadow-hover);
          transform: scale(1.05);
        }
        .burger-icon-wrap {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          height: 100%;
        }

        /* ── Backdrop ── */
        .menu-backdrop {
          position: fixed;
          inset: 0;
          z-index: 1001;
          background: rgba(0, 0, 0, 0.38);
          backdrop-filter: blur(3px);
          -webkit-backdrop-filter: blur(3px);
        }

        /* ── Mobile nav drawer ── */
        .nav-mobile {
          position: fixed;
          top: 0;
          right: 0;
          bottom: 0;
          z-index: 1002;
          width: min(320px, 88vw);
          display: flex;
          flex-direction: column;
          background: var(--bg-primary);
          border-left: 1px solid var(--border);
          box-shadow: -12px 0 48px var(--shadow-hover);
          overflow-y: auto;
          overflow-x: hidden;
          overscroll-behavior: contain;
          transition: background-color var(--transition-theme), border-color var(--transition-theme);
        }

        /* ── Drawer header ── */
        .nav-mobile__header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1.1rem 1.25rem;
          border-bottom: 1px solid var(--border);
          flex-shrink: 0;
          transition: border-color var(--transition-theme);
        }
        .nav-mobile__logo {
          color: var(--text-primary);
          text-decoration: none;
          font-size: 1.45rem;
          font-weight: 800;
          letter-spacing: -0.3px;
          line-height: 1;
        }
        .nav-mobile__close {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 38px;
          height: 38px;
          border-radius: 999px;
          background: transparent;
          border: 1px solid var(--border);
          color: var(--text-secondary);
          font-size: 1rem;
          cursor: pointer;
          transition:
            color        0.2s ease,
            border-color 0.2s ease,
            background   0.2s ease;
        }
        .nav-mobile__close:hover {
          color: var(--text-primary);
          background: var(--bg-secondary);
          border-color: var(--border-hover);
        }

        /* ── Nav links list ── */
        .mobile-menu-list {
          list-style: none;
          padding: 0.75rem 1rem;
          margin: 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }
        .mobile-menu-list li a {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0.85rem 1rem;
          border-radius: 12px;
          color: var(--text-secondary);
          text-decoration: none;
          font-weight: 500;
          font-size: 1.05rem;
          letter-spacing: 0.01em;
          min-height: 52px;
          transition:
            background  0.2s ease,
            color       0.2s ease,
            padding-left 0.2s ease;
        }
        .mobile-menu-list li a:hover {
          background: var(--bg-secondary);
          color: var(--text-primary);
          padding-left: 1.3rem;
        }
        .mobile-menu-list li a.nav-link--active {
          background: var(--bg-secondary);
          color: var(--text-primary);
          font-weight: 600;
          border: 1px solid var(--border);
        }
        .mobile-menu-list li a.nav-link--active .mobile-active-dot {
          display: block;
        }
        .mobile-active-dot {
          display: none;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--text-primary);
          flex-shrink: 0;
        }

        /* ── Responsive visibility ── */
        @media (max-width: 768px) {
          .nav-desktop  { display: none; }
          /* On mobile, the desktop-only theme toggle hides too */
          .header-controls .theme-toggle { display: none; }
          .burger-btn   { display: flex; }
          /* Show mobile theme toggle in controls */
          .header-controls .mobile-theme-toggle { display: flex; }
        }
        @media (min-width: 769px) {
          .burger-btn              { display: none !important; }
          .mobile-theme-toggle     { display: none !important; }
        }
      `}</style>

      <motion.header
        className={`header${isScrolled ? ' header--scrolled' : ''}`}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
      >
        <div className="container">
          {/* Logo */}
          <h1 className="logo">
            <a href="#home" onClick={closeMenu}>EJ</a>
          </h1>

          {/* Desktop nav */}
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

          {/* Right-side controls:
              Desktop → theme toggle only
              Mobile  → theme toggle + burger (side-by-side) */}
          <div className="header-controls">
            {/* Desktop theme toggle */}
            <button
              className="theme-toggle"
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            >
              <motion.span
                animate={{ rotate: theme === 'dark' ? 45 : 0 }}
                transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
              >
                <FontAwesomeIcon icon={theme === 'light' ? faMoon : faSun} />
              </motion.span>
            </button>

            {/* Mobile-only theme toggle — shown beside burger */}
            <button
              className="theme-toggle mobile-theme-toggle"
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            >
              <motion.span
                animate={{ rotate: theme === 'dark' ? 45 : 0 }}
                transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
              >
                <FontAwesomeIcon icon={theme === 'light' ? faMoon : faSun} />
              </motion.span>
            </button>

            {/* Burger */}
            <button
              className="burger-btn"
              onClick={toggleMenu}
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMenuOpen}
            >
              <motion.span
                className="burger-icon-wrap"
                animate={{ rotate: isMenuOpen ? 90 : 0 }}
                transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              >
                <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
              </motion.span>
            </button>
          </div>
        </div>

        {/* ── Mobile drawer ── */}
        <AnimatePresence>
          {isMenuOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                className="menu-backdrop"
                variants={backdropVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                onClick={closeMenu}
                aria-hidden="true"
              />

              {/* Drawer */}
              <motion.nav
                className="nav-mobile"
                variants={drawerVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                aria-label="Mobile navigation"
              >
                {/* Drawer header */}
                <div className="nav-mobile__header">
                  <a href="#home" className="nav-mobile__logo" onClick={closeMenu}>EJ</a>
                  <button
                    className="nav-mobile__close"
                    onClick={closeMenu}
                    aria-label="Close menu"
                  >
                    <FontAwesomeIcon icon={faTimes} />
                  </button>
                </div>

                {/* Nav links */}
                <ul className="mobile-menu-list" role="list">
                  {NAV_LINKS.map(({ href, label }, i) => {
                    const isActive = activeSection === href.slice(1);
                    return (
                      <motion.li
                        key={href}
                        custom={i}
                        variants={navItemVariants}
                        initial="hidden"
                        animate="visible"
                      >
                        <a
                          href={href}
                          onClick={closeMenu}
                          className={isActive ? 'nav-link--active' : ''}
                        >
                          {label}
                          <span className="mobile-active-dot" aria-hidden="true" />
                        </a>
                      </motion.li>
                    );
                  })}
                </ul>

              </motion.nav>
            </>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <style jsx global>{`
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
        }

        .nav-desktop ul {
          display: flex;
          list-style: none;
          gap: 2.2rem;
          margin: 0;
          padding: 0;
        }

        .nav-desktop a {
          color: white;
          text-decoration: none;
          font-weight: 500;
          transition: color 0.3s;
        }

        .nav-desktop a:hover {
          color: #a0d2ff;
        }

        .burger-btn {
          display: none;
          background: none;
          border: none;
          color: white;
          cursor: pointer;
          padding: 0.5rem;
          font-size: 1.8rem;
        }

        .menu-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.5);
          backdrop-filter: blur(4px);
          z-index: 998;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.4s ease;
        }

        .menu-backdrop.active {
          opacity: 1;
          pointer-events: auto;
        }

        .nav-mobile {
          position: fixed;
          top: 0;
          right: 0;
          width: 80%;
          max-width: 320px;
          height: 100vh;
          background: #000000;
          color: white;
          transform: translateX(100%);
          transition: transform 0.45s cubic-bezier(0.77,0.2,0.05,1);
          z-index: 999;
          box-shadow: -10px 0 30px rgba(0,0,0,0.4);
        }

        .nav-mobile.active {
          transform: translateX(0);
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
          transition: transform 0.2s;
        }

        .close-btn:hover {
          transform: rotate(90deg);
          color: #a0d2ff;
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

        .mobile-menu-list a:hover,
        .mobile-menu-list a:focus {
          color: #a0d2ff;
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
          .burger-btn,
          .nav-mobile,
          .menu-backdrop {
            display: none !important;
          }
        }
      `}</style>

      <header className="header">
        <div className="container">
          <h1 className="logo">
            <a href="#home" onClick={closeMenu}>EJ</a>
          </h1>

          <nav className="nav-desktop">
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
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

        <>
          <div 
            className={`menu-backdrop ${isMenuOpen ? 'active' : ''}`} 
            onClick={closeMenu}
          />

          <nav className={`nav-mobile ${isMenuOpen ? 'active' : ''}`}>
            <div className="mobile-menu-header">
              <button className="close-btn" onClick={closeMenu} aria-label="Close menu">
                <FontAwesomeIcon icon={faTimes} size="2x" />
              </button>
            </div>

            <ul className="mobile-menu-list">
              <li><a href="#home" onClick={closeMenu}>Home</a></li>
              <li><a href="#about" onClick={closeMenu}>About</a></li>
              <li><a href="#skills" onClick={closeMenu}>Skills</a></li>
              <li><a href="#projects" onClick={closeMenu}>Projects</a></li>
              <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
            </ul>
          </nav>
        </>
      </header>
    </>
  );
}
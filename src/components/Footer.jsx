import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faInstagram,
  faGithub,
  faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons';

const SOCIAL_LINKS = [
  { href: 'https://github.com/ejellana', icon: faGithub, label: 'GitHub' },
  { href: 'https://www.linkedin.com/in/emmanuel-ellana-ba8a9a182/', icon: faLinkedinIn, label: 'LinkedIn' },
  { href: 'https://www.instagram.com/ej.ellana/', icon: faInstagram, label: 'Instagram' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <style>{`
        .footer {
          background: #000000;
          color: white;
          padding: 3.25rem 0 2.25rem;
          border-top: 1px solid rgba(255, 255, 255, 0.07);
        }

        .footer-inner {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 0.9rem;
        }

        .footer-logo {
          font-size: 1.35rem;
          font-weight: 800;
          letter-spacing: -0.3px;
          color: #ffffff;
        }

        .footer-tagline {
          font-size: 0.95rem;
          font-weight: 400;
          color: rgba(255, 255, 255, 0.55);
          margin: 0;
        }

        .footer-social {
          display: flex;
          justify-content: center;
          gap: 0.65rem;
          margin: 0.4rem 0 0.2rem;
        }

        .footer-social-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 38px;
          height: 38px;
          border-radius: 11px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.09);
          color: rgba(255, 255, 255, 0.8);
          font-size: 0.92rem;
          text-decoration: none;
          transition: background 0.25s ease, color 0.25s ease,
            border-color 0.25s ease, transform 0.25s ease;
        }

        .footer-social-btn:hover {
          background: rgba(255, 255, 255, 0.1);
          border-color: rgba(255, 255, 255, 0.16);
          color: #ffffff;
        }

        .footer-copyright {
          font-size: 0.8rem;
          font-weight: 400;
          color: rgba(255, 255, 255, 0.4);
          margin-top: 0.6rem;
          letter-spacing: 0.01em;
        }

        @media (max-width: 768px) {
          .footer {
            padding: 2.75rem 0 2rem;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .footer-social-btn {
            transition: none !important;
          }
        }
      `}</style>

      <footer className="footer">
        <div className="container">
          <motion.div
            className="footer-inner"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="footer-social">
              {SOCIAL_LINKS.map(({ href, icon, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="footer-social-btn"
                  whileHover={{ y: -3, scale: 1.08, transition: { duration: 0.2, ease: [0.22, 1, 0.36, 1] } }}
                  whileTap={{ scale: 0.94 }}
                >
                  <FontAwesomeIcon icon={icon} />
                </motion.a>
              ))}
            </div>

            <p className="footer-copyright">
              © {currentYear} Emmanuel Jacob C. Ellana. All rights reserved.
            </p>
          </motion.div>
        </div>
      </footer>
    </>
  );
}
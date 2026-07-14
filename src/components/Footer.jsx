import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <style>{`
        .footer {
          background: var(--bg-primary);
          color: var(--text-primary);
          padding: 3.25rem 0 2.25rem;
          border-top: 1px solid var(--border);
          transition: background-color 0.35s ease, border-color 0.35s ease, color 0.35s ease;
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
          color: var(--text-primary);
        }

        .footer-tagline {
          font-size: 0.95rem;
          font-weight: 400;
          color: var(--text-secondary);
          margin: 0;
        }

        .footer-copyright {
          font-size: 0.8rem;
          font-weight: 400;
          color: var(--text-muted);
          margin-top: 0.6rem;
          letter-spacing: 0.01em;
        }

        @media (max-width: 768px) {
          .footer {
            padding: 2.75rem 0 2rem;
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
            <p className="footer-credit">
              Built & Designed by <strong>Emmanuel Jacob C. Ellana</strong>
            </p>

            <p className="footer-copyright">
              © {currentYear} All Rights Reserved.
            </p>
          </motion.div>
        </div>
      </footer>
    </>
  );
}
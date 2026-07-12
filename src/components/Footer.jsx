import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faInstagram,
  faFacebook,
  faTwitter,
  faGithub,
  faLinkedinIn
} from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <style jsx global>{`
        .footer {
          background: #000000;
          color: white;
          padding: 4rem 0 3rem;
          text-align: center;
        }

        .footer p {
          margin-bottom: 1.5rem;
          font-size: 1.1rem;
        }

        .footer-social {
          margin-top: 1.5rem;
          display: flex;
          justify-content: center;
          gap: 2rem;
        }

        .footer-social a {
          color: white;
          transition: color 0.3s, transform 0.3s;
        }

        .footer-social a:hover {
          color: #a0d2ff;
          transform: scale(1.15);
        }

        @media (max-width: 768px) {
          .footer {
            padding: 3rem 0 2rem;
          }

          .footer-social {
            gap: 1.5rem;
          }
        }
      `}</style>

      <footer className="footer">
        <div className="container">
          <p>© {currentYear} EJEllana All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
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
          
          <div className="footer-social">
            <a href="https://www.instagram.com/ej.ellana/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
            <a href="https://www.facebook.com/ejellana17" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
            <a href="https://twitter.com/ejellana_" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
            <a href="https://github.com/ejellana" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
            <a href="https://www.linkedin.com/in/emmanuel-ellana-ba8a9a182/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FontAwesomeIcon icon={faLinkedinIn} size="2x" />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
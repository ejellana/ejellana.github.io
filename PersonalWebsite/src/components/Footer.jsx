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
    <footer className="footer">
      <div className="container">
        <p>© {currentYear} Emmanuel Jacob C. Ellana. All rights reserved.</p>
        
        <div className="footer-social">
          <a 
            href="https://www.instagram.com/ej.ellana/" 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="Instagram"
          >
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
          <a 
            href="https://www.facebook.com/ejellana17" 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="Facebook"
          >
            <FontAwesomeIcon icon={faFacebook} size="2x" />
          </a>
          <a 
            href="https://twitter.com/ejellana_" 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="Twitter"
          >
            <FontAwesomeIcon icon={faTwitter} size="2x" />
          </a>
          <a 
            href="https://github.com/ejellana" 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="GitHub"
          >
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
          <a 
            href="https://www.linkedin.com/in/your-linkedin-username/" // ← Replace with your real LinkedIn URL
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="LinkedIn"
          >
            <FontAwesomeIcon icon={faLinkedinIn} size="2x" />
          </a>
        </div>
      </div>
    </footer>
  );
}
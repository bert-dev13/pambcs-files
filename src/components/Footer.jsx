import { FiShield, FiMapPin, FiCalendar } from 'react-icons/fi';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__bar">
        <div className="footer__container">
          <div className="footer__brand-block">
            <div className="footer__icon-wrap" aria-hidden="true">
              <FiShield />
            </div>
            <div className="footer__brand-text">
              <span className="footer__portal-name">PAMBCS Submission Portal</span>
              <span className="footer__badge">DENR CDD</span>
            </div>
          </div>

          <div className="footer__divider" aria-hidden="true">
            <span className="footer__divider-line" />
            <span className="footer__divider-dot" />
            <span className="footer__divider-line" />
          </div>

          <div className="footer__meta">
            <p className="footer__tagline">
              <FiMapPin className="footer__meta-icon" aria-hidden="true" />
              Department of Environment and Natural Resources
            </p>
            <p className="footer__copyright">
              <FiCalendar className="footer__meta-icon" aria-hidden="true" />
              &copy; 2026 All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

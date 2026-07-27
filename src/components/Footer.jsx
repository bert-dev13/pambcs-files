import { FiMapPin, FiCalendar } from 'react-icons/fi';
import denrLogo from '@assets/images/DENR-LOGO.png';
import '../styles/Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__bar">
        <span className="footer__surface-glow" aria-hidden="true" />
        <span className="footer__top-shine" aria-hidden="true" />

        <div className="footer__container">
          <div className="footer__col footer__col--left">
            <div className="footer__brand">
              <img
                src={denrLogo}
                alt="Department of Environment and Natural Resources logo"
                className="footer__logo"
              />
              <div className="footer__brand-text">
                <span className="footer__portal-name">PAMBCS Submission Portal</span>
                <span className="footer__office">DENR CDD</span>
              </div>
            </div>
          </div>

          <div className="footer__divider" aria-hidden="true">
            <span className="footer__divider-dot" />
          </div>

          <div className="footer__col footer__col--right">
            <p className="footer__tagline">
              <FiMapPin className="footer__meta-icon" aria-hidden="true" />
              Department of Environment and Natural Resources
            </p>
            <p className="footer__copyright">
              <FiCalendar className="footer__meta-icon" aria-hidden="true" />
              &copy; {currentYear} All rights reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

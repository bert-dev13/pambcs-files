import denrLogo from '@assets/images/DENR-LOGO.png';
import bagongPilipinasLogo from '@assets/images/BAGONG-PILIPINAS-LOGO.png';
import '../styles/Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header__bar">
        <span className="header__surface-glow" aria-hidden="true" />
        <span className="header__top-shine" aria-hidden="true" />
        <span className="header__grid-pattern" aria-hidden="true" />

        <div className="header__container">
          <div className="header__logo header__logo--left">
            <img
              src={denrLogo}
              alt="Department of Environment and Natural Resources logo"
              className="header__logo-img header__logo-img--denr"
            />
          </div>

          <div className="header__brand">
            <span className="header__badge">Official Portal</span>
            <h1 className="header__title">PAMBCS Submission Portal</h1>
            <p className="header__subtitle">
              Centralized document submission and return management
            </p>
            <span className="header__accent-line" aria-hidden="true" />
          </div>

          <div className="header__logo header__logo--right">
            <img
              src={bagongPilipinasLogo}
              alt="Bagong Pilipinas logo"
              className="header__logo-img header__logo-img--bp"
            />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;

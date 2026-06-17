import denrLogo from '@assets/images/DENR-LOGO.png';
import bagongPilipinasLogo from '@assets/images/BAGONG-PILIPINAS-LOGO.png';
import '../styles/Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header__bar">
        <div className="header__container">
          <div className="header__logo header__logo--left">
            <img
              src={denrLogo}
              alt="DENR Logo"
              className="header__logo-img header__logo-img--denr"
            />
          </div>

          <h1 className="header__title">PAMBCS SUBMISSION PORTAL</h1>

          <div className="header__logo header__logo--right">
            <img
              src={bagongPilipinasLogo}
              alt="Bagong Pilipinas Logo"
              className="header__logo-img header__logo-img--bp"
            />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;

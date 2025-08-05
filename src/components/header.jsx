import "./header.scss";
import logo from "../assets/img/honey.png";

const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        <div ckassName="header__all">
          <img src={logo} alt="Logo" />
          <div className="header__nav">
            <a href="Home" className="header__link"></a>
            <a href="About" className="header__link"></a>
            <a href="Our Product" className="header__link">
              Блог
            </a>
            <a href="Contact" className="header__link"></a>
            <a href="Contact" className="header__link"></a>
            <a href="Contact" className="header__link"></a>
          </div>
          <div></div>
        </div>
      </div>
    </header>
  );
};

export default Header;

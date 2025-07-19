import "./header.scss";
import logo from "../assets/img/honey.png";

const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        <div ckassName="header__all">
          <img src={logo} alt="Logo" />
          <div className="header__nav">
            <a href="Home" className="header__link">
              Home
            </a>
            <a href="About" className="header__link">
              About
            </a>
            <a href="Our Product" className="header__link">
              Our Product
            </a>
            <a href="Contact" className="header__link">
              Contact
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

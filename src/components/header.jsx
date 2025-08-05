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
              Головна
            </a>
            <a href="About" className="header__link">
              Магазин
            </a>
            <a href="Our Product" className="header__link">
              Блог
            </a>
            <a href="Contact" className="header__link">
              Пасіка
            </a>
            <a href="Contact" className="header__link">
              Оплата і доставка
            </a>
            <a href="Contact" className="header__link">
              Контакти
            </a>
          </div>
          <div>
            <button className="header__search-btn">🔍</button>
            <button className="header__cart">👜 0 Items Added</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

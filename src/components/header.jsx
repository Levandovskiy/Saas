import "./header.scss";
import logo from "../assets/img/honey.png";

const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="Logo" />
    </header>
  );
};

export default Header;

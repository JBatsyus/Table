import logo from "../../assets/img/logo.png";
import "./header.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="header__wrapper">
        <img className="header__logo" src={logo} alt={"логотип"} />
        <div className="header__text">Обработка и хранение данных учащихся</div>
      </div>
    </header>
  );
};

export default Header;

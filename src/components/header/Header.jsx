import "./Header.css";
import Logo from "../../images/logo.png";

const Header = () => {
  return (
    <>
      <div className="container">
        <div className="wrapper">
          <img src={Logo} alt="about site logo" />
          <div className="help">
            <a href="#">Home</a>
            <a href="#">Secvice</a>
            <a href="#">Menu \/</a>
            <a href="#">Help</a>
          </div>
          <div className="wrapper-header">
            <i class="fa-solid fa-magnifying-glass"></i>
            <i class="fa-solid fa-bag-shopping"></i>
            <button className="header-button">→ Login</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;

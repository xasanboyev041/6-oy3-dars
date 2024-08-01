import "./Footer.css";
import Logo from "../../images/logo.png";
const Footer = () => {
  return (
    <>
      <div className="container">
        <div className="wrapper end">
          <img src={Logo} alt="about site logo" />
          <div className="help">
            <a href="#">About</a>
            <a href="#">Service</a>
            <a href="#">Blog</a>
            <a href="#">Contact Us</a>
          </div>
          <div className="wrapper-header">
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-facebook-f"></i>
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-github"></i>
          </div>
        </div>
        <div className="end-footer">
            <p className="policy">© Copyright 2022, All Rights Reserved</p>
            <p className="policy">Privacy Policy         Terms & Conditions</p>
        </div>
      </div>
    </>
  );
};

export default Footer;

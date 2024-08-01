import AppStore from "../../images/appStore.png";
import GooglePlay from "../../images/googlePlay.png";
import Iphone from "../../images/iphone.png";
import "./Phone.css";

const Phone = () => {
  return (
    <>
      <div className="container">
        <div className="wrapper-phone">
          <div className="wrapper-mobile">
            <h2 className="mobileApp">Download our Mobile App</h2>
            <p className="lorem">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Luctus
              cum purus bibendum risus nibh cursus integer dolor, commodo. Amet,
              aliquam condimentum.
            </p>
            <div className="playMarket">
              <img src={AppStore} alt="" />
              <img src={GooglePlay} alt="" />
            </div>
          </div>
          <img src={Iphone} alt="" />
        </div>
      </div>
    </>
  );
};

export default Phone;

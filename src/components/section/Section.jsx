import Fast from "../../images/fast.png";
import Cheese from "../../images/cheese.png";
import "./Section.css";

const Section = () => {
  return (
    <>
      <div className="container">
        <div className="wrapper-section">
          <div className="fastest">
            <img src={Fast} alt="about site fast" />
            <h1>
              Fastest <span className="pickup">Delivery</span> & Esay
              <span className="pickup">Pickup.</span>
            </h1>
            <p className="text-section">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet
              tempus felis vitae sit est quisque.
            </p>
            <div className="order">
              <button className="now">Order Now</button>
              <button className="simble">▷</button>
              <p className="watch">Watch Video</p>
            </div>
          </div>
          <img className="cheese" src={Cheese} alt="" />
        </div>
      </div>
    </>
  );
};

export default Section;

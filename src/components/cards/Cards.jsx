import "./Cards.css";
import Burger1 from "../../images/burger1.png";
import Burger2 from "../../images/burger2.png";
import Burger3 from "../../images/burger3.png";
import Burger4 from "../../images/burger4.png";
import Burger5 from "../../images/burger5.png";
import Burger6 from "../../images/burger6.png";
import Burger7 from "../../images/burger7.png";
import Burger8 from "../../images/burger8.png";

const Cards = () => {
  const products = [
    {
      id: 1,
      name: "McSpicy Special 5.0",
      data: "Free Delivery25-30 min",
      igm: Burger1,
      button: "Order Now",
    },
    {
      id: 2,
      name: "McSpicy Special 5.0",
      data: "Free Delivery25-30 min",
      igm: Burger2,
      button: "Order Now",
    },
    {
      id: 3,
      name: "McSpicy Special 5.0",
      data: "Free Delivery25-30 min",
      igm: Burger3,
      button: "Order Now",
    },
    {
      id: 4,
      name: "McSpicy Special 5.0",
      data: "Free Delivery25-30 min",
      igm: Burger4,
      button: "Order Now",
    },
    {
      id: 5,
      name: "McSpicy Special 5.0",
      data: "Free Delivery25-30 min",
      igm: Burger5,
      button: "Order Now",
    },
    {
      id: 6,
      name: "McSpicy Special 5.0",
      data: "Free Delivery25-30 min",
      igm: Burger6,
      button: "Order Now",
    },
    {
      id: 7,
      name: "McSpicy Special 5.0",
      data: "Free Delivery25-30 min",
      igm: Burger7,
      button: "Order Now",
    },
    {
      id: 8,
      name: "McSpicy Special 5.0",
      data: "Free Delivery25-30 min",
      igm: Burger8,
      button: "Order Now",
    },
  ];

  return (
    <>
      <div className="container">
        <div className="wrapper-cards">
          <h2 className="special">Special Menu for you</h2>
          <p className="menu-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Luctus cum
            purus bibendum risus nibh cursus integer dolor, commodo. Amet,
            aliquam condimentum.
          </p>
        </div>
        <div className="wrapper-card">
          {products.map((product) => (
            <div key={product.id} className="card">
              <img src={product.igm} alt="" />
              <h3 className="title">{product.name}</h3>
              <p className="free">{product.data}</p>
              <button className="order-now">{product.button}</button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Cards;

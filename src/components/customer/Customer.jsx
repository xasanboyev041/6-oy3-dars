import "./Customer.css";
import Img11 from "../../images/img11.png";
import Img22 from "../../images/img22.png";
import Img33 from "../../images/img33.png";
import Img44 from "../../images/img44.png";

const Customer = () => {
  const products = [
    {
      id: 1,
      img: Img11,
      text: "You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the change.",
      avatar: Img22,
      name: "Leslie Alexander",
      job: "Founder",
    },
    {
      id: 2,
      img: Img11,
      text: "“Simply the best. Better than all the rest. Id recommend this product to beginners and advanced users.”",
      avatar: Img33,
      name: "Leslie Alexander",
      job: "Co-Founder",
    },
    {
      id: 3,
      img: Img11,
      text: "“I cannot believe that I have got a brand new landing page after getting Omega. It was super easy to edit and faster and easier to work.”",
      avatar: Img44,
      name: "Leslie Alexander",
      job: "Chief Marketing Officer",
    },
  ];
  return (
    <>
      <div className="bgc">
        <div className="container">
          <div className="wrapper-customer">
            <div className="our-customer">
              <h4 className="what">What our customer say about this</h4>
            </div>
            <div className="arrow">
              <button className="right">＜</button>
              <button className="left">＞</button>
            </div>
          </div>
          <div className="wrapper-customer-site">
            {products.map((product) => (
              <div key={product.id} className="about-customer">
                <img src={product.img} alt={product.name} />
                <p className="customer-text">{product.text}</p>
                <div className="wrapper-job">
                  <img src={product.avatar} alt={product.name} />
                  <div className="wrapper-end-job">
                    <h5 className="thebuyer">{product.name}</h5>
                    <p className="faunder">{product.job}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Customer;

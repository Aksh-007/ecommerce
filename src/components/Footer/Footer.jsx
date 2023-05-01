import "./Footer.scss";
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
import payment from "../../assets/payments.png"
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="col">
          <div className="title">About</div>
          <div className="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/>Totam
            recusandae iste, et minima iure ut cum laboriosam <br/>consequuntur ipsam
            voluptates.
          </div>
        </div>
        <div className="col">
          <div className="title">Contact</div>
          <div className="c-item">
            <FaLocationArrow />
            <div className="text">
              Koradi Road, Panjara, Nagpur,<br/>Maharashtra, 441111
            </div>
          </div>
          <div className="c-item">
            <FaMobileAlt />
            <div className="text">Phone : 7768940852</div>
          </div>
          <div className="c-item">
            <FaEnvelope />
            <div className="text">Email : akshaybarapatre54@gmail.com</div>
          </div>
        </div>
        <div className="col">
          <div className="title">Categories</div>
          <div className="text">Headphones</div>
          <div className="text">Smart Watches</div>
          <div className="text">Bluetooth Speakers</div>
          <div className="text">Wireless Earbuds</div>
          <div className="text">Home Theater</div>
          <div className="text">Projectors</div>
        </div>
        <div className="col">
          <div className="title">Pages</div>
          <div className="text">Home</div>
          <div className="text">About</div>
          <div className="text">Privacy Policy</div>
          <div className="text">Returns</div>
          <div className="text">Terms & Conditions</div>
          <div className="text">Contact Us</div>
        </div>
      </div>
      <div className="bottom-bar">
        <div className="bottom-bar-content">
            <div className="text">
                MY | Store 2022 CREATED BY AKSHAY BARAPATRE , PREMIUM E-COMMERCE SOLUTIONS.
            </div>
            <img src={payment} alt="payment-img" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;

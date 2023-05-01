import "./Newsletter.scss";
import {FaInstagram,FaLinkedinIn,FaFacebookF,FaGithub} from 'react-icons/fa'
const Newsletter = () => {
  return (
    <div className="newsletter-section">
      <div className="newsletter-content">
        <span className="small-text">Newsletter</span>
        <span className="big-text">Sign Up for latest updates and offers</span>
        <div className="form">
            <input type="text" placeholder="Email Address" />
            <button>Subscribe</button>
        </div>
        <div className="text">Will be used in Accordance with our privacy policy</div>
        <div className="social-icons">
            <div className="icon">
                <FaFacebookF size={14}/>
                <FaGithub size={14}/>
                <FaLinkedinIn size={14}/>
                <FaInstagram size={14}/>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;

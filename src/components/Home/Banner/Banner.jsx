import "./Banner.scss";
import BannerImage from "../../../assets/banner-img.png";
const Banner = () => {
  return (
    <div className="hero-banner">
      <div className="content">
        <div className="text-content">  
            <h1>SALES</h1>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum, rem consectetur facilis iusto consequatur 
            </p>
            <div className="banner-button">
                <div className="read">Read More</div>
                <div className="shop-button">Shop Now</div>
            </div>
        </div>
        <img src={BannerImage} alt="BannerImage" />
      </div>
    </div>
  );
};

export default Banner;

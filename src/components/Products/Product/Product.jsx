import "./Product.scss";
import image from '../../../assets/products/earbuds-prod-1.webp'
const Product = () => {
    return (
    <div className="product-card">
        <div className="image-section">
            <img src={image} alt="earbuds" />
        </div>
        <div className="product-details">
            <div className="name">Product name</div>
            <div className="price">₹ 599</div>
        </div>
    </div>
    );
};

export default Product;

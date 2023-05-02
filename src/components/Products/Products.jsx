import "./Products.scss";
import Product from "./Product/Product";
const Products = ({ productTitle }) => {
  return (
    <div className="products-container">
      {!productTitle && <div className="section-heading">Section Heading</div>}
      <div className="products">
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </div>
  );
};

export default Products;

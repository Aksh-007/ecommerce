// import { useParams } from "react-router-dom";
import "./Category.scss";
import Products from '../Products/Products'

const Category = () => {
//   const { id } = useParams();
  return (
    <div className="category-main-content">
      <div className="layout">
        <div className="title">
            Category Title
        </div>
        <Products productTitle={true}/>
      </div>
    </div>
  );
};

export default Category;

import { useParams } from "react-router-dom";
import "./SingleProduct.scss";
const SingleProduct = () => {
    const {id} = useParams()
    return (
        <div>
            <h1>Single Product id : {id}</h1>
        </div>
    );
};

export default SingleProduct;

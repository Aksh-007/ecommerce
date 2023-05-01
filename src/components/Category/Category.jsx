import { useParams } from "react-router-dom";
import "./Category.scss";

const Category = () =>{
    const {id} = useParams()
    return(
        <div>
            <h1>Category id : {id}</h1>
        </div>
    )
}

export default Category;

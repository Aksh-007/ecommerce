import "./Home.scss";
import Banner from "./Banner/Banner";
import HomeCategory from "./HomeCategory/HomeCategory"
import Products from "../Products/Products";
const Home = () => {
   return(
     <div >
        <Banner/>
        <div className="main-content">
          <div className="layout">
            <HomeCategory/>
            <Products/>
          </div>
        </div>
     </div>
   )
};

export default Home;

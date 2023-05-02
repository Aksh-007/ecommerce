import "./Home.scss";
import Banner from "./Banner/Banner";
import HomeCategory from "./HomeCategory/HomeCategory"
const Home = () => {
   return(
     <div >
        <Banner/>
        <div className="main-content">
          <div className="layout">
            <HomeCategory/>
          </div>
        </div>
     </div>
   )
};

export default Home;

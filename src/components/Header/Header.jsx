import "./Header.scss";
import { TbSearch } from "react-icons/tb";
import { AiOutlineHeart } from "react-icons/ai";
import { CgShoppingCart } from "react-icons/cg";
import { useEffect, useState } from "react";
const Header = () => {
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    const offset = window.scrollY;
    offset >200 ? setScroll(true) : setScroll(false);
  };

  return (
    <header className={`main-header ${scroll ? 'sticky-header':''}`}>
      <div className="header-content">
        <ul className="left">
          <li>Home</li>
          <li>About</li>
          <li>Category</li>
        </ul>
        <div className="center">My | Store</div>
        <div className="right">
          <TbSearch />
          <AiOutlineHeart />
          <span className="cart-icon">
            <CgShoppingCart />
            <span>0</span>
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;

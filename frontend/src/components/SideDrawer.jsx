import "./SideDrawer.css";
import { Link } from "react-router-dom";
const SideDrawer = ({show ,click}) => {
  const sideDrawerClass=["side"];
  if(show){
    sideDrawerClass.push("show");
  }
  return (
    <nav className={sideDrawerClass.join(" ")}>
      <div className="side_logo">
        <h2>Awan Traders</h2>
      </div>
      <ul className="side_links" onClick={click}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/order">Orders</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
        <li>
          <Link to="/addproduct">Add Product</Link>
        </li>
        
      </ul>
    </nav>
  );
};

export default SideDrawer;

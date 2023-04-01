import "./Navbar.css";
import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = ({click}) => {
  const [active,setActive]=useState("");
  return (
    <nav className="navbar">
      <div className="nav_logo">
        <Link to="/" onClick={()=>setActive('')}><h2>Awan Traders</h2></Link>
      </div>
      <ul className="nav_links">
        <li>
          <Link to="/" onClick={()=>setActive("home")}>Home</Link>
          <div className={active==="home"?"active-effect active":"active-effect"}></div>
        </li>
        <li>
          <Link to="/order" onClick={()=>setActive("order")}>Create Order</Link>
          <div className={active==="order"?"active-effect active":"active-effect"}></div>
        </li>
        <li>
          <Link to="/products"  onClick={()=>setActive("product")}>Products</Link>
          <div className={active==="product"?"active-effect active":"active-effect"}></div>
        </li>
        <li>
          <Link to="/addproduct" onClick={()=>setActive("addproduct")}>Add Product</Link>
          <div className={active==="addproduct"?"active-effect active":"active-effect"}></div>
        </li>
      </ul>
      <div className="humburger_menu" onClick={click}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  );
};

export default Navbar;

import "./Product.css";
import { Link } from "react-router-dom";

const Product = ({ name, productId, description, price, image }) => {
  return (
    <div className="product">
      <div className="product_img">
        <img src={image} alt={image} />
      </div>
      <div className="product_info">
        <p className="info_name">{name}</p>
        <p className="info_description">{description}</p>
        <p className="info_price">${price}</p>
        <div className="btn">
          <Link to={`/product/${productId}`} className="info_btn">
            View
          </Link>
          <Link to={`/editproduct/${productId}`} className="edit_btn">
            <i className="fas fa-pencil"></i>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Product;

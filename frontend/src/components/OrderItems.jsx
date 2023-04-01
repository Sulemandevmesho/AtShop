import "./OrderItems.css";
import { Link } from "react-router-dom";
const OrderItems = ({ data }) => {
  const {product}=data;
  return (
    <li className="grid gap-2 m-auto w-full p-4" style={{gridTemplateColumns:"1fr 1fr 2fr 1fr"}}>
      <span>{data.qty}</span>

      <Link to={`/product/${product._id}`}>{product.name} </Link>
      <p>{product.description}</p>
      <b>{product.price}</b>
    </li>
  );
};

export default OrderItems;

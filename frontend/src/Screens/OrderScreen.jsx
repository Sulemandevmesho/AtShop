import { useSelector, useDispatch } from "react-redux";
import { allProducts } from "../redux/actions/productAction";

import Product from "../components/Product";
import { useEffect } from "react";
import './OrderScreen.css'
const OrderScreen = () => {
  const getAllProducts = useSelector((state) => state.getAllProducts);
  const { loading, products, error } = getAllProducts;
  console.log(products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(allProducts());
  }, [dispatch]);
  return (
    <div className="productscreen">
      {loading ? (
        <h2>Loaging</h2>
      ) : error ? (
        <h2>{error}</h2>
      ) : (
        <div className="products">
          {products.map((product, index) => (
            <Product
              key={index}
              productId={product._id}
              name={product.name}
              price={product.price}
              description={product.description}
              image={product.image}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default OrderScreen;

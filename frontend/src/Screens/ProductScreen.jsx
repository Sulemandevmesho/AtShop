import { useEffect, useState } from "react";

import { useParams, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { aProduct } from "../redux/actions/productAction";
//import Product from "../components/Product";

const ProductScreen = () => {
  const { id } = useParams();
 
  const dispatch = useDispatch();
  
  const Product = useSelector((state) => state.getAProduct);

  const { loading, error,product } = Product;
  useEffect(() => {
    if (product && id !== product._id) {
       dispatch(aProduct(id));
    }
  }, []);

  //console.log(Product)
  return (
    <div>
      {loading ? (
        <h2>loading</h2>
      ) : error ? (
        error
      ) : (
        <div className="product">
          <div className="product_left">

          </div>
          <div className="product_right">
            <p className="info_name">{product.name}</p>
            <p className="info_description">{product.description}</p>
            <p className="info_price">${product.price}</p>
           
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductScreen;

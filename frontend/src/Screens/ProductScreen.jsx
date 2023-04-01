import { useEffect, useState } from "react";

import { useParams, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { aProduct } from "../redux/actions/productAction";
import {addItem} from "../redux/actions/orderAction"
import Loading from "../components/Loading";
import PSCSS from "./ProductScreen.module.css";

const ProductScreen = () => {
  const { id } = useParams();
  const [qty,setQty]=useState(1);
  const dispatch = useDispatch();

  const Product = useSelector((state) => state.getAProduct);
  const { loading, error, product } = Product;
  useEffect(() => {
    if (product && id !== product._id) {
      dispatch(aProduct(id));
    }
  }, []);
  return (
    <div>
      {loading ? (
        <Loading />
      ) : error ? (
        error
      ) : (
        product && (
          <div className={["flex p-4", PSCSS.product].join(" ")}>
            <div className={["flex flex-[.7]", PSCSS.product_left].join(" ")}>
              <img src={product.image} className='w-80' alt={product.name} />
            </div>
            <div
              className={[
                "flex flex-[.3] flex-col ml-4 h-full bg-white p-2 float-left border-solid border-gray-300 border",
                PSCSS.product_right,
              ].join(" ")}
            >
              <p className={PSCSS.info_name}>{product.name}</p>
              <p className={PSCSS.info_description}>{product.description}</p>
              <p className={PSCSS.info_price}>${product.price}</p>
              <input type="text" className="border border-solid m-2 rounded-md border-gray-300 text-base font-bold" name="qty" placeholder="quantity"  onChange={(e)=>setQty(e.target.value)}/>
              <input type="button" onClick={()=>dispatch(addItem(id,qty))} className=" border border-solid rounded-md border-gray-300 mb-2 bg-black text-white hover:bg-yellow-400 hover:text-black" value="Add to cart" />
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default ProductScreen;

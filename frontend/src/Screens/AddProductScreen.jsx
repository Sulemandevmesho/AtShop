import { useEffect, useState, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import {
  postProduct,
  aProduct,
  editProduct,
} from "../redux/actions/productAction";
import AddProductCss from "./AddProductScreen.module.css";
const AddProductScreen = () => {
const inRef=useRef(null);
  const dispatch = useDispatch();
  const [product, setProduct] = useState({
    pid:'',
    name: "",
    price: 0,
    countInStock: 0,
    description: "",
    category: "",
    buy: 0,
    image: "",
  });

  const [role, setRole] = useState();
  const navigate = useNavigate();
  const { id } = useParams();
  const getEditProduct = async () => {
    await dispatch(aProduct(id));
     setProduct({
      pid:id,
      name: Product.name,
      price: Product.price,
      countInStock: Product.countInStock,
      description: Product.description,
      category: Product.category,
      buy: Product.buy,
      image: Product.image,
    });
    setRole("Edit");
    // console.log(product);
  };
  const res = useSelector((state) => state.getAProduct);
  const { loading, product: Product, error } = res;
 
  useEffect(() => {
    if (id) {
      getEditProduct();
    } else {
      setRole("Add");
    }
  }, [role, dispatch]);
  const selectChange = (e) => {
    let { value } = e.target;
    setProduct((product) => {
      return {
        ...product,
        category: value,
      };
    });
  };
  const handleFile = (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    setProduct((product) => {
      return {
        ...product,
        image: file,
      };
    });
  };
  const handlechange = (e) => {
    let { name, value } = e.target;

    //console.log(value);
    setProduct((product) => {
      return {
        ...product,
        [name]: value,
      };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    //editProduct not define at yet so firt creat edit product
    role === "Add" ? dispatch(postProduct(product)) : dispatch(editProduct(product));
    navigate("/order");
    //console.log(product);
  };
  const reset = (e) => {
    e.preventDefault();
    setProduct({
      name: "",
      price: 0,
      countInStock: 0,
      description: "",
      category: "",
      buy: 0,
      image: "",
    });
  };
  return (
    <div className={AddProductCss.addscreen}>
      <form onSubmit={handleSubmit}  className={["min-h-full",AddProductCss.form].join(" ")}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={product.name}
          onChange={handlechange}
        />

        <label htmlFor="description">Description</label>
        <input
          type="text"
          id="description"
          name="description"
          value={product.description}
          onChange={handlechange}
        />

        <label htmlFor="countInStock">Quantity</label>
        <input
          type="number"
          id="countInStock"
          name="countInStock"
          value={product.countInStock}
          onChange={handlechange}
        />

        <label htmlFor="price">Price</label>
        <input
          type="number"
          id="price"
          name="price"
          value={product.price}
          onChange={handlechange}
        />

        <label htmlFor="buy">Buy</label>
        <input
          type="number"
          id="buy"
          name="buy"
          value={product.buy}
          onChange={handlechange}
        />
        <label htmlFor="category">Cartogory</label>
        <select
          name="category"
          id="category"
        >
          <option>Select AC/DC</option>
          <option onClick={selectChange} value="AC">AC</option>
          <option onClick={selectChange} value="DC">DC</option>
        </select>
        <input type="file" name="image" onChange={handleFile} ref={inRef} />
        <div className={AddProductCss.btngroup}>
          <button type="submit" className={AddProductCss.btnsubmit}>
            {role}
          </button>
          {/* <img src={Product.image} alt="f" /> */}
          <input
            type="reset"
            className={AddProductCss.btnreset}
            value="Reset"
            onClick={reset}
          />
        </div>
      </form>
    </div>
  );
};

export default AddProductScreen;

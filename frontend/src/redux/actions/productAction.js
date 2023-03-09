import * as actionTypes from "../constants/productConstants";
import axios from "axios";

export const allProducts = () => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.GET_PRODUCTS_REQUEST });
    const { data } = await axios.get("/api/products");
    dispatch({
      type: actionTypes.GET_PRODUCTS_SUCSECSS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.GET_PRODUCTS_FAIL,
      payload:
        error.response && error.response.data.msg
          ? error.response.data.msg
          : error.message,
    });
  }
};
export const aProduct = (id) => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.GET_A_PRODUCT_REQUEST,
    payload:{} });
    const { data } = await axios.get(`/api/products/${id}`);
    // console.log(data);
    dispatch({
      type: actionTypes.GET_A_PRODUCT_SUCSECSS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.GET_A_PRODUCT_FAIL,
      payload:
        error.response && error.response.data.msg
          ? error.response.data.msg
          : error.message,
    });
  }
};
export const postProduct = (product) => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.POST_A_PRODUCT_REQUEST });
    const formData = new FormData();
    formData.append("name", product.name); //append the values with key, value pair
    formData.append("description", product.description);
    formData.append("countInStock", product.countInStock);
    formData.append("price", product.price);
    formData.append("buy", product.buy);
    formData.append("category", product.category);
    formData.append("image", product.image);

   
    await axios({
      method: 'post',
      url: '/api/products/',
      data: formData,
      headers: {
          "Content-Type": "multipart/form-data",
      }
  });
    console.log(formData.getAll());
    dispatch({
      type: actionTypes.POST_A_PRODUCT_SUCSECSS,
      payload: { msg: "success" },
    });
  } catch (error) {
    dispatch({
      type: actionTypes.POST_A_PRODUCT_FAIL,
      payload:
        error.response && error.response.data.msg
          ? error.response.data.msg
          : error.message,
    });
  }
};
export const editProduct = (product) => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.EDIT_A_PRODUCT_REQUEST });
    const formData = new FormData();
    formData.append("name", product.name); //append the values with key, value pair
    formData.append("id", product.pid); 
    formData.append("description", product.description);
    formData.append("countInStock", product.countInStock);
    formData.append("price", product.price);
    formData.append("buy", product.buy);
    formData.append("category", product.category);
    formData.append("image", product.image);

    
    await axios({
      method: 'put',
      url: '/api/products/',
      data: formData,
      headers: {
          "Content-Type": "multipart/form-data",
      }
  });
 
    console.log(formData.getAll());
    dispatch({
      type: actionTypes.EDIT_A_PRODUCT_SUCSECSS,
      payload: { msg: "success" },
    });
  } catch (error) {
    dispatch({
      type: actionTypes.EDIT_A_PRODUCT_FAIL,
      payload:
        error.response && error.response.data.msg
          ? error.response.data.msg
          : error.message,
    });
  }
};

import * as actionTypes from "../constants/orderConstant";
import axios from "axios";

export const getAllOrders = () => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.GET_ORDERS_REQUEST });
    const { data } = await axios.get("api/orders");
    
    dispatch({
      type: actionTypes.GET_ORDERS_SUCCESS,
      payload: data,
    });
    
  } catch (error) {
    dispatch({
      type: actionTypes.GET_ORDERS_FAIL,
      payload:
        error.response && error.response.data.msg
          ? error.response.data.msg
          : error.message,
    });
  }
};
export const getOrder = (id) => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.GET_A_ORDER_REQUEST });
    const { data } = await axios.get(`/api/orders/${id}`);
    dispatch({
      type: actionTypes.GET_A_ORDER_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.GET_A_ORDER_FAIL,
      error:
        error.response && error.response.data.msg
          ? error.response.data.msg
          : error.message,
    });
  }
};

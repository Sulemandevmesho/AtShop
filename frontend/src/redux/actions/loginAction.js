import * as actionTypes from "../constants/loginConstants";
import axios from "axios";

export const login = (detail) => async (dispach,getState) => {
  
  dispach({ type: actionTypes.LOGIN_REQUEST });
  try {
    const {data} = await axios.post("/api/user/login", detail);
    //console.log(data);
    dispach({
      type: actionTypes.LOGIN_SUCCESS,
      payload: data,
    });
    localStorage.setItem("host",JSON.stringify(getState().host.host))
  } catch (error) {
    console.log(error);
    dispach({
      type: actionTypes.LOGIN_FAIL,
      error:
        error.response && error.response.data.msg
          ? error.response.data.msg
          : error.message,
    });
  }
};

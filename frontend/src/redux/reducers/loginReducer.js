import * as actionType from "../constants/loginConstants";

export const loginReducer = (state = { host: [] }, action) => {
  switch (action.type) {
    case actionType.LOGIN_REQUEST:
      return {
        loading: true,
        host: [],
      };
    case actionType.LOGIN_SUCCESS:
        
      return {
        loading: false,
        host: action.payload,
      };
    case actionType.LOGIN_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

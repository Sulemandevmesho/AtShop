import * as actionTypes from "../constants/orderConstant";

export const getOrdersReducers = (state = { orders: [] }, action) => {
  switch (action.type) {
    case actionTypes.GET_ORDERS_REQUEST:
      return {
        loading: true,
        orders: [],
      };
    case actionTypes.GET_ORDERS_SUCCESS:
      return {
        loading: false,
        orders: action.payload,
      };
    case actionTypes.GET_ORDERS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
export const getOrderReducers=(state={order:[]},action)=>{
  switch (action.type) {
    case actionTypes.GET_A_ORDER_REQUEST:
      return{
        loading:true,
        order:[]
      }
      case actionTypes.GET_A_ORDER_SUCCESS:
        return{
          loading:false,
          order:action.payload
        }
        case actionTypes.GET_A_ORDER_FAIL:
          return {
            loading:false,
            error:action.payload,
          }
    default:
      return state;
  }
}

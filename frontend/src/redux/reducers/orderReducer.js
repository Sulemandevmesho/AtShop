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
export const getOrderReducers = (state = { order: [] }, action) => {
  switch (action.type) {
    case actionTypes.GET_A_ORDER_REQUEST:
      return {
        loading: true,
        order: [],
      };
    case actionTypes.GET_A_ORDER_SUCCESS:
      return {
        loading: false,
        order: action.payload,
      };
    case actionTypes.GET_A_ORDER_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const addItemReducer = (state = { cartItem: [] }, action) => {
  switch (action.type) {
    case actionTypes.ADD_ORDER_ITEM:
      const item = action.payload;
      const existItem = state.cartItem.find((x) => x.product === item.product);
      if (existItem) {
        return {
          ...state,
          cartItem: state.cartItem.map((x) =>
            x.product === existItem.product ? item : x
          ),
        };
      } else {
        return {
          ...state,
          cartItem: [...state.cartItem, item],
        };
      }

    case actionTypes.REMOVE_ORDER_ITEM:
      return {
        ...state,
        cartItems: state.cartItem.filter((x) => x.product !== action.payload),
      };
    default:
      return state;
  }
};
export const SelectUser = (state = { customer: [] }, action) => {
  switch (action.type) {
    case actionTypes.SELECT_CUSTOMER:
      return {
        customer: action.payload,
      };

    default:
      return state;
  }
};

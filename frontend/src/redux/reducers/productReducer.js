import * as actionTypes from "../constants/productConstants";
export const getProductsReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case actionTypes.GET_PRODUCTS_REQUEST:
      return {
        loading: true,
        products: [],
      };
    case actionTypes.GET_PRODUCTS_SUCSECSS:
      return {
        loading: false,
        products: action.payload,
      };
    case actionTypes.GET_PRODUCTS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default: {
      return state;
    }
  }
};
export const getAProductReducer = (state = { product: {} }, action) => {
  switch (action.type) {
    case actionTypes.GET_A_PRODUCT_REQUEST:
      return {
        loading: true,
        product:action.payload
      };
    case actionTypes.GET_A_PRODUCT_SUCSECSS:
      return {
        loading: false,
        product: action.payload,
      };
    case actionTypes.GET_A_PRODUCT_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case actionTypes.GET_A_PRODUCT_RESET:
      return {
        loading: false,
        product: {},
      };
    default: {
      return state;
    }
  }
};

export const postProductReducer = (state = { posted: {} }, action) => {
  switch (action.type) {
    case actionTypes.POST_A_PRODUCT_REQUEST:
      return {
        loading: true,
      };
    case actionTypes.POST_A_PRODUCT_SUCSECSS:
      return {
        loading: false,
        msg: action.payload,
      };
    case actionTypes.POST_A_PRODUCT_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export const editProductReducer = (state = { edit: {} }, action) => {
  switch (action.type) {
    case actionTypes.EDIT_A_PRODUCT_REQUEST:
      return {
        loading: true,
      };
    case actionTypes.EDIT_A_PRODUCT_SUCSECSS:
      return {
        loading: false,
        msg: action.payload,
      };
    case actionTypes.EDIT_A_PRODUCT_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

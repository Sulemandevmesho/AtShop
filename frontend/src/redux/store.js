import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
//reducers
import {
  getProductsReducer,
  getAProductReducer,
} from "../redux/reducers/productReducer";
//import { cartReducer } from "./reducers/cartReducer";
import { loginReducer } from "./reducers/loginReducer";
import {
  getOrdersReducers,
  getOrderReducers,
  addItemReducer,
  SelectUser,
} from "./reducers/orderReducer";

const reducer = combineReducers({
  getAllProducts: getProductsReducer,
  getAProduct: getAProductReducer,
  cart: addItemReducer,
  getOrders: getOrdersReducers,
  order: getOrderReducers,
  customer: SelectUser,
  host: loginReducer,
});
const middleware = [thunk];
const cartFromlocal = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : [];
const customerFromlocal = localStorage.getItem("Customer_Detail")
  ? JSON.parse(localStorage.getItem("Customer_Detail"))
  : [];
const hostFromlocal = localStorage.getItem("host")
  ? JSON.parse(localStorage.getItem("host"))
  : [];
const INITIAL_STATE = {
  order: {
    order: [],
  },
  customer: { customer: customerFromlocal },
  cart: {
    cartItem: cartFromlocal,
  },
  host: {
    host: hostFromlocal,
  },
};
const store = createStore(
  reducer,
  INITIAL_STATE,
  composeWithDevTools(applyMiddleware(...middleware))
);
export default store;

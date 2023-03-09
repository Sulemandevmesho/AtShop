import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
//reducers
import {
  getProductsReducer,
  getAProductReducer,
} from "../redux/reducers/productReducer";
import { cartReducer } from "./reducers/cartReducer";
import { getOrdersReducers,getOrderReducers } from "./reducers/orderReducer";

const reducer = combineReducers({
  getAllProducts: getProductsReducer,
  getAProduct: getAProductReducer,
  cart: cartReducer,
  getOrders: getOrdersReducers,
  order:getOrderReducers,
});
const middleware = [thunk];
const INITIAL_STATE={
    
    order:{
      order:[]
    }
}
const store = createStore(
  reducer,
  INITIAL_STATE,
  composeWithDevTools(applyMiddleware(...middleware))
);
export default store;

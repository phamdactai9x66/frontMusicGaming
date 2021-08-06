
import { combineReducers } from "redux";
import reducerCart from "./cart/reducerCart";

const conbineAllReducer = combineReducers({
    cart: reducerCart
})
export default conbineAllReducer;
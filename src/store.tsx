import { createStore, applyMiddleware } from "redux";
import AllReducer from "./redux/rootRedux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const firstMidd = (store: any) => (next: any) => (action: any) => {

    return next(action);
}

const store = createStore(AllReducer, composeWithDevTools(applyMiddleware(firstMidd, thunk)));
export default store;
import { configureStore } from "@reduxjs/toolkit";
import allReducer from "./redux/rootReducer";

const firstMidd = (store: any) => (next: any) => (action: any) => {
    return next(action)
}

const storeGlobal = configureStore({
    reducer: allReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(firstMidd),
})
export default storeGlobal
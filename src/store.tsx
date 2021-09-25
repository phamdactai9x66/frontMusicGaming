import { configureStore } from "@reduxjs/toolkit";
import allReducer from "./redux/rootReducer";
import { persistStore } from 'redux-persist'


const firstMidd = (store: any) => (next: any) => (action: any) => {
    return next(action)
}


const storeGlobal = configureStore({
    reducer: allReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(firstMidd),
})

export const storePersiser = persistStore(storeGlobal)
export default storeGlobal
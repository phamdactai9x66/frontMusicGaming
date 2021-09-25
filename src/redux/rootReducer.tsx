import { combineReducers } from "redux";
import audioReducer from "./audio/actionAudio"
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ["audio"]
}


const allReducer = combineReducers({
    audio: audioReducer
})

const persistedReducer = persistReducer(persistConfig, allReducer)
export default persistedReducer
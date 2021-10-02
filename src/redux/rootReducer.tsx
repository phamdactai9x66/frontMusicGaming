import { combineReducers } from "redux";
import audioReducer from "./audio/actionAudio"
import actionUser from "./user/actionUser"
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ["audio", "user"]
}


const allReducer = combineReducers({
    audio: audioReducer,
    user: actionUser
})

const persistedReducer = persistReducer(persistConfig, allReducer)
export default persistedReducer
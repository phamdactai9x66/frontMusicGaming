import React from "react";
import { combineReducers } from "redux";
import audioReducer from "./audio/actionAudio"

const allReducer = combineReducers({
    audio: audioReducer
})
export default allReducer
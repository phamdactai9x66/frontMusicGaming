import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import stateAudio, { formStateAudio } from "./stateAudio";

export const getlistAudio: any = createAsyncThunk("audio/getListAUdio", async (params, thunkAPi) => {
    return { name: "pham dac tai" }
})

const sliceAudio = createSlice({
    name: "audio",
    initialState: stateAudio,
    reducers: {
        playSong(state: formStateAudio, action: PayloadAction) {

        },
        pauseSong(state: formStateAudio, action: PayloadAction) {
            console.log("pause song");
        }
    },
    extraReducers: {
        [getlistAudio.fulfilled]: (state: formStateAudio, action) => {

        }
    }
})

export const { playSong, pauseSong } = sliceAudio.actions;
export default sliceAudio.reducer

import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import stateUser, { formStateUser } from "./stateUser";

// export const getlistAudio: any = createAsyncThunk("audio/getListAUdio", async (params, thunkAPi) => {
//     return { name: "pham dac tai" }
// })

const sliceUser = createSlice({
    name: "user",
    initialState: stateUser,
    reducers: {
        saveInfo(state: formStateUser, action: PayloadAction<any>) {
            const { token, user } = action.payload
            state.token = token;
            state.user = user
        }

    },
    extraReducers: {
        // [getlistAudio.fulfilled]: (state: formStateUser, action) => {

        // }
    }
})

export const { saveInfo } = sliceUser.actions;
export default sliceUser.reducer

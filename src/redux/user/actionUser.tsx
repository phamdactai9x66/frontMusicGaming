import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import stateUser, { formStateUser } from "./stateUser";


const sliceUser = createSlice({
    name: "user",
    initialState: stateUser,
    reducers: {
        saveInfo(state: formStateUser, action: PayloadAction<any>) {
            const { token, user } = action.payload
            state.token = token;
            state.user = user
        },
        Logout(state: formStateUser, action: PayloadAction) {
            state.token = '';
            state.user = ''
        }

    },
    extraReducers: {
        // [getlistAudio.fulfilled]: (state: formStateUser, action) => {

        // }
    }
})

export const { saveInfo, Logout } = sliceUser.actions;
export default sliceUser.reducer

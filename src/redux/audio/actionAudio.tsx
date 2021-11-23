import { createSlice, PayloadAction, createAsyncThunk, current } from "@reduxjs/toolkit";
import stateAudio, { formStateAudio } from "./stateAudio";
import songApi from "api/songApi";
import { tranFormDataId } from "component/MethodCommon";
export const getlistAudio: any = createAsyncThunk("audio/getListAUdio", async (params, thunkAPi) => {
    const getAllSong = await songApi.getAll({});
    return getAllSong?.data
})

const sliceAudio = createSlice({
    name: "audio",
    initialState: stateAudio,
    reducers: {
        playSong(state: formStateAudio, action: PayloadAction<{ _id: string, listIdSong?: any }>) {
            const { _id, listIdSong } = action.payload;
            const findSong = state.likstStaticAudio[_id];
            // debugger
            if (listIdSong && listIdSong.length) {
                let saveIdSong: any[] = []
                listIdSong.forEach((currentAudio: any) => {
                    if (state.likstStaticAudio[currentAudio?.id_Song]) {
                        return saveIdSong = [...saveIdSong, state.likstStaticAudio[currentAudio?.id_Song]];
                    }
                    if (state.likstStaticAudio[currentAudio?._id]) {
                        return saveIdSong = [...saveIdSong, state.likstStaticAudio[currentAudio?._id]];
                    }
                    if (state.likstStaticAudio[currentAudio]) {
                        return saveIdSong = [...saveIdSong, state.likstStaticAudio[currentAudio]];
                    }
                })
                state.listAudio = saveIdSong
            } else {
                state.listAudio = []
            }
            if (findSong) {
                state.audio = findSong;
                state.display = !state.display;
                state.playing = true
                state.playRealTime = true
            }
        },
        pauseSong(state: formStateAudio, action: PayloadAction) {
            state.display = false;
        },
        pauseSongRealTime(state: formStateAudio, action: PayloadAction) {
            state.playRealTime = false;
        },
        renderSong(state: formStateAudio, action: PayloadAction) {
            state.display = true;
        },
        pausePlaying(state: formStateAudio, action: PayloadAction) {
            state.playing = false;
        }
    },
    extraReducers: {
        [getlistAudio.fulfilled]: (state: formStateAudio, action) => {
            state.likstStaticAudio = tranFormDataId([...action.payload])
            // console.log(action.payload)
        }
    }
})

export const { playSong, pauseSong, renderSong, pausePlaying, pauseSongRealTime } = sliceAudio.actions;
export default sliceAudio.reducer

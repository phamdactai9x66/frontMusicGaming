import React from "react";

export interface formStateAudio {
    audio: any,
    listAudio: any,
    display: boolean,
    likstStaticAudio: any,
    playing: boolean
}

const stateAudio: formStateAudio = {
    audio: "",
    listAudio: [],
    display: false,
    likstStaticAudio: [],
    playing: false
}

export default stateAudio
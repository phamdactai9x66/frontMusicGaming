import React from "react";

export interface formStateAudio {
    audio: any,
    listAudio: any,
    display: boolean
}

const stateAudio: formStateAudio = {
    audio: "",
    listAudio: [],
    display: false
}

export default stateAudio
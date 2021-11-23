import React from 'react'
import ListMusicDetail from "./listMusicDetail";
import { } from "component/MethodCommon";


interface MusicDetailIF<T> {
    state: any | T,
}

const MusicDetail: React.FC<MusicDetailIF<any>> = ({ state, ...props }) => {
    return (
        <>
            <div className="musicDetail">
                <div className="box-music">
                {state.data.map((current: any, index: number) => {
                    const { id_Song } = current;
                    const findSong = state.dataSong[id_Song];
                    return (
                        <ListMusicDetail current={findSong} listIdSong={state.data} index={index} />
                    )
                })}
            </div>
            </div>
        </>
    )
}

export default MusicDetail

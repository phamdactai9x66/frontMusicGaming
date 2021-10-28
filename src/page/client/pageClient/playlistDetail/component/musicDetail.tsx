import React, { useEffect, useState } from 'react'
import ListMusicDetail from "./listMusicDetail";
import { } from "component/MethodCommon";


interface MusicDetail<T> {
    state: any

}

const MusicDetail: React.FC<MusicDetail<any>> = ({ state, ...props }) => {
    return (
        <>
            <div className="musicDetail">
                {state.data.map((current: any, index: number) => {
                    const { id_Song } = current;
                    const findSong = state.dataSong[id_Song];
                    return (
                        <ListMusicDetail current={findSong} index={index} />
                    )
                })}
            </div>
        </>
    )
}

export default MusicDetail

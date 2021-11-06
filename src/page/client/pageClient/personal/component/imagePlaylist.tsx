import React, { useEffect, useState } from 'react'
import { RouteComponentProps } from "react-router-dom";
import { HandleGet, tranFormDataId } from "component/MethodCommon";
import { variableCommon } from "component/variableCommon";
import songPlaylistApi from "api/songPlaylistApi"
import songApi from "api/songApi";


interface ImagePlaylist<T> {
    idPlaylist: string
}

const ImagePlaylist: React.FC<ImagePlaylist<any>> = ({ idPlaylist, ...props }) => {
    const [state, setstate] = useState({ display: true, data: [], dataSong: [] });

    useEffect(() => {
        (async () => {
            if (!state.display) return;

            const query = {
                id_User_Playlist: idPlaylist
            }
            const [data, error] = await HandleGet(songPlaylistApi.getAll, query);
            const getAllSong = await songApi.getAll<object>({});

            if (error || data.status === variableCommon.statusF) return
            setstate({ display: true, data: data.data, dataSong: tranFormDataId(getAllSong.data) })
        })()
        return () => {
            setstate(value => ({ ...value, display: false }))
        }
    }, [])
    const getImage = (): JSX.Element => {
        if (!state.data.length) return <img src="https://i.ytimg.com/vi/Yije8O6eGn8/maxresdefault.jpg" alt="" />
        const { id_Song } = (state.data as any).at(-1);
        return <img src={(state.dataSong[id_Song] as any)?.image} alt="" />
    }
    return (
        <>
            <figure>
                {getImage()}
            </figure>
        </>
    )
}

export default ImagePlaylist

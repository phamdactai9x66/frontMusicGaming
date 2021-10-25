import React, { memo, useEffect, useState } from 'react'
import SongArtistAPi from "api/songArtistAPi";
import { HandleGet, tranFormDataId } from "component/MethodCommon";
import ArtistApi from "api/ArtistApi";
import { current } from '@reduxjs/toolkit';

interface NameSongArtist<T> {
    _id?: string
}

const NameSongArtist: React.FC<NameSongArtist<any>> = ({ ...props }) => {
    const [handleArtist, sethandleArtist] = useState({ data: "", display: true });
    useEffect(() => {
        (async () => {
            if (!handleArtist.display) return;
            const query = {
                id_Songs: props?._id
            }
            const [data, error] = await HandleGet(SongArtistAPi.getAll, query);
            const [dataArtist, errorArtist] = await HandleGet(ArtistApi.getAll, {});
            // debugger;
            const dataTranFormArtist = tranFormDataId(dataArtist?.data);
            let findArtist: any[] = []
            data?.data.forEach((currenA: any) => {
                const { id_Artist } = currenA;
                if (dataTranFormArtist[id_Artist]) {
                    findArtist.push(dataTranFormArtist[id_Artist])
                }
            })
            sethandleArtist({ display: true, data: getName(findArtist) })
        })()
        return () => {
            sethandleArtist(value => ({ ...value, display: false }))
        }
    }, [])
    const getName = (data: any): string => {
        if ([null, undefined].includes(data)) return "";

        return data.map((curren: any) => {
            const { first_Name, last_Name } = curren;
            return `${first_Name} ${last_Name}`
        }).join(", ")
    }
    return (
        <>

            <span> {handleArtist.data ? handleArtist.data : 'Ed Sheeran'}</span>
        </>
    )
}

export default memo(NameSongArtist)

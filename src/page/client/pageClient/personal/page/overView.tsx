import React, { useState } from 'react'
import { MdNavigateNext } from 'react-icons/md';
import { PropsPersonal } from "../index";
import LikeSong from "../component/likeSong";
import ListArtist from "./listArtist";
import PlaylistSong from "./playlistSong";
interface OverView<T> extends PropsPersonal {

}

const OverView: React.FC<OverView<any>> = ({ ...props }) => {
    const [page, setpage] = useState<string>("");

    return (
        <>
            <h4 className="title_all">Bài hát <MdNavigateNext className="icon" /></h4>
            <LikeSong />
            <PlaylistSong />
            <ListArtist />
        </>
    )
}

export default OverView

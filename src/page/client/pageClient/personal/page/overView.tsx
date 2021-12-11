import React from 'react'
import { MdNavigateNext } from 'react-icons/md';
import { PropsPersonal } from "../index";
import LikeSong from "../component/likeSong";
// import ListArtist from "./listArtist";
import PlaylistSong from "./playlistSong";
interface OverViewIF<T> extends PropsPersonal {

}

const OverView: React.FC<OverViewIF<any>> = ({ ...props }) => {
    // const [page, setpage] = useState<string>("");

    return (
        <>
            <h4 className="title_all">Bài hát</h4>
            {/* <MdNavigateNext className="icon" /> */}
            <LikeSong />
            <PlaylistSong />
            {/* <ListArtist /> */}
        </>
    )
}

export default OverView

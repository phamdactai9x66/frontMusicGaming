import React, { useState } from 'react'
import { MdNavigateNext } from 'react-icons/md';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Tabed from './component/tabed';
import OverView from "./page/overView"
import ListLikeSong from "./page/listLikeSong"
import ListArtist from "./page/listArtist";
import Playlist from "./page/playlistSong";
import Upload from "./page/upload"
interface IndexPersonal<T> {

}
export const AllPage = {
    OverView: 'OverView',
    Music: 'Music',
    Singer: 'Singer',
    Playlist: 'Playlist',
    Upload: 'Upload'
}
export interface PropsPersonal {
    navigatePage: (page: string) => void
}

const IndexPersonal: React.FC<IndexPersonal<any>> = ({ ...props }) => {
    const [page, setpage] = useState<string>("");
    const renderPage = <T extends string>(page?: T) => {
        switch (page) {
            case AllPage.OverView: return <OverView navigatePage={navigatePage} />
            case AllPage.Music: return <ListLikeSong />
            case AllPage.Playlist: return <Playlist />
            case AllPage.Upload: return <Upload />
            case AllPage.Singer: return <ListArtist />
            default: return <OverView navigatePage={navigatePage} />
        }
    }
    const navigatePage = (page: string): void => {
        if (!page) return
        setpage(page)
    }
    return (
        <>
            <div className="Personal">
                <Tabed navigatePage={navigatePage} />
                <div className="overview">
                    {renderPage(page)}
                </div>

            </div>
        </>
    )
}

export default IndexPersonal

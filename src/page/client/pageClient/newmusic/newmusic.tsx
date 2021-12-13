import React from 'react'
// import {Link} from "react-router-dom"
import {ReactComponent as Play} from './play.svg'
// import artistApi from 'api/ArtistApi';
// import songApi from 'api/songApi';
// import { tranFormDataId } from "component/MethodCommon";
import ListMusicNew from "./component/listSongNew";
import { useSelector } from 'react-redux';
import { formStateUser } from 'redux/user/stateUser';

interface NewmusicIF<T> {
    userState: any | T,
}

const Newmusic: React.FC<NewmusicIF<any>> = ({ ...props }) => {
    document.title = "Nhạc mới - Music Game";
    const userState = useSelector<{ user: any }>(state => state.user) as formStateUser;
window.scroll(0,0)

    return (
        <div className="container-nhacmoi">
            <div className ="title-nhacmoi-tt grid-2">
                <div className="text-title-nhacmoi-tt">
                    <h3 className="color-nhacmoi-tt title_all">Nhạc mới</h3>
                </div>
                {/* <div className="div-svg">
                    <Play className="svg color-nhacmoi-tt" />
                </div> */}
            </div>
            <div className="list-box-musicChart">
               
                <div className="list-music">
                    <div className="main1">
                        <ListMusicNew userState={userState} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Newmusic
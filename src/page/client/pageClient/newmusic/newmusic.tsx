import React, { useEffect,useState } from 'react'
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
    // const [songs, setSongs] = useState([]);
    // const [songsTransform, setSongsTransform] = useState([]);
    // const [artists, setArtists] = useState([]);
    const userState = useSelector<{ user: any }>(state => state.user) as formStateUser;


    // const [anchor, setAnchor] = useState(null);
    // const openPopover = (event: any) => {
    //     setAnchor(event.currentTarget);
    // };
    // const [anchor2, setAnchor2] = useState(null);
    // const openPopover2 = (event: any) => {
    //     setAnchor2(event.currentTarget);
    // };

    // const getSongs = async () => {
    //     const responseSong = await songApi.getAll({});
    //     const resSongsTransform = await tranFormDataId(responseSong.data);
    //     setSongs(responseSong.data);
    //     setSongsTransform(resSongsTransform);

    //     const dataArtists = await artistApi.getAll({});
    //     setArtists(dataArtists.data);
    // }

    // useEffect(() => {
    //     getSongs();
    // }, []);

    return (
        <div className="container-nhacmoi">
            <div className ="title-nhacmoi-tt grid-2">
                <div className="text-title-nhacmoi-tt">
                    <h3 className="color-nhacmoi-tt title_all">Nhạc mới</h3>
                </div>
                <div className="div-svg">
                    <Play className="svg color-nhacmoi-tt" />
                </div>
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
import React, { useEffect, useState } from 'react';
import { MdNavigateNext } from 'react-icons/md';
import { formStateUser } from 'redux/user/stateUser';
import { useSelector } from 'react-redux';
import playlistApi from 'api/playlistApi';
import songApi from 'api/songApi';
import { tranFormDataId } from "component/MethodCommon";
import artistApi from 'api/ArtistApi';


interface Trending<T> {
    userState: any,
}

const Trending: React.FC<Trending<any>> = ({ ...props }) => {
    const [playlists, setPlaylists] = useState([]);
    //const userState = useSelector<{ user: any }>(state => state.user) as formStateUser;
    //const [songs, setSongs] = useState([]);
    


    const getPlaylists = async () => {
        const response = await playlistApi.getAll();
        //console.log(response);
        if (!response || response.status === "failed") {
            console.error("Get playlist failed.");
            return;
        }
        const { data } = response;
        setPlaylists(data)
    }
    // const getSongs = async () => {
    //     const responseSong = await songApi.getAll({});
    //     const resSongsTransform = await tranFormDataId(responseSong.data);
    //     setSongs(responseSong.data);
    //     setSongsTransform(resSongsTransform);

    //     const dataArtists = await artistApi.getAll( {} );
    //     setArtists(dataArtists.data);
    // }

    useEffect(() => {
        getPlaylists();
        //getSongs();
    }, []);

    return (
        <div className="trending">
            {playlists.length !== 0 && playlists.map((item: any) => (
                <div className="list-slider">
                    <h4 className="title_all">{item.name} <MdNavigateNext className="icon" /></h4>
                </div>
            ))}
        </div>
    )
}

export default Trending

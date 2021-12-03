import React, { useEffect,useState } from 'react';
import { useSelector } from 'react-redux';
import { formStateUser } from 'redux/user/stateUser';
import playlistApi from 'api/playlistApi';
import { Link } from "react-router-dom";
import { AiOutlineDownload, AiOutlineLink } from 'react-icons/ai';
import { BiHeart } from 'react-icons/bi';
import { FiPlayCircle } from 'react-icons/fi';
import { HiOutlineDotsCircleHorizontal } from 'react-icons/hi';
import { Select, MenuItem } from "@mui/material"

interface PlayListClient<T> {
    userState: any | T,
}

const PlayListClient: React.FC<PlayListClient<any>> = ({ ...props }) => {
    // document.title = "Playlist - Music Game";
    //const userState = useSelector<{ user: any }>(state => state.user) as formStateUser;
    const [playlists, setPlaylists] = useState([]);

    // const getPlaylists = async () => {
    //     const responsePL = await playlistApi.getAll({}); 
    //     if (!responsePL || responsePL.status === "failed") {
    //         console.error("Get playlist failed.");
    //         return;
    //     }
    //     const { data } = responsePL;
    //     console.log(data);
    //     setPlaylists(data)
    // }

    useEffect(() => {
        // getPlaylists();
        const getPlaylists = async () => {
            const { data } = await playlistApi.getAll({}); 
            setPlaylists(data);
            //console.log(data);
        }
        getPlaylists();
    }, []);
    console.log(playlists);
    return (
        <div className="container-nhacmoi">
            <div className ="title-nhacmoi-tt grid-2">
                <div className="text-title-nhacmoi-tt">
                    <h3 className="color-nhacmoi-tt title_all">Playlist</h3>
                </div>
                <div>
                    {/* list map */}
                    <h2>Hello Ngoc</h2>
                    {playlists.length !== 0 && playlists.map((item: any) => {

                       return `<h6>${item.name}</h6>`
                    
                    })}
                </div>
            </div>
        </div>
    )
}

export default PlayListClient
import songApi from 'api/songApi';
import GetTimeAudio from 'page/client/common/GetTimeAudio';
import { handleLike, handleDownload, handleAddToPlaylist } from 'page/client/common/handle';
import React, { useEffect, useState } from 'react';
import { AiFillHeart, AiOutlineDownload } from 'react-icons/ai';
import { BsFillPlayFill } from 'react-icons/bs';
import { IoMdAdd } from 'react-icons/io';

interface HomeSongComponentIF<T> {
    userState: any,
}
const HomeSongComponent: React.FC<HomeSongComponentIF<any>> = (props) => {
    const { user } = props.userState;
    const [songs, setSongs] = useState([]);

    useEffect( () => {
        const getSongs = async () => {
            const { data } = await songApi.getAll( {_limit: 20} );
            setSongs(data);
        }
        getSongs();
    }, []);

    const handleAdd = async (s: string, u: string, t: string) => {
        if(t === 'like'){
            let likeRes = await handleLike(s, u);
            if(likeRes && likeRes.status === "successfully"){
                console.log('okay, them roi nhe');
            }else{
                console.log('oops, khong them duoc roi')
            }
        }
        
        if(t === "playlist"){
            let playlistRes = await handleAddToPlaylist(s, u);
            if(playlistRes && playlistRes.status === "successfully"){
                console.log('okay, them roi nhe');
            }else{
                console.log('oops, khong them duoc roi')
            }
        }
        console.error("type is not define")
    }

    return (
        <div className="box-music">
            {songs.length !== 0 && songs.map( (item: any) => (
                <div className="music_item" key={item._id}>
                    <img src={item.image} alt={item.name} />
                    <div className="box-icon">
                        <BsFillPlayFill/>
                    </div>
                    <div>
                        <h6>{item.title}</h6>
                        <div style={{ fontSize: "0.7rem", marginTop: "-0.2rem" }}>{item.name_artist ? item.name_artist : "ten tac gia"}</div>
                    </div>
                    <div>
                        <GetTimeAudio url={item.audio}/>
                    </div>
                    <div className="icon_item">
                        <AiOutlineDownload onClick={() => handleDownload(item._id)} className="icon" />
                        <AiFillHeart onClick={() => handleAdd(item._id, user._id, "like")} className="icon" />
                        <IoMdAdd className="icon" onClick={() => handleAdd(item._id, user._id, 'playlist')} />
                    </div>
                </div>
            ))}
            
        </div>
    )
}

export default HomeSongComponent

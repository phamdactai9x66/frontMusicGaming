import songApi from 'api/songApi';
import GetTimeAudio from 'page/client/common/GetTimeAudio';
import { handleLike, handleDownload, handleAddToPlaylist } from 'page/client/common/handle';
import React, { useEffect, useState } from 'react';
import { AiFillHeart, AiOutlineDownload } from 'react-icons/ai';
import { BsFillPlayFill } from 'react-icons/bs';
import { IoMdAdd } from 'react-icons/io';
import { useDispatch } from "react-redux";
import { getlistAudio, playSong } from "redux/audio/actionAudio"

interface HomeSongComponentIF<T> {

}
const HomeSongComponent: React.FC<HomeSongComponentIF<any>> = () => {
    const [songs, setSongs] = useState([]);
    const dispatch = useDispatch()
    useEffect(() => {
        (async () => {
            dispatch(getlistAudio())
        })()
    }, [])

    useEffect(() => {
        const getSongs = async () => {
            const { data } = await songApi.getAll({ _limit: 20 });
            setSongs(data);
        }
        getSongs();
    }, []);

    const playAudio = <T extends string>(_id: T): void => {
        dispatch(playSong({ _id }))
        // console.log(_id);
    }
    return (
        <div className="box-music">
            {songs.length !== 0 && songs.map((item: any) => (
                <div className="music_item" key={item._id} >
                    <img src={item.image} alt={item.name} />
                    <div className="box-icon">
                        <BsFillPlayFill onClick={() => playAudio(item._id)} />
                    </div>
                    <div>
                        <h6>{item.title}</h6>
                        <div style={{ fontSize: "0.7rem", marginTop: "-0.2rem" }}>Nghệ sĩ</div>
                    </div>
                    <div>
                        <GetTimeAudio url={item.audio} />
                    </div>
                    <div className="icon_item">
                        <AiOutlineDownload onClick={() => handleDownload(item._id)} className="icon" />
                        <AiFillHeart className="icon" />
                        <IoMdAdd className="icon" onClick={() => handleAddToPlaylist(item._id)} />
                    </div>
                </div>
            ))}

        </div>
    )
}

export default HomeSongComponent

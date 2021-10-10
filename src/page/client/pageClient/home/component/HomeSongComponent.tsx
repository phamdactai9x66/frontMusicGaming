import songApi from 'api/songApi';
import React, { useEffect, useState } from 'react';
import { AiFillHeart, AiOutlineDownload } from 'react-icons/ai';
import { BsFillPlayFill } from 'react-icons/bs';
import { IoMdAdd } from 'react-icons/io';


interface HomeSongComponent<T> {

}
const HomeSongComponent: React.FC<HomeSongComponent<any>> = () => {
    const [songs, setSongs] = useState([]);

    useEffect( () => {
        const getSongs = async () => {
            const { data } = await songApi.getAll( {_limit: 20} );
            setSongs(data);
        }
        getSongs();
    }, []);
    
    const getDuration = ( url: string ) => {
        const audio = new Audio();
        
        audio.addEventListener("loadedmetadata", () => {
            return audio.duration
        })
        audio.src = url;
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
                        <div style={{ fontSize: "0.7rem", marginTop: "-0.2rem" }}>Nghệ sĩ</div>
                    </div>
                    <div>
                        {getDuration(item.audio)}
                        <span id="duration"></span>
                    </div>
                    <div className="icon_item">
                        <AiOutlineDownload className="icon" />
                        <AiFillHeart className="icon" />
                        <IoMdAdd className="icon" />
                    </div>
                </div>
            ))}
            
        </div>
    )
}

export default HomeSongComponent

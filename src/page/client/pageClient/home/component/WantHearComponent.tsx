import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AiOutlineDownload,AiOutlineLink } from 'react-icons/ai';
import { FiPlayCircle } from 'react-icons/fi';
import { HandleGet } from "component/MethodCommon";

import playlistSongApi from 'api/playlistSongApi';
import { playSong } from "redux/audio/actionAudio"
import { useDispatch } from 'react-redux';
import { saveToLocalStorage } from 'page/client/common/localStorageCommon';


interface WantHearComponentIF<T> {
    settings_category: object,
    idPlaylist: string,
    songs: any,
    PLS: any,
}

const WantHearComponent: React.FC<WantHearComponentIF<any>> = ({...props}) => {
    const [PLS, setPLS] = useState<any[]>([]);
    const dispatch = useDispatch();

    const getPLS = async () => {
        // const query = { id_PlayList: props.idPlaylist };
        // const [data, err] = await HandleGet(playlistSongApi.getAll, query);

        const dataPLS = props.PLS.filter( (i: any) => i.id_PlayList === props.idPlaylist)
        let findSong: any[] = [];
        dataPLS.map( (item: any) => {
            const { id_Songs } = item;
            if(props.songs[id_Songs]){
                findSong.push(props.songs[id_Songs])
            }
        })
        setPLS(findSong);
    } 

    useEffect( () => {
        getPLS();
    }, [props.PLS]);
    return (
        <div>
            {/* <Slider {...props.settings_category}> */}
            <div className="box-main">
                {PLS.length !== 0 && PLS.map( (item: any) => (
                        <div className="box" key={item._id}>
                            <figure>
                                <img src={item.image} alt={item.title} />
                            </figure>
                            <div className="icon-box">
                                <div>
                                    <FiPlayCircle onClick={() => {
                                        dispatch(playSong( {_id: item._id} ));
                                        saveToLocalStorage(item);
                                    }} className="icon" />
                                </div>
                            </div>

                            <h6>{item.title}</h6>
                        </div>
                    
  )) }
  </div>
            {/* </Slider> */}
        </div>
    )
}

export default WantHearComponent

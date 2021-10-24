import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AiOutlineDownload,AiOutlineLink } from 'react-icons/ai';
import { FiPlayCircle } from 'react-icons/fi';
import { HiOutlineDotsCircleHorizontal } from 'react-icons/hi';
import {  BiHeart } from 'react-icons/bi';
import { Select, MenuItem } from "@mui/material";
import { HandleGet, tranFormdata } from "component/MethodCommon";
import playlistSongApi from 'api/playlistSongApi';


interface WantHearComponentIF<T> {
    settings_category: object,
    idPlaylist: string,
    songs: any,
}

const WantHearComponent: React.FC<WantHearComponentIF<any>> = ({...props}) => {
    const [PLS, setPLS] = useState<any[]>([]);

    const getPLS = async () => {
        const query = { id_PlayList: props.idPlaylist };
        const [data, err] = await HandleGet(playlistSongApi.getAll, query);

        let findSong: any[] = [];
        data.data.map( (item: any) => {
            const { id_Songs } = item;
            if(props.songs[id_Songs]){
                findSong.push(props.songs[id_Songs])
            }
        })
        setPLS(findSong);
    }

    useEffect( () => {
        getPLS();
    }, [props.songs]);

    return (
        <div>
            <Slider {...props.settings_category}>
                {PLS.length !== 0 ? PLS.map( (item: any) => (
                    <div className="box" key={item._id}>
                        <div className="box">
                            <figure>
                                <img src={item.image} alt={item.title} />
                            </figure>
                            <div className="icon-box">
                                <div>
                                    <BiHeart className="icon" />
                                    <FiPlayCircle className="icon" />
                                    <HiOutlineDotsCircleHorizontal className="icon" />
                                </div>
                            </div>
                            <Select className="option">
                                <MenuItem>
                                    <AiOutlineDownload/> Tải xuống
                                </MenuItem>
                                <MenuItem>
                                    <AiOutlineLink/> Sao chép link
                                </MenuItem>
                            </Select>
                            <h6>{item.title}</h6>
                        </div>
                    </div>
                )) : (<div>Không có bài hat nào.</div>) }
            </Slider>
        </div>
    )
}

export default WantHearComponent

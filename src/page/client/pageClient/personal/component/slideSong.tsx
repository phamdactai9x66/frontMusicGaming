import React from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AiOutlineDownload, AiOutlineLink } from 'react-icons/ai';
import { BiHeart } from 'react-icons/bi';
import { FiPlayCircle } from 'react-icons/fi';
import { HiOutlineDotsCircleHorizontal } from 'react-icons/hi';
import { Select, MenuItem } from "@mui/material"
import { useDispatch } from "react-redux";
import { playSong } from "redux/audio/actionAudio";
interface SlideSongIF<T> {
    data: any
}

const SlideSong: React.FC<SlideSongIF<any>> = ({ data, ...props }) => {
    const dispatch = useDispatch();
    var settings_overview = {
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 2000,
        infinite: true,
    };
    // console.log(data.data[0])
    const playAudio = (song: any) => {
        if (!song) return
        dispatch(playSong(song))
    }
    return (
        <>

            <Slider {...settings_overview}>

                {data.data?.[0]?.map((current: any, index: number) => {
                    const audio = data.dataSong[current?.id_Songs];
                    return (
                        <div className="box" key={index}>
                            <figure>
                                <img src={audio?.image} alt="" />
                            </figure>
                            <div className="icon-box">
                                <div>
                                    <FiPlayCircle className="icon" onClick={() => { playAudio(audio) }} />
                                </div>
                            </div>
                
                        </div>
                           
                    )
                })}
            </Slider>
        </>
    )
}

export default SlideSong

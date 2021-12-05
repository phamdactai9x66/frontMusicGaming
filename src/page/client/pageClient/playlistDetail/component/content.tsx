import React from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AiOutlineDownload, AiOutlineLink } from 'react-icons/ai';
import { BiHeart } from 'react-icons/bi';
import { FiPlayCircle } from 'react-icons/fi';
import { HiOutlineDotsCircleHorizontal } from 'react-icons/hi';
import { Select, MenuItem } from "@mui/material";
import { AnyRecord } from 'dns';
import { useDispatch } from "react-redux";
import { playSong } from "redux/audio/actionAudio"

interface ContentIF<T> {
    state: any | T,
}
//https://songdewnetwork.com/sgmedia/assets/images/default-album-art.png
const Content: React.FC<ContentIF<any>> = ({ state, ...props }) => {
    var settings_overview = {
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 2000,
        infinite: true,
    };
    const dispatch = useDispatch();
    const ImageDefault = () => {
        return <div className="box">
            <figure>
                <img src="https://songdewnetwork.com/sgmedia/assets/images/default-album-art.png" alt="" />
            </figure>
            <div className="icon-box">
                <div>
                    <FiPlayCircle className="icon" />
                </div>
            </div>

            <h6>Nhạc trẻ remix</h6>
        </div>
    }
    const MapSong = <T extends number>(currentSong: any, index: T): JSX.Element => {
        const { id_Song } = currentSong;
        const getSong = state.dataSong[id_Song];
        return (
            <div className="box" key={index}>
                <figure>
                    <img src={getSong?.image} alt="" />
                </figure>
                <div className="icon-box">
                    <div>
                        <FiPlayCircle className="icon" onClick={() => { dispatch(playSong(getSong)) }} />
                    </div>
                </div>
 
                <h6>Nhạc trẻ remix</h6>
            </div>
        )
    }
    return (
        <>
            <div className="col-content">
                {state?.data?.length ?
                    <Slider {...settings_overview}>
                        {state?.data?.map((current: AnyRecord, index: number) => {
                            return MapSong<number>(current, index);
                        })}
                    </Slider>
                    : ImageDefault()}
                <div className="name">
                    <p>Name playlist</p>
                    <span>
                        <svg width="20" height="20" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 1.9375C3.239 1.9375 1 4.42271 1 7.48884C1 9.96396 1.875 15.8383 10.488 21.7765C10.6423 21.8818 10.8194 21.9375 11 21.9375C11.1806 21.9375 11.3577 21.8818 11.512 21.7765C20.125 15.8383 21 9.96396 21 7.48884C21 4.42271 18.761 1.9375 16 1.9375C13.239 1.9375 11 5.30195 11 5.30195C11 5.30195 8.761 1.9375 6 1.9375Z" stroke="rgb(76, 195, 241)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </span>
                </div>
                <div className="btn">
                    <button className="btn__play">Phát ngẫu nhiên</button>
                </div>
            </div>

        </>
    )
}

export default Content

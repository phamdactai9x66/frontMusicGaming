import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom"
import { ReactComponent as Play } from './play.svg'
import { AiOutlineDownload, AiOutlineLink } from 'react-icons/ai';
import { BiHeart } from 'react-icons/bi';
import { FiPlayCircle } from 'react-icons/fi';
import { HiOutlineDotsCircleHorizontal } from 'react-icons/hi';
import { Select, MenuItem } from "@mui/material";
import  Trending  from "./component/listPlaylist";
import playlistApi from 'api/playlistApi';

interface Toptrending<T> {
    userState: any,
}

const Toptrending: React.FC<Toptrending<any>> = ({ ...props }) => {
    const [playlists, setPlaylists] = useState([]);

    const getPlaylists = async () => {
        const responsePL = await playlistApi.getAll();
        if (!responsePL || responsePL.status === "failed") {
            console.error("Get playlist failed.");
            return;
        }
        const { data } = responsePL;
        setPlaylists(data)
    }

    useEffect(() => {
        getPlaylists();
        //getSongs();
    }, []);
    return (
        <div className="container-topthanhhanh">
        <div className="title-top-tt grid-2">
                <div className="text-title-top-tt">
                    <h3 className="color-top-tt title_all">Top Thịnh Hành</h3>
                </div>
                <div className="div-svg">
                    <Play className="svg color-top-tt" />
                </div>
            </div>
                    {/* <Trending > */}
            <div className='top-tt-main'>
                <input type='checkbox' id='show-all' />
                <label htmlFor='show-all' className='text-show'>Xem Thêm</label>
                <label htmlFor='show-all' className='text-hide'>Ẩn bớt</label>
                <div className="grid-4-top-tt">
                {/* <div className="box">
                    <Link to="/playlistDetail">
                            <figure>
                                <img src="https://i.ytimg.com/vi/Yije8O6eGn8/maxresdefault.jpg" alt="" />
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
                                    <AiOutlineDownload /> Tải xuống
                                        </MenuItem>
                                <MenuItem>
                                    <AiOutlineLink /> Sao chép link
                                        </MenuItem>
                            </Select>
                            <h6>Nhạc trẻ remix</h6>
                        </Link>
                </div> */}
                {playlists.length !== 0 && playlists.map((item: any) => (
                <div className="box">
                        <figure>
                            <img src="https://i.ytimg.com/vi/Yije8O6eGn8/maxresdefault.jpg" alt="" />
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
                                <AiOutlineDownload /> Tải xuống
                                    </MenuItem>
                            <MenuItem>
                                <AiOutlineLink /> Sao chép link
                                    </MenuItem>
                        </Select>
                        <h6>{item.name}</h6>
                    </div>
            ))}
                </div>
            </div>
        </div>
    )
}

export default Toptrending
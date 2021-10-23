import React from 'react'
import Popup from '@titaui/reactjs-popup';
import { Link } from "react-router-dom"
import { Button } from '@mui/material'
import { MdNavigateNext } from 'react-icons/md';
import Tabed from './tabed';
import { AiOutlineDownload,AiOutlineLink } from 'react-icons/ai';
import { IoMdAdd } from 'react-icons/io';
import {  BiHeart } from 'react-icons/bi';
import { FiPlayCircle } from 'react-icons/fi';
import { HiOutlineDotsCircleHorizontal } from 'react-icons/hi';
import { Select, MenuItem } from "@mui/material"

const Playlist = () => {
    return (
        <div className="Personal">
            <Tabed />
            <div className="overview">
                <div className="main2">
                    <h4 className="title_all">Playlist <MdNavigateNext className="icon" /></h4>
                    <div className="main2_add">
                        <Popup
                            modal
                            overlayStyle={{ background: "rgba(255,255,255,0.98" }}
                            closeOnDocumentClick={false}
                            trigger={() =>
                                <div className="add">
                                    <IoMdAdd className="icon" />
                          Tạo playlist mới
                    </div>
                            }
                        >
                            {(close: any) => (
                                <div className="modal-playlis">
                                    <div className="content-modal">
                                        <button className="close" onClick={close}>
                                            X
                            </button>
                                        <h5 className="text-center">Tạo playlist mới</h5>
                                        <form action="">
                                            <input type="text" placeholder="Nhập tên playlist" />
                                            <p className="err">err</p>
                                            <Button className="create_playlist">TẠO MỚI</Button>
                                        </form>
                                    </div>
                                </div>
                            )}
                        </Popup>
                         <Link to="/playlistDetail">
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
                                <h6>Nhạc trẻ remix</h6>
                            </div>
                            </Link>
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
                                <h6>Nhạc trẻ remix</h6>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Playlist

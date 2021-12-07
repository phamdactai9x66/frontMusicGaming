import React, { useState } from 'react'
import { IoMdAdd } from 'react-icons/io';
import { BsFillPlayFill } from 'react-icons/bs';
import { AiOutlineDownload, AiFillHeart } from 'react-icons/ai';
import { BiMusic } from 'react-icons/bi';
import { Popover } from "@material-ui/core";
import { MenuItem } from "@mui/material";
import NameSongArtist from "component/nameSongArtist";
import GetTimeAudio from "component/getTimeAudio"
import { useDispatch } from "react-redux";
import { playSong } from "redux/audio/actionAudio";
interface ListMusicDetailIF<T> {
    current: any | T,
    index: number,
    listIdSong: any
}

const ListMusicDetail: React.FC<ListMusicDetailIF<any>> = ({ current, index, listIdSong, ...props }) => {
    const [anchor, setAnchor] = useState(null);
    const dispatch = useDispatch()
    const openPopover = (event: any) => {
        setAnchor(event.currentTarget);
    };
    const [anchor2, setAnchor2] = useState(null);
    const openPopover2 = (event: any) => {
        setAnchor2(event.currentTarget);
    };
    return (
        <>
                <div className="music_item mx-4 border-0 p-2" key={index}>
                    <img src={current?.image} alt="" />
                    <div className="box-icon m-2">
                        <BsFillPlayFill onClick={() => { dispatch(playSong({ _id: current._id, listIdSong })) }} />
                    </div>
                    <div>
                        <h6>{current?.title}</h6>
                        <div style={{ fontSize: "0.7rem", marginTop: "-0.2rem" }}>
                            <NameSongArtist _id={current?._id} /></div>
                    </div>
                    <div>
                        <GetTimeAudio audio={current?.audio} />
                    </div>
                    <div className="icon_item">
                        <AiOutlineDownload className="icon" />
                        <AiFillHeart className="icon" />
                        <IoMdAdd className="icon" onClick={openPopover} />
                        <Popover
                            open={Boolean(anchor)}
                            anchorEl={anchor}
                            anchorOrigin={{
                                vertical: "top",
                                horizontal: "left",
                            }}
                            transformOrigin={{
                                vertical: "bottom",
                                horizontal: "right",
                            }}
                            onClose={() => setAnchor(null)}
                        >
                            <div style={{ background: "#101929", margin: "", color: "#fff", width: "13rem" }}>
                                <div className="d-flex gap-2 p-2">
                                    <img width={35} height={35} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJdulnc1hxmzx9izhgHHRQGhssK6KshlS6bypOagn9_lVhJ6ntqiCFNislU1nOb7NjJeY&usqp=CAU" alt="" />
                                    <div>
                                        <h6>Shape of you</h6>
                                        <div style={{ marginTop: "-0.7rem" }}><span style={{ fontSize: "0.8rem" }}>205k </span><span style={{ fontSize: "0.8rem" }}> 3.8M</span></div>
                                    </div>
                                </div>
                                <hr style={{ margin: "-0.1rem 0 0.5rem 0" }} />
                                <MenuItem>
                                    <AiOutlineDownload />&ensp; Tải xuống
                                </MenuItem>
                                <MenuItem >
                                    <AiFillHeart />&ensp; Thêm vào thư viện
                                </MenuItem>

                                <MenuItem onClick={openPopover2}>
                                    <IoMdAdd />&ensp; Thêm vào playlist
                                </MenuItem>
                                <Popover
                                    open={Boolean(anchor2)}
                                    anchorEl={anchor2}
                                    anchorOrigin={{
                                        vertical: "top",
                                        horizontal: "left",
                                    }}
                                    transformOrigin={{
                                        vertical: "bottom",
                                        horizontal: "right",
                                    }}
                                    onClose={() => setAnchor2(null)}
                                >
                                    <div className="item">
                                        <MenuItem className="list" >
                                            <BiMusic /> &ensp;Nhạc trẻ remix
                                        </MenuItem>
                                    </div>
                                </Popover>
                            </div>
                        </Popover>
                    </div>
                </div>
        </>
    )
}

export default ListMusicDetail

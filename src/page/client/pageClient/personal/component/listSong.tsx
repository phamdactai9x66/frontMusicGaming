import React, { useState } from 'react'
import { BsFillPlayFill } from 'react-icons/bs';
import { AiOutlineDownload, AiFillHeart } from 'react-icons/ai';
import { IoMdAdd } from 'react-icons/io';
import { Select, MenuItem, Popover } from "@mui/material"
import { BiMusic } from 'react-icons/bi';
import NameSongArtist from "component/nameSongArtist";
import GetTimeAudio from "component/getTimeAudio";
import { playSong } from "redux/audio/actionAudio";
import { useDispatch } from "react-redux";

interface ListSong<T> {
    data: any
}
const ListSong: React.FC<ListSong<any>> = ({ data, ...props }) => {
    const dispatch = useDispatch();
    const [anchor, setAnchor] = useState(null);
    const openPopover = (event: any) => {
        setAnchor(event.currentTarget);
    };
    const [anchor2, setAnchor2] = useState(null);
    const openPopover2 = (event: any) => {
        setAnchor2(event.currentTarget);
    };
    const playAudio = (audio: any) => {
        if (!audio) return;
        dispatch(playSong(audio))
    }
    return (
        <>
            <div className="box-music" style={{ height: "305px" }}>
                {data.data?.[0]?.length ?
                    data.data?.[0]?.map((current: any, index: number) => {
                        const idSong = current?.id_Songs
                        const getAudio = data.dataSong?.[idSong];
                        const song = data.dataSong?.[idSong];
                        return (
                            <div className="music_item border-0 p-2" key={index}>
                                <img src={song?.image} alt="" />
                                <div className="box-icon m-2 pt-1">
                                    <BsFillPlayFill onClick={() => { playAudio(getAudio) }} />
                                </div>
                                <div>
                                    <h6>{song?.title}</h6>
                                    <div style={{ fontSize: "0.7rem", marginTop: "-0.2rem" }}>
                                        <NameSongArtist _id={song?._id} />
                                    </div>
                                </div>
                                <div>
                                    <GetTimeAudio audio={song?.audio} />
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
                        )
                    }) : null}


            </div>
        </>
    )
}

export default ListSong

import songApi from 'api/songApi';
import GetTimeAudio from 'page/client/common/GetTimeAudio';
import { handleLike, handleDownload, handleAddToPlaylist } from 'page/client/common/handle';
import React, { useEffect, useState } from 'react';
import { BsFillPlayFill } from 'react-icons/bs';
import { BiMusic } from 'react-icons/bi';
import { MenuItem } from "@mui/material";
import { AiOutlineDownload, AiFillHeart } from 'react-icons/ai';
import { IoMdAdd } from 'react-icons/io';
import { Popover } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { getlistAudio, playSong } from "redux/audio/actionAudio"

interface HomeSongComponentIF<T> {
    userState: any,
}
const HomeSongComponent: React.FC<HomeSongComponentIF<any>> = (props) => {
    const [anchor, setAnchor] = useState(null);
    const openPopover = (event: any) => {
        setAnchor(event.currentTarget);
    };
    const [anchor2, setAnchor2] = useState(null);
    const openPopover2 = (event: any) => {
        setAnchor2(event.currentTarget);
    };
    const { user } = props.userState;
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

    const handleAdd = async <T extends string>(s: T, u: T, t: T) => {
        if(t === 'like'){
            let likeRes = await handleLike(s, u);
            if(likeRes && likeRes.status === "added"){
                console.log('okay, them roi nhe. (Added)');
            }else if(likeRes && likeRes.status === "deleted") {
                console.log('okay, them roi nhe. (Deleted)');
            } else{
                console.log('oops, khong them duoc roi. (Error)')
            }
        }
        
        if(t === "playlist"){
            //đang sai vì chưa lấy được playlist của user
            let playlistRes = await handleAddToPlaylist(s, u);
            if(playlistRes && playlistRes.status === "successfully"){
                console.log('okay, them roi nhe');
            }else if(playlistRes.status === "existed"){
                console.log("Bài hát này đã tồn tại trong play list này của bạn.")
            }else{
                console.log('oops, khong them duoc roi');
            }
        }
    }

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
                        <div style={{ fontSize: "0.7rem", marginTop: "-0.2rem" }}>{item.name_artist ? item.name_artist : "ten tac gia"}</div>
                    </div>
                    <div>
                        <GetTimeAudio url={item.audio} />
                    </div>
                    <div className="icon_item">
                        <AiOutlineDownload onClick={() => handleDownload(item._id)} className="icon" />
                        <AiFillHeart onClick={() => handleAdd(item._id, user._id, "like")} className="icon" />
                        <IoMdAdd className="icon" onClick={openPopover}/>
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
                                <MenuItem className="list" onClick={() => handleAdd(item._id, user._id, "playlist")} >
                                    <BiMusic /> &ensp;Nhạc trẻ remix
                            </MenuItem>
                            </div>
                        </Popover>
                    </div>
                </Popover>
                    </div>
                </div>
            ))}

        </div>
    )
}

export default HomeSongComponent

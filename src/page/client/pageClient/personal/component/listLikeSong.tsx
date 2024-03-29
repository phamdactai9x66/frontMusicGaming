import React, { useEffect, useState } from 'react'
import { AiOutlineDownload, AiFillHeart } from 'react-icons/ai';
import { IoMdAdd } from 'react-icons/io';
import { MenuItem, Popover } from "@mui/material"
import { BiMusic } from 'react-icons/bi';
import { BsFillPlayFill } from 'react-icons/bs';
import LikeSongApi from "api/likeSongApi";
import SongApi from "api/songApi";
import { useSelector } from "react-redux";
import { formStateUser } from 'redux/user/stateUser';
import { HandleGet, tranFormDataId } from "component/MethodCommon";
import NameSongArtist from "component/nameSongArtist";
import GetTimeAudio from "component/getTimeAudio";
import { useDispatch } from "react-redux";
import { playSong } from "redux/audio/actionAudio";
import { saveToLocalStorage } from 'page/client/common/localStorageCommon';
import { AiFillDelete } from 'react-icons/ai';

interface ListLikeSongIF<T> {

}

const ListLikeSong: React.FC<ListLikeSongIF<any>> = ({ ...props }) => {
    const [anchor, setAnchor] = useState(null);
    const [likeSong, setLikeSong] = useState({ display: true, data: [], dataSong: [] });
    const { user: { _id } } = useSelector<{ user: any }>(state => state.user) as formStateUser;
    const dispatch = useDispatch();
    window.scroll(0, 0)

    const openPopover = (event: any) => {
        setAnchor(event.currentTarget);
    };
    const [anchor2, setAnchor2] = useState(null);
    const openPopover2 = (event: any) => {
        setAnchor2(event.currentTarget);
    };
    useEffect(() => {
        (async () => {
            if (!likeSong.display) return;
            const query = {
                id_User: _id
            }
            const [data, error] = await HandleGet(LikeSongApi.getAll, query);
            const [dataSong, errorSong] = await HandleGet(SongApi.getAll, { status: true });
            if (error) return;
            setLikeSong((value: any) => ({ ...value, data: [...data?.data], dataSong: tranFormDataId(dataSong?.data) }))
        })()
        return () => {
            setLikeSong(value => ({ ...value, display: false }))
        }
    }, [])
    return (
        <>
            {likeSong.data.map((current, index: number) => {
                const { id_Songs } = current
                const { audio, image, title, _id } = likeSong?.dataSong?.[id_Songs];
                const getAudio = likeSong?.dataSong?.[id_Songs];
                return (
                    <div className="music_item p-1" style={{ border: 'none' }} key={index}>
                        <img src={image} alt="" />
                        <div className="box-icon m-1">
                            <BsFillPlayFill onClick={() => { dispatch(playSong(getAudio)); saveToLocalStorage(likeSong.dataSong[id_Songs]) }} />
                        </div>
                        <div>
                            <h6>{title}</h6>
                            <div style={{ fontSize: "0.7rem", marginTop: "-0.2rem" }}>
                                <NameSongArtist _id={_id} />
                            </div>
                        </div>
                        <div>
                            <GetTimeAudio audio={audio} />
                        </div>
                        <div className="icon_item">
                            <AiOutlineDownload className="icon" />
                            {/* <AiFillDelete className='icon' /> */}
                            {/* <AiFillHeart className="icon" /> */}
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
            })}
        </>
    )
}

export default ListLikeSong

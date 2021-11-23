import React, { useRef, useState, useEffect, memo } from 'react'
import { BiHeart, BiDotsHorizontalRounded, BiMusic } from 'react-icons/bi';
import { MenuItem } from "@mui/material";
import { AiFillHeart, AiOutlineDownload } from 'react-icons/ai';
import { IoMdAdd } from 'react-icons/io';
import { Popover } from "@material-ui/core";
import { useSelector } from "react-redux";
import { formStateAudio } from 'redux/audio/stateAudio';
import ListPlaylistUser from "./listPlaylistUser";
import { formStateUser } from 'redux/user/stateUser';
import userPlaylist from "api/userPlaylist"

interface OptionAudio<T> {

}

const OptionAudio: React.FC<OptionAudio<any>> = ({ ...props }) => {
    const stateAudio = useSelector<{ audio: any }>(state => state.audio) as formStateAudio;
    const state = useSelector<{ user: any }>(state => state.user) as formStateUser;
    const [anchor, setAnchor] = useState(null);
    const [anchor2, setAnchor2] = useState(null);

    const { user, token } = useSelector<{ user: any }>(state => state.user) as formStateUser;
    const [listPlaylistUser, setlistPlaylistUser] = useState({ display: true, data: [] });
    useEffect(() => {
        (async () => {
            const { data } = await userPlaylist.getAll<object>({ id_User: user._id });
            setlistPlaylistUser({ display: true, data });
        })()
        return () => {
            setlistPlaylistUser(value => ({ ...value, display: false }));
        }
    }, [])
    const openPopover = (event: any) => {
        setAnchor(event.currentTarget);
    };
    const openPopover2 = (event: any) => {
        setAnchor2(event.currentTarget);
    };
    return (
        <>
            <BiDotsHorizontalRounded className="icon h4" onClick={openPopover} />
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
                        <img width={35} height={35} src={stateAudio.audio?.image} alt="" />
                        <div>
                            <h6>{stateAudio.audio.title}</h6>
                            <div style={{ marginTop: "-0.7rem" }}><span style={{ fontSize: "0.8rem" }}>view: {stateAudio.audio?.view}</span></div>
                        </div>
                    </div>
                    <hr style={{ margin: "-0.1rem 0 0.5rem 0" }} />
                    <MenuItem>
                        <a href={stateAudio.audio.audio} target="_blank"><AiOutlineDownload />&ensp; Tải xuống</a>
                    </MenuItem>


                    {(state.token && state.user) ?
                        <>
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
                                <ListPlaylistUser listPlaylistUser={listPlaylistUser} stateAudio={stateAudio} />

                            </Popover>
                        </>
                        : null
                    }

                </div>
            </Popover>
        </>
    )
}


export default OptionAudio

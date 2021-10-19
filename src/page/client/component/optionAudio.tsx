import React, { useRef, useState, useEffect, memo } from 'react'
import { BiHeart, BiDotsHorizontalRounded, BiMusic } from 'react-icons/bi';
import { AiFillHeart } from 'react-icons/ai';
import { MenuItem } from "@mui/material";
import { AiOutlineDownload } from 'react-icons/ai';
import { IoMdAdd } from 'react-icons/io';
import { Popover } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { formStateUser } from 'redux/user/stateUser';
import { formStateAudio } from 'redux/audio/stateAudio';
import apiLikeUser from "api/apiLikeUser";
import { HandleGet } from "component/MethodCommon";
import { variableCommon } from "component/variableCommon";

interface OptionAudio<T> {

}

const OptionAudio: React.FC<OptionAudio<any>> = ({ ...props }) => {
    const stateAudio = useSelector<{ audio: any }>(state => state.audio) as formStateAudio;
    const [anchor, setAnchor] = useState(null);
    const openPopover = (event: any) => {
        setAnchor(event.currentTarget);
    };
    const [anchor2, setAnchor2] = useState(null);
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
                        <img width={35} height={35} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJdulnc1hxmzx9izhgHHRQGhssK6KshlS6bypOagn9_lVhJ6ntqiCFNislU1nOb7NjJeY&usqp=CAU" alt="" />
                        <div>
                            <h6>Shape of you</h6>
                            <div style={{ marginTop: "-0.7rem" }}><span style={{ fontSize: "0.8rem" }}>205k </span><span style={{ fontSize: "0.8rem" }}> 3.8M</span></div>
                        </div>
                    </div>
                    <hr style={{ margin: "-0.1rem 0 0.5rem 0" }} />
                    <MenuItem>
                        <a href={stateAudio.audio.audio} target="_blank"><AiOutlineDownload />&ensp; Tải xuống</a>
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
                            <MenuItem className="list">
                                <BiMusic /> &ensp;Nhạc trẻ remix
                            </MenuItem>
                            <MenuItem className="list">
                                <BiMusic /> &ensp;Nhạc trẻ remix
                            </MenuItem>
                            <MenuItem className="list">
                                <BiMusic /> &ensp;Nhạc trẻ remix
                            </MenuItem>
                        </div>
                    </Popover>
                </div>
            </Popover>
        </>
    )
}


export default OptionAudio
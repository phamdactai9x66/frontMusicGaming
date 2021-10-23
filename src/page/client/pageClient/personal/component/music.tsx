import React, {useState} from 'react'
import { MdNavigateNext } from 'react-icons/md';
import { AiOutlineDownload, AiFillHeart } from 'react-icons/ai';
import { IoMdAdd } from 'react-icons/io';
import {  MenuItem } from "@mui/material"
import { BiMusic } from 'react-icons/bi';
import { Popover } from "@material-ui/core";
import { BsFillPlayFill } from 'react-icons/bs';
import Tabed from './tabed';

const Music = () => {
    const [anchor, setAnchor] = useState(null);
    const openPopover = (event: any) => {
        setAnchor(event.currentTarget);
    };
    const [anchor2, setAnchor2] = useState(null);
    const openPopover2 = (event: any) => {
        setAnchor2(event.currentTarget);
    };
    return (
        <div className="Personal">
 <Tabed/>

    <div className="overview">
    <h4 className="title_all">Bài hát <MdNavigateNext className="icon" /></h4>
                <div className="main1" style={{gridTemplateColumns: "100%"}}>
                <div className="box-music">
                <div className="music_item">
                            <img src="https://anh.24h.com.vn/upload/4-2016/images/2016-12-06/1480992562-148098909683484-son-tung.jpg" alt="" />
                            <div className="box-icon">
                            <BsFillPlayFill/>
                            </div>
                            <div>
                                <h6>Tên bài hát</h6>
                                <div style={{ fontSize: "0.7rem", marginTop: "-0.2rem" }}>Nghệ sĩ</div>
                            </div>
                            <div>
                                4:50
                            </div>
                            <div className="icon_item">
                                <AiOutlineDownload className="icon" />
                                <AiFillHeart className="icon" />
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
                                <MenuItem className="list" >
                                    <BiMusic /> &ensp;Nhạc trẻ remix
                            </MenuItem>
                            </div>
                        </Popover>
                    </div>
                </Popover>
                            </div>
                        </div>
                    </div>
                </div>
               

                </div>
</div>
           
    )
}

export default Music

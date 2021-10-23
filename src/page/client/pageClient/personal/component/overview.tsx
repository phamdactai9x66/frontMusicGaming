import React, { useState } from 'react'
import { MdNavigateNext } from 'react-icons/md';
import { Link } from "react-router-dom"
import Popup from '@titaui/reactjs-popup';
import { Button } from '@mui/material'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Tabed from './tabed';
import { BsFillPlayFill } from 'react-icons/bs';
import { AiOutlineDownload, AiFillHeart, AiOutlineLink, AiOutlineCheck } from 'react-icons/ai';
import { IoMdAdd } from 'react-icons/io';
import { BiPlayCircle, BiHeart } from 'react-icons/bi';
import { FiPlayCircle } from 'react-icons/fi';
import { HiOutlineDotsCircleHorizontal } from 'react-icons/hi';
import { Select, MenuItem } from "@mui/material"
import { BiMusic } from 'react-icons/bi';
import { Popover } from "@material-ui/core";
import './style.scss'
const Overview = () => {
    const [anchor, setAnchor] = useState(null);
    const openPopover = (event: any) => {
        setAnchor(event.currentTarget);
    };
    const [anchor2, setAnchor2] = useState(null);
    const openPopover2 = (event: any) => {
        setAnchor2(event.currentTarget);
    };
    var settings_overview = {
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 2000,
        infinite: true,
    };
    return (
        <>
            <div className="Personal">
                <Tabed />
                <div className="overview">
                    <h4 className="title_all" style={{fontSize:'1.3rem'}}>Bài hát <MdNavigateNext className="icon" /></h4>
                    <div className="main1">
                        <div className="box-slider">
                            <Slider {...settings_overview}>

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
                                    </div>

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
                                    </div>
                            </Slider>
                        </div>
                        <div className="box-music" style={{ height: "305px" }}>
                            <div className="music_item">
                                <img src="https://anh.24h.com.vn/upload/4-2016/images/2016-12-06/1480992562-148098909683484-son-tung.jpg" alt="" />
                                <div className="box-icon">
                                    <BsFillPlayFill />
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
                        </div>
                    </div>
                    <div className="main2">
                        <h4 className="title_all" style={{fontSize:'1.3rem'}}>Playlist <MdNavigateNext className="icon" /></h4>
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
                            <Link to="/playlistDetail" className="box-canhan">
                                <div className="box">
                                    <figure>
                                        <img src="https://i.ytimg.com/vi/Yije8O6eGn8/maxresdefault.jpg" alt="" />
                                    </figure>
                                    <div className="icon-box">
                                        <div className="svg">
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
                            <Link to="/playlistDetail" className="box-canhan">
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
                            <Link to="/playlistDetail" className="box-canhan">
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
                            <Link to="/playlistDetail" className="box-canhan">
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
                               
                        </div>
                    </div>
                    <div className="main3">
                        <h4 className="title_all" style={{fontSize:'1.3rem'}}>Nhạc sĩ <MdNavigateNext className="icon" /></h4>
                        <div className="main3_nhacsi">
                            <div className="box_nhacsi">
                                <div className="box-img">
                                    <div className="img-hover">
                                        <img height={150} src="https://2sao.vietnamnetjsc.vn/images/2021/07/08/16/13/st.jpg" alt="" />
                                        <BiPlayCircle className="icon" />
                                    </div>
                                </div>
                                <h5>Tên nhạc sĩ</h5>
                                <p>1.3k quan tâm</p>
                                <Button><AiOutlineCheck /> Đã quan tâm</Button>
                            </div>
                            <div className="box_nhacsi">
                                <div className="box-img">
                                    <div className="img-hover">
                                        <img height={150} src="https://2sao.vietnamnetjsc.vn/images/2021/07/08/16/13/st.jpg" alt="" />
                                        <BiPlayCircle className="icon" />
                                    </div>
                                </div>
                                <h5>Tên nhạc sĩ</h5>
                                <p>1.3k quan tâm</p>
                                <Button><AiOutlineCheck /> Đã quan tâm</Button>
                            </div>
                            <div className="box_nhacsi">
                                <div className="box-img">
                                    <div className="img-hover">
                                        <img height={150} src="https://2sao.vietnamnetjsc.vn/images/2021/07/08/16/13/st.jpg" alt="" />
                                        <BiPlayCircle className="icon" />
                                    </div>
                                </div>
                                <h5>Tên nhạc sĩ</h5>
                                <p>1.3k quan tâm</p>
                                <Button><AiOutlineCheck /> Đã quan tâm</Button>
                            </div>
                            <div className="box_nhacsi">
                                <div className="box-img">
                                    <div className="img-hover">
                                        <img height={150} src="https://2sao.vietnamnetjsc.vn/images/2021/07/08/16/13/st.jpg" alt="" />
                                        <BiPlayCircle className="icon" />
                                    </div>
                                </div>
                                <h5>Tên nhạc sĩ</h5>
                                <p>1.3k quan tâm</p>
                                <Button><AiOutlineCheck /> Đã quan tâm</Button>
                            </div>
                            <div className="box_nhacsi">
                                <div className="box-img">
                                    <div className="img-hover">
                                        <img height={150} src="https://2sao.vietnamnetjsc.vn/images/2021/07/08/16/13/st.jpg" alt="" />
                                        <BiPlayCircle className="icon" />
                                    </div>
                                </div>
                                <h5>Tên nhạc sĩ</h5>
                                <p>1.3k quan tâm</p>
                                <Button><AiOutlineCheck /> Đã quan tâm</Button>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </>
    )
}

export default Overview

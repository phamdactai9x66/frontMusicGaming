import React, { useEffect } from 'react'
import { Link } from "react-router-dom"
import { IoMdAdd } from 'react-icons/io';
import { BsFillPlayFill } from 'react-icons/bs';
import { AiOutlineDownload, AiOutlineLink,AiFillHeart } from 'react-icons/ai';
import { BiHeart } from 'react-icons/bi';
import { FiPlayCircle } from 'react-icons/fi';
import { HiOutlineDotsCircleHorizontal } from 'react-icons/hi';
import { Select, MenuItem } from "@mui/material";


interface PlaylistDetail<T> {

}
const PlaylistDetail: React.FC<PlaylistDetail<any>> = ({ ...props }) => {

    return (
        <>
            <div className="container-playlist">
                <div className="playlist-content">
                    <div className="col-content">
                        <div className="img">
                            <img src="https://media.istockphoto.com/photos/guitar-at-the-concert-picture-id591846326?s=612x612" alt="" />
                        </div>
                        <div className="name">
                            <p>Name playlist</p>
                            <span>
                                <svg width="20" height="20" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6 1.9375C3.239 1.9375 1 4.42271 1 7.48884C1 9.96396 1.875 15.8383 10.488 21.7765C10.6423 21.8818 10.8194 21.9375 11 21.9375C11.1806 21.9375 11.3577 21.8818 11.512 21.7765C20.125 15.8383 21 9.96396 21 7.48884C21 4.42271 18.761 1.9375 16 1.9375C13.239 1.9375 11 5.30195 11 5.30195C11 5.30195 8.761 1.9375 6 1.9375Z" stroke="rgb(76, 195, 241)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </span>
                        </div>
                        <div className="btn">
                            <button className="btn__play">Phát ngẫu nhiên</button>
                        </div>
                    </div>
                    <div className="musicDetail">
                        <p>
                            Lời tựa Top 100 Nhạc Trẻ là danh sách 100 ca khúc hot nhất hiện tại của thể loại Nhạc Trẻ, được Zing MP3 tự động tổng hợp dựa trên thông tin số liệu lượt nghe và lượt chia sẻ của từng bài hát trên phiên bản web và phiên bản Mobile. Dữ liệu sẽ được lấy trong 30 ngày gần nhất và được cập nhật liên tục.
                       </p>
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
                                <IoMdAdd className="icon" />
                            </div>
                        </div>
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
                                <IoMdAdd className="icon" />
                            </div>
                        </div>
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
                                <IoMdAdd className="icon" />
                            </div>
                        </div>
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
                                <IoMdAdd className="icon" />
                            </div>
                        </div>
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
                                <IoMdAdd className="icon" />
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="quantam">
                    <div className="quantam-h4">
                        <h4>Có thể quan tâm</h4>
                    </div>
                    <div className="grid-box-playlist">
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
        </>
    )
}

export default PlaylistDetail
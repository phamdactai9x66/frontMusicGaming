import React from 'react';
import { AiOutlineDownload,AiOutlineLink } from 'react-icons/ai';
import { FiPlayCircle } from 'react-icons/fi';
import { Link } from "react-router-dom"
import { HiOutlineDotsCircleHorizontal } from 'react-icons/hi';
import {  BiHeart } from 'react-icons/bi';
import { Select, MenuItem } from "@mui/material"
interface CategoryDetailPlaylist<T> {

}

const CategoryDetailPlaylist: React.FC<CategoryDetailPlaylist<any>> = ({ ...props }) => {
    return (
        <>
          <div className="CategoryDetailPlaylist">
              <div className="img_banner">
                <img src="https://photo-zmp3.zadn.vn/cover/b/1/e/b/b1eb8ae84392957f9b9d1ce2bb42aab9.jpg" alt=""/>
              </div>
              <h4 className="title_all text-light">Nổi bật</h4>
              <div className="box_cate_detail">
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
                </div>
          </div>
        </>
    )
}

export default CategoryDetailPlaylist

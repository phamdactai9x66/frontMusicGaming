import React, { useEffect } from 'react'
import { Link } from "react-router-dom"
import { AiOutlineDownload, AiOutlineLink } from 'react-icons/ai';
import { BiHeart } from 'react-icons/bi';
import { FiPlayCircle } from 'react-icons/fi';
import { HiOutlineDotsCircleHorizontal } from 'react-icons/hi';
import { Select, MenuItem } from "@mui/material";
interface Category<T> {

}

const Category: React.FC<Category<any>> = ({ ...props }) => {
  return (
    <div className="container-category">
      <div className="banner-category">
        <img src="https://html.nkdev.info/goodgames/assets/images/gallery-7.jpg" alt="" />
      </div>
      <div className="box-category">
        <div className="box-title-category">
          <h4 className="title_all">Tâm trạng và hoạt động</h4>
        </div>
        <div className="box-grid-category">
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
      <div className="box-category">
        <div className="box-title-category">
          <h4 className="title_all">Quốc gia</h4>
        </div>
        <div className="box-grid-category">
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
      <div className="box-category">
        <div className="box-title-category">
          <h4 className="title_all">EDM</h4>
        </div>
        <div className="box-grid-category">
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


  )
}

export default Category
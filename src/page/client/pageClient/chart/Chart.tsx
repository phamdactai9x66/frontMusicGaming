import React, { useEffect } from 'react'
import { Link } from "react-router-dom"
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AiOutlineDownload, AiFillHeart,AiOutlineLink } from 'react-icons/ai';
import { IoMdAdd } from 'react-icons/io';
import { BiPlayCircle, BiHeart } from 'react-icons/bi';
import { FiPlayCircle } from 'react-icons/fi';
import { HiOutlineDotsCircleHorizontal } from 'react-icons/hi';
import ChartMusicTrending from './chartMusicTrending';
import { Select, MenuItem } from "@mui/material"

interface chart<T> {

}
const Chart: React.FC<chart<any>> = ({ ...props }) => {
    var settings_category = {
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <>
            <div className="container-chart">
                <h4 className="title_all">#Musichart <BiPlayCircle /></h4>
                <div className="chart">
                    <ChartMusicTrending />
                </div>
                <br />
                <div className="list-box-musicChart">
                    <div className="box-chart">
                        <h5 className="stt">1 - </h5>
                        <img width={60} height={60} src="https://i.ytimg.com/vi/x2xblVxi_c4/maxresdefault.jpg" alt="" />
                        <div className="name">
                            <h6>Tên bài hát</h6>
                            <div style={{ fontSize: "0.7rem", marginTop: "-0.2rem", color: "#ccc" }}>Nghệ sĩ</div>
                        </div>
                        <div className="time_txt">
                            4:50
                        </div>
                        <div className="icon_item">
                            <AiOutlineDownload className="icon" />
                            <AiFillHeart className="icon" />
                            <IoMdAdd className="icon" />
                        </div>
                    </div>
                    <div className="box-chart">
                        <h5 className="stt">2 - </h5>
                        <img width={60} height={60} src="https://i.ytimg.com/vi/x2xblVxi_c4/maxresdefault.jpg" alt="" />
                        <div className="name">
                            <h6>Tên bài hát</h6>
                            <div style={{ fontSize: "0.7rem", marginTop: "-0.2rem", color: "#ccc" }}>Nghệ sĩ</div>
                        </div>
                        <div className="time_txt">
                            4:50
                        </div>
                        <div className="icon_item">
                            <AiOutlineDownload className="icon" />
                            <AiFillHeart className="icon" />
                            <IoMdAdd className="icon" />
                        </div>
                    </div>
                    <div className="box-chart">
                        <h5 className="stt">3 - </h5>
                        <img width={60} height={60} src="https://i.ytimg.com/vi/x2xblVxi_c4/maxresdefault.jpg" alt="" />
                        <div className="name">
                            <h6>Tên bài hát</h6>
                            <div style={{ fontSize: "0.7rem", marginTop: "-0.2rem", color: "#ccc" }}>Nghệ sĩ</div>
                        </div>
                        <div className="time_txt">
                            4:50
                        </div>
                        <div className="icon_item">
                            <AiOutlineDownload className="icon" />
                            <AiFillHeart className="icon" />
                            <IoMdAdd className="icon" />
                        </div>
                    </div>
                    <div className="box-chart">
                        <h5 className="stt">4 - </h5>
                        <img width={60} height={60} src="https://i.ytimg.com/vi/x2xblVxi_c4/maxresdefault.jpg" alt="" />
                        <div className="name">
                            <h6>Tên bài hát</h6>
                            <div style={{ fontSize: "0.7rem", marginTop: "-0.2rem", color: "#ccc" }}>Nghệ sĩ</div>
                        </div>
                        <div className="time_txt">
                            4:50
                        </div>
                        <div className="icon_item">
                            <AiOutlineDownload className="icon" />
                            <AiFillHeart className="icon" />
                            <IoMdAdd className="icon" />
                        </div>
                    </div>
                    <div className="box-chart">
                        <h5 className="stt">5 - </h5>
                        <img width={60} height={60} src="https://i.ytimg.com/vi/x2xblVxi_c4/maxresdefault.jpg" alt="" />
                        <div className="name">
                            <h6>Tên bài hát</h6>
                            <div style={{ fontSize: "0.7rem", marginTop: "-0.2rem", color: "#ccc" }}>Nghệ sĩ</div>
                        </div>
                        <div className="time_txt">
                            4:50
                        </div>
                        <div className="icon_item">
                            <AiOutlineDownload className="icon" />
                            <AiFillHeart className="icon" />
                            <IoMdAdd className="icon" />
                        </div>
                    </div>
                </div>
                <div className="list-slider">
                    <h4 className="title_all">Bảng xếp hạng trong tuần </h4>
                    <div>
                        <Slider {...settings_category}>
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

                        </Slider>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Chart
import React, { useEffect } from 'react'
import { Link } from "react-router-dom"
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BiPlayCircle } from 'react-icons/bi';
import { AiOutlineDownload, AiFillHeart } from 'react-icons/ai';
import { IoMdAdd } from 'react-icons/io';
import ChartMusicTrending from './chartMusicTrending';


interface chart<T> {

}
const Chart: React.FC<chart<any>> = ({ ...props }) => {
    var settings_category = {
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 50000,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 3,

                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
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
                            <img src="https://i.ytimg.com/vi/Yije8O6eGn8/maxresdefault.jpg" alt="" />
                        </div>
                        <div className="box">
                            <img src="https://i.ytimg.com/vi/O8_tb1pDU8g/maxresdefault.jpg" alt="" />
                        </div>
                        <div className="box">
                            <img src="https://i.ytimg.com/vi/DxOB2t7X84A/maxresdefault.jpg" alt="" />
                        </div>
                        <div className="box">
                            <img src="https://i.ytimg.com/vi/X1QfihWHfBo/maxresdefault.jpg" alt="" />
                        </div>
                        <div className="box">
                            <img src="https://i.ytimg.com/vi/x2xblVxi_c4/maxresdefault.jpg" alt="" />
                        </div>
                        <div className="box">
                            <img src="https://i.ytimg.com/vi/swztQOTZbpU/maxresdefault.jpg" alt="" />
                        </div>
                        <div className="box">
                            <img src="https://i.ytimg.com/vi/jKLTbxHe9k8/maxresdefault.jpg" alt="" />
                        </div>
                        <div className="box">
                            <img src="https://i.ytimg.com/vi/naQWLyxs76I/maxresdefault.jpg" alt="" />
                        </div>
                    </Slider>
                </div>
            </div>

            </div>
        </>
    )
}

export default Chart
import React, { useEffect } from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AiOutlineDownload, AiFillHeart,AiOutlineLink } from 'react-icons/ai';
import { IoMdAdd } from 'react-icons/io';
import { FiPlayCircle } from 'react-icons/fi';
import { BsFillPlayFill } from 'react-icons/bs';
import { HiOutlineDotsCircleHorizontal } from 'react-icons/hi';
import { MdNavigateNext } from 'react-icons/md';
import Button from '@mui/material/Button';
import { BiPlayCircle, BiHeart } from 'react-icons/bi';
import ChartMusic from './component/chartMusic';
import { Link } from 'react-router-dom';
import { Select, MenuItem } from "@mui/material"



interface Home<T> {

}

const Home: React.FC<Home<any>> = ({ ...props }) => {
    var settings_banner = {
        dots: true,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 4000,
        className: "center",
        centerMode: true,
        infinite: true,
        slidesToShow: 1,
    };
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
        <div className="home">
            <div className="slider-banner">
                <div>
                    <Slider {...settings_banner}>
                        <div>
                            <img height={362} src="https://ephoto360.com/uploads/effect-data/ephoto360.com/dwe3ayr00/Renekton4-min60a397f352d21.jpg" alt="" />
                        </div>
                        <div>
                            <img height={362} src="https://ephoto360.com/uploads/effect-data/ephoto360.com/dwe3ayr00/Wukong4-min60407fcb5fbe2.jpg" alt="" />
                        </div>
                        <div>
                            <img height={362} src="https://ephoto360.com/uploads/effect-data/ephoto360.com/dwe3ayr00/Malphite4-min60fa35098ca0f.jpg" alt="" />
                        </div>
                        <div>
                            <img height={362} src="https://ephoto360.com/uploads/effect-data/ephoto360.com/dwe3ayr00/zed6-min60c1b978ea671.jpg" alt="" />
                        </div>
                    </Slider>
                </div>
            </div>
            <div className="list-slider">
                <h4 className="title_all">Thể loại <MdNavigateNext className="icon" /></h4>
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
                                    <AiOutlineDownload/> Tải xuống
                                    </MenuItem>
                                <MenuItem>
                                    <AiOutlineLink/> Sao chép link
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
                                    <AiOutlineDownload/> Tải xuống
                                    </MenuItem>
                                <MenuItem>
                                    <AiOutlineLink/> Sao chép link
                                    </MenuItem>
                            </Select>
                            <h6>Nhạc trẻ remix</h6>
                        </div>
                        
                    </Slider>
                </div>
            </div>
            <div className="list-music">
                <h4 className="title_all">Danh sách bài hát <MdNavigateNext className="icon" /></h4>
                <div className="main1">
                    <div className="box-music">
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
                                <IoMdAdd className="icon" />
                            </div>
                        </div>
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
                                <IoMdAdd className="icon" />
                            </div>
                        </div>
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
                                <IoMdAdd className="icon" />
                            </div>
                        </div>
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
                                <IoMdAdd className="icon" />
                            </div>
                        </div>
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
                                <IoMdAdd className="icon" />
                            </div>
                        </div>
                    </div>
                    <div className='limit-items'>
                        <h4 className="title_all">Nhạc sĩ</h4>
                        <input type='checkbox' id='show-all' />
                        <label htmlFor='show-all' className='text-show'>See all</label>
                        <label htmlFor='show-all' className='text-hide'>Hide</label>
                        <div className='items'>
                            <section>
                                <div><img src="https://i.ytimg.com/vi/x2xblVxi_c4/maxresdefault.jpg" alt="" /></div>
                                <div><img src="https://i.ytimg.com/vi/x2xblVxi_c4/maxresdefault.jpg" alt="" /></div>
                                <div><img src="https://i.ytimg.com/vi/x2xblVxi_c4/maxresdefault.jpg" alt="" /></div>
                                <div><img src="https://i.ytimg.com/vi/x2xblVxi_c4/maxresdefault.jpg" alt="" /></div>
                                <div><img src="https://i.ytimg.com/vi/x2xblVxi_c4/maxresdefault.jpg" alt="" /></div>
                                <div><img src="https://i.ytimg.com/vi/x2xblVxi_c4/maxresdefault.jpg" alt="" /></div>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
            <div className="list-slider">
                <h4 className="title_all">Có thể bạn muốn nghe <MdNavigateNext className="icon" /></h4>
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
                                    <AiOutlineDownload/> Tải xuống
                                    </MenuItem>
                                <MenuItem>
                                    <AiOutlineLink/> Sao chép link
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
                                    <AiOutlineDownload/> Tải xuống
                                    </MenuItem>
                                <MenuItem>
                                    <AiOutlineLink/> Sao chép link
                                    </MenuItem>
                            </Select>
                            <h6>Nhạc trẻ remix</h6>
                        </div>
                        
                    </Slider>
                </div>
            </div>
            <div className="list-slider">
                <h4 className="title_all">Nghe gần đây <MdNavigateNext className="icon" /></h4>
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
                                    <AiOutlineDownload/> Tải xuống
                                    </MenuItem>
                                <MenuItem>
                                    <AiOutlineLink/> Sao chép link
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
                                    <AiOutlineDownload/> Tải xuống
                                    </MenuItem>
                                <MenuItem>
                                    <AiOutlineLink/> Sao chép link
                                    </MenuItem>
                            </Select>
                            <h6>Nhạc trẻ remix</h6>
                        </div>
                        
                    </Slider>
                </div>
            </div>
            <div className="list-slider">
                <h4 className="title_all">Top thịnh hành <MdNavigateNext className="icon" /></h4>
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
                                    <AiOutlineDownload/> Tải xuống
                                    </MenuItem>
                                <MenuItem>
                                    <AiOutlineLink/> Sao chép link
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
                                    <AiOutlineDownload/> Tải xuống
                                    </MenuItem>
                                <MenuItem>
                                    <AiOutlineLink/> Sao chép link
                                    </MenuItem>
                            </Select>
                            <h6>Nhạc trẻ remix</h6>
                        </div>
                        
                    </Slider>
                </div>
            </div>
            <div className="list-slider">
                <h4 className="title_all">Nhạc mới mỗi ngày <MdNavigateNext className="icon" /></h4>
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
                                    <AiOutlineDownload/> Tải xuống
                                    </MenuItem>
                                <MenuItem>
                                    <AiOutlineLink/> Sao chép link
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
                                    <AiOutlineDownload/> Tải xuống
                                    </MenuItem>
                                <MenuItem>
                                    <AiOutlineLink/> Sao chép link
                                    </MenuItem>
                            </Select>
                            <h6>Nhạc trẻ remix</h6>
                        </div>
                        
                    </Slider>
                </div>
            </div>
            <div className="list-slider">
                <h4 className="title_all">Sắp diễn ra <MdNavigateNext className="icon" /></h4>
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
                                    <AiOutlineDownload/> Tải xuống
                                    </MenuItem>
                                <MenuItem>
                                    <AiOutlineLink/> Sao chép link
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
                                    <AiOutlineDownload/> Tải xuống
                                    </MenuItem>
                                <MenuItem>
                                    <AiOutlineLink/> Sao chép link
                                    </MenuItem>
                            </Select>
                            <h6>Nhạc trẻ remix</h6>
                        </div>
                        
                    </Slider>
                </div>
            </div>
            <div className="music-charts">
                <div>
                    <h4 className="title_all">#Musichart <BiPlayCircle /></h4>
                    <div className="box-chart">
                        <h5 className="stt">1</h5>
                        <img width={60} height={60} src="https://i.ytimg.com/vi/x2xblVxi_c4/maxresdefault.jpg" alt="" />
                        <div className="name">
                            <h6>Tên bài hát</h6>
                            <div style={{ fontSize: "0.7rem", marginTop: "-0.2rem", color: "#ccc" }}>Nghệ sĩ</div>
                        </div>
                        <h6 className="tyle">41%</h6>
                    </div>
                    <div className="box-chart">
                        <h5 className="stt">2</h5>
                        <img width={60} height={60} src="https://i.ytimg.com/vi/x2xblVxi_c4/maxresdefault.jpg" alt="" />
                        <div className="name">
                            <h6>Tên bài hát</h6>
                            <div style={{ fontSize: "0.7rem", marginTop: "-0.2rem", color: "#ccc" }}>Nghệ sĩ</div>
                        </div>
                        <h6 className="tyle">41%</h6>
                    </div>
                    <div className="box-chart">
                        <h5 className="stt">3</h5>
                        <img width={60} height={60} src="https://i.ytimg.com/vi/x2xblVxi_c4/maxresdefault.jpg" alt="" />
                        <div className="name">
                            <h6>Tên bài hát</h6>
                            <div style={{ fontSize: "0.7rem", marginTop: "-0.2rem", color: "#ccc" }}>Nghệ sĩ</div>
                        </div>
                        <h6 className="tyle">41%</h6>
                    </div>
                    <Button><Link to="/chart">XEM THÊM</Link></Button>
                </div>
                <div className="chart">
                    <ChartMusic />
                </div>
            </div>
        </div>
    )
}

export default Home

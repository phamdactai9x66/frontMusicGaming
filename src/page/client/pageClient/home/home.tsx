import React, { useEffect } from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AiOutlineDownload, AiFillHeart } from 'react-icons/ai';
import { IoMdAdd } from 'react-icons/io';
import { MdNavigateNext } from 'react-icons/md';
import Button from '@mui/material/Button';
import { BiPlayCircle } from 'react-icons/bi';
import ChartMusic from './component/chartMusic';
import { Link } from 'react-router-dom';


interface Home<T> {

}

const Home: React.FC<Home<any>> = ({ ...props }) => {
    var settings_banner = {
        autoplay: true,
        autoplaySpeed: 3000,
        dots: true,
        fade: true,
    };
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
        <div className="home">
            <div className="slider-banner">
                <div>
                    <Slider {...settings_banner}>
                        <div>
                            <img height={362} src="https://i.pinimg.com/originals/82/82/81/828281959b3c108eda190afc561763ae.png" alt="" />
                        </div>
                        <div>
                            <img height={362} src="https://i.redd.it/8lwm1c99d3751.jpg" alt="" />
                        </div>
                        <div>
                            <img height={362} src="https://en.ephoto360.com/uploads/effect-data/en.ephoto360.com/p3d1qswvw/Evelynn6-min60fa36d76e0f8.jpg" alt="" />
                        </div>
                    </Slider>
                </div>
            </div>
            <div className="list-slider">
                <h4>Thể loại <MdNavigateNext className="icon" /></h4>
                <div>
                    <Slider {...settings_category}>
                        <Link to="/playlistDetail">
                        <div className="box">
                            <img src="https://i.ytimg.com/vi/Yije8O6eGn8/maxresdefault.jpg" alt="" />
                        </div>
                        </Link>
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
            <div className="list-music">
                <h4>Danh sách bài hát <MdNavigateNext className="icon" /></h4>
                <div className="main1">
                    <div className="box-music">
                        <div className="music_item">
                            <img src="https://bizweb.dktcdn.net/100/248/398/files/alan-walker-dj-min.jpg?v=1514559370965" alt="" />
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
                            <img src="https://bizweb.dktcdn.net/100/248/398/files/alan-walker-dj-min.jpg?v=1514559370965" alt="" />
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
                            <img src="https://bizweb.dktcdn.net/100/248/398/files/alan-walker-dj-min.jpg?v=1514559370965" alt="" />
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
                            <img src="https://bizweb.dktcdn.net/100/248/398/files/alan-walker-dj-min.jpg?v=1514559370965" alt="" />
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
                            <img src="https://bizweb.dktcdn.net/100/248/398/files/alan-walker-dj-min.jpg?v=1514559370965" alt="" />
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
                        <h4>Nhạc sĩ</h4>
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
                <h4>Có thể bạn muốn nghe <MdNavigateNext className="icon" /></h4>
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
            <div className="list-slider">
                <h4>Nghe gần đây <MdNavigateNext className="icon" /></h4>
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
            <div className="list-slider">
                <h4>Top thịnh hành <MdNavigateNext className="icon" /></h4>
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
            <div className="list-slider">
                <h4>Nhạc mới mỗi ngày <MdNavigateNext className="icon" /></h4>
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
            <div className="list-slider">
                <h4>Sắp diễn ra <MdNavigateNext className="icon" /></h4>
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
            <div className="music-charts">
                <div>
                    <h4>#Musichart <BiPlayCircle /></h4>
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

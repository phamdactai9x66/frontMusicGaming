import React, { useEffect } from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdNavigateNext } from 'react-icons/md';
import Button from '@mui/material/Button';
import { BiPlayCircle } from 'react-icons/bi';
import ChartMusic from './component/chartMusic';
import { Link } from 'react-router-dom';
import VerticalSlider from './component/VerticalSlider';
import HomeCategory from './component/HomeCategory';
import HomeSongComponent from './component/HomeSongComponent';
import ArtistComponent from './component/ArtistComponent';
import WantHearComponent from './component/WantHearComponent';
import RecentlyComponent from './component/RecentlyComponent';
import PopularComponent from './component/PopularComponent';

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
                
                <VerticalSlider settings_banner={settings_banner} />

            </div>

            {/* category */}
            <div className="list-slider">
                
                <HomeCategory settings_category={settings_category}/>

            </div>
            <div className="list-music">
                <h4 className="title_all">Danh sách bài hát <MdNavigateNext className="icon" /></h4>
                <div className="main1">
                    
                    <HomeSongComponent/>

                    {/* artist */}
                    <ArtistComponent/>
                </div>
            </div>
            <div className="list-slider">
                <h4 className="title_all">Có thể bạn muốn nghe <MdNavigateNext className="icon" /></h4>
                
                {/* get by {_limit: 20, view: 'desc', date: "desc"} */}
                <WantHearComponent settings_category={settings_category} />
            </div>
            <div className="list-slider">
                <h4 className="title_all">Nghe gần đây <MdNavigateNext className="icon" /></h4>
                
                {/* get by {_limit: 20, view: 'desc', date: "desc"} */}
                <RecentlyComponent settings_category={settings_category} />
            </div>
            <div className="list-slider">
                <h4 className="title_all">Top thịnh hành <MdNavigateNext className="icon" /></h4>
                
                {/* get by {_limit: 20, view: 'desc'} */}
                <PopularComponent settings_category={settings_category} sort_by={{_limit: 20, view: 'desc'}} />
            </div>
            <div className="list-slider">
                <h4 className="title_all">Nhạc mới mỗi ngày <MdNavigateNext className="icon" /></h4>
                <PopularComponent settings_category={settings_category} sort_by={{_limit: 20, date: 'desc'}} />
            </div>
            <div className="list-slider">
                <h4 className="title_all">Sắp diễn ra <MdNavigateNext className="icon" /></h4>
                <PopularComponent settings_category={settings_category} sort_by={{_limit: 20, day_release: 'desc'}} />
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

import React, { useEffect } from 'react';
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
import { LensTwoTone } from '@mui/icons-material';
import { formStateUser } from 'redux/user/stateUser';
import { useSelector } from 'react-redux';

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

interface Home<T> {
    userState: any,
}

const Home: React.FC<Home<any>> = ({ ...props }) => {
    const userState = useSelector<{ user: any }>(state => state.user) as formStateUser;
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
                <VerticalSlider settings_banner={settings_banner} />
            </div>

            {/* category */}
            <div className="list-slider">
                <h4 className="title_all">Thể loại <MdNavigateNext className="icon" /></h4>
                <HomeCategory settings_category={settings_category} />

            </div>
            <div className="list-music">
                <h4 className="title_all">Danh sách bài hát <MdNavigateNext className="icon" /></h4>
                <div className="main1">
               
                    <HomeSongComponent userState={userState} />

                    {/* artist */}
                    <ArtistComponent />
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
                <PopularComponent settings_category={settings_category} sort_by={{ _limit: 20, view: 'desc' }} />
            </div>
            <div className="list-slider">
                <h4 className="title_all">Nhạc mới mỗi ngày <MdNavigateNext className="icon" /></h4>
                <PopularComponent settings_category={settings_category} sort_by={{ _limit: 20, date: 'desc' }} />
            </div>
            <div className="list-slider">
                <h4 className="title_all">Sắp diễn ra <MdNavigateNext className="icon" /></h4>
                <PopularComponent settings_category={settings_category} sort_by={{ _limit: 20, day_release: 'desc' }} />

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

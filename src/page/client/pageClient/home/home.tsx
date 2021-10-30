import React, { useEffect, useState } from 'react';
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
import { formStateUser } from 'redux/user/stateUser';
import { useSelector } from 'react-redux';
import playlistApi from 'api/playlistApi';


interface Home<T> {
    userState: any,
}

const Home: React.FC<Home<any>> = ({ ...props }) => {
    const [playlists, setPlaylists] = useState([]);
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

    const getPlaylists = async () => {
        const responsePL = await playlistApi.getAll(); // đoạn này nó yêu cầu chuyền tham số vào, ông chuyền vào nhé 😍
        if (!responsePL || responsePL.status === "failed") {
            console.error("Get playlist failed.");
            return;
        }
        const { data } = responsePL;
        setPlaylists(data)
    }

    useEffect(() => {
        getPlaylists()
    }, []);

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

            {playlists.length !== 0 && playlists.map((item: any) => (
                <div className="list-slider">
                    <h4 className="title_all">{item.name} <MdNavigateNext className="icon" /></h4>

                    <WantHearComponent settings_category={settings_category} idPlaylist={item._id} />
                </div>
            ))}

            {/* <div className="list-slider">
                <h4 className="title_all">Có thể bạn muốn nghe <MdNavigateNext className="icon" /></h4>

                 get by {_limit: 20, view: 'desc', date: "desc"} 
                <WantHearComponent settings_category={settings_category} />
            </div>
            
            <div className="list-slider">
                <h4 className="title_all">Nghe gần đây <MdNavigateNext className="icon" /></h4>

                get by {_limit: 20, view: 'desc', date: "desc"}
                <RecentlyComponent settings_category={settings_category} />
            </div>
            <div className="list-slider">
                <h4 className="title_all">Top thịnh hành <MdNavigateNext className="icon" /></h4>

                get by {_limit: 20, view: 'desc'}
                <PopularComponent settings_category={settings_category} sort_by={{ _limit: 20, view: 'desc' }} />
            </div>
            <div className="list-slider">
                <h4 className="title_all">Nhạc mới mỗi ngày <MdNavigateNext className="icon" /></h4>
                <PopularComponent settings_category={settings_category} sort_by={{ _limit: 20, date: 'desc' }} />
            </div>
            <div className="list-slider">
                <h4 className="title_all">Sắp diễn ra <MdNavigateNext className="icon" /></h4>
                <PopularComponent settings_category={settings_category} sort_by={{ _limit: 20, day_release: 'desc' }} />

            </div> */}
            <ChartMusic />
        </div>
    )
}

export default Home

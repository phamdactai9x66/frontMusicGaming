import React, { useEffect, useState } from 'react';
import { MdNavigateNext } from 'react-icons/md';
import ChartMusic from './component/chartMusic';
import { Link, useLocation } from 'react-router-dom';
import VerticalSlider from './component/VerticalSlider';
import HomeCategory from './component/HomeCategory';
import HomeSongComponent from './component/HomeSongComponent';
import ArtistComponent from './component/ArtistComponent';
import WantHearComponent from './component/WantHearComponent';
import { formStateUser } from 'redux/user/stateUser';
import { useSelector } from 'react-redux';
import playlistApi from 'api/playlistApi';
import songApi from 'api/songApi';
import { tranFormDataId } from "component/MethodCommon";
import artistApi from 'api/ArtistApi';


interface Home<T> {
    userState: any,
}

const Home: React.FC<Home<any>> = ({ ...props }) => {
    const [playlists, setPlaylists] = useState([]);
    const userState = useSelector<{ user: any }>(state => state.user) as formStateUser;
    const [songs, setSongs] = useState([]);
    const [songsTransform, setSongsTransform] = useState([]);
    const [artists, setArtists] = useState([]);
    const location =  useLocation();
    const [stoggleModal, setstoggleModal] = useState<boolean>(false);

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
        const responsePL = await playlistApi.getAll({}); // đoạn này nó yêu cầu chuyền tham số vào, ông chuyền vào nhé 😍
        if (!responsePL || responsePL.status === "failed") {
            console.error("Get playlist failed.");
            return;
        }
        const { data } = responsePL;
        setPlaylists(data)
    }
    const getSongs = async () => {
        const responseSong = await songApi.getAll({});
        const resSongsTransform = await tranFormDataId(responseSong.data);
        setSongs(responseSong.data);
        setSongsTransform(resSongsTransform);

        const dataArtists = await artistApi.getAll({});
        setArtists(dataArtists.data);
    }

    useEffect(() => {
        getPlaylists();
        getSongs();
    }, []);

    return (
        <>
            <div className=" w-100 h-100 d-flex position-fixed top-0  text-center" style={{ left: "0px", zIndex: 10, backgroundColor: "rgb(0 0 0 / 25%)" }}>
                <div className="my-auto mx-auto p-4 rounded-3" style={{ backgroundColor: "#9cf6ff" }}>
                    <img
                        className="w-25 h-25"
                        src="https://aux2.iconspalace.com/uploads/music-folder-circle-icon-256.png" alt="" />
                    <p style={{ fontWeight: 500 }}>Hãy đăng nhập để có thể sử dụng tính năng này</p>
                    <p>Tính năng này chỉ dành cho người dùng đã có tài khoản Music Game</p>
                    <div className="d-flex justify-content-center">
                        <div className="" style={{ marginRight: "0.2rem" }}>
                            <button type="button" className="btn btn-light">Đăng kí</button>
                        </div>
                        <div>
                            <button type="button" className="btn btn-primary" style={{ marginLeft: "0.2rem" }}>Đăng nhập</button>
                        </div>
                    </div>
                </div>

            </div>

            {/* // */}
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
                        <ArtistComponent artists={artists} />
                    </div>
                </div>

                {playlists.length !== 0 && playlists.map((item: any) => (
                    <div className="list-slider ">
                        <h4 className="title_all">{item.name} <MdNavigateNext className="icon" /></h4>

                        <WantHearComponent settings_category={settings_category} songs={songsTransform} idPlaylist={item._id} />
                    </div>
                ))}

                <ChartMusic />
            </div>

        </>

    )
}

export default Home

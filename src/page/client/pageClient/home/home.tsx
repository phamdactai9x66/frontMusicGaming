import React, { useEffect, useRef, useState } from 'react';
import { MdNavigateNext } from 'react-icons/md';
import ChartMusic from './component/chartMusic';
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
// import { utimes } from 'fs';
import { useScroll } from 'react-use';


interface HomeIF<T> {
    userState: any | T,
}

const Home: React.FC<HomeIF<any>> = ({ ...props }) => {
    document.title = "Music Game";
    const [playlists, setPlaylists] = useState([]);
    const userState = useSelector<{ user: any }>(state => state.user) as formStateUser;
    const scrollRef = React.useRef<HTMLDivElement>(null);
    const { x, y } = useScroll(scrollRef);
    // const [songs, setSongs] = useState([]);
    const [songsTransform, setSongsTransform] = useState([]);
    const [artists, setArtists] = useState([]);
    // const [stoggleModal, setstoggleModal] = useState<boolean>(false);
    const [isShowPLName, setIsShowPLName] = useState<Array<string>>([]);

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
    useEffect(() => {
        window.addEventListener('scroll', () => {
            console.log('xin chao')
        })
        // scrollRef.current?.addEventListener('scroll', () => {
        //     console.log('xin chao')
        // })
    }, [])

    const getPlaylists = async () => {
        const responsePL = await playlistApi.getAll({});
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
        // setSongs(responseSong.data);
        setSongsTransform(resSongsTransform);

        const dataArtists = await artistApi.getAll({});
        setArtists(dataArtists.data);
    }

    const getPLNull = (_id: string) => {
        setIsShowPLName([...isShowPLName, _id]);
    }

    useEffect(() => {
        getPlaylists();
        getSongs();
    }, []);
    const test1 = (event: Event | any) => {
        console.log('xin hcao')
    }
    return (
        <>
            {/* <div className=" w-100 h-100 d-flex position-fixed top-0  text-center" style={{ left: "0px", zIndex: 10, backgroundColor: "rgb(0 0 0 / 25%)" }}>
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

            </div> */}

            {/* // */}
            <div className="home" ref={scrollRef}>
                <div className="slider-banner">
                    <VerticalSlider settings_banner={settings_banner} />
                </div>

                {/* category */}
                <div className="list-slider">
                    <h4 className="title_all">Chủ đề <MdNavigateNext className="icon" /></h4>
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

                {playlists.length !== 0 && playlists.map((item: any) => {
                    if (isShowPLName.filter(_ => _ === item._id).length !== 0) {
                        return null
                    };
                    return (
                        <div className="list-slider " key={item._id}>
                            <h4 className="title_all">{item.name} <MdNavigateNext className="icon" /></h4>

                            <WantHearComponent settings_category={settings_category} getPLNull={getPLNull} songs={songsTransform} idPlaylist={item._id} />
                        </div>
                    )
                })}
                <ChartMusic />
            </div>

        </>

    )
}

export default Home

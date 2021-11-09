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

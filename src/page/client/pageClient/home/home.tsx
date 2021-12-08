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
import { HandleGet, tranFormDataId } from "component/MethodCommon";
import artistApi from 'api/ArtistApi';
// import { utimes } from 'fs';
import { useScroll } from 'react-use';
import playlistSongApi from 'api/playlistSongApi';
import Loadings from 'page/client/loading/loading';


interface HomeIF<T> {
    userState: any | T,
}

const Home: React.FC<HomeIF<any>> = ({ ...props }) => {
    document.title = "Music Game";
    const [playlists, setPlaylists] = useState([]);
    const userState = useSelector<{ user: any }>(state => state.user) as formStateUser;
    // const scrollRef = React.useRef<HTMLDivElement>(null);
    // const { x, y } = useScroll(scrollRef);
    // const [songs, setSongs] = useState([]);
    const [songsTransform, setSongsTransform] = useState([]);
    const [artists, setArtists] = useState([]);
    // const [stoggleModal, setstoggleModal] = useState<boolean>(false);
    const [PLS, setPLS] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

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
        (async () => {
            const { data: dataPL } = await playlistApi.getAll({});
//
            const { data: dataSongs} = await songApi.getAll({});
            const resSongsTransform = await tranFormDataId(dataSongs);

            const { data: dataArtists} = await artistApi.getAll({});
            //
            const { data: dataPLS } = await playlistSongApi.getAll({});

            // tìm ra những playlistsong có chứa _id song
            const findPLS = dataPLS.filter( (i: any) => dataSongs.findIndex( (_:any) => _._id === i.id_Songs) !== -1);
            const handlePL = dataPL.filter( (i: any) => findPLS.findIndex( (_: any) => _.id_PlayList === i._id) !== -1);
            setArtists(dataArtists);
            setPlaylists(handlePL);
            setSongsTransform(resSongsTransform);
            setPLS(findPLS);
            setLoading(false);
        })();
    }, []);
    // const test1 = (event: Event | any) => {
    //     console.log('xin hcao')
    // }
    // console.log('pls home: ', PLS)
    return (
        <>
            {loading && <Loadings/>}

            {/* // */}
            <div className="home">
            {/* <div className="home" ref={scrollRef}> */}
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

                {playlists.length !== 0 && playlists.map((item: any) => 
                    <div className="list-slider " key={item._id}>
                        <h4 className="title_all">{item.name} <MdNavigateNext className="icon" /></h4>

                        <WantHearComponent settings_category={settings_category} PLS={PLS} songs={songsTransform} idPlaylist={item._id} />
                    </div>
                )}
                <ChartMusic />
            </div>

        </>

    )
}

export default Home

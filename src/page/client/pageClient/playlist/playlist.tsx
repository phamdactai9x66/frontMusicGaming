import React, { useEffect, useState } from 'react';
import playlistApi from 'api/playlistApi';
import songApi from 'api/songApi';
import playlistSongApi from 'api/playlistSongApi';
import { tranFormDataId } from "component/MethodCommon";

import { RouteComponentProps } from 'react-router-dom';
import WantHearComponent from '../home/component/WantHearComponent';
import Slider from 'react-slick';
import { FiPlayCircle } from 'react-icons/fi';
import { useDispatch } from 'react-redux';
import { saveToLocalStorage } from 'page/client/common/localStorageCommon';
import { playSong } from "redux/audio/actionAudio"

interface PlayListClient<T> extends RouteComponentProps {
    userState: any | T,
}

const styleCate = {
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
const PlayListClient: React.FC<PlayListClient<any>> = ({ location, history, ...props }) => {
    const [playlists, setPlaylists] = useState([]);
    const idPlayList = React.useRef<string>('');
    const staticSong = React.useRef<any>([]);
    const dispatch = useDispatch();
    useEffect(() => {
        const getId = (props.match.params as any).idPlayList;
        if (!getId) {
            return history.goBack();
        }
        idPlayList.current = getId
    }, [])


    useEffect(() => {
        (async () => {
            const { data } = await playlistSongApi.getAll({ id_PlayList: idPlayList.current })

            const { data: dataSongs } = await songApi.getAll({});
            staticSong.current = tranFormDataId(dataSongs);

            setPlaylists(data)
        })();
    }, []);
    return (
        <div className="container-nhacmoi">
            <div className="title-nhacmoi-tt grid-2">
                <div>

                    <div className="list-slider " style={{ width: "14rem" }}>
                        {/* <h4 className="title_all">{item.name} </h4> */}
                        {/* <MdNavigateNext className="icon" /> */}

                        <div>
                                {playlists.length !== 0 && playlists.map((item: any) => {
                                    // console.log(staticSong.current)
                                    const findSong = staticSong.current[item?.id_Songs];
                                    // console.log(findSong);
                                    return (
                                        <div className="box" key={findSong?._id} style={{ height: "14.3rem" }}>
                                                <figure style={{ height: "14.3rem" }}>
                                                    <img src={findSong?.image} alt={findSong?.title} style={{ height: "14.3rem" }}/>
                                                </figure>
                                                <div className="icon-box">
                                                    <div>
                                                        <FiPlayCircle onClick={() => {
                                                            dispatch(playSong({ _id: findSong?._id }));
                                                            saveToLocalStorage(findSong);
                                                        }} className="icon" />
                                                    </div>
                                                </div>

                                                <h6>{findSong?.title}</h6>
                                        </div>
                                    )
                                })}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default PlayListClient
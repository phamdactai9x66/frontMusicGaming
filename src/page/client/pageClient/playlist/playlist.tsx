import React, { useEffect, useState } from 'react';
import playlistApi from 'api/playlistApi';
import songApi from 'api/songApi';
import playlistSongApi from 'api/playlistSongApi';
import { tranFormDataId } from "component/MethodCommon";
import { RouteComponentProps } from 'react-router-dom';
import WantHearComponent from '../home/component/WantHearComponent';
import { useDispatch, useSelector } from 'react-redux';
import { saveToLocalStorage } from 'page/client/common/localStorageCommon';
import { BsFillPlayFill } from 'react-icons/bs';
import { BsMusicNoteList } from 'react-icons/bs';
import { Button, MenuItem } from "@mui/material";
import { IoMdAdd } from 'react-icons/io';
import { Popover } from "@material-ui/core";
import GetTimeAudio from 'page/client/common/GetTimeAudio';
import ModalLogged from 'component/clientComponent/ModalLogged';
import AlertComponent from 'component/clientComponent/Alert';
import { handleLike, handleDownload, handleAddToPlaylist } from 'page/client/common/handle';
import userPlaylistApi from 'api/userPlaylist';
import { getlistAudio, playSong } from "redux/audio/actionAudio"
import { AiOutlineDownload, AiFillHeart } from 'react-icons/ai';
import { formStateUser } from 'redux/user/stateUser';

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
    const [playlistName, setPlaylistName] = useState('');
    const [anchor, setAnchor] = useState(null);
    const [anchor2, setAnchor2] = useState(null);
    const [userPlaylists, setUserPlaylists] = useState<any[]>([]);
    const [isLogged, setIsLogged] = useState(false);
    const { user } = useSelector<{ user: any }>(state => state.user) as formStateUser;
    const [songs, setSongs] = useState([]);
    const [handleStatus, setHandleStatus] = useState({ status: "", content: "" })
    const dispatch = useDispatch();

    useEffect(() => {
        const getId = (props.match.params as any).idPlayList;
        if (!getId) {
            return history.goBack();
        }
        idPlayList.current = getId
    }, [location])


    useEffect(() => {
        (async () => {
            const { data } = await playlistSongApi.getAll({ id_PlayList: idPlayList.current })

            const { data: dataSongs } = await songApi.getAll({ status: true });
            staticSong.current = tranFormDataId(dataSongs);

            setPlaylists(data)
        })();
    }, [location]);




    const openPopover = (event: any) => {
        setAnchor(event.currentTarget);
    };

    const openPopover2 = (event: any) => {
        setAnchor2(event.currentTarget);
    };

    useEffect(() => {
        (async () => {
            dispatch(getlistAudio())
        })()
    }, [])

    // useEffect(() => {
    //     const getSongs = async () => {
    //         const { data } = await songApi.getAll({ _limit: 20, status: true });
    //         setSongs(data);
    //     }
    //     getSongs();
    // }, []);

    const handleAdd = async <T extends string>(s: T, u: T, t: T) => {
        if (u === undefined) {
            setIsLogged(true);
            return;
        }
        if (t === 'like') {
            let likeRes = await handleLike(s, u);
            if (likeRes && likeRes.status === "added") {
                setHandleStatus({ status: "success", content: "Thêm vào yêu thích thành công." });
            } else if (likeRes && likeRes.status === "deleted") {
                setHandleStatus({ status: "success", content: "Hủy bỏ yêu thích thành công." });
            } else {
                setHandleStatus({ status: "failed", content: "Thêm vào yêu thích thất bại." });
            }
        }

        if (t === "playlist") {
            let playlistRes = await handleAddToPlaylist(s, u);
            if (playlistRes && playlistRes.status === "successfully") {
                setHandleStatus({ status: "success", content: "Thêm vào playlist thành công." });
                setAnchor(null);
            } else if (playlistRes.status === "existed") {
                setHandleStatus({ status: "failed", content: "Bài hát đã tồn tại trong playlist." });
                setAnchor(null);
            } else {
                setHandleStatus({ status: "failed", content: "Thêm vào playlist thất bại." });
            }
        }
    }


    const getUserPlaylists = async () => {
        if (user === "" || user === undefined) {
            setAnchor(null);
            setIsLogged(true);
            return;
        }
        const { data } = await userPlaylistApi.getAll({ id_User: user._id });
        setUserPlaylists(data);
    }

    const playAudio = <T extends string>(_id: T): void => {
        dispatch(playSong({ _id }))
        // console.log(_id);
    }
    const handleLogged = () => {
        setIsLogged(false);
    }

    useEffect(() => {
        if (handleStatus.status !== "") {
            let timer = setTimeout(() => {
                setHandleStatus({ status: "", content: "" })
            }, 2500);
            return () => clearTimeout(timer);
        }
    }, [handleStatus])

    const handleCreatePlaylist = async () => {
        if (!playlistName) {
            setHandleStatus({
                status: "failed",
                content: "Playlist không được để trống"
            })
            return;
        }
        let form = new FormData();
        form.set("name", playlistName);
        form.set("id_User", user._id);

        const isCreatedPlaylist = await userPlaylistApi.postOne(form);
        if (isCreatedPlaylist.status === "successfully") {
            setUserPlaylists([...userPlaylists, ...isCreatedPlaylist.data]);
            setHandleStatus({
                status: "success",
                content: "Tạo mới Playlist thành công"
            });
            setAnchor2(null);
        } else {
            setHandleStatus({
                status: "failed",
                content: "Không tạo được Playlist"
            })
        }
    }

    return (
        <div className="container-nhacmoi">
            <div className="title-nhacmoi-tt grid-2">
                <div className="text-title-nhacmoi-tt">
                    <h4 className="color-nhacmoi-tt title_all">{(location as any)?.state && (location as any)?.state}</h4>
                </div>
            </div>
            <div className="list-box-musicChart">
                <div className="list-music">
                    <div className="main1">
                        {isLogged && <ModalLogged isLogged={isLogged} handleLogged={handleLogged} />}
                        {handleStatus?.status !== "" && <AlertComponent status={handleStatus.status} content={handleStatus?.content} />}
                        {playlists?.length !== 0 && playlists.map((item: any) => {
                            const findSong = staticSong.current[item?.id_Songs];
                            return (
                                <>
                                    <div className="box-chart mt-4" key={findSong?._id}>
                                        <h5 className="stt">{''}</h5>
                                        <img width={45} height={45} src={findSong?.image} alt={findSong?.title} />
                                        <div className="box-icon " style={{ marginLeft: "0.7rem", padding: "0.1rem 0.58rem", fontSize: "1.5rem" }}
                                            onClick={() => {
                                                dispatch(playSong({ _id: findSong?._id }));
                                                saveToLocalStorage(findSong);
                                            }}
                                        >
                                            <BsFillPlayFill />
                                        </div>
                                        <div className="name">
                                            <h6>{findSong?.title || ''}</h6>
                                            <div style={{ fontSize: "0.7rem", marginTop: "-0.2rem", color: "#ccc" }}>Nghệ sĩ</div>
                                        </div>
                                        <div className="text-white" style={{ marginTop: "1.2rem" }}>
                                            <GetTimeAudio url={findSong?.audio} />
                                        </div>
                                        <div className="icon_item">
                                            <AiOutlineDownload onClick={() => handleDownload(findSong)} className="icon" />
                                            <AiFillHeart onClick={() => handleAdd(findSong?._id, user?._id, "like")} className="icon" />
                                            <IoMdAdd className="icon" onClick={(e) => {
                                                openPopover(e);
                                                getUserPlaylists();
                                            }} />
                                            <Popover
                                                open={Boolean(anchor)}
                                                anchorEl={anchor}
                                                anchorOrigin={{
                                                    vertical: "top",
                                                    horizontal: "left",
                                                }}
                                                transformOrigin={{
                                                    vertical: "bottom",
                                                    horizontal: "right",
                                                }}
                                                onClose={() => setAnchor(null)}
                                            >
                                                <div style={{ background: "#101929", margin: "", color: "#fff", width: "15rem" }}>
                                                    <div className="d-flex gap-2 p-2">
                                                        <img width={35} height={35} src={findSong?.image} alt="" />
                                                        <div>
                                                            <h6>{findSong?.name}</h6>
                                                            <div style={{ marginTop: "-0.7rem" }}><span style={{ fontSize: "0.8rem" }}>205k </span><span style={{ fontSize: "0.8rem" }}> 3.8M</span></div>
                                                        </div>
                                                    </div>
                                                    <hr style={{ margin: "-0.1rem 0 0.5rem 0" }} />
                                                    <MenuItem className="add list" onClick={openPopover2}>
                                                        <IoMdAdd className="icon" /> &ensp; Tạo Playlist mới
                                                    </MenuItem>
                                                    <Popover
                                                        open={Boolean(anchor2)}
                                                        anchorEl={anchor2}
                                                        anchorOrigin={{
                                                            vertical: "top",
                                                            horizontal: "left",
                                                        }}
                                                        transformOrigin={{
                                                            vertical: "bottom",
                                                            horizontal: "right",
                                                        }}
                                                        onClose={() => setAnchor2(null)}
                                                    >
                                                        <div className="item p-3">
                                                            <form>
                                                                <input type="text" onChange={(e) => setPlaylistName(e.target.value)} className="mb-2 p-2 text-light" style={{ background: "#0d141f", border: "0.1rem solid #0e5353" }} placeholder="Nhập tên Playlist" />
                                                                <br />
                                                                <Button color="primary" onClick={handleCreatePlaylist} variant="contained">Tạo mới Playlist</Button>
                                                            </form>
                                                        </div>
                                                    </Popover>

                                                    {userPlaylists.length === 0 && <MenuItem className="list" onClick={() => handleAdd(findSong?._id, user?._id, "playlist")} >
                                                        <BsMusicNoteList /> &ensp; Bạn chưa có Playlist nào.
                                                    </MenuItem>}
                                                    {userPlaylists.length !== 0 && userPlaylists.map((_: any) => (
                                                        <MenuItem className="list" onClick={() => handleAdd(_._id, user._id, "playlist")} >
                                                            <BsMusicNoteList /> &ensp; {_.name}
                                                        </MenuItem>
                                                    ))}

                                                </div>
                                            </Popover>
                                        </div>
                                    </div>
                                </>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>

    )
}

export default PlayListClient
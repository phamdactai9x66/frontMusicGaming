import songApi from 'api/songApi';
import { handleLike, handleDownload, handleAddToPlaylist } from 'page/client/common/handle';
import React, { useEffect, useState } from 'react';
import { BsFillPlayFill } from 'react-icons/bs';
import { BsMusicNoteList } from 'react-icons/bs';
import { CircularProgress, MenuItem } from "@mui/material";
import { AiOutlineDownload, AiFillHeart } from 'react-icons/ai';
import { IoMdAdd } from 'react-icons/io';
import { Popover } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { getlistAudio, playSong } from "redux/audio/actionAudio"
import userPlaylistApi from 'api/userPlaylist';
import { useHistory } from 'react-router';
import NameSongArtist from 'component/nameSongArtist';
import GetTimeAudio from "component/getTimeAudio";
import AlertComponent from 'component/clientComponent/Alert';
import Notification from 'page/notificationModal/NotificationModal';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import LoadingButton from '@mui/lab/LoadingButton';

interface HomeSongComponentIF<T> {
    userState: any | T,
}
const HomeSongComponent: React.FC<HomeSongComponentIF<any>> = (props) => {
    const history: any = useHistory<any>();
    const [playlistName, setPlaylistName] = useState('');
    const [anchor, setAnchor] = useState(null);
    const [anchor2, setAnchor2] = useState(null);
    const [userPlaylists, setUserPlaylists] = useState<any>({
        data: [],
        loading: true,
    });
    const [likeLoading, setLikeLoading] = useState<any[]>([]);
    const [isLogged, setIsLogged] = useState(false);
    const { user } = props.userState;
    const [songs, setSongs] = useState([]);
    const dispatch = useDispatch();
    const [handleStatus, setHandleStatus] = useState({ status: "", content: "" });
    const [addPlaylistLoading, setAddPlaylistLoading] = useState(false);
    const [locationLogged, setLocationlogged] = useState(history.location.state?.isLogged ? history.location.state.isLogged : false);
    

    // if(history && history.location.state?.isLogged){
    //     setIsLogged(true);
    // }
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

    useEffect(() => {
        const getSongs = async () => {
            const { data } = await songApi.getAll({ _limit: 20 });
            setSongs(data);
        }
        getSongs();
    }, []);
    // useEffect( () => {
    //     let locationLogged = history.location.state?.isLogged ? history.location.state.isLogged : false;
    // }, [history])

    const handleAdd = async <T extends string>(s: T, u: T, t: T) => {
        if (!u) {
            setIsLogged(true);
            return;
        }
        if (t === 'like') {
            setLikeLoading([...likeLoading, s]);
            let likeRes = await handleLike(s, u);
            if (likeRes && likeRes.status === "added") {
                setHandleStatus({
                    status: "success",
                    content: "Thêm vào yêu thích thành công."
                })
            } else if (likeRes && likeRes.status === "deleted") {
                setHandleStatus({
                    status: "success",
                    content: "Bỏ yêu thích thành công."
                })
            } else {
                setHandleStatus({
                    status: "failed",
                    content: "Thêm vào yêu thích không thành công."
                })
            }
            setLikeLoading(likeLoading.filter(i => i !== s));
        }

        if (t === "playlist") {
            //đang sai vì chưa lấy được playlist của user
            let playlistRes = await handleAddToPlaylist(s, u);
            if (playlistRes && playlistRes.status === "successfully") {
                setHandleStatus({
                    status: "success",
                    content: "Thêm vào Playlist thành công."
                })
            } else if (playlistRes.status === "existed") {
                setHandleStatus({
                    status: "failed",
                    content: "Bài hát đã tồn tại trong Playlist của bạn."
                })
            } else {
                setHandleStatus({
                    status: "failed",
                    content: "Thêm vào vào playlist không thành công."
                })
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
        setUserPlaylists({
            data: data,
            loading: false,
        });
    }

    const playAudio = <T extends string>(_id: T): void => {
        dispatch(playSong({ _id }))
        // console.log(_id);
    }
    const handleLogged = () => {
        setIsLogged(false);
        setLocationlogged(false);
    }

    if (handleStatus.status !== "") {
        setTimeout(() => {
            setHandleStatus({ status: "", content: "" });
        }, 2500);
    }

    const handleCreatePlaylist = async () => {
        setAddPlaylistLoading(true)
        if (!playlistName) {
            setHandleStatus({
                status: "failed",
                content: "Bạn cần nhập tên Playlist"
            })
            setAddPlaylistLoading(false);
            return;
        }
        let form = new FormData();
        form.append("name", playlistName);
        form.append("id_User", user._id);

        const isCreatedPlaylist = await userPlaylistApi.postOne(form);
        if (isCreatedPlaylist.status === "successfully") {
            setUserPlaylists([...userPlaylists, ...isCreatedPlaylist.data]);
            setHandleStatus({
                status: "success",
                content: "Tạo Playlist thành công"
            });
            setAnchor2(null);
        } else {
            setHandleStatus({
                status: "failed",
                content: "Playlist chưa được tạo"
            });
        }
        setAddPlaylistLoading(false);
    }
    
    return (
        <div className="box-music mt-4">
            {isLogged && <Notification handleLogged={handleLogged} />}
            {locationLogged && <Notification handleLogged={handleLogged} />}
            {handleStatus.status !== "" && <AlertComponent status={handleStatus.status} content={handleStatus.content} />}
            {songs.length !== 0 && songs.map((item: any) => (
                <div className="music_item border-0 p-2" key={item._id}>
                    <img src={item.image} alt={item.title} />
                    <div className="box-icon m-2 pt-1">
                        <BsFillPlayFill onClick={() => playAudio(item._id)} />
                    </div>
                    <div onClick={() => playAudio(item._id)} style={{cursor: "pointer"}}>
                        <h6>{item.title}</h6>
                        <div style={{ fontSize: "0.7rem", marginTop: "-0.2rem" }}>
                            <NameSongArtist _id={item._id} />
                        </div>
                    </div>
                    <div>
                        <GetTimeAudio audio={item?.audio} />
                    </div>
                    <div className="icon_item">
                        <AiOutlineDownload onClick={() => handleDownload(item._id)} className="icon" />
                        {/* <LoadingButton
                            onClick={() => handleAdd(item._id, user._id, "like")}
                            loading={true}
                            loadingIndicator={<CircularProgress size={18} color="inherit" />}
                            className="icon"
                        >
                            <AiFillHeart />
                        </LoadingButton> */}
                        {likeLoading.indexOf(item._id) === -1 ? <AiFillHeart onClick={() => handleAdd(item._id, user._id, "like")} className="icon" /> : <span className='loading-icon'><CircularProgress  className='loading-icon' size={15} sx={{ color: "#d6f4f8"}} /></span> }
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
                                    <img width={35} height={35} src={item.image} alt={item.title} />
                                    <div>
                                        <h6>{item.title}</h6>
                                        <div style={{ marginTop: "-0.7rem" }}><span style={{ fontSize: "0.8rem" }}>{item.view} </span><span style={{ fontSize: "0.8rem" }}> 3.8M</span></div>
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
                                            <input type="text" onChange={(e) => setPlaylistName(e.target.value)} className="mb-2 p-2 text-light" style={{ background: "#0d141f", border: "0.1rem solid #0e5353", borderRadius: ".4rem", }} placeholder="Tên Playlist" />
                                            <br />
                                            <LoadingButton
                                                onClick={handleCreatePlaylist}
                                                startIcon={<ControlPointIcon />}
                                                loading={addPlaylistLoading}
                                                loadingPosition="start"
                                                variant="contained"
                                            >
                                                Tạo
                                            </LoadingButton>
                                        </form>
                                    </div>
                                </Popover>
                                
                                {userPlaylists.loading && <MenuItem className="list" onClick={() => handleAdd(item._id, user._id, "playlist")} >
                                    <CircularProgress />
                                </MenuItem>}
                                {userPlaylists.data.length === 0 && <MenuItem className="list" onClick={() => handleAdd(item._id, user._id, "playlist")} >
                                    <BsMusicNoteList /> &ensp; Bạn chưa có Playlist nào.
                                </MenuItem>}
                                {userPlaylists.data.length !== 0 && userPlaylists.data.map((_: any) => (
                                    <MenuItem className="list" onClick={() => handleAdd(_._id, user._id, "playlist")} >
                                        <BsMusicNoteList /> &ensp; {_.name}
                                    </MenuItem>
                                ))}
                            </div>
                        </Popover>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default HomeSongComponent

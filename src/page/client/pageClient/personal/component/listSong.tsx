import React, { useEffect, useState } from 'react'
import { BsFillPlayFill, BsMusicNoteList } from 'react-icons/bs';
import { AiOutlineDownload, AiFillHeart } from 'react-icons/ai';
import { IoMdAdd } from 'react-icons/io';
import { CircularProgress, MenuItem, Popover } from "@mui/material"
import { BiMusic } from 'react-icons/bi';
import NameSongArtist from "component/nameSongArtist";
import GetTimeAudio from "component/getTimeAudio";
import { playSong } from "redux/audio/actionAudio";
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import { handleLike, handleDownload, handleAddToPlaylist } from 'page/client/common/handle';
import Notification from 'page/notificationModal/NotificationModal';
import AlertComponent from 'component/clientComponent/Alert';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import userPlaylistApi from 'api/userPlaylistApi';
import { formStateUser } from 'redux/user/stateUser';
import { LoadingButton } from '@mui/lab';
import { saveToLocalStorage } from 'page/client/common/localStorageCommon';

interface ListSongIF<T> {
    data: any | T,
    handleUnLike: any,
}
const ListSong: React.FC<ListSongIF<any>> = ({ data, handleUnLike, ...props }) => {
    const dispatch = useDispatch();
    const { user } = useSelector<{ user: any }>(state => state.user) as formStateUser;
    const [anchor, setAnchor] = useState(null);
    const [isLogged, setIsLogged] = useState(false);
    const [likeLoading, setLikeLoading] = useState<any[]>([]);
    const [handleStatus, setHandleStatus] = useState({ status: "", content: "" });
    const [userPlaylists, setUserPlaylists] = useState<any>({
        data: [],
        loading: true,
    });
    const [playlistName, setPlaylistName] = useState('');
    const [anchorItem, setAnchorItem] = useState<any>({
        title: '',
        image: '',
        view: ''
    });
    const [addPlaylistLoading, setAddPlaylistLoading] = useState(false);
    const [anchor2, setAnchor2] = useState(null);

    const openPopover = (event: any) => {
        setAnchor(event.currentTarget);
    };
    const openPopover2 = (event: any) => {
        setAnchor2(event.currentTarget);
    };
    const playAudio = (audio: any) => {
        if (!audio) return;
        dispatch(playSong(audio))
    }

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
                handleUnLike(s)
            } else {
                setHandleStatus({
                    status: "failed",
                    content: "Thêm vào yêu thích không thành công."
                })
            }
            setLikeLoading(likeLoading.filter(i => i !== s));
        }

        if (t === "playlist") {
            let playlistRes = await handleAddToPlaylist(s, u);
            if (playlistRes && playlistRes.status === "successfully") {
                setHandleStatus({
                    status: "success",
                    content: "Thêm vào Playlist thành công."
                });
                setAnchor(null)
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
            setAnchorItem({
                title: '',
                image: '',
                view: ''
            })
            setIsLogged(true);
            return;
        }
        const { data } = await userPlaylistApi.getAll({ id_User: user._id });
        setUserPlaylists({
            data: data,
            loading: false,
        });
    }
    const handleLogged = () => {
        setIsLogged(false);
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
            setUserPlaylists({
                data: [...userPlaylists.data, isCreatedPlaylist.data[0]],
                loading: false,
            });
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

    // let a: any;

    useEffect(() => {
        if (handleStatus.status !== "") {
            let timer = setTimeout(() => {
                setHandleStatus({ status: "", content: "" })
            }, 2500);
            return () => clearTimeout(timer);
        }
    }, [handleStatus])

    return (
        <>
            {isLogged && <Notification handleLogged={handleLogged} />}
            {handleStatus.status !== "" && <AlertComponent status={handleStatus.status} content={handleStatus.content} />}
            <div className="box-music" style={{ height: "305px" }}>
                {data.data?.[0]?.length ?
                    data.data?.[0]?.map((current: any, index: number) => {
                        const idSong = current?.id_Songs
                        const getAudio = data.dataSong?.[idSong];
                        const song = data.dataSong?.[idSong];
                        return (
                            <div className="music_item border-0 p-2" key={index}>
                                <img src={song?.image} alt="" />
                                <div className="box-icon m-2 pt-1">
                                    <BsFillPlayFill onClick={() => { playAudio(getAudio); saveToLocalStorage(song) }} />
                                </div>
                                <div>
                                    <h6>{song?.title}</h6>
                                    <div style={{ fontSize: "0.7rem", marginTop: "-0.2rem" }}>
                                        <NameSongArtist _id={song?._id} />
                                    </div>
                                </div>
                                <div>
                                    <GetTimeAudio audio={song?.audio} />
                                </div>
                                <div className="icon_item">
                                    <AiOutlineDownload onClick={() => handleDownload(song)} className="icon" />
                                    {likeLoading.indexOf(song?._id) === -1 ? <AiFillHeart onClick={() => handleAdd(song?._id, user._id, "like")} className="icon" /> : <span className='loading-icon'><CircularProgress className='loading-icon' size={15} sx={{ color: "#d6f4f8" }} /></span>}
                                    <IoMdAdd className="icon" onClick={(e) => {
                                        openPopover(e);
                                        getUserPlaylists();
                                        setAnchorItem(song);
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
                                        onClose={() => {
                                            setAnchor(null);
                                            setAnchorItem({
                                                title: '',
                                                image: '',
                                                view: ''
                                            })
                                        }}
                                    >
                                        <div style={{ background: "#101929", margin: "", color: "#fff", width: "15rem" }}>
                                            <div className="d-flex gap-2 p-2">
                                                <img width={35} height={35} src={anchorItem?.image} alt={anchorItem.title} />
                                                <div>
                                                    <h6>{anchorItem?.title}</h6>
                                                    {/* <h6>{item.title}</h6> */}
                                                    <div style={{ marginTop: "-0.7rem" }}><span style={{ fontSize: "0.8rem" }}>{anchorItem.view} </span><span style={{ fontSize: "0.8rem" }}> 3.8M</span></div>
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

                                            {userPlaylists.loading && <MenuItem className="list" >
                                                <CircularProgress />
                                            </MenuItem>}
                                            {userPlaylists.data.length === 0 && <MenuItem className="list" >
                                                <BsMusicNoteList /> &ensp; Bạn chưa có Playlist nào.
                                            </MenuItem>}
                                            {userPlaylists.data.length !== 0 && userPlaylists.data.map((_: any) => (
                                                <MenuItem className="list" onClick={() => handleAdd(anchorItem._id, _._id, 'playlist')} >
                                                    <BsMusicNoteList /> &ensp; {_.name}
                                                </MenuItem>
                                            ))}
                                        </div>
                                    </Popover>
                                </div>
                            </div>
                        )
                    }) : <span style={{ fontSize: "1rem", color: "#fff" }}>
                        Bạn chưa có bài hát yêu thích nào? Hãy quay trở lại <Link style={{ fontStyle: 'italic' }} to='/'>trang chủ</Link> và tìm yêu thích của bạn nào.
                    </span>}


            </div>
        </>
    )
}

export default ListSong

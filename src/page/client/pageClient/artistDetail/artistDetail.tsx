import { Button } from "@mui/material";
import { BsFillPlayFill } from "react-icons/bs";
import GetTimeAudio from "page/client/common/GetTimeAudio";
import {
    handleLike,
    handleDownload,
    handleAddToPlaylist,
} from "page/client/common/handle";
import React, { useEffect, useState } from "react";
import { BsMusicNoteList } from "react-icons/bs";
import { MenuItem } from "@mui/material";
import { AiOutlineDownload, AiFillHeart } from "react-icons/ai";
import { IoMdAdd } from "react-icons/io";
import { Popover } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { getlistAudio, playSong } from "redux/audio/actionAudio";
import userPlaylistApi from "api/userPlaylist";
import ModalLogged from "component/clientComponent/ModalLogged";
import AlertComponent from "component/clientComponent/Alert";
import songApi from "api/songApi";
import { useParams } from "react-router-dom";
import ArtistApi from "api/ArtistApi";
import { handleNameArtist } from "page/client/common/handleName";
import songArtistAPi from "api/songArtistAPi";
import { tranFormDataId } from "component/MethodCommon";
import { formStateAudio } from "redux/audio/stateAudio";
import Loadings from "page/client/loading/loading";
import { formStateUser } from "redux/user/stateUser";
import Notification from "page/notificationModal/NotificationModal";

interface ArtistDetailIF<T> {
    // userState: any | T,
}
interface InforArtistIF<T> {
    _id: string | T;
    first_Name: string | T;
    last_Name: string | T;
    birth: string | T;
    image: string | T;
    gender: boolean;
}

const ArtistDetail: React.FC<ArtistDetailIF<any>> = ({ ...props }) => {
    const id_artist = useParams<{ id: any }>();
    console.log("id: ", id_artist)
    const [inforArtist, setInforArtist] = useState<InforArtistIF<string>>({
        _id: "",
        first_Name: "",
        last_Name: "",
        birth: "",
        image: "",
        gender: true,
    });
    const [loading, setLoading] = useState(true);
    const [songsArtist, setSongsArtist] = useState<any>([]);
    const { likstStaticAudio: songsTransformed} = useSelector<{ audio: any }>(state => state.audio) as formStateAudio;

    // const [checkCare, setcheckCare] = useState(true);
    const [playlistName, setPlaylistName] = useState("");
    const [anchor, setAnchor] = useState(null);
    const [anchor2, setAnchor2] = useState(null);
    const [userPlaylists, setUserPlaylists] = useState<any[]>([]);
    const [isLogged, setIsLogged] = useState(false);
    const { user } = useSelector<{ user: any }>(state => state.user) as formStateUser;
    
    const dispatch = useDispatch();
    const [handleStatus, setHandleStatus] = useState({
        status: "",
        content: "",
    });
    // function handelCare() {
    //     setcheckCare(!checkCare);
    // }
    const openPopover = (event: any) => {
        setAnchor(event.currentTarget);
    };

    const openPopover2 = (event: any) => {
        setAnchor2(event.currentTarget);
    };

    useEffect(() => {
        (async () => {
            dispatch(getlistAudio());
            const dataArtist = await ArtistApi.getOne(id_artist?.id);
            
            const { data: dataSongArtist } = await songArtistAPi.getAll( { id_Artist: id_artist.id} );

            setSongsArtist(dataSongArtist);
            setInforArtist(dataArtist.data);
            setLoading(false);
        })();
    }, [id_artist]);

    const handleAdd = async <T extends string>(s: T, u: T, t: T) => {
        if (u === undefined) {
            setIsLogged(true);
            return;
        }
        if (t === "like") {
            let likeRes = await handleLike(s, u);
            if (likeRes && likeRes.status === "added") {
                setHandleStatus({
                    status: "success",
                    content: "Thêm vào yêu thích thành công.",
                });
            } else if (likeRes && likeRes.status === "deleted") {
                setHandleStatus({
                    status: "success",
                    content: "Hủy bỏ yêu thích thành công.",
                });
            } else {
                setHandleStatus({
                    status: "failed",
                    content: "Thêm vào yêu thích thất bại.",
                });
            }
        }

        if (t === "playlist") {
            let playlistRes = await handleAddToPlaylist(s, u);
            if (playlistRes && playlistRes.status === "successfully") {
                setHandleStatus({
                    status: "success",
                    content: "Thêm vào playlist thành công.",
                });
                setAnchor(null);
            } else if (playlistRes.status === "existed") {
                setHandleStatus({
                    status: "failed",
                    content: "Bài hát đã tồn tại trong playlist.",
                });
                setAnchor(null);
            } else {
                setHandleStatus({
                    status: "failed",
                    content: "Thêm vào playlist thất bại.",
                });
            }
        }
    };
    const handleLogged = () => {
        setIsLogged(false);
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

    if (handleStatus.status !== "") {
        setTimeout(() => {
            setHandleStatus({ status: "", content: "" });
        }, 3000);
    }

    const handleCreatePlaylist = async () => {
        if (!playlistName) {
            setHandleStatus({
                status: "failed",
                content: "Playlist không được để trống"
            })
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
        <>
            {loading ? <Loadings/> : <div className="artistDetail ">
            <div className="banner">
                <div
                    className="banner-img"
                    style={{
                        background:
                            "no-repeat url(https://photo-resize-zmp3.zadn.vn/w360_r1x1_jpeg/avatars/4/a/9/1/4a91d506fc7144c7716b9d3166f2c4b6.jpg)",
                    }}
                ></div>

                <div className="more-info">
                    <div className="info-hero">
                        <h1>
                            {handleNameArtist(
                                inforArtist?.first_Name,
                                inforArtist?.last_Name
                            )}
                        </h1>
                        {/* <p>
                          Có chất giọng cao luyến láy cùng những bản hit R&amp;B hay Dance Pop, Sơn Tùng M-TP là ca sĩ rất thành công, không chỉ nổi tiếng ở Việt Nam mà còn được khán giả yêu nhạc Việt trên thế giới biết đến
                        </p> */}
                        <div className="d-flex gap-3">
                            <div>
                                <Button
                                    variant="contained"
                                    color="primary" 
                                    onClick={() => dispatch(playSong({ _id: songsArtist[0]?.id_Songs, listIdSong: songsArtist}))}
                                >
                                    <BsFillPlayFill />
                                    PHÁT NHẠC
                                </Button>
                            </div>

                            {/* <div onClick={handelCare} className="me-3">
                                {checkCare ? (
                                    <Button variant="outlined">
                                        <FiUserPlus />
                                        QUAN TÂM
                                    </Button>
                                ) : (
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        type="submit"
                                    >
                                        <BsCheck />
                                        ĐÃ QUAN TÂM
                                    </Button>
                                )}
                            </div>
                            <div className="mt-2">2.2M QUAN TÂM</div> */}
                        </div>
                    </div>
                    <div className="img_right">
                        <img
                            src={inforArtist?.image}
                            alt=""
                        />
                    </div>
                </div>
            </div>

            <div className="list_musicArtist mx-4 mt-5">
                <h3 className="title_all" style={{ color: "#4bd2ff" }}>
                    Danh sách bài hát{" "}
                    <Button variant="contained" color="primary" type="submit" onClick={() => dispatch(playSong({ _id: songsArtist[0]?.id_Songs, listIdSong: songsArtist}))} >
                        <BsFillPlayFill  />
                        PHÁT TẤT CẢ
                    </Button>
                </h3>
                <div className="mt-4 mb-3 mx-4">
                    {isLogged && <Notification handleLogged={handleLogged} />}
            {handleStatus.status !== "" && <AlertComponent status={handleStatus.status} content={handleStatus.content} />}
                    {/* {songs.length !== 0 && songs.map((item: any, index: number) => ( */}
                    {songsArtist.map( (item: any, index: number) => <div className="box-chart" key={item?._id}>
                        <h5 className="stt">{index + 1}</h5>
                        <img
                            width={45}
                            height={45}
                            src={songsTransformed[item.id_Songs]?.image}
                            alt={songsTransformed[item.id_Songs]?.title}
                        />
                        <div
                            className="box-icon "
                            style={{
                                marginLeft: "0.7rem",
                                padding: "0.1rem 0.58rem",
                                fontSize: "1.5rem",
                                cursor: "pointer",
                            }}
                            // onClick={() => playAudio(item.id_Songs)}
                            onClick={ () => dispatch(playSong({ _id: item.id_Songs, listIdSong: songsArtist}))}
                        >
                            <BsFillPlayFill />
                        </div>
                        <div className="name" style={{ cursor: "pointer"}} onClick={ () => dispatch(playSong({ _id: item.id_Songs, listIdSong: songsArtist}))}>
                            <h6>{songsTransformed[item.id_Songs]?.title}</h6>
                            <div
                                style={{
                                    fontSize: "0.7rem",
                                    marginTop: "-0.2rem",
                                    color: "#ccc",
                                }}
                            >
                                {handleNameArtist(
                                inforArtist?.first_Name,
                                inforArtist?.last_Name
                            )}
                            </div>
                        </div>
                        <div
                            className="text-white"
                            style={{ marginTop: "1.2rem", cursor: "pointer" }}
                            onClick={ () => dispatch(playSong({ _id: item.id_Songs, listIdSong: songsArtist}))}
                        >
                            <GetTimeAudio url={songsTransformed[item.id_Songs]?.audio} />
                        </div>
                        <div className="icon_item">
                            <AiOutlineDownload
                                onClick={() => handleDownload(songsTransformed[item.id_Songs])}
                                className="icon"
                            />
                            <AiFillHeart
                                onClick={() =>
                                    handleAdd(item.id_Songs, user._id, "like")
                                }
                                className="icon"
                            />
                            <IoMdAdd
                                className="icon"
                                onClick={(e) => {
                                    openPopover(e);
                                    getUserPlaylists();
                                }}
                            />
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
                                <div
                                    style={{
                                        background: "#101929",
                                        margin: "",
                                        color: "#fff",
                                        width: "15rem",
                                    }}
                                >
                                    <div className="d-flex gap-2 p-2">
                                        <img
                                            width={35}
                                            height={35}
                                            src={songsTransformed[item.id_Songs]?.image}
                                            alt=""
                                        />
                                        <div>
                                            <h6>{songsTransformed[item.id_Songs]?.title}</h6>
                                            <div
                                                style={{ marginTop: "-0.7rem" }}
                                            >
                                                <span
                                                    style={{
                                                        fontSize: "0.8rem",
                                                    }}
                                                >
                                                    {songsTransformed[item.id_Songs]?.view}
                                                </span>
                                                {/* <span
                                                    style={{
                                                        fontSize: "0.8rem",
                                                    }}
                                                >
                                                    {" "}
                                                    3.8M
                                                </span> */}
                                            </div>
                                        </div>
                                    </div>
                                    <hr
                                        style={{ margin: "-0.1rem 0 0.5rem 0" }}
                                    />
                                    <MenuItem
                                        className="add list"
                                        onClick={openPopover2}
                                    >
                                        <IoMdAdd className="icon" /> &ensp; Tạo
                                        Playlist mới
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
                                                <input
                                                    type="text"
                                                    onChange={(e) =>
                                                        setPlaylistName(
                                                            e.target.value
                                                        )
                                                    }
                                                    className="mb-2 p-2 text-light"
                                                    style={{
                                                        background: "#0d141f",
                                                        border: "0.1rem solid #0e5353",
                                                    }}
                                                    placeholder="Nhập tên Playlist"
                                                />
                                                <br />
                                                <Button color="primary" onClick={handleCreatePlaylist} variant="contained">Tạo mới Playlist</Button>
                                            </form>
                                        </div>
                                    </Popover>

                                    {userPlaylists?.length === 0 && (
                                        <MenuItem
                                            className="list"
                                            onClick={() =>
                                                handleAdd(
                                                    item._id,
                                                    user._id,
                                                    "playlist"
                                                )
                                            }
                                        >
                                            <BsMusicNoteList /> &ensp; Bạn chưa
                                            có Playlist nào.
                                        </MenuItem>
                                    )}
                                    {userPlaylists?.length !== 0 &&
                                        userPlaylists.map((_: any) => (
                                            <MenuItem
                                                className="list"
                                                onClick={() =>
                                                    handleAdd(
                                                        _._id,
                                                        user._id,
                                                        "playlist"
                                                    )
                                                }
                                            >
                                                <BsMusicNoteList /> &ensp;{" "}
                                                {_.name}
                                            </MenuItem>
                                        ))}
                                </div>
                            </Popover>
                        </div>
                    </div>)}
                    {/* ))} */}
                </div>
            </div>
        </div>}
        </>
    );
};

export default ArtistDetail;

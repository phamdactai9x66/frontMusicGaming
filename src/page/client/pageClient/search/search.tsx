import songApi from "api/songApi";
import {
    handleLike,
    handleDownload,
    handleAddToPlaylist,
} from "page/client/common/handle";
import React, { useEffect, useState } from "react";
import { BsFillPlayFill } from "react-icons/bs";
import { BsMusicNoteList } from "react-icons/bs";
import { Button, MenuItem } from "@mui/material";
import { AiOutlineDownload, AiFillHeart } from "react-icons/ai";
import { IoMdAdd } from "react-icons/io";
import { Popover } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { playSong } from "redux/audio/actionAudio";
import userPlaylistApi from "api/userPlaylist";
import NameSongArtist from "component/nameSongArtist";
import GetTimeAudio from "component/getTimeAudio";
import AlertComponent from "component/clientComponent/Alert";
import Notification from "page/notificationModal/NotificationModal";
import { ReactComponent as Spinner } from "../../component/Spinner.svg";
import { formStateUser } from "../../../../redux/user/stateUser";
import "./style.scss";
import { Pagination } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import ArtistApi from "api/ArtistApi";
import BlogApi from "api/BlogApi";
import { handleNameArtist } from "page/client/common/handleName"; 
import Loadings from '../../loading/loading';
import { Link } from 'react-router-dom';

interface SearchIF<T> {
    userState: any;
    location: any;
    history: T;
}

const Search: React.FC<SearchIF<any>> = ({ ...props }) => {
    const key = new URLSearchParams(props.history.location.search).get("key");
    document.title = `Tìm kiếm "${key}" - Music Game`;

    //    const history: any = useHistory<any>();
    const [playlistName, setPlaylistName] = useState("");
    const [anchor, setAnchor] = useState(null);
    const [anchor2, setAnchor2] = useState(null);
    const [userPlaylists, setUserPlaylists] = useState<any[]>([]);
    const [isLogged, setIsLogged] = useState(false);
    const { user } = useSelector<{ user: any }>(
        (state) => state.user
    ) as formStateUser;
    const [topSongs, setTopSongs] = useState([]);
    const [songs, setSongs] = useState({
        status: true,
        data: [],
    });
    const [artists, setArtists] = useState({
        status: true,
        data: [],
    });
    const [blogs, setBlogs] = useState({
        status: true,
        data: [],
    });
    const dispatch = useDispatch();
    const [handleStatus, setHandleStatus] = useState({
        status: "",
        content: "",
    });
    const [addPlaylistLoading, setAddPlaylistLoading] = useState(false);
    const [locationLogged, setLocationlogged] = useState(
        props.location.state?.isLogged ? props.location.state.isLogged : false
    );
    // const [currentPage, setCurrenPage] = useState(1);
    // const [count, setCount] = useState(0);

    const openPopover = (event: any) => {
        setAnchor(event.currentTarget);
    };

    const openPopover2 = (event: any) => {
        setAnchor2(event.currentTarget);
    };

    const searchSongs = async () => {
        const conditionSong = {
            name: key,
        };
        const { data } = await songApi.getAll(conditionSong);
        setSongs({
            status: false,
            data: data,
        });
    };
    const searchArtists = async () => {
        const conditionArtists = {
            name: key,
        };
        const { data } = await ArtistApi.getAll(conditionArtists);
        setArtists({
            status: false,
            data: data,
        });
    };
    const searchBlogs = async () => {
        const conditionBlogs = {
            title: key,
        };
        const { data } = await BlogApi.getAll(conditionBlogs);
        setBlogs({
            status: false,
            data: data,
        });
    };
    useEffect(() => {
        searchSongs();
        searchArtists();
        searchBlogs();
    }, [props.location]);

    useEffect(() => {
        (async () => {
            const { data } = await songApi.getAll({ view: "desc" });
            setTopSongs(data);
        })();
    }, []);

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
                    content: "Bỏ yêu thích thành công.",
                });
            } else {
                setHandleStatus({
                    status: "failed",
                    content: "Thêm vào yêu thích không thành công.",
                });
            }
        }

        if (t === "playlist") {
            //đang sai vì chưa lấy được playlist của user
            let playlistRes = await handleAddToPlaylist(s, u);
            if (playlistRes && playlistRes.status === "successfully") {
                setHandleStatus({
                    status: "success",
                    content: "Thêm vào Playlist thành công.",
                });
            } else if (playlistRes.status === "existed") {
                setHandleStatus({
                    status: "failed",
                    content: "Bài hát đã tồn tại trong Playlist của bạn.",
                });
            } else {
                setHandleStatus({
                    status: "failed",
                    content: "Thêm vào vào playlist không thành công.",
                });
            }
        }
    };

    const getUserPlaylists = async () => {
        if (user === "" || user === undefined) {
            setAnchor(null);
            setIsLogged(true);
            return;
        }
        const { data } = await userPlaylistApi.getAll({ id_User: user._id });
        setUserPlaylists(data);
    };

    const playAudio = <T extends string>(_id: T): void => {
        dispatch(playSong({ _id }));
    };
    const handleLogged = () => {
        setIsLogged(false);
        setLocationlogged(false);
    };

    useEffect( () => {
        if(handleStatus.status !== ""){
            let timer = setTimeout(() => {
                setHandleStatus({ status: "", content: "" })
            }, 2500);
            return () => clearTimeout(timer);
        }
    }, [handleStatus])

    const handleCreatePlaylist = async () => {
        setAddPlaylistLoading(true);
        if (!playlistName) {
            setHandleStatus({
                status: "failed",
                content: "Playlist không được để trống",
            });
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
                content: "Tạo mới Playlist thành công",
            });
            setAnchor2(null);
        } else {
            setHandleStatus({
                status: "failed",
                content: "Không tạo được Playlist",
            });
        }
        setAddPlaylistLoading(false);
    };

    // const panigationChange = (e: any, page: number) => { 
    //     const startBlog = 7 * (page - 1);
    //     const newAllBlogs = [...allBlogs];
    //     const showBlog = newAllBlogs.splice( startBlog, startBlog + 6)
    //     setCurrenPage(page);
    //     setBlog(showBlog);
    // };
    return (
        <>
            {songs.status && artists.status && blogs.status && <Loadings />}
            <div className="m-4 grid-search">
                <div>
                    <h5 className="text-light mb-3">
                        Bài hát
                        <span style={{ color: "#d0d0d0", fontSize: "1rem" }}>
                            (
                            {songs.data.length === 0
                                ? " Không tìm thấy bài hát nào phù hợp "
                                : ` ${songs.data.length} bài hát được tìm thấy `}
                            )
                        </span>
                    </h5>
                    {isLogged && <Notification handleLogged={handleLogged} />}
                    {locationLogged && (
                        <Notification handleLogged={handleLogged} />
                    )}
                    {handleStatus.status !== "" && (
                        <AlertComponent
                            status={handleStatus.status}
                            content={handleStatus.content}
                        />
                    )}
                    {songs.data.length !== 0 &&
                        songs.data.map((item: any) => (
                            <div
                                className="music_item border-0 p-2"
                                key={item._id}
                            >
                                <img src={item.image} alt={item.name} />
                                <div className="box-icon m-2 pt-1">
                                    <BsFillPlayFill
                                        onClick={() => playAudio(item._id)}
                                    />
                                </div>
                                <div onClick={() => playAudio(item._id)}>
                                    <h6>{item.title}</h6>
                                    <div
                                        style={{
                                            fontSize: "0.7rem",
                                            marginTop: "-0.2rem",
                                        }}
                                    >
                                        <NameSongArtist _id={item._id} />
                                    </div>
                                </div>
                                <div>
                                    <GetTimeAudio audio={item?.audio} />
                                </div>
                                <div className="icon_item">
                                    <AiOutlineDownload
                                        onClick={() => handleDownload(item)}
                                        className="icon"
                                    />
                                    <AiFillHeart
                                        onClick={() =>
                                            handleAdd(
                                                item._id,
                                                user._id,
                                                "like"
                                            )
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
                                                    src={item.image}
                                                    alt=""
                                                />
                                                <div>
                                                    <h6>{item.name}</h6>
                                                    <div
                                                        style={{
                                                            marginTop:
                                                                "-0.7rem",
                                                        }}
                                                    >
                                                        <span
                                                            style={{
                                                                fontSize:
                                                                    "0.8rem",
                                                            }}
                                                        >
                                                            205k{" "}
                                                        </span>
                                                        <span
                                                            style={{
                                                                fontSize:
                                                                    "0.8rem",
                                                            }}
                                                        >
                                                            {" "}
                                                            3.8M
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <hr
                                                style={{
                                                    margin: "-0.1rem 0 0.5rem 0",
                                                }}
                                            />
                                            <MenuItem
                                                className="add list"
                                                onClick={openPopover2}
                                            >
                                                <IoMdAdd className="icon" />{" "}
                                                &ensp; Tạo playlist mới
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
                                                                    e.target
                                                                        .value
                                                                )
                                                            }
                                                            className="mb-2 p-2 text-light"
                                                            style={{
                                                                background:
                                                                    "#0d141f",
                                                                border: "0.1rem solid #0e5353",
                                                            }}
                                                            placeholder="Thêm playlist..."
                                                        />
                                                        <br />
                                                        {addPlaylistLoading ? (
                                                            <Button
                                                                color="primary"
                                                                variant="contained"
                                                            >
                                                                <Spinner />
                                                            </Button>
                                                        ) : (
                                                            <Button
                                                                color="primary"
                                                                variant="contained"
                                                                onClick={
                                                                    handleCreatePlaylist
                                                                }
                                                            >
                                                                Thêm playlist
                                                            </Button>
                                                        )}
                                                    </form>
                                                </div>
                                            </Popover>

                                            {userPlaylists.length === 0 && (
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
                                                    <BsMusicNoteList /> &ensp;
                                                    Bạn chưa có Playlist nào.
                                                </MenuItem>
                                            )}
                                            {userPlaylists.length !== 0 &&
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
                                                        <BsMusicNoteList />{" "}
                                                        &ensp; {_.name}
                                                    </MenuItem>
                                                ))}
                                        </div>
                                    </Popover>
                                </div>
                            </div>
                        ))}
                    {songs.data.length >= 7 && (
                        <div
                            className="Pagination mb-3"
                            style={{ borderBottom: "0.1px solid #38939c" }}
                        >
                            {/* <Pagination
                                count={count} page={currentPage} onChange={panigationChange} style={{ padding: 10, paddingTop: 20, color: "#fff" }}
                            /> */}
                            <Pagination
                                count={10}
                                onClick={() => {
                                    console.log();
                                }}
                                style={{
                                    padding: 10,
                                    paddingTop: 20,
                                    color: "#fff",
                                }}
                            />
                        </div>
                    )}

                    <h5 className="text-light mb-3 ">
                        Tác giả{" "}
                        <span style={{ color: "#d0d0d0", fontSize: "1rem" }}>
                            (
                            {artists.data.length === 0
                                ? " Không tìm thấy tác giả nào phù hợp "
                                : ` ${artists.data.length} tác giả được tìm thấy `}
                            )
                        </span>
                    </h5>
                    <div className="search-grid-2">
                        {artists.data.map((item: any) => (
                            <div
                                key={item._id}
                                className="d-flex m-2 bg-gradient rounded-3 p-2 hover"
                                style={{ border: "0.1px solid #537ecae3" }}
                            >
                                <div>
                                    <Avatar
                                        alt={handleNameArtist(
                                            item.first_Name,
                                            item.last_Name
                                        )}
                                        src={item.image}
                                        sx={{ width: 56, height: 56 }}
                                    />
                                </div>
                                <div className="ms-3">
                                    <h6 className="text-white">
                                        {handleNameArtist(
                                            item.first_Name,
                                            item.last_Name
                                        )}
                                    </h6>
                                     
                                    <Button
                                        variant="outlined"
                                        className="text-white"
                                        onClick={() =>
                                            console.log("quan tam: ", item._id)
                                        }
                                        style={{ fontSize: "0.6rem" }}
                                    >
                                        <Link className="text-light" to={`/artistDetail/${item._id}`}>
                                        Quan tâm
                                        </Link>
                                    </Button>
                                    
                                </div>
                            </div>
                        ))}
                    </div>
                    {artists.data.length >= 7 && (
                        <div
                            className="Pagination mb-3"
                            style={{ borderBottom: "0.1px solid #38939c" }}
                        >
                            <Pagination
                                count={10}
                                onClick={() => {
                                    console.log();
                                }}
                                style={{
                                    padding: 10,
                                    paddingTop: 20,
                                    color: "#fff",
                                }}
                            />
                        </div>
                    )}

                    <h5 className="text-light mb-3 ">
                        Blog{" "}
                        <span style={{ color: "#d0d0d0", fontSize: "1rem" }}>
                            (
                            {blogs.data.length === 0
                                ? " Không tìm thấy bài viết nào phù hợp "
                                : ` ${blogs.data.length} bài viết được tìm thấy `}
                            )
                        </span>
                    </h5>
                    <div>
                        <div className="grid-blog-box">
                            {blogs.data.map((item: any) => (
                                <div className="hover-blog">
                                    <img
                                        className="w-100 rounded-3 shadow-lg"
                                        style={{ height: "150px" }}
                                        src={item.image}
                                        alt={item.title}
                                    />
                                    <p className="mt-1">{item.title}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    {blogs.data.length >= 7 && (
                        <div
                            className="Pagination mb-3"
                            style={{ borderBottom: "0.1px solid #38939c" }}
                        >
                            <Pagination
                                count={10}
                                onClick={() => {
                                    console.log();
                                }}
                                style={{
                                    padding: 10,
                                    paddingTop: 20,
                                    color: "#fff",
                                }}
                            />
                        </div>
                    )}
                </div>

                <div className="display-none">
                    <h5 className="text-white search-text">
                        Danh sách bài hát
                    </h5>

                    {topSongs.map((item: any, i: number) =>
                        i === 0 ? (
                            <div
                                className="d-flex top-1 mb-3"
                                style={{ cursor: "pointer" }}
                                onClick={() => playAudio(item._id)}
                            >
                                <div
                                    className="w-50"
                                    style={{ position: "relative" }}
                                >
                                    <h5
                                        className="bottom-0 ms-2 shadow-lg bg-white px-3 py-2 rounded-pill text-danger border"
                                        style={{ position: "absolute" }}
                                    >
                                        1
                                    </h5>
                                    <img
                                        className="w-100 rounded-3"
                                        src={item.image}
                                        alt={item.title}
                                    />
                                </div>
                                <div className="text-white ps-3 w-50">
                                    <h6>{item.title}</h6>
                                    <p>
                                        <NameSongArtist _id={item._id}/>
                                    </p>
                                </div>
                            </div>
                        ) : (
                            <div
                                className="d-flex mb-1 hover-box"
                                style={{
                                    borderBottom: "0.1px solid #38939c",
                                    cursor: "pointer",
                                }}
                                onClick={() => playAudio(item._id)}
                            >
                                <h5 className="px-4 text-white font-monospace py-2">
                                    {i + 1}
                                </h5>
                                <div className="text-white">
                                    <h6 className="mb-1">{item.title}</h6>
                                    <p className="mb-2">
                                        <NameSongArtist _id={item._id}/>
                                    </p>
                                </div>
                            </div>
                        )
                    )}
                </div>
            </div>
        </>
    );
};

export default Search;

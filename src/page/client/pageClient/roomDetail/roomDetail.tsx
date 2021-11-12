import songApi from 'api/songApi';
import { handleLike, handleDownload, handleAddToPlaylist } from 'page/client/common/handle';
import React, { useEffect, useState } from 'react';
import { BsFillPlayFill } from 'react-icons/bs';
import { BiMusic } from 'react-icons/bi';
import { BsMusicNoteList } from 'react-icons/bs';
import { Button, MenuItem } from "@mui/material";
import { AiOutlineDownload, AiFillHeart } from 'react-icons/ai';
import { IoMdAdd } from 'react-icons/io';
import { Popover } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { getlistAudio, playSong } from "redux/audio/actionAudio"
import userPlaylistApi from 'api/userPlaylist';
import { useHistory } from 'react-router';
import ModalLogged from 'component/clientComponent/ModalLogged';
import { Link } from 'react-router-dom';
import NameSongArtist from 'component/nameSongArtist';
import GetTimeAudio from "component/getTimeAudio";
import AlertComponent from 'component/clientComponent/Alert';
import Notification from 'page/notificationModal/NotificationModal';
import { ReactComponent as Spinner } from "./Spinner.svg";
import { Pagination } from '@mui/material'
import Avatar from '@mui/material/Avatar';
interface RoomDetail<T> {
    // userState: any,
}

const RoomDetail: React.FC<RoomDetail<any>> = ({ ...props }) => {
    const [anchor, setAnchor] = useState(null);
    const [anchor2, setAnchor2] = useState(null);
    const [userPlaylists, setUserPlaylists] = useState<any[]>([]);
    const [isLogged, setIsLogged] = useState(false);
    // const { user } = props.userState;
    const openPopover = (event: any) => {
        setAnchor(event.currentTarget);
    };

    const openPopover2 = (event: any) => {
        setAnchor2(event.currentTarget);
    };
    // const getUserPlaylists = async () => {
    //     if (user === "" || user === undefined) {
    //         setAnchor(null);
    //         setIsLogged(true);
    //         return;
    //     }
    //     const { data } = await userPlaylistApi.getAll({ id_User: user._id });
    //     setUserPlaylists(data);
    // }

    return (
       <>
     <div className="romdetail">
         <div className="room">
            <div className="search">
                <form action="">
                <i className="fa fa-search" aria-hidden="true"></i>
                <div className="search_hover"></div>
                <input type="text" placeholder="Search..." />
                </form>
            </div>
            {/*  */}
            <h3 className="mt-3 text-white ps-3" style={{borderLeft:'0.5rem solid #26a5ff',fontSize:'1.2rem'}}>Danh sách bài hát</h3>
            <div className="box-music mt-4" style={{height:'28rem'}}>
         {/* <Notification />
            <Notification  />
            <AlertComponent  />
             */}
           
            {/* /// */}
            <div className="music_item border-0 p-2 ">
                    <img src={`https://i.pinimg.com/564x/31/22/8a/31228ac9605f7997e4d50130503b567d.jpg`} alt={''} />
                    <div className="box-icon m-2 pt-1">
                        <BsFillPlayFill  />
                    </div>
                    <div >
                        <h6>Tên bài hát</h6>
                        <div style={{ fontSize: "0.7rem", marginTop: "-0.2rem" }}>
                            <NameSongArtist />
                        </div>
                    </div>
                    <div>
                        <GetTimeAudio audio='' />
                    </div>
                    <div className="icon_item">
                        <AiOutlineDownload  className="icon" />
                        <AiFillHeart className="icon" />
                        <IoMdAdd className="icon" 
                         onClick={(e) => {
                            openPopover(e);
                            // getUserPlaylists();
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
                            <div style={{ background: "#101929", margin: "", color: "#fff", width: "15rem" }}>
                                <div className="d-flex gap-2 p-2">
                                    <img width={35} height={35} src={`https://i.pinimg.com/564x/31/22/8a/31228ac9605f7997e4d50130503b567d.jpg`} alt="" />
                                    <div>
                                        <h6>Romdetail</h6>
                                        <div style={{ marginTop: "-0.7rem" }}><span style={{ fontSize: "0.8rem" }}>205k </span><span style={{ fontSize: "0.8rem" }}> 3.8M</span></div>
                                    </div>
                                </div>
                                <hr style={{ margin: "-0.1rem 0 0.5rem 0" }} />
                                <MenuItem className="add list"  onClick={openPopover2}>
                                    <IoMdAdd className="icon" /> &ensp; Tạo playlist mới
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
                                            <input type="text" className="mb-2 p-2 text-light" style={{ background: "#0d141f", border: "0.1rem solid #0e5353" }} placeholder="Thêm playlist..." />
                                            <br />
                                            <Button color="primary" variant="contained" ><Spinner/></Button> : 
                                                <Button color="primary" variant="contained"  >Thêm playlist</Button>
                                            
                                        </form>
                                    </div>
                                </Popover>

                                 <MenuItem className="list"  >
                                    <BsMusicNoteList /> &ensp; Bạn chưa có Playlist nào.
                                </MenuItem>
                                    <MenuItem className="list" >
                                        <BsMusicNoteList /> 
                                    </MenuItem>
                            </div>
                        </Popover>
                    </div>
                </div>
                {/* /// */}
                <div className="music_item border-0 p-2">
                    <img src={`https://i.pinimg.com/564x/31/22/8a/31228ac9605f7997e4d50130503b567d.jpg`} alt={''} />
                    <div className="box-icon m-2 pt-1">
                        <BsFillPlayFill  />
                    </div>
                    <div >
                        <h6>Tên bài hát</h6>
                        <div style={{ fontSize: "0.7rem", marginTop: "-0.2rem" }}>
                            <NameSongArtist />
                        </div>
                    </div>
                    <div>
                        <GetTimeAudio audio='' />
                    </div>
                    <div className="icon_item">
                        <AiOutlineDownload  className="icon" />
                        <AiFillHeart className="icon" />
                        <IoMdAdd className="icon" />
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
                        
                        >
                            <div style={{ background: "#101929", margin: "", color: "#fff", width: "15rem" }}>
                                <div className="d-flex gap-2 p-2">
                                    <img width={35} height={35} src={`https://i.pinimg.com/564x/31/22/8a/31228ac9605f7997e4d50130503b567d.jpg`} alt="" />
                                    <div>
                                        <h6>Romdetail</h6>
                                        <div style={{ marginTop: "-0.7rem" }}><span style={{ fontSize: "0.8rem" }}>205k </span><span style={{ fontSize: "0.8rem" }}> 3.8M</span></div>
                                    </div>
                                </div>
                                <hr style={{ margin: "-0.1rem 0 0.5rem 0" }} />
                                <MenuItem className="add list">
                                    <IoMdAdd className="icon" /> &ensp; Tạo playlist mới
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
                               
                                >
                                    <div className="item p-3">
                                        <form>
                                            <input type="text" className="mb-2 p-2 text-light" style={{ background: "#0d141f", border: "0.1rem solid #0e5353" }} placeholder="Thêm playlist..." />
                                            <br />
                                            <Button color="primary" variant="contained" ><Spinner/></Button> : 
                                                <Button color="primary" variant="contained"  >Thêm playlist</Button>
                                            
                                        </form>
                                    </div>
                                </Popover>

                                 <MenuItem className="list"  >
                                    <BsMusicNoteList /> &ensp; Bạn chưa có Playlist nào.
                                </MenuItem>
                                    <MenuItem className="list" >
                                        <BsMusicNoteList /> 
                                    </MenuItem>
                            </div>
                        </Popover>
                    </div>
                </div>
                {/* ... */}
                <div className="music_item border-0 p-2">
                    <img src={`https://i.pinimg.com/564x/31/22/8a/31228ac9605f7997e4d50130503b567d.jpg`} alt={''} />
                    <div className="box-icon m-2 pt-1">
                        <BsFillPlayFill  />
                    </div>
                    <div >
                        <h6>Tên bài hát</h6>
                        <div style={{ fontSize: "0.7rem", marginTop: "-0.2rem" }}>
                            <NameSongArtist />
                        </div>
                    </div>
                    <div>
                        <GetTimeAudio audio='' />
                    </div>
                    <div className="icon_item">
                        <AiOutlineDownload  className="icon" />
                        <AiFillHeart className="icon" />
                        <IoMdAdd className="icon" />
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
                        
                        >
                            <div style={{ background: "#101929", margin: "", color: "#fff", width: "15rem" }}>
                                <div className="d-flex gap-2 p-2">
                                    <img width={35} height={35} src={`https://i.pinimg.com/564x/31/22/8a/31228ac9605f7997e4d50130503b567d.jpg`} alt="" />
                                    <div>
                                        <h6>Romdetail</h6>
                                        <div style={{ marginTop: "-0.7rem" }}><span style={{ fontSize: "0.8rem" }}>205k </span><span style={{ fontSize: "0.8rem" }}> 3.8M</span></div>
                                    </div>
                                </div>
                                <hr style={{ margin: "-0.1rem 0 0.5rem 0" }} />
                                <MenuItem className="add list">
                                    <IoMdAdd className="icon" /> &ensp; Tạo playlist mới
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
                               
                                >
                                    <div className="item p-3">
                                        <form>
                                            <input type="text" className="mb-2 p-2 text-light" style={{ background: "#0d141f", border: "0.1rem solid #0e5353" }} placeholder="Thêm playlist..." />
                                            <br />
                                            <Button color="primary" variant="contained" ><Spinner/></Button> : 
                                                <Button color="primary" variant="contained"  >Thêm playlist</Button>
                                            
                                        </form>
                                    </div>
                                </Popover>

                                 <MenuItem className="list"  >
                                    <BsMusicNoteList /> &ensp; Bạn chưa có Playlist nào.
                                </MenuItem>
                                    <MenuItem className="list" >
                                        <BsMusicNoteList /> 
                                    </MenuItem>
                            </div>
                        </Popover>
                    </div>
                </div>
            </div>
            {/* /// */}
            <div className="Pagination mt-5">
                <Pagination count={10} onClick={() => { console.log() }} style={{ padding: 10, paddingTop: 20, color: "#fff" }} />
            </div>
         </div>
         <div className="">
            <div className="search">
                <form action="">
                <i className="fa fa-search" aria-hidden="true"></i>
                <div className="search_hover"></div>
                <input type="text" placeholder="Search..." />
                </form>
            </div>
            {/* <Button variant="contained" disableElevation>
                Tìm bạn
            </Button> */}

            <h3 className="mt-3 text-white ps-3" style={{borderLeft:'0.5rem solid #26a5ff',fontSize:'1.2rem'}}>Danh sách bạn bè</h3>
                <div className="mt-3 grid-user">
                    <div>
                    <Avatar src="https://i.pinimg.com/564x/97/b8/74/97b874a20ba6d201ee99f74a7930bc67.jpg" />
                    <p className="text-white">Tên user</p>
                    </div>
                    <div>
                    <Avatar src="https://i.pinimg.com/564x/97/b8/74/97b874a20ba6d201ee99f74a7930bc67.jpg" />
                    <p className="text-white">Tên user</p>
                    </div>
                    <div>
                    <Avatar src="https://i.pinimg.com/564x/97/b8/74/97b874a20ba6d201ee99f74a7930bc67.jpg" />
                    <p className="text-white">Tên user</p>
                    </div>
                    <div>
                    <Avatar src="https://i.pinimg.com/564x/97/b8/74/97b874a20ba6d201ee99f74a7930bc67.jpg" />
                    <p className="text-white">Tên user</p>
                    </div>
                    <div>
                    <Avatar src="https://i.pinimg.com/564x/97/b8/74/97b874a20ba6d201ee99f74a7930bc67.jpg" />
                    <p className="text-white">Tên user</p>
                    </div>
                    <div>
                    <Avatar src="https://i.pinimg.com/564x/97/b8/74/97b874a20ba6d201ee99f74a7930bc67.jpg" />
                    <p className="text-white">Tên user</p>
                    </div>
                    <div>
                    <Avatar src="https://i.pinimg.com/564x/97/b8/74/97b874a20ba6d201ee99f74a7930bc67.jpg" />
                    <p className="text-white">Tên user</p>
                    </div>

                    
                </div>
         </div>
     </div>
       </>      
    )
}

export default RoomDetail

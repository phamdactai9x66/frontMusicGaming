import { RouteChildrenProps, withRouter } from "react-router-dom";
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
import { useDispatch, useSelector } from 'react-redux';
import { getlistAudio, playSong } from "redux/audio/actionAudio"
import userPlaylistApi from 'api/userPlaylist';
import { useHistory } from 'react-router';
import ModalLogged from 'component/clientComponent/ModalLogged';
import { Link } from 'react-router-dom';
import NameSongArtist from 'component/nameSongArtist';
import GetTimeAudio from "component/getTimeAudio";
import AlertComponent from 'component/clientComponent/Alert';
import Notification from 'page/notificationModal/NotificationModal';
import { ReactComponent as Spinner } from "../../component/Spinner.svg"
import { formStateUser } from '../../../../redux/user/stateUser';
import './style.scss'
import { Pagination } from '@mui/material'
import Avatar from '@mui/material/Avatar';
interface Search<T> {
   userState: any,
}

const Search: React.FC<Search<any>> = ({ ...props }) => {
   const history: any = useHistory<any>();
   const [playlistName, setPlaylistName] = useState('');
   const [anchor, setAnchor] = useState(null);
   const [anchor2, setAnchor2] = useState(null);
   const [userPlaylists, setUserPlaylists] = useState<any[]>([]);
   const [isLogged, setIsLogged] = useState(false);
   const { user } =useSelector<{ user: any }>(state => state.user) as formStateUser;;
   console.log(props)
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
       if (u === undefined) {
           setIsLogged(true);
           return;
       }
       if (t === 'like') {
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
       setUserPlaylists(data);
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
               content: "Playlist không được để trống"
           })
           setAddPlaylistLoading(false);
           return;
       }
       let form = new FormData;
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
           });
       }
       setAddPlaylistLoading(false);
   }
    return (
       <>
       <div className="m-4 grid-search">
    
       <div>
         <h5 className="text-light mb-3">
         Bài hát  <span style={{color:'#d0d0d0',fontSize:'1rem'}}>({'2'} kết quả trùng khớp)</span>
       </h5> 
       {isLogged && <Notification handleLogged={handleLogged} />}
            {locationLogged && <Notification handleLogged={handleLogged} />}
            {handleStatus.status !== "" && <AlertComponent status={handleStatus.status} content={handleStatus.content} />}
            {songs.length !== 0 && songs.map((item: any) => (
                <div className="music_item border-0 p-2" key={item._id}>
                    <img src={item.image} alt={item.name} />
                    <div className="box-icon m-2 pt-1">
                        <BsFillPlayFill onClick={() => playAudio(item._id)} />
                    </div>
                    <div onClick={() => playAudio(item._id)}>
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
                        <AiFillHeart onClick={() => handleAdd(item._id, user._id, "like")} className="icon" />
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
                                    <img width={35} height={35} src={item.image} alt="" />
                                    <div>
                                        <h6>{item.name}</h6>
                                        <div style={{ marginTop: "-0.7rem" }}><span style={{ fontSize: "0.8rem" }}>205k </span><span style={{ fontSize: "0.8rem" }}> 3.8M</span></div>
                                    </div>
                                </div>
                                <hr style={{ margin: "-0.1rem 0 0.5rem 0" }} />
                                <MenuItem className="add list" onClick={openPopover2}>
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
                                            <input type="text" onChange={(e) => setPlaylistName(e.target.value)} className="mb-2 p-2 text-light" style={{ background: "#0d141f", border: "0.1rem solid #0e5353" }} placeholder="Thêm playlist..." />
                                            <br />
                                            {addPlaylistLoading ? <Button color="primary" variant="contained" ><Spinner/></Button> : 
                                                <Button color="primary" variant="contained" onClick={handleCreatePlaylist} >Thêm playlist</Button>
                                            }
                                        </form>
                                    </div>
                                </Popover>

                                {userPlaylists.length === 0 && <MenuItem className="list" onClick={() => handleAdd(item._id, user._id, "playlist")} >
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
            ))}
             <div className="Pagination mb-3" style={{ borderBottom:"0.1px solid #38939c"}}>
                <Pagination count={10} onClick={() => { console.log() }} style={{ padding: 10, paddingTop: 20, color: "#fff" }} />
            </div>
               <h5 className="text-light mb-3 ">
               Tác giả  <span style={{color:'#d0d0d0',fontSize:'1rem'}}>({'2'} kết quả trùng khớp)</span>
               </h5>
               <div className="search-grid-2">
                  <div className="d-flex m-2 bg-gradient rounded-3 p-2 hover" style={{border:"0.1px solid #537ecae3"}}>
                     <div >
                     <Avatar
                        alt="Remy Sharp"
                        src="https://i.pinimg.com/564x/35/60/85/356085ae48b7f951d96424832d6e82f1.jpg"
                        sx={{ width: 56, height: 56 }}
                     />
                     </div>
                     <div className="ms-3">
                        <h6 className="text-white">Tên tác giả</h6>
                        <Button variant="outlined" className="text-white" style={{fontSize:"0.6rem"}}>Quan tâm</Button>
                     </div>
                  </div>
                  <div className="d-flex m-2 bg-gradient rounded-3 p-2 hover" style={{border:"0.1px solid #537ecae3"}}>
                     <div >
                     <Avatar
                        alt="Remy Sharp"
                        src="https://i.pinimg.com/564x/35/60/85/356085ae48b7f951d96424832d6e82f1.jpg"
                        sx={{ width: 56, height: 56 }}
                     />
                     </div>
                     <div className="ms-3">
                        <h6 className="text-white">Tên tác giả</h6>
                        <Button variant="outlined" className="text-white" style={{fontSize:"0.6rem"}}>Quan tâm</Button>
                     </div>
                  </div>
                  <div className="d-flex m-2 bg-gradient rounded-3 p-2 hover" style={{border:"0.1px solid #537ecae3"}}>
                     <div >
                     <Avatar
                        alt="Remy Sharp"
                        src="https://i.pinimg.com/564x/35/60/85/356085ae48b7f951d96424832d6e82f1.jpg"
                        sx={{ width: 56, height: 56 }}
                     />
                     </div>
                     <div className="ms-3">
                        <h6 className="text-white">Tên tác giả</h6>
                        <Button variant="outlined" className="text-white" style={{fontSize:"0.6rem"}}>Quan tâm</Button>
                     </div>
                  </div>
                  <div className="d-flex m-2 bg-gradient rounded-3 p-2 hover"  style={{border:"0.1px solid #537ecae3"}}>
                     <div >
                     <Avatar
                        alt="Remy Sharp"
                        src="https://i.pinimg.com/564x/35/60/85/356085ae48b7f951d96424832d6e82f1.jpg"
                        sx={{ width: 56, height: 56 }}
                     />
                     </div>
                     <div className="ms-3">
                        <h6 className="text-white">Tên tác giả</h6>
                        <Button variant="outlined" className="text-white" style={{fontSize:"0.6rem"}}>Quan tâm</Button>
                     </div>
                  </div>
               </div> 
                <div className="Pagination mb-3" style={{ borderBottom:"0.1px solid #38939c"}}>
                    <Pagination count={10} onClick={() => { console.log() }} style={{ padding: 10, paddingTop: 20, color: "#fff" }} />
                </div>
            </div>

  
            <div>
               <h5 className="text-white search-text">Danh sách bài hát</h5>
               <div className="d-flex top-1 mb-3">
                  <div className="w-50" style={{position:"relative"}}>
                     <h5 className="bottom-0 ms-2 shadow-lg bg-white px-3 py-2 rounded-pill text-danger border" style={{position:"absolute"}}>1</h5>
                     <img className="w-100 rounded-3" src="https://i.pinimg.com/564x/d9/ca/13/d9ca13bac3f5c8b027fc9cd56331104b.jpg"/>
                  </div>
                  <div className="text-white ps-3 w-50">
                     <h6>Tên bài hát</h6>
                     <p>tên tác giả</p>
                  </div>
               </div>
               <div className="d-flex mb-1 hover-box" style={{ borderBottom:"0.1px solid #38939c"}}>
                  <h5 className="px-4 text-white font-monospace py-2">
                     2
                  </h5>
                  <div className="text-white">
                     <h6 className="mb-1">Tên bài hát</h6>
                     <p className="mb-2">tên tác giả</p>
                  </div>
               </div>
               <div className="d-flex mb-1 hover-box" style={{ borderBottom:"0.1px solid #38939c"}}>
                  <h5 className="px-4 text-white font-monospace py-2">
                     3
                  </h5>
                  <div className="text-white">
                     <h6 className="mb-1">Tên bài hát</h6>
                     <p className="mb-2">tên tác giả</p>
                  </div>
               </div>
               <div className="d-flex mb-1 hover-box" style={{ borderBottom:"0.1px solid #38939c"}}>
                  <h5 className="px-4 text-white font-monospace py-2">
                     4
                  </h5>
                  <div className="text-white">
                     <h6 className="mb-1">Tên bài hát</h6>
                     <p className="mb-2">tên tác giả</p>
                  </div>
               </div>
             
            
            </div>
       </div>
      
       </>
    )
}

export default Search

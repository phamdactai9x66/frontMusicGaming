import React, { useEffect, useState, useRef } from 'react';
import { BsFillPlayFill, BsMusicNoteList } from 'react-icons/bs';
import { Button, MenuItem, Pagination, TextField } from "@mui/material";
import { AiOutlineDownload, AiFillHeart } from 'react-icons/ai';
import { IoMdAdd } from 'react-icons/io';
import { Popover } from "@material-ui/core";
import NameSongArtist from 'component/nameSongArtist';
import GetTimeAudio from "component/getTimeAudio";
import { ReactComponent as Spinner } from "./Spinner.svg";
import roomSong from "api/roomSong";
import { RouteComponentProps } from "react-router-dom";
import songApi from "api/songApi";
import { tranFormDataId } from "component/MethodCommon";
import { useDispatch } from "react-redux";
import { playSong } from "redux/audio/actionAudio";
import ListRoomUser from "./component/listRoomUser";
import roomUser from "api/roomUser";
interface RoomDetail<T> extends RouteComponentProps {
}
const RoomDetail: React.FC<RoomDetail<any>> = ({ match, ...props }) => {
    const [anchor, setAnchor] = useState(null);
    const [anchor2, setAnchor2] = useState(null);
    const [songRoom, setSongRoom] = useState({ display: false, data: [] });
    const dispatch = useDispatch();

    const saveSong = useRef<any>({})
    // console.log(props.location)
    useEffect(() => {

        const checkId = (props.location.state as any).idRoomUser;
        if (!checkId) return props.history.goBack();
        return () => {
            (async () => {
                const checkId = (props.location.state as any).idRoomUser;
                const getUrl = new URL(window.location.href);
                const findRoomDetail = getUrl.pathname.split('/').some(current => current === 'roomDetail');
                if (!findRoomDetail) {
                    const deleteUser = await roomUser.DeleteOne(checkId);
                }
            })()
        }
    }, [])

    useEffect(() => {
        (async () => {
            const { data } = await songApi.getAll({});
            saveSong.current = tranFormDataId<any[]>(data);
        })()

    }, [])

    useEffect(() => {
        (async () => {
            const getIdRoom = (match.params as any).idRoom;
            if (!getIdRoom) return props.history.goBack();
            const query = {
                id_Room: getIdRoom
            }
            const { data } = await roomSong.getAll(query)
            setSongRoom({ display: true, data })
            // console.log(getSongRoom);
        })()
        return () => {

        }
    }, [])
    const openPopover = (event: any) => {
        setAnchor(event.currentTarget);
    };

    const openPopover2 = (event: any) => {
        setAnchor2(event.currentTarget);
    };
    const playAudio = <T extends string>(_id: T): void => {
        if (!_id) return;
        dispatch(playSong({ _id }))
    }

    const listSongRoom = () => {
        // console.log(songRoom)
        return songRoom.data.map((current: any, index: number) => {
            const finSong = saveSong?.current[current?.id_Song]
            return (<div className="music_item border-0 p-2 " key={index}>
                <img src={finSong?.image} alt={''} />
                <div className="box-icon m-2 pt-1">
                    <BsFillPlayFill onClick={() => playAudio(finSong._id)} />
                </div>
                <div >
                    <h6>{finSong?.title}</h6>
                    <div style={{ fontSize: "0.7rem", marginTop: "-0.2rem" }}>
                        <NameSongArtist _id={current?.id_Song} />
                    </div>
                </div>
                <div>
                    <GetTimeAudio audio={finSong?.audio} />
                </div>
                <div className="icon_item">
                    <AiOutlineDownload className="icon" />
                    <AiFillHeart className="icon" />
                    <IoMdAdd className="icon"
                        onClick={(e) => openPopover(e)}
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
                                        <input type="text" className="mb-2 p-2 text-light" style={{ background: "#0d141f", border: "0.1rem solid #0e5353" }} placeholder="Thêm playlist..." />
                                        <br />
                                        <Button color="primary" variant="contained" ><Spinner /></Button> :
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
            </div>)
        })
    }


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
                    <h3 className="mt-3 text-white ps-3" style={{ borderLeft: '0.5rem solid #26a5ff', fontSize: '1.2rem' }}>Danh sách bài hát</h3>
                    <div className="box-music mt-4">
                        {listSongRoom()}
                    </div>
                    {/* /// */}
                    <div className="Pagination mt-5">
                        <Pagination count={10} onClick={() => { console.log() }} style={{ padding: 10, paddingTop: 20, color: "#fff" }} />
                    </div>
                </div>
                <div className="search_user">
                    <TextField id="standard-basic" label="Tìm kiếm" style={{ color: "#fff" }} variant="standard" />
                    <br /><br /><Button variant="contained" color="error">
                        Tìm bạn
                    </Button>
                    <br /><br />
                    <h3 className="mt-3 text-white ps-3" style={{ borderLeft: '0.5rem solid #26a5ff', fontSize: '1.2rem' }}>Đang hoạt động</h3>
                    <div className="grid-user">
                        <ListRoomUser />
                    </div>
                </div>
            </div>
        </>
    )
}

export default RoomDetail

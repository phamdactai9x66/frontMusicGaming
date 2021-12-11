import React, { useEffect, useState, useRef, useLayoutEffect } from 'react';
import { BsFillPlayFill, BsMusicNoteList } from 'react-icons/bs';
import { Button, MenuItem, Pagination, TextField } from "@mui/material";
import { AiOutlineDownload, AiFillHeart } from 'react-icons/ai';
import DeleteIcon from '@mui/icons-material/Delete';
import NameSongArtist from 'component/nameSongArtist';
import GetTimeAudio from "component/getTimeAudio";
import { ReactComponent as Spinner } from "./Spinner.svg";
import roomSong from "api/roomSong";
import { RouteComponentProps } from "react-router-dom";
import songApi from "api/songApi";
import { tranFormDataId } from "component/MethodCommon";
// import { playSong } from "redux/audio/actionAudio";
import ListRoomUser from "./component/listRoomUser";
import roomUser from "api/roomUser";
import { io } from "socket.io-client";
import SearchSong from "./component/searchSong";

interface RoomDetail<T> extends RouteComponentProps {
}
const server = "http://localhost:5000";
const RoomDetail: React.FC<RoomDetail<any>> = ({ match, ...props }) => {
    const [songRoom, setSongRoom] = useState({ display: false, data: [] });
    const [renderSong, setrenderSong] = useState(0)
    const saveSong = useRef<any>({})
    const saveId = useRef<string>('');
    // console.log(props.location)
    useLayoutEffect(() => {
        const checkId = (props.location.state as any)?.idRoomUser;
        if (!checkId) return props.history.goBack();
        saveId.current = checkId
    }, [])
    useEffect(() => {

        return () => {
            (async () => {
                try {
                    const checkId = saveId.current;
                    const getUrl = new URL(window.location.href);
                    const findRoomDetail = getUrl.pathname.split('/').some(current => current === 'roomDetail');
                    if (!findRoomDetail || checkId) {
                        const deleteUser = await roomUser.DeleteOne(checkId);
                        console.log(deleteUser);
                        io(server).emit("JoinRoom");
                    }
                } catch (error) {
                    props.history.goBack();
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
        io(server).on('deliverSong', (res) => {
            // console.log(res)
            setrenderSong(res)
        })
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
    }, [renderSong])
    const playAudio = <T extends string>(_id: T): void => {
        if (!_id) return;
        const getIdRoom = (match.params as any).idRoom;
        io(server).emit("test1", { idRoom: getIdRoom, idSong: _id });
    }
    const DeleteSong = async (idSong: string): Promise<void> => {
        if (!idSong) return;
        const deleteSong = await roomSong.deleteOne(idSong);
        io(server).emit("newSongRoom");
    }
    const listSongRoom = () => {
        // console.log(songRoom)
        return songRoom.data.map((current: any, index: number) => {
            const finSong = saveSong?.current[current?.id_Song]
            return (<div className="music_item border-0 p-2 " key={index}>
                <img src={finSong?.image} alt={''} />
                <div className="box-icon m-2 pt-1">
                    <BsFillPlayFill onClick={() => playAudio(finSong?._id)} />
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
                    <span style={{ marginRight: 5 }}></span>
                    <DeleteIcon className="icon" onClick={() => DeleteSong(current?._id)} />
                </div>
            </div>)
        })
    }
    const addSongToRoom = async (idSong: string): Promise<void> => {
        const data = {
            id_Room: (match.params as any).idRoom,
            id_Song: idSong
        }
        const getNewSong = await roomSong.postSong<object>(data);
        io(server).emit("newSongRoom");
    }
    return (
        <>
            <div className="romdetail">
                <div className="room">
                <h3 className="mt-3 text-white ps-3" style={{ borderLeft: '0.5rem solid #26a5ff', fontSize: '1.2rem' }}>{(props.location.state as any)?.name_Room}</h3>
                    <SearchSong addSongToRoom={addSongToRoom} />
                    {/*  */}
                    <h3 className="mt-3 text-white ps-3" style={{ borderLeft: '0.5rem solid #26a5ff', fontSize: '1.2rem' }}>Danh sách bài hát</h3>
                    <div className="box-music mt-4">
                        {listSongRoom()}
                    </div>
                    {/* /// */}
                    {/* <div className="Pagination mt-5">
                        <Pagination count={10} onClick={() => { console.log() }} style={{ padding: 10, paddingTop: 20, color: "#fff" }} />
                    </div> */}
                </div>
                <div className="search_user">
                    {/* <div>
                        <TextField style={{ width: "100%" }} id="standard-basic" label="Tìm kiếm" variant="standard" />
                        <br /><br /><Button variant="contained" color="error">
                            Tìm bạn
                        </Button>
                    </div>
                    <br /><br /> */}
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

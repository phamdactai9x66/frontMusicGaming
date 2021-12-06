import React, { useState, useRef } from 'react'
import { Avatar, AvatarGroup } from '@mui/material';
import { tranFormDataId } from "component/MethodCommon"
import { RouteComponentProps, withRouter } from "react-router-dom";
import roomUserApi from "api/roomUser";
import { useSelector } from "react-redux";
import { formStateUser } from "redux/user/stateUser";
import { variableCommon } from "component/variableCommon"
import { io } from "socket.io-client";
import roomApi from "api/roomApi";
// import { Formik, Form } from "formik";
// import TextField from '@mui/material/TextField';
import Modal from "./Modal";
// import Modal from "./Modal"
interface ListRoomIF<T> extends RouteComponentProps {
    current: T,
    index: number,
    saveData: T
}

const ListRoom: React.FC<ListRoomIF<any>> = ({ index, current, history, ...props }) => {
    const [open, setOpen] = useState<boolean>(false);
    const { user } = useSelector<{ user: any }>(state => state.user) as formStateUser;
    const server = "http://localhost:5000";
    const saveUser = useRef({});
    const listUser = () => {
        const { roomUser, user } = props.saveData as any;
        const findRoom = roomUser.filter((currentRU: any) => currentRU.id_Room === current._id)
        return findRoom.map((current: any, index: number) => {
            const getListId = tranFormDataId(user)[current.id_User];
            return <Avatar key={index} alt="Remy Sharp" src={getListId?.avatar} />
        })
    }
    const navigateDetailRoom = async () => {
        const data = {
            id_Room: current._id,
            id_User: user._id
        }
        // console.log(current._id)
        const { data: findRoom } = await roomApi.getAll({ _id: current._id })

        if (findRoom && !findRoom.status) {
            const addUserintoRoom = await roomUserApi.postOne<object>(data);
            saveUser.current = addUserintoRoom
            if (addUserintoRoom.status === variableCommon.statusS && addUserintoRoom?.data[0]._id) {
                io(server).emit("JoinRoom")
                history.push(`/listenTogether/roomDetail/${current?._id || ''}`, {
                    idRoomUser: addUserintoRoom?.data[0]._id
                })

            }
        } else {
            setOpen(true)
        }
    }

    return (
        <>
            <div className="room_box" key={index}>
                <div className="name" onClick={navigateDetailRoom} style={{ cursor: 'pointer', textTransform: 'capitalize' }}>
                    <h6>{current?.name_Room}</h6>
                    <div>
                        <AvatarGroup max={4}>
                            {listUser()}
                        </AvatarGroup>
                    </div>
                </div>
                <Modal open={open} setOpen={setOpen} current={current} saveUser={saveUser} />
            </div>

        </>
    )
}

export default withRouter(ListRoom)

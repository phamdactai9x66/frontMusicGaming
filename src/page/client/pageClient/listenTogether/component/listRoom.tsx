import React, { useState } from 'react'
import { Avatar, AvatarGroup, Button } from '@mui/material';
import { FcKey } from 'react-icons/fc';
import { Modal, Box } from "@material-ui/core";
import { tranFormDataId } from "component/MethodCommon"
import { RouteComponentProps, withRouter } from "react-router-dom";
import roomUserApi from "api/roomUser";
import { useSelector } from "react-redux";
import { formStateUser } from "redux/user/stateUser";
import { variableCommon } from "component/variableCommon"
interface ListRoom<T> extends RouteComponentProps {
    current: T,
    index: number,
    saveData: T
}
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: '#2F6292',
    borderRadius: 3,
    border: 0,
    p: 4,
    color: 'white',
};

const ListRoom: React.FC<ListRoom<any>> = ({ index, current, history, ...props }) => {
    const [open, setOpen] = useState<boolean>(false);
    const { user } = useSelector<{ user: any }>(state => state.user) as formStateUser;
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
        const addUserintoRoom = await roomUserApi.postOne<object>(data);
        if (addUserintoRoom.status === variableCommon.statusS) {
            history.push(`/listenTogether/roomDetail/${current?._id || ''}`, {
                idRoomUser: addUserintoRoom?.data[0]._id
            })
        }
    }

    return (
        <>
            <div className="room_box" key={index}>
                <div className="name" onClick={navigateDetailRoom}>
                    <h6>{current?.name_Room}</h6>
                    <div>
                        <AvatarGroup max={4}>
                            {listUser()}
                        </AvatarGroup>
                    </div>
                </div>
                <div className="key">
                    <FcKey className="key" id="myBtn" onClick={() => setOpen(true)} />
                    {/* Modal */}
                    <Modal
                        open={open}
                        onClose={() => setOpen(false)}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box sx={style} className="box__room">
                            <h5>Mời nhập Pass</h5>
                            <input type="text" placeholder="Room ID" style={{
                                width: 330, height: 40, marginTop: 15, marginBottom: 10,
                                backgroundColor: "#06111C", borderRadius: 3, color: '#fff', border: 'none', paddingLeft: 10
                            }} />
                            <Button variant="contained" sx={{ width: 330 }}>Join room</Button>
                        </Box>
                    </Modal>
                    {/* end */}
                </div>
            </div>
        </>
    )
}

export default withRouter(ListRoom)

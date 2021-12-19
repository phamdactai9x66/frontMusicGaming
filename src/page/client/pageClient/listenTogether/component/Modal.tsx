import React, { useState } from 'react'
import { Formik, Form, FormikHelpers, ErrorMessage } from "formik";
import { FcKey } from 'react-icons/fc';
import { Modal, Box } from "@material-ui/core";
import { Button, Alert, AlertColor } from '@mui/material';
import * as Yup from "yup";
import RoomApi from "api/roomApi";
import { variableCommon } from "component/variableCommon";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { io } from "socket.io-client";
import { useSelector } from "react-redux";
import { formStateUser } from "redux/user/stateUser";
import roomUserApi from "api/roomUser";
const ValidateSchema = Yup.object().shape({
    password: Yup.string().required('this field is require.')
})
interface ModalRoomIF<T> extends RouteComponentProps {
    open: boolean,
    setOpen: (T: boolean) => void,
    current: any,
    saveUser: any | T,
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
const styleInput = {
    width: 330, height: 40, marginTop: 15, marginBottom: 10,
    backgroundColor: "#06111C", borderRadius: 3, color: '#fff', border: 'none', paddingLeft: 10
}
const ModalRoom: React.FC<ModalRoomIF<any>> = ({ current, open, setOpen, ...props }) => {
    const [alertForm, setalertForm] = useState({ type: 'info', message: '', display: false })
    const { user } = useSelector<{ user: any }>(state => state.user) as formStateUser;
    const server = "https://music-game-api-v1.herokuapp.com";
    const handleForm = (value: any, formAction: FormikHelpers<any>): void | Promise<any> => {
        (async () => {
            const data = {
                password: value.password,
                idRoom: current._id
            }
            const dataUserRoom = {
                id_Room: current._id,
                id_User: user._id
            }
            const getRes = await RoomApi.enterRoom<object>(data);

            if (getRes.status === variableCommon.statusS) {
                const addUserintoRoom = await roomUserApi.postOne<object>(dataUserRoom);
                if (addUserintoRoom?.data?.[0]._id) {
                    io(server).emit("JoinRoom")
                    return props.history.push(`/listenTogether/roomDetail/${current?._id || ''}`, {
                        idRoomUser: addUserintoRoom?.data[0]._id,
                        name_Room: getRes.room?.name_Room
                    })
                }

            }
            return setalertForm({ type: 'error', message: getRes.message, display: true })
        })()
    }
    return (
        <Formik
            validationSchema={ValidateSchema}
            initialValues={{ password: '' }}
            onSubmit={handleForm}
            validateOnChange={false}
            validateOnBlur={false}

        >
            {(formik) => {
                return (

                    <div className="key">
                        {current.status ? <FcKey className="key" id="myBtn" onClick={() => setOpen(true)} /> : null}

                        <Modal
                            open={open}
                            onClose={() => setOpen(false)}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                        >
                            <Form>
                                <Box sx={style} className="box__room">
                                    <h5>Mời nhập Pass</h5>
                                    {alertForm.display ?
                                        <Alert severity={alertForm.type as AlertColor}>{alertForm.message}</Alert> : null
                                    }

                                    <input type="password" placeholder="Room ID" {...formik.getFieldProps('password')} style={styleInput} />
                                    <ErrorMessage name="password" />
                                    <Button type="submit" variant="contained" sx={{ width: 330 }}>Join room</Button>
                                </Box>
                            </Form>
                        </Modal>
                        {/* end */}
                    </div>

                )

            }}

        </Formik>
    )
}

export default withRouter(ModalRoom)

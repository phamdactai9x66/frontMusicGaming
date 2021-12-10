import React, { useState } from 'react'
import { Button, TextField, Box, CircularProgress, Checkbox, FormControlLabel, AlertColor } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import { Formik, Form, FormikHelpers, ErrorMessage } from "formik";
import * as Yup from "yup";
import roomApi from "api/roomApi";
import { useSelector } from "react-redux";
import { formStateUser } from "redux/user/stateUser";
import { RouteComponentProps, withRouter } from "react-router-dom"
import roomUserApi from "api/roomUser";
import { variableCommon } from "component/variableCommon"
import Alert from '@mui/material/Alert';
import { io } from "socket.io-client";

const validateForm = Yup.object().shape({
    name: Yup.string().checkRequire().min(4, 'this min length must is 4.'),
    password: Yup.string().when('checkPassword', (value: any, schema: any) => {
        return value ? schema.checkRequire() : schema
    }),
    limitUser: Yup.number().required('Không được để trống field này.').min(2, 'at lease 2 persons in Room').max(10, 'the maximun is 10 persons in room')
}) // đoạn này bh xong để về như cũ Yup.number()

interface CreateRoom<T> extends RouteComponentProps {

}
const intitialForm = {
    name: '',
    checkPassword: false,
    password: '',
    limitUser: 2
}

const CreateRoom: React.FC<CreateRoom<any>> = ({ history, ...props }) => {
    const { user } = useSelector<{ user: any }>(state => state.user) as formStateUser;
    const [alertForm, setalertForm] = useState({ status: 'error', display: false, message: '' })
    const server = "http://localhost:5000";
    const eventSubmit = (value: any, FormikHelpers: FormikHelpers<any>): void => {
        setTimeout(async () => {
            const data = {
                name_Room: value.name,
                password: value.password,
                limit_User: value?.limitUser,
                status: value?.checkPassword,
                id_User: user._id
            }
            const createRoom: any = await roomApi.createRoom<object>(data);
            const RoomUser: any = {
                id_Room: createRoom?.data?._id,
                id_User: user._id
            }
            const RoomUserApi: any = await roomUserApi.postOne<object>(RoomUser);
            if (createRoom.status === variableCommon.statusS && RoomUserApi.status === variableCommon.statusS) {
                io(server).emit("JoinRoom")
                return history.push(`/listenTogether/roomDetail/${createRoom?.data?._id || ''}`, {
                    idRoomUser: RoomUserApi?.data[0]._id,
                    name_Room: createRoom.data?.name_Room
                })
            }
            setalertForm({ status: 'error', display: true, message: RoomUserApi.message })
            FormikHelpers.setSubmitting(false)
        }, 1000)

    }
    return (
        <React.Fragment>
            <Formik
                initialValues={intitialForm}
                onSubmit={eventSubmit}
                validateOnChange={false}
                validationSchema={validateForm}
            >
                {({ values, ...formik }) => {
                    return <>
                        <Form className="create_room">
                            {alertForm.display ?
                                <Alert severity={alertForm.status as AlertColor}>{alertForm.message}</Alert>
                                : null
                            }
                            <div>
                                <TextField label="Name" variant="filled" {...formik.getFieldProps('name')} className="input_room" />
                                <div>
                                    <ErrorMessage name="name" />
                                </div>
                            </div>
                            {values?.checkPassword ? <>
                                <TextField label="Password" variant="filled" type="password" {...formik.getFieldProps('password')} className="input_room" />
                                <div>
                                    <ErrorMessage name="password" />
                                </div>
                            </> : null}
                            <div>
                                <TextField label="Limit Users" type="number" variant="filled" {...formik.getFieldProps('limitUser')} className="input_room" />
                                <div>
                                    <ErrorMessage name="limitUser" />
                                </div>
                            </div>
                            <div>
                                <FormControlLabel control={<Checkbox {...formik.getFieldProps('checkPassword')} />} label="add password for this room" />
                            </div>
                            {/* <Button variant="contained" color="primary" type="submit">
                                Tạo phòng
                            </Button> */}
                            <LoadingButton loading={formik.isSubmitting} variant="contained" color="primary" type="submit">
                                Tạo Phòng
                            </LoadingButton>
                        </Form>
                    </>
                }}
            </Formik>

        </React.Fragment>
    )
}

export default withRouter(CreateRoom)

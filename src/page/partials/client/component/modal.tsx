import React, { useState } from 'react'
import Popup from '@titaui/reactjs-popup';
import { IoMdAdd } from 'react-icons/io';
import { Button, Alert } from "@mui/material"
import { Formik, Form } from "formik";
import { useSelector } from "react-redux";
import { formStateUser } from 'redux/user/stateUser';
import userPlaylistApi from "api/userPlaylist";
import { variableCommon } from "component/variableCommon";
import dataStorage from "component/dataStorage"
interface Modal<T> {
    close: () => void
}
const initialForm = {
    namePlaylist: ""
}
const Modal: React.FC<Modal<any>> = ({ close, ...props }) => {
    const { user: { _id: _idUser } } = useSelector<{ user: any }>(state => state.user) as formStateUser;
    const [alert, setalert] = useState({ display: false, message: '', status: '' });
    const submitForm = (data: any, methodAction: any) => {

        (async () => {
            const getForm = new FormData();
            getForm.set('name', data.namePlaylist);
            getForm.set('id_User', _idUser)
            const createPlaylist = await userPlaylistApi.postOne<FormData>(getForm);
            if (createPlaylist.status !== variableCommon.statusF) {

                methodAction.resetForm()
                dataStorage.renderPlaylist && (dataStorage as any).renderPlaylist()
                // renderComponent && renderComponent()
                return setalert({ display: true, message: createPlaylist.message, status: 'success' })
            }
            setalert({ display: true, message: createPlaylist.message, status: 'error' })

        })()

    }
    return (
        <>
            <div className="modal-playlis">
                <div className="content-modal">
                    <button className="close" onClick={close}>
                        X
                    </button>
                    <h5 className="text-center">Tạo playlist mới</h5>
                    {alert.display ? <Alert className="mb-2" severity={alert?.status as any}>Tạo playlist thành công</Alert> : null}
                    <Formik
                        initialValues={initialForm}
                        onSubmit={submitForm}
                        validateOnBlur={false}
                        validateOnChange={false}
                    >
                        {formik => {
                            return (
                                <Form>
                                    <input type="text" {...formik.getFieldProps('namePlaylist')}
                                        placeholder="Nhập tên playlist" />
                                    <p className="err"></p>
                                    <Button className="create_playlist" type="submit">TẠO MỚI</Button>
                                </Form>
                            )
                        }}
                    </Formik>
                </div>
            </div>
        </>
    )
}

export default Modal

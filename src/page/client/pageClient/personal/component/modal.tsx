import React, { useState } from 'react'
import Popup from '@titaui/reactjs-popup';
import { IoMdAdd } from 'react-icons/io';
import { Button, Alert } from "@mui/material"
import { Formik, Form } from "formik";
import { useSelector } from "react-redux";
import { formStateUser } from 'redux/user/stateUser';
import userPlaylistApi from "api/userPlaylist";
import { variableCommon } from "component/variableCommon";
interface Modal<T> {
    renderComponent: () => void
}
const initialForm = {
    namePlaylist: ""
}
const Modal: React.FC<Modal<any>> = ({ renderComponent, ...props }) => {
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
                renderComponent()
                return setalert({ display: true, message: createPlaylist.message, status: 'success' })
            }
            setalert({ display: true, message: createPlaylist.message, status: 'error' })

        })()

    }
    return (
        <>
            <Popup
                modal
                overlayStyle={{ background: "rgba(255,255,255,0.98" }}
                closeOnDocumentClick={false}
                trigger={() =>
                    <div className="add">
                        <IoMdAdd className="icon" />
                        Tạo playlist mới
                    </div>
                }
            >
                {(close: any) => (
                    <div className="modal-playlis">
                        <div className="content-modal">
                            <button className="close" onClick={close}>
                                X
                            </button>
                            <h5 className="text-center">Tạo playlist mới</h5>
                            <Formik
                                initialValues={initialForm}
                                onSubmit={submitForm}
                                validateOnBlur={false}
                                validateOnChange={false}
                            >
                                {formik => {
                                    return (
                                        <Form>
                                            {/* {JSON.stringify(formik.values)} */}
                                            {
                                                alert.display ?
                                                    <Alert severity={alert?.status as any}>{alert.message}</Alert>
                                                    : null
                                            }
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
                )}
            </Popup>
        </>
    )
}

export default Modal

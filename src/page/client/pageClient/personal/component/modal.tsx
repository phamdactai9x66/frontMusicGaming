import React, { useState } from 'react'
import Popup from '@titaui/reactjs-popup';
import { IoMdAdd } from 'react-icons/io';
import { Button, Alert } from "@mui/material"
import { Formik, Form } from "formik";
import { useSelector } from "react-redux";
import { formStateUser } from 'redux/user/stateUser';
import userPlaylistApi from "api/userPlaylist";
import { variableCommon } from "component/variableCommon";
interface ModalModal<T> {
    renderComponent: () => void
}
const initialForm = {
    namePlaylist: ""
}
const Modal: React.FC<ModalModal<any>> = ({ renderComponent, ...props }) => {
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
                    <div className="add" style={{height: "14.3rem"}}>
                        <IoMdAdd className="icon" />
                        Tạo playlist mới
                    </div>
                }
            >
                {(close: any) => (
                    <div className="modal-playlis">
                        <div className="content-modal">
                            {/* <svg width="20" height="20" viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg" stroke="#fff">
                                <g fill="none" fill-rule="evenodd">
                                    <g transform="translate(1 1)" stroke-width="2">
                                        <circle stroke-opacity=".5" cx="18" cy="18" r="18"/>
                                        <path d="M36 18c0-9.94-8.06-18-18-18">
                                            <animateTransform
                                                attributeName="transform"
                                                type="rotate"
                                                from="0 18 18"
                                                to="360 18 18"
                                                dur="1s"
                                                repeatCount="indefinite"/>
                                        </path>
                                    </g>
                                </g>
                            </svg> */}
                        
                            <button className="close" onClick={close}>
                                X
                            </button>
                            <h5 className="text-center">Tạo playlist mới</h5>
                            { alert.display ? <Alert className="mb-2" severity={alert?.status as any}>Tạo playlist thành công</Alert> : null }
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
                )}
            </Popup>
        </>
    )
}

export default Modal

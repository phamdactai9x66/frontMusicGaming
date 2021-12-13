import React, { useState,useEffect } from 'react'
import { Button, Alert } from "@mui/material"
import { Formik, Form } from "formik";
// import { useSelector } from "react-redux";
// import { formStateUser } from 'redux/user/stateUser';
// import userPlaylistApi from "api/userPlaylist";
// import { variableCommon } from "component/variableCommon";
// import dataStorage from "component/dataStorage";
// import { HandleGet } from "component/MethodCommon";

interface ModalPlaylistEdit<T> {
    close: () => void
}

const ModalPlaylistEdit: React.FC<ModalPlaylistEdit<any>> = ({ close,...props }: any) => {


    return (
        <>
            <div className="modal-playlis">
                <div className="content-modal">
                    <button className="close" onClick={close}>
                        X
                    </button>
                    <h5 className="text-center">Sửa playlist</h5>
                    <Alert className="mb-2">Sửa playlist thành công</Alert>                       
                                    <input type="text" 
                                        placeholder="Nhập tên playlist" value="playlist 1"/>
                                    <p className="err"></p>
                                    <Button className="create_playlist" type="submit">Sửa Playlist</Button>
                </div>
            </div>
        </>
    )
}

export default ModalPlaylistEdit

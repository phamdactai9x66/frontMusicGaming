import React, { useState } from 'react';
import { Button, Alert } from "@mui/material";
import userPlaylistApi from 'api/userPlaylistApi';
import { variableCommon } from 'component/variableCommon';

interface ModalPlaylistEditIF<T> {
    close: () => void,
    anchorItem: any | T,
    handleRename: any,
}

const ModalPlaylistEdit: React.FC<ModalPlaylistEditIF<any>> = ({ anchorItem, handleRename, close,...props }: any) => {
    const [status, setStatus] = useState({display: false, content: ""});
    const [name, setName] = useState(anchorItem.name);

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        if(name === ''){
            setStatus({ display: true, content: "Không được để trống."})
            return;
        }else if( name === anchorItem.name){
            setStatus({ display: true, content: "Tên Playlist chưa được thay đổi."})
            return;
        }else{
            const getForm = new FormData();
            getForm.append('name', name);
            getForm.append('id_User', anchorItem.id_User);
            const response = await userPlaylistApi.putOne(getForm, anchorItem._id)
            if(response.status === variableCommon.statusF){
                setStatus({ display: true, content: "Sửa Playlist thất bại."})
                return;
            }else{
                setStatus({ display: true, content: "Sửa Playlist thành công."})
                handleRename(response.data[0]);
            }
        }
    }

    return (
        <>
            <div className="modal-playlis">
                <div className="content-modal">
                    <button className="close" onClick={close}>
                        X
                    </button>
                    <h5 className="text-center">Sửa playlist</h5>
                    {status.display && <Alert className="mb-2">{status.content}</Alert>}
                    <form onSubmit={handleSubmit}>
                        <input type="text" placeholder="Nhập tên playlist" onChange={(e) => setName(e.target.value)} defaultValue={anchorItem.name}/>
                        <Button className="create_playlist" type="submit" onClick={handleSubmit}>Sửa Playlist</Button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default ModalPlaylistEdit

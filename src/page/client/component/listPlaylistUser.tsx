import React from 'react'
import { MenuItem } from "@mui/material";
import { BiMusic } from 'react-icons/bi';
import { formStateAudio } from 'redux/audio/stateAudio';
import { variableCommon } from "component/variableCommon"
import songPlaylistApi from "api/songPlaylistApi"; 


interface ListPlaylistUserIF<T> {
    listPlaylistUser: { display: boolean, data: any[] },
    stateAudio: formStateAudio
}

const ListPlaylistUser: React.FC<ListPlaylistUserIF<any>> = ({ listPlaylistUser, stateAudio, ...props }) => {

    const pushToPlaylist = async <T extends string>(_id: T): Promise<void> => {
        const addForm = new FormData();
        addForm.set('id_User_Playlist', _id)
        addForm.set('id_Song', stateAudio.audio._id);
        const addToPlaylist = await songPlaylistApi.addToPlaylist(addForm);
        if (addToPlaylist.status === variableCommon.statusS) {
            alert('add to playlist user successfully');
        }
    }
    const listMenu = (): JSX.Element[] | null => {
        return listPlaylistUser.display ? listPlaylistUser.data.map((current: any, index: number) => {
            return (
                <MenuItem className="list" key={index} onClick={() => pushToPlaylist<string>(current._id)}>
                    <BiMusic />&ensp;{current?.name}
                </MenuItem>
            )
        }) : null
    }

    return (
        <>
            <div className="item">
                {listMenu()}
            </div>
        </>
    )
}

export default ListPlaylistUser

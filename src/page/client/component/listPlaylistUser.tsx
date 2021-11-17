import React from 'react'
import { MenuItem } from "@mui/material";
import { BiHeart, BiDotsHorizontalRounded, BiMusic } from 'react-icons/bi';
import { useSelector } from "react-redux";
import { formStateUser } from 'redux/user/stateUser';
interface ListPlaylistUser<T> {

}

const ListPlaylistUser: React.FC<ListPlaylistUser<any>> = ({ ...props }) => {
    const state = useSelector<{ user: any }>(state => state.user) as formStateUser;
    return (
        <>
            <div className="item">
                <MenuItem className="list">
                    <BiMusic /> &ensp;Nhạc trẻ remix
                </MenuItem>
                <MenuItem className="list">
                    <BiMusic /> &ensp;Nhạc trẻ remix
                </MenuItem>
                <MenuItem className="list">
                    <BiMusic /> &ensp;Nhạc trẻ remix
                </MenuItem>
            </div>
        </>
    )
}

export default ListPlaylistUser

import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom"
import { AiOutlineDownload, AiOutlineLink } from 'react-icons/ai';
import { BiHeart } from 'react-icons/bi';
import { FiPlayCircle } from 'react-icons/fi';
import { HiOutlineDotsCircleHorizontal } from 'react-icons/hi';
import { Select, MenuItem } from "@mui/material"
import UserPlaylist from "api/userPlaylist";
import { useSelector } from "react-redux";
import { formStateUser } from 'redux/user/stateUser';
import { HandleGet } from "component/MethodCommon";
import ImagePlaylist from "./imagePlaylist";
interface ListPLaylistIF<T> {
    render: number
}

const ListPLaylist: React.FC<ListPLaylistIF<any>> = ({ render, ...props }) => {
    const { user: { _id: id_User } } = useSelector<{ user: any }>(state => state.user) as formStateUser;
    const [state, setstate] = useState({ display: false, data: [] });
    useEffect(() => {
        (async () => {
            const query = {
                id_User
            }
            const [data, error] = await HandleGet(UserPlaylist.getAll, query);
            if (error) return setstate(value => ({ ...value, display: false }))
            setstate({ display: true, data: data.data });
        })()
        return () => {
            setstate(value => ({ ...value, display: false }))
        }
    }, [id_User, render])
    return (
        <>
            {state.display ?
                state?.data?.map((current: any, index: number) => {
                    return (
                        <Link to={`/playlistDetail/${current?._id}`} key={index}>
                            <div className="box">
                                <ImagePlaylist idPlaylist={current?._id} />
                                <div className="icon-box">
                                    <div>
                                        <BiHeart className="icon" />
                                        <FiPlayCircle className="icon" />
                                        <HiOutlineDotsCircleHorizontal className="icon" />
                                    </div>
                                </div>
                                <Select className="option">
                                    <MenuItem>
                                        <AiOutlineDownload /> Tải xuống
                                    </MenuItem>
                                    <MenuItem>
                                        <AiOutlineLink /> Sao chép link
                                    </MenuItem>
                                </Select>
                                <h6>{current.name} </h6>
                            </div>
                        </Link>
                    )
                })
                : null}
        </>
    )
}

export default ListPLaylist

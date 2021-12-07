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
import dataStorage from "component/dataStorage"
interface ListPLaylistIF<T> {
    render: number
}

const ListPLaylist: React.FC<ListPLaylistIF<any>> = ({ render, ...props }) => {
    const { user: { _id: id_User } } = useSelector<{ user: any }>(state => state.user) as formStateUser;
    const [state, setstate] = useState({ display: false, data: [] });
    const [renderPlaylist, setrenderPlaylist] = useState<boolean>(false);
    const renderComponent = (): void => {
        setrenderPlaylist(value => !value)
    }
    useEffect(() => {
        dataStorage.renderPlaylist = renderComponent as any
    }, [])
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
    }, [id_User, render, renderPlaylist])
    return (
        <>
            {state.display ?
                state?.data?.map((current: any, index: number) => {
                    return (
                        <Link to={{
                            pathname: `/playlistDetail/${current?._id}`,
                            state: current
                        }} key={index}>
                            <div className="box">
                                <ImagePlaylist idPlaylist={current?._id} />
                                <div className="icon-box">
                                    <div>
                                        <FiPlayCircle className="icon" />
                                    </div>
                                </div>
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

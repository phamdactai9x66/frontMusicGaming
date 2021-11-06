import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { formStateUser } from "redux/user/stateUser";
import { PropsPersonal, AllPage } from "../index";

interface Tabed<T> extends PropsPersonal {

}

const Tabed: React.FC<Tabed<any>> = ({ navigatePage, ...props }) => {
    const { user } = useSelector<{ user: any }>(state => state.user) as formStateUser;
    return (
        <>
            <div className="info_Personal">
                <div className="info_main">
                    <img width={100} height={100} src={user.avatar} alt="" />
                    <h2>{`${user?.first_name} ${user?.last_name}`}</h2>
                </div>
            </div>
            <div className="tab_Personal">
                <ul className="tab_item">
                    <li onClick={() => { navigatePage(AllPage.OverView) }}>Tổng quan</li>
                    <li onClick={() => { navigatePage(AllPage.Music) }}>Bài hát</li>
                    <li onClick={() => { navigatePage(AllPage.Singer) }}>Nhạc sĩ</li>
                    <li onClick={() => { navigatePage(AllPage.Playlist) }}>Playlist</li>
                    <li onClick={() => { navigatePage(AllPage.Upload) }}>Tải lên</li>
                </ul>
            </div>
        </>
    )
}

export default Tabed;

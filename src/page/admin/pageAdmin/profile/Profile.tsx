import React from 'react';
import './style.scss';
import { useSelector, useDispatch } from "react-redux";
import { formStateUser } from "redux/user/stateUser";
interface profile<T> {
}
const Profile: React.FC<profile<any>> = () => {
    const state = useSelector<{ user: any }>(state => state.user) as formStateUser;
    const handleRole = () => {
        if (state.user?.role == 0) {
            return "Thành viên"
        } else if (state.user?.role == 1) {
            return "Quản trị"
        }
    }
    console.log("hê hê", state.user)
    return (
        <div className="profile-grid">
            <div className="profile-box1 p-4">
                <div className="img-centert">
                    {(state.user && state.token) ?
                        <img style={{ border: "3px solid #ff6f53e0" }} className="mx-auto d-flex p-1" src={state.user?.avatar} alt="" /> : "err"}
                </div>
                <div className="">
                    {(state.user && state.token) ?
                        <h5 className="mt-3 text-center border-bottom pb-3">
                            {state.user?.first_name} {state.user?.last_name}
                        </h5> : "err"}

                </div>
            </div>
            <div className="profile-box2 p-4">
                <h6 className="color-profile border-bottom pb-2">Thông tin tài khoản</h6>
                <p className="color-profile hover-text mt-3" >Tên tài khoản :  {(state.user && state.token) ? <span>{state.user?.userName}</span> : "err"}</p>

                <p className="color-profile hover-text">Giới tính :   {(state.user && state.token) ? <span>{state.user?.gender ? "Nữ" : "Nam"}</span> : "err"}</p>

                <p className="color-profile hover-text">Địa chỉ : {(state.user && state.token) ? <span>{state.user?.address}</span> : "err"}</p>
                <p className="color-profile hover-text">Vai trò : <span>{handleRole()}</span></p>

            </div>

        </div>
    )
}

export default Profile

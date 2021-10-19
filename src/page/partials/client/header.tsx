import React, { useState } from 'react'
import { BiSearch, BiUserCircle } from 'react-icons/bi';
import { RiAdminFill } from 'react-icons/ri';
import { IoMdArrowDropdown } from 'react-icons/io';
import { FaSignInAlt } from 'react-icons/fa';
import { Select, MenuItem } from "@mui/material";
import { Link, RouteChildrenProps, withRouter } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { formStateUser } from 'redux/user/stateUser';
import Topic from './component/topic/topic';
import Upload from './component/upload/upload';
import { Logout } from "redux/user/actionUser";
interface HeaderClient extends RouteChildrenProps {

}
const HeaderClient: React.FC<HeaderClient> = ({ ...props }) => {
  const state = useSelector<{ user: any }>(state => state.user) as formStateUser;
  const dispatch = useDispatch();
  const logOut = () => {
    dispatch(Logout());
    // props.history.replace('/signin');
  }
  const checkAdmin = () => {
    return (state.user.role >= 1) ? (
      <MenuItem value={20}>
        <Link to="/admin" className="link"><RiAdminFill className="_icon" /> Admin</Link>
      </MenuItem>
    ) : null
  }
  const checkUser = () => {
    return (
      <>
        <MenuItem value={10}>
          <span className="link" onClick={logOut}><FaSignInAlt className="_icon" />Sign out</span>
        </MenuItem>
        {checkAdmin()}
        <MenuItem value={10}>
          <Link to="/overview" className="link"><FaSignInAlt className="_icon" />Main Profile</Link>
        </MenuItem>
      </>
    )
  }
  const checkGuest = () => {
    return (
      <>
        <MenuItem value={10}>
          <Link to="/signin" className="link"><FaSignInAlt className="_icon" />Sign in</Link>
        </MenuItem>
      </>
    )
  }
  return (
    <div className="header">
      <div className="search">
        <BiSearch className="icon" />
        <input type="text" placeholder="Nhập tên bài hát, nghệ sĩ hoặc MV..." />
      </div>
      <div className="icon-main">
        <Upload />
        <Topic />
        <BiUserCircle className="icon" />
        <Select>
          <div style={{ background: "#101929", margin: "-0.5rem 0 -0.5rem 0" }}>
            {(state.user && state.token) ? checkUser() : checkGuest()}
          </div>
        </Select>
        <i className="text-light" style={{margin: "6px 10px 6px -0.3rem"}}>Hi! Name</i>
        <IoMdArrowDropdown className="drop_icon" />
      </div>
    </div>
  )
}

export default withRouter(HeaderClient as any)
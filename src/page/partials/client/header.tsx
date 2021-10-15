import React, { useState } from 'react'
import { BiSearch, BiUpload, BiUserCircle, BiCircle } from 'react-icons/bi';
import { RiAdminFill } from 'react-icons/ri';
import { IoMdArrowDropdown } from 'react-icons/io';
import { FaSignInAlt, FaTshirt } from 'react-icons/fa';
import { Select, MenuItem, Button } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
import { Link, RouteChildrenProps, withRouter } from "react-router-dom";
import { useSelector } from "react-redux";
import { formStateUser } from 'redux/user/stateUser';
import Topic from './topic/topic';
interface Header<T> {

}
const Header: React.FC<Header<any>> = ({ ...props }) => {
  const state = useSelector<{ user: any }>(state => state.user) as formStateUser;
  const checkUser = () => {
    return (
      <>
        <MenuItem value={10}>
          <Link to="/signin" className="link"><FaSignInAlt className="_icon" />Sign out</Link>
        </MenuItem>
        <MenuItem value={20}>
          <Link to="/admin" className="link"><RiAdminFill className="_icon" /> Admin</Link>
        </MenuItem>
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
        <MenuItem value={20}>
          <Link to="/admin" className="link"><RiAdminFill className="_icon" /> Admin</Link>
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
        <BiUpload className="icon" />
        <Topic />
        <BiUserCircle className="icon" />
        <Select>
          <div style={{ background: "#101929", margin: "-0.5rem 0 -0.5rem 0" }}>
            {state ? checkUser() : checkGuest()}
          </div>

        </Select>
        <IoMdArrowDropdown className="drop_icon" />
      </div>
    </div>
  )
}

export default Header

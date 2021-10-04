
import React from 'react'
import { BiCircle, BiSearch, BiUpload, BiUserCircle } from 'react-icons/bi';
import { RiAdminFill } from 'react-icons/ri';
import { FaSignInAlt } from 'react-icons/fa';
import { Select, MenuItem } from "@mui/material"
import { Link, RouteChildrenProps, withRouter } from "react-router-dom";

interface Header<T> {

}

const Header: React.FC<Header<any>> = ({ ...props }) => {
    return (
        <div className="header">
            <div className="search">
                <BiSearch className="icon" />
                <input type="text" placeholder="Nhập tên bài hát, nghệ sĩ hoặc MV..." />
            </div>
            <div className="icon-main">
                <BiUpload className="icon" />
                <BiCircle className="icon" />
                <BiUserCircle className="icon"/>
                <Select
        defaultValue=""
      >
          <div style={{background: "#101929",margin: "-0.5rem 0 -0.5rem 0"}}>
          <MenuItem  value={10}>
        <Link to="/signin" className="link"><FaSignInAlt className="_icon"/>Sign in</Link>
                        
        </MenuItem>
        <MenuItem  value={20}>
        <Link to="/admin" className="link"><RiAdminFill className="_icon" /> Admin</Link>
        </MenuItem>
          </div>

      </Select>
            </div>
        </div>
    )
}

export default Header

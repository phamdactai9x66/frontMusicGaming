
import React from 'react'
import { BiCircle, BiSearch, BiUpload, BiUserCircle } from 'react-icons/bi';
import { FiSettings } from 'react-icons/fi';
import { RiAdminFill } from 'react-icons/ri';
import { FaSignInAlt } from 'react-icons/fa';
import { Link, RouteChildrenProps, withRouter } from "react-router-dom";

interface Header<T> {

}

const Header: React.FC<Header<any>> = ({ ...props }) => {
    return (
        <header>
            <div className="search">
                <BiSearch className="icon" />
                <input type="text" placeholder="Nhập tên bài hát, nghệ sĩ hoặc MV" />
            </div>
            <div className="icon-main">
                <BiUpload className="icon" />
                <BiCircle className="icon" />
                <FiSettings className="icon" />
                <div className="dropdown">
                <BiUserCircle className="icon"/>
                    <div className="dropdown-content">
                        <Link to="/signin"><FaSignInAlt className="_icon"/>Sign in</Link>
                        <Link to="/admin"><RiAdminFill className="_icon" /> Admin</Link>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header

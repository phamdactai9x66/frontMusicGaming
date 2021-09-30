
import React from 'react'
import { BiCircle, BiSearch, BiUpload, BiUserCircle } from 'react-icons/bi';
import { FiSettings } from 'react-icons/fi';
import { RouteChildrenProps, withRouter } from "react-router-dom";

interface Header<T> {

}

const Header: React.FC<Header<any>> = ({ ...props }) => {
    return (
        <header className="header">
                <div className="search">
                    <BiSearch className="icon"/>
                   <input type="text" placeholder="Nhập tên bài hát, nghệ sĩ hoặc MV"/>
                </div>   
                <div className="icon-main">
                    <BiUpload className="icon"/>
                    <BiCircle className="icon"/>
                    <FiSettings className="icon"/>
                    <BiUserCircle className="icon"/>
                </div>
        </header>
    )
}

export default Header

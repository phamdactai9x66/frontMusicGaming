
import React from 'react'
import { RouteChildrenProps, withRouter } from "react-router-dom";
import { FiMenu, FiBell } from 'react-icons/fi';
import { AiOutlineSearch } from 'react-icons/ai';
import { BiMessageRounded } from 'react-icons/bi';
import { FaExpandArrowsAlt } from 'react-icons/fa'

interface Header<T> {

}

const Header: React.FC<Header<any>> = ({ ...props }) => {
    return (
        <header>
            <div className="header__content">
                <FiMenu className='header__content--icon'/>
                <span>HOME</span>
            </div>
            <div className="header__icons">
                <AiOutlineSearch />
                <BiMessageRounded className="header__icons--2"/>
                <FiBell />
                <FaExpandArrowsAlt className="header__icons--4"/>
            </div>
        </header>
    )
}

export default Header

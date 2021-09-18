
import React from 'react'
import { Link, RouteChildrenProps, withRouter } from "react-router-dom";
import { FiMenu, FiBell } from 'react-icons/fi';
import { AiOutlineSearch } from 'react-icons/ai';
import { BiMessageRounded } from 'react-icons/bi';
import { FaExpandArrowsAlt } from 'react-icons/fa'

interface Header<T> {

}

const Header: React.FC<Header<any>> = ({ ...props }) => {
    return (
        <>
            <div>
                <div className="header__icons_mobie">
                    <a className="btn" href="#open-modal"><AiOutlineSearch /></a>
                    <div id="open-modal" className="modal-window">
                        <div>
                            <a href="#" title="Close" className="modal-close">X</a><br />
                            <form action="">
                                <input type="text" name="" placeholder="Search..." />
                                <button><AiOutlineSearch className="icon-search_mobie" /></button>
                            </form>
                        </div>
                    </div>
                    <BiMessageRounded />
                    <FiBell />
                    <FaExpandArrowsAlt />
                </div>
                <header>
                    <div className="header__content">
                        <FiMenu className='header__content--icon' />
                        <Link to="/"><span>HOME</span></Link>
                    </div>
                    <div className="header__icons">
                        <form action="">
                            <div className="search-box">
                                <input className="search-input" type="text" name="" placeholder="Search..." />
                                <button style={{ border: "none" }} className="search-btn">
                                    <AiOutlineSearch />
                                </button>
                            </div>
                        </form>
                        <BiMessageRounded className="header__icons--2" />
                        <FiBell className="header__icons--3" />
                        <FaExpandArrowsAlt className="header__icons--4" />
                    </div>
                </header>
            </div>
        </>
    )
}

export default Header

import React from 'react'
import "./admin.scss"
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "../partials/admin/header";
import Footer from "../partials/admin/footer";
import Sidebar from "../partials/admin/sidebar";
import { Link } from 'react-router-dom';
import { FiBell } from 'react-icons/fi';
import { AiOutlineSearch } from 'react-icons/ai';
import { BiMessageRounded } from 'react-icons/bi';
import { FaExpandArrowsAlt } from 'react-icons/fa'
interface rootPageAdmin<T> {

}

const rootPageAdmin: React.FC<rootPageAdmin<any>> = ({ ...props }) => {
    return (
        <>
            <div>
                <input hidden type="checkbox" name="" className="nav__check" id="nav-input" />
                <label className="toggle" htmlFor="nav-input"></label>
                <Link className="header_content_mobie" to="/">
                    <div>HOME</div>
                </Link>
                <div className="header__icons_mobie">
                        <a className="btn" href="#open-modal"><AiOutlineSearch /></a>
                            <div id="open-modal" className="modal-window">
                                <div>
                                    <a href="#" title="Close" className="modal-close">X</a><br/>
                                    <form action="">
                                    <input type="text" name="" placeholder="Search..."/>
                                    <button><AiOutlineSearch className="icon-search_mobie"/></button>
                                    </form>
                                 </div>   
                            </div>
                    <BiMessageRounded />
                    <FiBell />
                    <FaExpandArrowsAlt />
                </div>
                <div className="main_admin">
                    <aside>
                        <Sidebar />
                    </aside>
                    <article>
                        <Header />
                        <main>
                            {
                                props.children
                            }
                        </main>
                        <Footer />
                    </article>
                </div>
            </div>

        </>
    )
}

export default rootPageAdmin

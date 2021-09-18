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

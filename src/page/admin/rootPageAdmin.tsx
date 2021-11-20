import React, { useEffect } from 'react'
import "./admin.scss"
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "../partials/admin/header";
import Footer from "../partials/admin/footer";
import Sidebar from "../partials/admin/sidebar";

import { useSelector } from "react-redux";
import { formStateUser } from 'redux/user/stateUser';
import dataStorage from "component/dataStorage"
interface RootPageAdmin<T> {

}

const RootPageAdmin: React.FC<RootPageAdmin<any>> = ({ ...props }) => {
    const state = useSelector<{ user: any }>(state => state.user) as formStateUser;

    useEffect(() => {
        state.token && (dataStorage.accessToken = state.token)
    }, [state])
    return (
        <>
            <div className="container-admin">
                <input hidden type="checkbox" name="" className="nav__check" id="nav-input" />
                <label className="toggle" htmlFor="nav-input"></label>
                <div className="main_admin">
                    <aside>
                        <Sidebar />
                    </aside>
                    <article>
                        <Header />
                        <main >
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

export default RootPageAdmin

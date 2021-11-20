import React, { useEffect } from 'react'
import "./client.scss"
import Header from "../partials/client/header";
import Enteraiment from './component/enteraiment';
import Sidebar from '../partials/client/sidebar';
import { useSelector } from "react-redux";
import { formStateUser } from 'redux/user/stateUser';
import dataStorage from "component/dataStorage"
interface RootPageClient<T> {

}

const RootPageClient: React.FC<RootPageClient<any>> = ({ ...props }) => {
    const state = useSelector<{ user: any }>(state => state.user) as formStateUser;

    useEffect(() => {
        state.token && (dataStorage.accessToken = state.token);
        console.log(dataStorage.accessToken)
    }, [state])
    return (
        <>
            <div className="container-client">
                <aside><Sidebar /></aside>
                <header><Header /></header>
                <main>
                    <div className="main-children">
                        {props.children}
                    </div>
                </main>

                <Enteraiment />

            </div>
        </>
    )
}

export default RootPageClient

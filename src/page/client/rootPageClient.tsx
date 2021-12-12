import React, { useEffect } from 'react'
import "./client.scss"
import Header from "../partials/client/header";
import Enteraiment from './component/enteraiment';
import Sidebar from '../partials/client/sidebar';
import { useSelector } from "react-redux";
import { formStateUser } from 'redux/user/stateUser';
import dataStorage from "component/dataStorage"
import { useScroll } from 'react-use';
import { RouteComponentProps, withRouter } from "react-router-dom";

interface RootPageClient<T> extends RouteComponentProps {

}

const RootPageClient: React.FC<RootPageClient<any>> = ({ ...props }) => {
    const state = useSelector<{ user: any }>(state => state.user) as formStateUser;
    const scrollRef = React.useRef<any>(null);
    const test2 = useScroll(scrollRef);
    useEffect(() => {
        state.token && (dataStorage.accessToken = state.token);
    }, [state])
    useEffect(() => {
        scrollRef.current.scrollTop = 0
        // console.log(props.history.length)
        if (props.history.length >= 10) {
            props.history.length -= 1;
        }
        props.history.length = 0

    }, [props.history, props.history.length])
    // console.log(props.history.length)
    return (
        <>
            <div className="container-client">
                <aside><Sidebar /></aside>
                <header><Header /></header>
                <main>
                    <div className="main-children" ref={scrollRef}>
                        {props.children}
                    </div>
                </main>

                <Enteraiment />

            </div>
        </>
    )
}

export default withRouter(RootPageClient)

import React from 'react'
import "./client.scss"
import { RouteComponentProps } from "react-router-dom";
import Header from "../partials/client/header";
import Footer from "../partials/client/footer";
import Sidebar from '../partials/client/sidebar';
interface RootPageClient<T> {

}

const RootPageClient: React.FC<RootPageClient<any>> = ({ ...props }) => {
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
                <footer>
                    <Footer />
                </footer>
            </div>
        </>
    )
}

export default RootPageClient

import React from 'react'
import "./client.scss"
import Header from "../partials/client/header";
import Audio from "../partials/client/audio";
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
                    <Audio />
                </footer>
            </div>
        </>
    )
}

export default RootPageClient

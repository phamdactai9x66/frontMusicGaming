import React from 'react'
import { RouteComponentProps } from "react-router-dom";
import Header from "../partials/client/header";
import Footer from "../partials/client/footer";
interface RootPageClient<T> {

}

const RootPageClient: React.FC<RootPageClient<any>> = ({ ...props }) => {
    return (
        <>
            <Header />
            <main>
                {props.children}
            </main>

            <Footer />
        </>
    )
}

export default RootPageClient

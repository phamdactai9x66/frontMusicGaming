import React from 'react'
import { RouteComponentProps } from "react-router-dom";
interface RootPageClient<T> {

}

const RootPageClient: React.FC<RootPageClient<any>> = ({ ...props }) => {
    return (
        <>
            <header><h1>header</h1></header>
            <main>
                {props.children}
            </main>

            <footer><h1>footer</h1></footer>
        </>
    )
}

export default RootPageClient

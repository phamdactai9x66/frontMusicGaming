import React from 'react'
import { RouteComponentProps } from "react-router-dom";

interface NotFoundClient<T> extends RouteComponentProps {

}

const NotFoundClient: React.FC<NotFoundClient<any>> = ({ location, ...props }) => {
    return (
        <>
            <h1>this path {location.pathname + location.search} is not found</h1>
        </>
    )
}

export default NotFoundClient

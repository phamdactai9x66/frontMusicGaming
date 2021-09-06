import React from 'react'
import { RouteComponentProps } from "react-router-dom";

interface NotFoundAdmin<T> extends RouteComponentProps {

}

const NotFoundAdmin: React.FC<NotFoundAdmin<any>> = ({ location, ...props }) => {
    return (
        <>
            <h1>this path {location.pathname + location.search} is not Found.</h1>
        </>
    )
}

export default NotFoundAdmin

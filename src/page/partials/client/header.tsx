
import React from 'react'
import { RouteChildrenProps, withRouter } from "react-router-dom";

interface Header<T> {

}

const Header: React.FC<Header<any>> = ({ ...props }) => {
    return (
        <footer>
            <h1> this  Header client</h1>
        </footer>
    )
}

export default Header

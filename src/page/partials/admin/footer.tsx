
import React from 'react'
import { RouteChildrenProps, withRouter } from "react-router-dom";

interface Footer<T> {

}

const Footer: React.FC<Footer<any>> = ({ ...props }) => {
    return (
        <footer>
            <h1>  this  Footer client</h1>
        </footer>
    )
}

export default Footer

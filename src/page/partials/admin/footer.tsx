
import React from 'react'
import { RouteChildrenProps, withRouter } from "react-router-dom";

interface Footer<T> {

}

const Footer: React.FC<Footer<any>> = ({ ...props }) => {
    return (
        <footer>
            <div className="footer__main">
                <p>Copyright © 2014-2021 AdminLTE.io. All rights reserved.</p>
            </div>
            <div className="footer__ver">
                <p>Version 3.1.0</p>
            </div>
        </footer>
    )
}

export default Footer

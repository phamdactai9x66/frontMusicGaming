
import React from 'react'
import { RouteChildrenProps, withRouter } from "react-router-dom";

interface Footer<T> {

}

const Footer: React.FC<Footer<any>> = ({ ...props }) => {
    return (
        <div className="fixed_footer">
  <footer>
            <div className="footer__main">
                <p>Copyright © 2014-2021 AdminLTE.io. All rights reserved.</p>
            </div>
        </footer>
        </div>
      
    )
}

export default Footer

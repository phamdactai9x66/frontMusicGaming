
import React from 'react'
// import { RouteChildrenProps, withRouter } from "react-router-dom";

interface FooterIF<T> {

}

const Footer: React.FC<FooterIF<any>> = ({ ...props }) => {
    return (
        <div className="fixed_footer">
  <footer>
            <div className="footer__main">
                <p>Copyright © 2021-2022 by Music Game </p>
            </div>
        </footer>
        </div>
      
    )
}

export default Footer


import React from 'react'
import imgAdmin from '../../public_image/img_admin/admin.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { RouteChildrenProps, withRouter } from "react-router-dom";

interface Sidebar<T> {

}

const Sidebar: React.FC<Sidebar<any>> = ({ ...props }) => {
    return (
        <section className="_sidebar">
            <h2>ADMIN MUSIC GAME</h2>
            <section className="main_info">
                <section>
                    <img width={50} src={imgAdmin} alt="" />
                    <div>Nguyễn Văn An</div>
                </section>
            </section>
            <section className="main_search">
            <FontAwesomeIcon icon={faSearch} className="icon_search"/>
                <input type="text" placeholder="search" className="_search"/>
            </section>
        </section>
    )
}

export default Sidebar

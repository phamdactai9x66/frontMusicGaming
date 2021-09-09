
import React from 'react'
import imgAdmin from '../../public_image/img_admin/admin.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { RouteChildrenProps, withRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BsMusicNoteBeamed, BsFillImageFill, BsChat } from 'react-icons/bs';
import { setOriginalNode } from 'typescript';
import { BiPieChart } from 'react-icons/bi';
import { FiMenu } from 'react-icons/fi';
import { FaRegPlayCircle, FaUserAlt } from 'react-icons/fa';
import { SiBlogger } from 'react-icons/si';


interface Sidebar<T> {

}

const Sidebar: React.FC<Sidebar<any>> = ({ ...props }) => {
    return (
        <section className="_sidebar">
            <h2 className="">ADMIN MUSIC GAME</h2>
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

            {/* Tab item */}
            <div className="tabs">
                <div className="tabs__item">
                    <div>
                        <BiPieChart className="tabs__item--icon"/>
                        <label htmlFor="btn" className="button">Chart</label>
                    </div>
                    <div>
                        <span className="icon-tabs">&#10095;</span>
                    </div>
                </div>
                {/* End item */}
                <div className="tabs__item">
                    <div>
                        <BsMusicNoteBeamed className="tabs__item--icon"/>
                        <label htmlFor="btn" className="button">Music</label>
                    </div>
                    <div>
                        <span className="icon-tabs">&#10095;</span>
                    </div>
                </div>
                {/* End item */}
                <div className="tabs__item">
                    <div>
                        <FiMenu className="tabs__item--icon"/>
                        <label htmlFor="btn" className="button">Thể loại</label>
                    </div>
                    <div>
                        <span className="icon-tabs">&#10095;</span>
                    </div>
                </div>
                {/* End item */}
                <div className="tabs__item">
                    <div>
                        <FaRegPlayCircle className="tabs__item--icon"/>
                        <label htmlFor="btn" className="button">Playlist</label>
                    </div>
                    <div>
                        <span className="icon-tabs">&#10095;</span>
                    </div>
                </div>
                {/* End item */}
                <div className="tabs__item">
                    <div>
                        <BsFillImageFill className="tabs__item--icon"/>
                        <label htmlFor="btn" className="button">Slider</label>
                    </div>
                    <div>
                        <span className="icon-tabs">&#10095;</span>
                    </div>
                </div>
                {/* End item */}
                <div className="tabs__item">
                    <div>
                        <FaUserAlt className="tabs__item--icon"/>
                        <label htmlFor="btn" className="button">User</label>
                    </div>
                    <div>
                        <span className="icon-tabs">&#10095;</span>
                    </div>
                </div>
                {/* End item */}
                <div className="tabs__item">
                    <div>
                        <BsChat className="tabs__item--icon"/>
                        <label htmlFor="btn" className="button">Comment</label>
                    </div>
                    <div>
                        <span className="icon-tabs">&#10095;</span>
                    </div>
                </div>
                {/* End item */}
                <div className="tabs__item">
                    <div>
                        <SiBlogger className="tabs__item--icon"/>
                        <label htmlFor="btn" className="button">Blog</label>
                    </div>
                    <div>
                        <span className="icon-tabs">&#10095;</span>
                    </div>
                </div>
                {/* End item */}
                <div className="tabs__item">
                    <div>
                        <FiMenu className="tabs__item--icon"/>
                        <label htmlFor="btn" className="button">Danh mục blog</label>
                    </div>
                    <div>
                        <span className="icon-tabs">&#10095;</span>
                    </div>
                </div>
                {/* End item */}
            </div>
            
        </section>
    )
}

export default Sidebar

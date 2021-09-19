
import React from 'react'
import imgAdmin from '../../public_image/img_admin/admin.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { Link, RouteChildrenProps, withRouter } from "react-router-dom";
import { BsMusicNoteBeamed, BsFillImageFill, BsChat } from 'react-icons/bs';
import { setOriginalNode } from 'typescript';
import { BiMessageSquareAdd, BiPieChart } from 'react-icons/bi';
import { FiMenu } from 'react-icons/fi';
import { FaChartPie, FaRegPlayCircle, FaUserAlt } from 'react-icons/fa';
import { SiBlogger, SiTodoist } from 'react-icons/si';
import { AiFillDashboard } from 'react-icons/ai';


interface Sidebar<T> {

}

const Sidebar: React.FC<Sidebar<any>> = ({ ...props }) => {
    return (
        <div className="_sidebar">
            <h2>ADMIN MUSIC GAME</h2>
            <div className="main_info">
                <div className="info_admin">
                    <img width={50} height={50} src={imgAdmin} alt="" />
                    <div>Nguyễn Văn An</div>
                </div>
            </div>
            <div className="main_search">
                <FontAwesomeIcon icon={faSearch} className="icon_search" />
                <input type="text" placeholder="search" className="_search" />
            </div>

            {/* Tab item */}
            <nav className="tabs">

                <div className="tab">
                    <label className="tab-label" htmlFor="chck1">
                        <div className="grid_item">
                            <label className="tabs__item--icon">
                                <AiFillDashboard />
                            </label>
                            <Link to="/admin"><label className="button_text">Dashboard</label></Link>
                        </div>
                        <div>&#10095;</div>
                    </label>
                </div>

                <div className="tab">
                    <input hidden type="checkbox" id="chck2" />
                    <label className="tab-label" htmlFor="chck2">
                        <div className="grid_item">
                            <label className="tabs__item--icon">
                                <BiPieChart />
                            </label>
                            <label className="button_text">Chart</label>
                        </div>
                        <div>&#10095;</div>
                    </label>

                    <div className="tab-content">
                        <label className="add_item">
                            <BiMessageSquareAdd className="icon_item" />
                            <span>Add Chart</span>
                        </label>
                    </div>
                </div>

                <div className="tab">
                    <input hidden type="checkbox" id="chck3" />
                    <label className="tab-label" htmlFor="chck3">
                        <div className="grid_item">
                            <label className="tabs__item--icon">
                                <BsMusicNoteBeamed />
                            </label>
                            <label className="button_text">Music</label>
                        </div>
                        <div>&#10095;</div>
                    </label>

                    <div className="tab-content">
                        <label className="add_item">
                            <BiMessageSquareAdd className="icon_item" />
                            <Link to="/admin/AddMusic"><span>Add Music</span></Link>
                        </label>
                    </div>
                </div>

                <div className="tab">
                    <input hidden type="checkbox" id="chck4" />
                    <label className="tab-label" htmlFor="chck4">
                        <div className="grid_item">
                            <label className="tabs__item--icon">
                                <FiMenu />
                            </label>
                            <label className="button_text"><span>Thể</span>&nbsp;<span>loại</span></label>
                        </div>
                        <div>&#10095;</div>
                    </label>

                    <div className="tab-content">
                        <label className="add_item">
                            <BiMessageSquareAdd className="icon_item" />
                            <span>Add Thể loại</span>
                        </label>
                    </div>
                </div>

                <div className="tab">
                    <input hidden type="checkbox" id="chck5" />
                    <label className="tab-label" htmlFor="chck5">
                        <div className="grid_item">
                            <label className="tabs__item--icon">
                                <FaRegPlayCircle />
                            </label>
                            <label className="button_text">Playlist</label>
                        </div>
                        <div>&#10095;</div>
                    </label>

                    <div className="tab-content">
                        <label className="add_item">
                            <BiMessageSquareAdd className="icon_item" />
                            <span>Add Playlist</span>
                        </label>
                    </div>
                </div>

                <div className="tab">
                    <input hidden type="checkbox" id="chck6" />
                    <label className="tab-label" htmlFor="chck6">
                        <div className="grid_item">
                            <label className="tabs__item--icon">
                                <BsFillImageFill />
                            </label>

                            <label className="button_text">Slider</label>

                        </div>
                        <div>&#10095;</div>
                    </label>

                    <div className="tab-content">
                        <label className="add_item">
                            <BiMessageSquareAdd className="icon_item" />
                            <span>Add Slider</span>
                        </label>
                    </div>
                </div>


                <div className="tab">
                    <input hidden type="checkbox" id="chck7" />
                    <label className="tab-label" htmlFor="chck7">
                        <div className="grid_item">
                            <label className="tabs__item--icon">
                                <SiTodoist />
                            </label>

                            <Link to="/admin/todolist"><label className="button_text"><span>Todo</span>&nbsp; <span>list</span></label></Link>

                        </div>
                        <div>&#10095;</div>
                    </label>

                    <div className="tab-content">
                        <label className="add_item">
                            <BiMessageSquareAdd className="icon_item" />
                            <span>Add Todo list</span>
                        </label>
                    </div>
                </div>

                <div className="tab">
                    <input hidden type="checkbox" id="chck8" />
                    <label className="tab-label" htmlFor="chck8">
                        <div className="grid_item">
                            <label className="tabs__item--icon">
                                <FaUserAlt />
                            </label>

                            <label className="button_text">User</label>

                        </div>
                        <div>&#10095;</div>
                    </label>

                    <div className="tab-content">
                        <label className="add_item">
                            <BiMessageSquareAdd className="icon_item" />
                            <span>Add User</span>
                        </label>
                    </div>
                </div>

                <div className="tab">
                    <input hidden type="checkbox" id="chck9" />
                    <label className="tab-label" htmlFor="chck9">
                        <div className="grid_item">
                            <label className="tabs__item--icon">
                                <BsChat />
                            </label>

                            <label className="button_text">Comment</label>

                        </div>
                        <div>&#10095;</div>
                    </label>
                    <div className="tab-content">
                        <label className="add_item">
                            <FaChartPie className="icon_item" />
                            <span>Chart Comment</span>
                        </label>
                    </div>
                </div>

                <div className="tab">
                    <input hidden type="checkbox" id="chck10" />
                    <label className="tab-label" htmlFor="chck10">
                        <div className="grid_item">
                            <label className="tabs__item--icon">
                                <SiBlogger />
                            </label>

                            <label className="button_text">Blog</label>

                        </div>
                        <div>&#10095;</div>
                    </label>
                    <div className="tab-content">
                        <label className="add_item">
                            <BiMessageSquareAdd className="icon_item" />
                            <span>Add Blog</span>
                        </label>
                    </div>
                </div>

                <div className="tab">
                    <input hidden type="checkbox" id="chck11" />
                    <label className="tab-label" htmlFor="chck11">
                        <div className="grid_item">
                            <label className="tabs__item--icon">
                                <FiMenu />
                            </label>

                            <label className="button_text"><span>Danh</span>&nbsp;<span>mục</span>&nbsp;<span>blog</span></label>

                        </div>
                        <div>&#10095;</div>
                    </label>
                    <div className="tab-content">
                        <label className="add_item">
                            <BiMessageSquareAdd className="icon_item" />
                            <span>Add Danh mục</span>
                        </label>
                    </div>
                </div>
            </nav>

        </div>
    )
}

export default Sidebar

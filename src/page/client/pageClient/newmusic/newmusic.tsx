import React, { useEffect } from 'react'
import {Link} from "react-router-dom"
import {ReactComponent as Play} from './play.svg'
import { BiPlayCircle } from 'react-icons/bi';
import { AiOutlineDownload, AiFillHeart } from 'react-icons/ai';
import { IoMdAdd } from 'react-icons/io';

interface Newmusic<T> {

}

const Newmusic: React.FC<Newmusic<any>> = ({ ...props }) => {


    return (
        <div className="container-nhacmoi">
            <div className ="title-nhacmoi-tt grid-2">
                <div className="text-title-nhacmoi-tt">
                    <h2 className="color-nhacmoi-tt title_all">Nhạc Mới</h2>
                </div>
                <div className="div-svg">
                    <Play className="svg color-nhacmoi-tt" />
                </div>
            </div>
            <div className="list-box-musicChart">
                    <div className="box-chart">
                        <h5 className="stt">1 - </h5>
                        <img width={60} height={60} src="https://i.ytimg.com/vi/x2xblVxi_c4/maxresdefault.jpg" alt="" />
                        <div className="name">
                            <h6>Tên bài hát</h6>
                            <div style={{ fontSize: "0.7rem", marginTop: "-0.2rem", color: "#ccc" }}>Nghệ sĩ</div>
                        </div>
                        <div className="time_txt">
                            4:50
                        </div>
                        <div className="icon_item">
                            <AiOutlineDownload className="icon" />
                            <AiFillHeart className="icon" />
                            <IoMdAdd className="icon" />
                        </div>
                    </div>
                    <div className="box-chart">
                        <h5 className="stt">2 - </h5>
                        <img width={60} height={60} src="https://i.ytimg.com/vi/x2xblVxi_c4/maxresdefault.jpg" alt="" />
                        <div className="name">
                            <h6>Tên bài hát</h6>
                            <div style={{ fontSize: "0.7rem", marginTop: "-0.2rem", color: "#ccc" }}>Nghệ sĩ</div>
                        </div>
                        <div className="time_txt">
                            4:50
                        </div>
                        <div className="icon_item">
                            <AiOutlineDownload className="icon" />
                            <AiFillHeart className="icon" />
                            <IoMdAdd className="icon" />
                        </div>
                    </div>
                    <div className="box-chart">
                        <h5 className="stt">3 - </h5>
                        <img width={60} height={60} src="https://i.ytimg.com/vi/x2xblVxi_c4/maxresdefault.jpg" alt="" />
                        <div className="name">
                            <h6>Tên bài hát</h6>
                            <div style={{ fontSize: "0.7rem", marginTop: "-0.2rem", color: "#ccc" }}>Nghệ sĩ</div>
                        </div>
                        <div className="time_txt">
                            4:50
                        </div>
                        <div className="icon_item">
                            <AiOutlineDownload className="icon" />
                            <AiFillHeart className="icon" />
                            <IoMdAdd className="icon" />
                        </div>
                    </div>
                    <div className="box-chart">
                        <h5 className="stt">4 - </h5>
                        <img width={60} height={60} src="https://i.ytimg.com/vi/x2xblVxi_c4/maxresdefault.jpg" alt="" />
                        <div className="name">
                            <h6>Tên bài hát</h6>
                            <div style={{ fontSize: "0.7rem", marginTop: "-0.2rem", color: "#ccc" }}>Nghệ sĩ</div>
                        </div>
                        <div className="time_txt">
                            4:50
                        </div>
                        <div className="icon_item">
                            <AiOutlineDownload className="icon" />
                            <AiFillHeart className="icon" />
                            <IoMdAdd className="icon" />
                        </div>
                    </div>
                    <div className="box-chart">
                        <h5 className="stt">5 - </h5>
                        <img width={60} height={60} src="https://i.ytimg.com/vi/x2xblVxi_c4/maxresdefault.jpg" alt="" />
                        <div className="name">
                            <h6>Tên bài hát</h6>
                            <div style={{ fontSize: "0.7rem", marginTop: "-0.2rem", color: "#ccc" }}>Nghệ sĩ</div>
                        </div>
                        <div className="time_txt">
                            4:50
                        </div>
                        <div className="icon_item">
                            <AiOutlineDownload className="icon" />
                            <AiFillHeart className="icon" />
                            <IoMdAdd className="icon" />
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default Newmusic
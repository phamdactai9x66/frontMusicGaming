import React, { useEffect } from 'react'
import {Link} from "react-router-dom"
import { AiOutlineCheck } from 'react-icons/ai';
import { BiPlayCircle } from 'react-icons/bi';
import { Button } from '@mui/material'
import {ReactComponent as Header} from './heart.svg'
import {ReactComponent as Tacgia} from './tacgia.svg'
import { AiOutlineDownload, AiOutlineLink } from 'react-icons/ai';
import { BiHeart } from 'react-icons/bi';
import { FiPlayCircle } from 'react-icons/fi';
import { HiOutlineDotsCircleHorizontal } from 'react-icons/hi';
import { Select, MenuItem } from "@mui/material";

interface Favorite<T> {

}

const Favorite: React.FC<Favorite<any>> = ({ ...props }) => {
    document.title = "Nhạc yêu thích - Music Game";
    return (
        <div className="container-yeuthich">
            <div className ="title-yeuthich-tt grid-2">
                <div className="text-title-yeuthich-tt">
                    <h3 className="color-yeuthich-tt title_all">Yêu thích</h3>
                </div>
                <div className="div-svg">
                    <Header className="svg color-yeuthich-tt" />
                </div>
            </div>
            <div className="yeuthich-tt-main">
                <div className="grid-4-yeuthich-tt">
                    <div className="box yeuthich-box">
                    <Link to="/playlistDetail" className="link">
            <figure>
              <img src="https://i.ytimg.com/vi/Yije8O6eGn8/maxresdefault.jpg" alt="" />
            </figure>
            <div className="icon-box">
              <div>
                <BiHeart className="icon" />
                <FiPlayCircle className="icon" />
                <HiOutlineDotsCircleHorizontal className="icon" />
              </div>
            </div>
            <Select className="option">
              <MenuItem>
                <AiOutlineDownload /> Tải xuống
                                    </MenuItem>
              <MenuItem>
                <AiOutlineLink /> Sao chép link
                                    </MenuItem>
            </Select>
            <h6>Nhạc trẻ remix</h6>
            </Link>
                </div>
                  
                </div>
            </div>
            <br />
            <div className ="title-yeuthich-tt grid-2 mt-2">
                <div className="text-title-yeuthich-tt">
                    <h3 className="color-yeuthich-tt title_all">Nhạc sĩ</h3>
                </div>
                <div className="div-svg">
                    <Tacgia className="svg color-yeuthich-tt" />
                </div>
              
            </div>
            <br />
            <div className="main3_nhacsi">
                        <div className="box_nhacsi">
                            <div className="box-img">
                                <div className="img-hover">
                                    <img height={150} src="https://2sao.vietnamnetjsc.vn/images/2021/07/08/16/13/st.jpg" alt="" />
                                    <BiPlayCircle className="icon" />
                                </div>
                            </div>
                            <h5>Tên nhạc sĩ</h5>
                            <p>1.3k quan tâm</p>
                            <Button><AiOutlineCheck /> Đã quan tâm</Button>
                        </div>
                        <div className="box_nhacsi">
                            <div className="box-img">
                                <div className="img-hover">
                                    <img height={150} src="https://2sao.vietnamnetjsc.vn/images/2021/07/08/16/13/st.jpg" alt="" />
                                    <BiPlayCircle className="icon" />
                                </div>
                            </div>
                            <h5>Tên nhạc sĩ</h5>
                            <p>1.3k quan tâm</p>
                            <Button><AiOutlineCheck /> Đã quan tâm</Button>
                        </div>
                        <div className="box_nhacsi">
                            <div className="box-img">
                                <div className="img-hover">
                                    <img height={150} src="https://2sao.vietnamnetjsc.vn/images/2021/07/08/16/13/st.jpg" alt="" />
                                    <BiPlayCircle className="icon" />
                                </div>
                            </div>
                            <h5>Tên nhạc sĩ</h5>
                            <p>1.3k quan tâm</p>
                            <Button><AiOutlineCheck /> Đã quan tâm</Button>
                        </div>
                        <div className="box_nhacsi">
                            <div className="box-img">
                                <div className="img-hover">
                                    <img height={150} src="https://2sao.vietnamnetjsc.vn/images/2021/07/08/16/13/st.jpg" alt="" />
                                    <BiPlayCircle className="icon" />
                                </div>
                            </div>
                            <h5>Tên nhạc sĩ</h5>
                            <p>1.3k quan tâm</p>
                            <Button><AiOutlineCheck /> Đã quan tâm</Button>
                        </div>
                        <div className="box_nhacsi">
                            <div className="box-img">
                                <div className="img-hover">
                                    <img height={150} src="https://2sao.vietnamnetjsc.vn/images/2021/07/08/16/13/st.jpg" alt="" />
                                    <BiPlayCircle className="icon" />
                                </div>
                            </div>
                            <h5>Tên nhạc sĩ</h5>
                            <p>1.3k quan tâm</p>
                            <Button><AiOutlineCheck /> Đã quan tâm</Button>
                        </div>
                    </div>
        </div>
    )
}

export default Favorite
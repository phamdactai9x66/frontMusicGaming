import React, { useState } from 'react'
import { MdNavigateNext } from 'react-icons/md';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AiOutlineCheck } from 'react-icons/ai';
import { BiPlayCircle, BiHeart } from 'react-icons/bi';
import { Select, MenuItem, Button, Popover } from "@mui/material"

interface ListArtist<T> {

}
const ListArtist: React.FC<ListArtist<any>> = ({ ...props }) => {
    return (
        <>
            <div className="main3">
                <h4 className="title_all">Nhạc sĩ <MdNavigateNext className="icon" /></h4>
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
        </>
    )
}

export default ListArtist

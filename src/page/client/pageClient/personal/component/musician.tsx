import React from 'react'
import { AiOutlineCheck } from 'react-icons/ai';
import { MdNavigateNext } from 'react-icons/md';
import { BiPlayCircle } from 'react-icons/bi';
import { Button } from '@material-ui/core';
const Musician = () => {
    return (
        <div className="overview">
        <div className="main3">
            <h3>Nhạc sĩ <MdNavigateNext className="icon" /></h3>
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
    </div>
    )
}

export default Musician
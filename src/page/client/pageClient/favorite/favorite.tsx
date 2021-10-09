import React, { useEffect } from 'react'
import {Link} from "react-router-dom"
import { AiOutlineCheck } from 'react-icons/ai';
import { MdNavigateNext } from 'react-icons/md';
import { BiPlayCircle } from 'react-icons/bi';
import { Button } from '@material-ui/core';
import {ReactComponent as Header} from './heart.svg'
import {ReactComponent as Tacgia} from './tacgia.svg'

interface Favorite<T> {

}

const Favorite: React.FC<Favorite<any>> = ({ ...props }) => {


    return (
        <div className="container-yeuthich">
            <div className ="title-yeuthich-tt grid-2">
                <div className="text-title-yeuthich-tt">
                    <h2 className="color-yeuthich-tt title_all">Yêu Thích</h2>
                </div>
                <div className="div-svg">
                    <Header className="svg color-yeuthich-tt" />
                </div>
            </div>
            <div className="yeuthich-tt-main">
                <div className="grid-4-yeuthich-tt">
                    <div className="box-yeuthich-tt border-box">
                        <Link className="link-yeuthich-tt" to="">
                            <img className="yeuthich-width-heght-image" src="https://i.pinimg.com/originals/d6/d8/dc/d6d8dc47b9e441a131df8e250d007015.jpg" alt="ảnh cùa tóp thịnh hành" />
                        <p className="text-box-yeuthich-tt">NHẠC TRẺ REMIX 2021 HAY NHẤT HIỆN NAY </p>   
                        </Link>
                    </div>
                    <div className="box-yeuthich-tt border-box">
                        <Link className="link-yeuthich-tt" to="">
                            <img className="yeuthich-width-heght-image" src="https://i.pinimg.com/originals/d6/d8/dc/d6d8dc47b9e441a131df8e250d007015.jpg" alt="ảnh cùa tóp thịnh hành" />
                        <p className="text-box-yeuthich-tt">NHẠC TRẺ REMIX 2021 HAY NHẤT HIỆN NAY </p>   
                        </Link>
                    </div>
                    <div className="box-yeuthich-tt border-box">
                        <Link className="link-yeuthich-tt" to="">
                            <img className="yeuthich-width-heght-image" src="https://i.pinimg.com/originals/d6/d8/dc/d6d8dc47b9e441a131df8e250d007015.jpg" alt="ảnh cùa tóp thịnh hành" />
                        <p className="text-box-yeuthich-tt">NHẠC TRẺ REMIX 2021 HAY NHẤT HIỆN NAY </p>   
                        </Link>
                    </div>
                    <div className="box-yeuthich-tt border-box">
                        <Link className="link-yeuthich-tt" to="">
                            <img className="yeuthich-width-heght-image" src="https://i.pinimg.com/originals/d6/d8/dc/d6d8dc47b9e441a131df8e250d007015.jpg" alt="ảnh cùa tóp thịnh hành" />
                        <p className="text-box-yeuthich-tt">NHẠC TRẺ REMIX 2021 HAY NHẤT HIỆN NAY </p>   
                        </Link>
                    </div>
                    <div className="box-yeuthich-tt border-box">
                        <Link className="link-yeuthich-tt" to="">
                            <img className="yeuthich-width-heght-image" src="https://i.pinimg.com/originals/d6/d8/dc/d6d8dc47b9e441a131df8e250d007015.jpg" alt="ảnh cùa tóp thịnh hành" />
                        <p className="text-box-yeuthich-tt">NHẠC TRẺ REMIX 2021 HAY NHẤT HIỆN NAY </p>   
                        </Link>
                    </div>
                    <div className="box-yeuthich-tt border-box">
                        <Link className="link-yeuthich-tt" to="">
                            <img className="yeuthich-width-heght-image" src="https://i.pinimg.com/originals/d6/d8/dc/d6d8dc47b9e441a131df8e250d007015.jpg" alt="ảnh cùa tóp thịnh hành" />
                        <p className="text-box-yeuthich-tt">NHẠC TRẺ REMIX 2021 HAY NHẤT HIỆN NAY </p>   
                        </Link>
                    </div>
                    <div className="box-yeuthich-tt border-box">
                        <Link className="link-yeuthich-tt" to="">
                            <img className="yeuthich-width-heght-image" src="https://i.pinimg.com/originals/d6/d8/dc/d6d8dc47b9e441a131df8e250d007015.jpg" alt="ảnh cùa tóp thịnh hành" />
                        <p className="text-box-yeuthich-tt">NHẠC TRẺ REMIX 2021 HAY NHẤT HIỆN NAY </p>   
                        </Link>
                    </div>
                    <div className="box-yeuthich-tt border-box">
                        <Link className="link-yeuthich-tt" to="">
                            <img className="yeuthich-width-heght-image" src="https://i.pinimg.com/originals/d6/d8/dc/d6d8dc47b9e441a131df8e250d007015.jpg" alt="ảnh cùa tóp thịnh hành" />
                        <p className="text-box-yeuthich-tt">NHẠC TRẺ REMIX 2021 HAY NHẤT HIỆN NAY </p>   
                        </Link>
                    </div>
                  
                
                </div>
                
            </div>
            <br />
            <div className ="title-yeuthich-tt grid-2 mt-2">
                <div className="text-title-yeuthich-tt">
                    <h2 className="color-yeuthich-tt title_all">Tác Giả</h2>
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
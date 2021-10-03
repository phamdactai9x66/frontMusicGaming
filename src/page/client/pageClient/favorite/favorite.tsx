import React, { useEffect } from 'react'
import "./favorite.scss"
import {Link} from "react-router-dom"
import {ReactComponent as Header} from './heart.svg'
import {ReactComponent as Tacgia} from './tacgia.svg'

interface Favorite<T> {

}

const Favorite: React.FC<Favorite<any>> = ({ ...props }) => {


    return (
        <div className="container-yeuthich">
            <div className ="title-yeuthich-tt grid-2">
                <div className="text-title-yeuthich-tt">
                    <h2 className="color-yeuthich-tt">Yêu Thích</h2>
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
                    <h2 className="color-yeuthich-tt">Tác Giả</h2>
                </div>
                <div className="div-svg">
                    <Tacgia className="svg color-yeuthich-tt" />
                </div>
              
            </div>
            <br />
            <div className="yeuthich-grid-tg ">
                    <div className="yeuthich-box-tg">
                        <img className="image-yt-tg" src="https://cdn.baogiaothong.vn/upload/images/2020-3/article_social_image/2020-07-06/tung1-1594000950-width1200height630-1594000959-width1200height630-1594000964-width1200height630.png" alt="" />
                        <h3 className="yt-name-tg text-yt-tg-white">Sơn tùng MTP</h3>
                        <p className="yt-luotqtam text-yt-tg-white"> 20 triệu lượt</p>
                        <button className="button-quan-tam">Đã quan tâm</button>
                    </div>
                    <div className="yeuthich-box-tg">
                        <img className="image-yt-tg" src="https://cdn.baogiaothong.vn/upload/images/2020-3/article_social_image/2020-07-06/tung1-1594000950-width1200height630-1594000959-width1200height630-1594000964-width1200height630.png" alt="" />
                        <h3 className="yt-name-tg text-yt-tg-white">Sơn tùng MTP</h3>
                        <p className="yt-luotqtam text-yt-tg-white"> 20 triệu lượt</p>
                        <button className="button-quan-tam">Đã quan tâm</button>
                    </div>
                    <div className="yeuthich-box-tg">
                        <img className="image-yt-tg" src="https://cdn.baogiaothong.vn/upload/images/2020-3/article_social_image/2020-07-06/tung1-1594000950-width1200height630-1594000959-width1200height630-1594000964-width1200height630.png" alt="" />
                        <h3 className="yt-name-tg text-yt-tg-white">Sơn tùng MTP</h3>
                        <p className="yt-luotqtam text-yt-tg-white"> 20 triệu lượt</p>
                        <button className="button-quan-tam">Đã quan tâm</button>
                    </div>

                </div>
        </div>
    )
}

export default Favorite
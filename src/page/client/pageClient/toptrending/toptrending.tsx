import React, { useEffect } from 'react'
import "./toptrending.scss"
import {Link} from "react-router-dom"
import {ReactComponent as Play} from './play.svg'
import { Button } from '@mui/material'
interface Toptrending<T> {

}

const Toptrending: React.FC<Toptrending<any>> = ({ ...props }) => {


    return (
        <div className="container-topthanhhanh">
            <div className ="title-top-tt grid-2">
                <div className="text-title-top-tt">
                    <h2 className="color-top-tt">TOP Thịnh Hành</h2>
                </div>
                <div className="div-svg">
                    <Play className="svg color-top-tt" />
                </div>
            </div>
            <div className="top-tt-main">
                <div className="grid-4-top-tt">
                    <div className="box-top-tt border-box">
                        <Link className="link-top-tt" to="/playlistDetail">
                            <img className="top-width-heght-image" src="https://i.pinimg.com/originals/d6/d8/dc/d6d8dc47b9e441a131df8e250d007015.jpg" alt="ảnh cùa tóp thịnh hành" />
                        <p className="text-box-top-tt">NHẠC TRẺ REMIX 2021 HAY NHẤT HIỆN NAY </p>   
                        </Link>
                    </div>
                    <div className="box-top-tt border-box">
                        <Link className="link-top-tt" to="/playlistDetail">
                            <img className="top-width-heght-image" src="https://i.pinimg.com/originals/d6/d8/dc/d6d8dc47b9e441a131df8e250d007015.jpg" alt="ảnh cùa tóp thịnh hành" />
                        <p className="text-box-top-tt">NHẠC TRẺ REMIX 2021 HAY NHẤT HIỆN NAY </p>   
                        </Link>
                    </div>
                    <div className="box-top-tt border-box">
                        <Link className="link-top-tt" to="/playlistDetail">
                            <img className="top-width-heght-image" src="https://i.pinimg.com/originals/d6/d8/dc/d6d8dc47b9e441a131df8e250d007015.jpg" alt="ảnh cùa tóp thịnh hành" />
                        <p className="text-box-top-tt">NHẠC TRẺ REMIX 2021 HAY NHẤT HIỆN NAY </p>   
                        </Link>
                    </div>
                    <div className="box-top-tt border-box">
                        <Link className="link-top-tt" to="/playlistDetail">
                            <img className="top-width-heght-image" src="https://i.pinimg.com/originals/d6/d8/dc/d6d8dc47b9e441a131df8e250d007015.jpg" alt="ảnh cùa tóp thịnh hành" />
                        <p className="text-box-top-tt">NHẠC TRẺ REMIX 2021 HAY NHẤT HIỆN NAY </p>   
                        </Link>
                    </div>
                    <div className="box-top-tt border-box">
                        <Link className="link-top-tt" to="/playlistDetail">
                            <img className="top-width-heght-image" src="https://i.pinimg.com/originals/d6/d8/dc/d6d8dc47b9e441a131df8e250d007015.jpg" alt="ảnh cùa tóp thịnh hành" />
                        <p className="text-box-top-tt">NHẠC TRẺ REMIX 2021 HAY NHẤT HIỆN NAY </p>   
                        </Link>
                    </div>
                    <div className="box-top-tt border-box">
                        <Link className="link-top-tt" to="/playlistDetail">
                            <img className="top-width-heght-image" src="https://i.pinimg.com/originals/d6/d8/dc/d6d8dc47b9e441a131df8e250d007015.jpg" alt="ảnh cùa tóp thịnh hành" />
                        <p className="text-box-top-tt">NHẠC TRẺ REMIX 2021 HAY NHẤT HIỆN NAY </p>   
                        </Link>
                    </div>
                    <div className="box-top-tt border-box">
                        <Link className="link-top-tt" to="/playlistDetail">
                            <img className="top-width-heght-image" src="https://i.pinimg.com/originals/d6/d8/dc/d6d8dc47b9e441a131df8e250d007015.jpg" alt="ảnh cùa tóp thịnh hành" />
                        <p className="text-box-top-tt">NHẠC TRẺ REMIX 2021 HAY NHẤT HIỆN NAY </p>   
                        </Link>
                    </div>
                    <div className="box-top-tt border-box">
                        <Link className="link-top-tt" to="/playlistDetail">
                            <img className="top-width-heght-image" src="https://i.pinimg.com/originals/d6/d8/dc/d6d8dc47b9e441a131df8e250d007015.jpg" alt="ảnh cùa tóp thịnh hành" />
                        <p className="text-box-top-tt">NHẠC TRẺ REMIX 2021 HAY NHẤT HIỆN NAY </p>   
                        </Link>
                    </div>
                  
                
                </div>
                
            </div>
            <div className="top-tt-buttom">
                <Button>Xem Thêm</Button>
            </div>
        </div>
    )
}

export default Toptrending
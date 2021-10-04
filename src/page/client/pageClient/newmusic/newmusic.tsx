import React, { useEffect } from 'react'
import "./newmusic.scss"
import {Link} from "react-router-dom"
import {ReactComponent as Play} from './play.svg'
import {ReactComponent as More} from './more.svg'
import {ReactComponent as Microphone} from './microphone.svg'
import {ReactComponent as Heart} from './heart.svg'


interface Newmusic<T> {

}

const Newmusic: React.FC<Newmusic<any>> = ({ ...props }) => {


    return (
        <div className="container-nhacmoi">
            <div className ="title-nhacmoi-tt grid-2">
                <div className="text-title-nhacmoi-tt">
                    <h2 className="color-nhacmoi-tt">Nhạc Mới</h2>
                </div>
                <div className="div-svg">
                    <Play className="svg color-nhacmoi-tt" />
                </div>
            </div>
            {/* /// */}
            <div className="nhacmoi">
                <div className ="grid-nhacmoi-4">
                    <div className="stt">
                        <h3>1</h3>
                    </div>
                    <div className="image-nhacmoi">
                        <img src="https://png.pngtree.com/element_our/png_detail/20181022/music-and-live-music-logo-with-neon-light-effect-vector-png_199406.jpg" alt="" />
                    </div>
                    <div className="text-nhacmoi">
                        <p className="title">Nhạc Trẻ 2021 - Những Ca Khúc Nhạc Trẻ Mới Nhất 2021 - Liên Khúc</p>
                        <p className="nhacmoi-tacgia">tác giả .... abc</p>
                    </div>
                    <div className="flex-nhacmoi">
                        <div>
                           <Microphone className="microphone" /> 
                        </div>
                        <div>
                             <Heart className="heart" /> 
                        </div>
                        <div>
                              <More className="more" /> 
                        </div>
                     
                    </div>
                </div>
                <div className ="grid-nhacmoi-4">
                    <div className="stt">
                        <h3>1</h3>
                    </div>
                    <div className="image-nhacmoi">
                        <img src="https://png.pngtree.com/element_our/png_detail/20181022/music-and-live-music-logo-with-neon-light-effect-vector-png_199406.jpg" alt="" />
                    </div>
                    <div className="text-nhacmoi">
                        <p className="title">Nhạc Trẻ 2021 - Những Ca Khúc Nhạc Trẻ Mới Nhất 2021 - Liên Khúc</p>
                        <p className="nhacmoi-tacgia">tác giả .... abc</p>
                    </div>
                    <div className="flex-nhacmoi">
                        <Microphone className="microphone" />
                        <Heart className="heart" />
                        <More className="more" />
                    </div>
                </div>
                <div className ="grid-nhacmoi-4">
                    <div className="stt">
                        <h3>1</h3>
                    </div>
                    <div className="image-nhacmoi">
                        <img src="https://png.pngtree.com/element_our/png_detail/20181022/music-and-live-music-logo-with-neon-light-effect-vector-png_199406.jpg" alt="" />
                    </div>
                    <div className="text-nhacmoi">
                        <p className="title">Nhạc Trẻ 2021 - Những Ca Khúc Nhạc Trẻ Mới Nhất 2021 - Liên Khúc</p>
                        <p className="nhacmoi-tacgia">tác giả .... abc</p>
                    </div>
                    <div className="flex-nhacmoi">
                        <Microphone className="microphone" />
                        <Heart className="heart" />
                        <More className="more" />
                    </div>
                </div>
                <div className ="grid-nhacmoi-4">
                    <div className="stt">
                        <h3>1</h3>
                    </div>
                    <div className="image-nhacmoi">
                        <img src="https://png.pngtree.com/element_our/png_detail/20181022/music-and-live-music-logo-with-neon-light-effect-vector-png_199406.jpg" alt="" />
                    </div>
                    <div className="text-nhacmoi">
                        <p className="title">Nhạc Trẻ 2021 - Những Ca Khúc Nhạc Trẻ Mới Nhất 2021 - Liên Khúc</p>
                        <p className="nhacmoi-tacgia">tác giả .... abc</p>
                    </div>
                    <div className="flex-nhacmoi">
                        <Microphone className="microphone" />
                        <Heart className="heart" />
                        <More className="more" />
                    </div>
                </div>
                <div className ="grid-nhacmoi-4">
                    <div className="stt">
                        <h3>1</h3>
                    </div>
                    <div className="image-nhacmoi">
                        <img src="https://png.pngtree.com/element_our/png_detail/20181022/music-and-live-music-logo-with-neon-light-effect-vector-png_199406.jpg" alt="" />
                    </div>
                    <div className="text-nhacmoi">
                        <p className="title">Nhạc Trẻ 2021 - Những Ca Khúc Nhạc Trẻ Mới Nhất 2021 - Liên Khúc</p>
                        <p className="nhacmoi-tacgia">tác giả .... abc</p>
                    </div>
                    <div className="flex-nhacmoi">
                        <Microphone className="microphone" />
                        <Heart className="heart" />
                        <More className="more" />
                    </div>
                </div>

            </div>
            {/*  */}
          
            <div className="nhacmoi-tt-buttom">
                <Link to="" className="text-butom-nhacmoi-tt">Xem Thêm</Link>
            </div>
        </div>
    )
}

export default Newmusic
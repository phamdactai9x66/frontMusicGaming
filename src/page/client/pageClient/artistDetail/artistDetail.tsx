
import React, { useState } from 'react'
import { Button } from '@mui/material'
import { BsCheck, BsFillPlayFill } from 'react-icons/bs'
import { FiUserPlus } from 'react-icons/fi'
// import { RouteChildrenProps, withRouter } from "react-router-dom";

interface ArtistDetail<T> {

}

const ArtistDetail: React.FC<ArtistDetail<any>> = ({ ...props }) => {
    const [checkCare, setcheckCare] = useState(true);

    function handelCare() {
        setcheckCare(!checkCare)
    }
    return (
        <div className="artistDetail">
            <div className="banner" style={{backgroundImage: "url(https://photo-resize-zmp3.zadn.vn/w360_r1x1_jpeg/avatars/4/a/9/1/4a91d506fc7144c7716b9d3166f2c4b6.jpg)"}}>
                <div className="more-info">
                    <h2>Sơn Tùng M-TP</h2>
                    <p>
                        Có chất giọng cao luyến láy cùng những bản hit R&amp;B hay Dance Pop, Sơn Tùng M-TP là ca sĩ rất thành công, không chỉ nổi tiếng ở Việt Nam mà còn được khán giả yêu nhạc Việt trên thế giới biết đến
                    </p>
                    <div>
                        <Button variant="contained" color="primary" type="submit">
                            <BsFillPlayFill />PHÁT NHẠC
                    </Button>
                        <div onClick={handelCare}>
                            {checkCare ? <Button variant="outlined" >
                                <FiUserPlus />QUAN TÂM
                    </Button> : <Button variant="contained" color="primary" type="submit">
                                    <BsCheck />ĐÃ QUAN TÂM
                    </Button>}
                        </div>
                        <div>
                           2.2M QUAN TÂM
                        </div>
                    </div>

                </div>
                <div className="img_right">
                    <img src="https://photo-resize-zmp3.zadn.vn/w360_r1x1_jpeg/avatars/4/a/9/1/4a91d506fc7144c7716b9d3166f2c4b6.jpg" alt=""/>
                </div>
            </div>
            <div className="list_musicArtist">
                <h3 className="title_all">Danh sách bài hát</h3>
               <div className="mt-3">
               -----handel list music-----
               </div>
        </div>
        </div>

    )
}

export default ArtistDetail

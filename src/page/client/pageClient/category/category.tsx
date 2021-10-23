import React, { useEffect } from 'react'
import { Link } from "react-router-dom"
interface Category<T> {

}

const Category: React.FC<Category<any>> = ({ ...props }) => {
  return (
    <div className="container-category">
      <div className="banner-category">
        <img src="https://html.nkdev.info/goodgames/assets/images/gallery-7.jpg" alt="" />
      </div>
      <div className="box-category">
        <div className="box-title-category">
          <h4 className="title_all">Tâm trạng và hoạt động</h4>
        </div>
        <div className="box-grid-category">
          <Link to="/categoryDetailPlaylist">
          <div className="box">
            <figure>
              <img src="https://photo-zmp3.zadn.vn/cover/b/1/e/b/b1eb8ae84392957f9b9d1ce2bb42aab9.jpg" alt="" />
            </figure>
            <div className="icon-box_category">
              <div>
              <h6 className="icon">Tập trung</h6>
              </div>
            </div>       
          </div>
          </Link>
          <div className="box">
            <figure>
              <img src="https://photo-zmp3.zadn.vn/cover/4/a/3/b/4a3b5265ee2c9e2c84f5a88194382b5d.jpg" alt="" />
            </figure>
            <div className="icon-box_category">
              <div>
              <h6 className="icon">Ngủ ngon</h6>
              </div>
            </div>       
          </div>
        </div>
      </div>
      <div className="box-category">
        <div className="box-title-category">
          <h4 className="title_all">Quốc gia</h4>
        </div>
        <div className="box-grid-category">
          <div className="box">
            <figure>
              <img src="https://photo-zmp3.zadn.vn/cover/0/e/f/f/0eff559a1262828524cd52e8a5101bc0.jpg" alt="" />
            </figure>
            <div className="icon-box_category">
              <div>
              <h6 className="icon">Nhạc việt</h6>
              </div>
            </div>       
          </div>
            <div className="box">
            <figure>
              <img src="https://photo-zmp3.zadn.vn/cover/8/a/8/6/8a86e0b6a16fd8dadb788c3dee4db6d4.jpg" alt="" />
            </figure>
            <div className="icon-box_category">
              <div>
              <h6 className="icon">Nhạc âu mỹ</h6>
              </div>
            </div>       
          </div>
        </div>
      </div>
      <div className="box-category">
        <div className="box-title-category">
          <h4 className="title_all">EDM</h4>
        </div>
        <div className="box-grid-category">
          <div className="box">
            <figure>
              <img src="https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/5/1/5/3/51538ab5b46988dc94e10705fb5d974c.jpg" alt="" />
            </figure>
            <div className="icon-box_category">
              <div>
              <h6 className="icon">Dance Rewind</h6>
              </div>
            </div>       
          </div>
            <div className="box">
            <figure>
              <img src="https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/2/a/3/e/2a3e9cffb9146a27769f2ffa49bbf809.jpg" alt="" />
            </figure>
            <div className="icon-box_category">
              <div>
              <h6 className="icon">EDM Vocals</h6>
              </div>
            </div>       
          </div>
        </div>
      </div>
    </div>


  )
}

export default Category
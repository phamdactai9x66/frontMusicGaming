import React, { useEffect } from 'react'
import './blogdetail.scss'
import {Link} from "react-router-dom"
import { BiCircle, BiSearch, BiUpload, BiUserCircle } from 'react-icons/bi';
import {ReactComponent as Right} from './right.svg'
import {ReactComponent as Left} from './left.svg'
import {ReactComponent as Sao1} from './sao1.svg'
import {ReactComponent as Sao2} from './sao.svg'



interface blogDetail<T> {

}

const BlogDetail: React.FC<blogDetail<any>> = ({ ...props }) => {
    return (
     <div className="container-blogdetail-blog">
         <div className="blogdetail-title-grid">
            <div className="title-h4">
                <h4>Tiêu Đề</h4>
            </div>
            <div className="hr">
                <hr className="" />
            </div>
         </div>
         <div className="detail-banner-blog">
             <img className="img" src="https://www.doctorsofchaos.com/wp-content/uploads/2018/04/EDM-COMPILATION-VOLUME-6-BANNER-DATES-1.jpg" alt="" />
         </div>
         <div className="desc-blogdetail">
            <div  className="desc-blogdetail-link">
                <Link className="link" to="">
                 <h3>EDM COMPILATION VOLUME 6 BANNER DATES-1 Only the Best Music</h3>
                </Link>
                <p>27/09/2021</p>
            </div>
             <div className="text-detail">
                <p>EDM COMPILATION VOLUME 6 BANNER DATES-1 Only the Best MusicEDM COMPILATION VOLUME 6 BANNER DATES-1 Only the Best MusicEDM COMPILATION VOLUME 6 BANNER DATES-1 Only the Best MusicEDM COMPILATION VOLUME 6 BANNER DATES-1 Only the Best MusicEDM COMPILATION VOLUME 6 BANNER DATES-1 Only the Best MusicEDM COMPILATION VOLUME 6 BANNER DATES-1 Only the Best MusicEDM COMPILATION VOLUME 6 BANNER DATES-1 Only the Best MusicEDM COMPILATION VOLUME 6 BANNER DATES-1 Only the Best MusicEDM COMPILATION VOLUME 6 BANNER DATES-1 Only the Best MusicEDM COMPILATION VOLUME 6 BANNER DATES-1 Only the Best Music</p>
                <div className="grid-2-blogDetail">
                    <div className="image-detail">
                        <img className="img2" src="https://www.doctorsofchaos.com/wp-content/uploads/2018/04/EDM-COMPILATION-VOLUME-6-BANNER-DATES-1.jpg" alt="" />
                    </div>
                    <div className="text-blogdetail">
                    <p> BANNER DATES-1 Only the Best MusicEDM COMPILATION VOLUME 6 BANNER DATES-1 Only the Best MusicEDM COMPILATION VOLUME 6 BANNER DATES-1 Only the Best MusicEDM COMPILATION VOLUME 6 BANNER DATES-1 Only the Best MusicEDM COMPILATION VOLUME 6 BANNER DATES-1 Only the Best MusicEDM COMPILATION VOLUME 6 BANNER DATES-1 Only the Best MusicEDM COMPILATION VOLUME 6 BANNER DATES-1 Only the Best MusicEDM COMPILATION VOLUME 6 BANNER DATES-1 Only the Best MusicEDM COMPILATION VOLUME 6 BANNER DATES-1 Only the Best Music</p>
                    </div>
                </div>
                <p className="p3">EDM COMPILATION VOLUME 6 BANNER DATES-1 Only the Best MusicEDM COMPILATION VOLUME 6 BANNER DATES-1 Only the Best MusicEDM COMPILATION VOLUME 6 BANNER DATES-1 Only the Best MusicEDM COMPILATION VOLUME 6 BANNER DATES-1 Only the Best MusicEDM COMPILATION VOLUME 6 BANNER DATES-1 Only the Best MusicEDM COMPILATION VOLUME 6 BANNER DATES-1 Only the Best MusicEDM COMPILATION VOLUME 6 BANNER DATES-1 Only the Best MusicEDM COMPILATION VOLUME 6 BANNER DATES-1 Only the Best MusicEDM COMPILATION VOLUME 6 BANNER DATES-1 Only the Best MusicEDM COMPILATION VOLUME 6 BANNER DATES-1 Only the Best Music</p>
                <div className="blogdetail-video">
                <video controls>
                        <source src="https://webcoban.vn/file/bunny.mp4"/>
                 </video>
                </div>
             </div>
             <div className="hr2">
                 <hr />
             </div>
            <div className="comment">
                 <div  className="grid-3-cmt-detail">
                    <div className="img-user">
                        <img src="https://lms.yamaha-motor.com.vn/root/update/images/avatar-default.png" alt="" />
                    </div>
                    <div className="desc-user-cmt">
                        <h5>Nguyễn văn a</h5>
                        <p className="p-user">Đánh giá :  <span><Sao1 className="sao1" /><Sao1 className="sao1" /><Sao1 className="sao1" /><Sao1 className="sao1" /><Sao2 className="sao2" /></span></p>
                        <div className="flex-desc-cmt">
                            <p className="p1">9:24</p>
                            <p className="p2">EDM COMPILATION VOLUME 6 BANNER DATES-1 Only the Best MusicEDM COMPILATION </p>
                        </div>
                    </div>
                    <div className="button-repply-detail">
                        <button>repply</button>
                    </div>
                </div>
                <div  className="grid-3-cmt-detail">
                    <div className="img-user">
                        <img src="https://lms.yamaha-motor.com.vn/root/update/images/avatar-default.png" alt="" />
                    </div>
                    <div className="desc-user-cmt">
                        <h5>Nguyễn văn a</h5>
                        <p className="p-user">Đánh giá : <span><Sao1 className="sao1" /><Sao1 className="sao1" /><Sao1 className="sao1" /><Sao1 className="sao1" /><Sao2 className="sao2" /></span></p>
                        <div className="flex-desc-cmt">
                            <p className="p1">9:24</p>
                            <p className="p2">EDM COMPILATION VOLUME 6 BANNER DATES-1 Only the Best MusicEDM COMPILATION </p>
                        </div>
                    </div>
                    <div className="button-repply-detail">
                        <button>repply</button>
                    </div>
                </div>
              
            </div>
            <div className="desc-comment">
               <div className="danhgia">
                   <h5>Đánh giá</h5>
                   <span><Sao2 className="sao2" /><Sao2 className="sao2" /><Sao2 className="sao2" /><Sao2 className="sao2" /><Sao2 className="sao2" /></span>
               </div>
               <form action="" className="form">
                    <textarea name="" id="" cols={30} rows={10} placeholder="Message"></textarea>
                    <button>Post comment</button>
               </form>
            </div>
            <div className="blog-lien-quan">
                <div className="title-blog-lienquan">
                    <div>
                        <hr />
                    </div>
                    <div>
                          <h4>Blog liên quan</h4>
                    </div>
                    <div>
                       <hr />  
                    </div>
                </div>
                <div className="grid-4-bloglienquan">
                    <div className="box-grid-lienquan">
                        <img src="https://thumbs.dreamstime.com/b/edm-club-music-party-template-dance-party-flyer-brochure-night-party-club-sound-banner-poster-72485529.jpg" alt="" />
                        <p>EDM COMPILATION VOLUME 6 BANNER DATES-1 Only the Best MusicEDM COMPILATION </p>
                    </div>
                    <div className="box-grid-lienquan">
                        <img src="https://thumbs.dreamstime.com/b/edm-club-music-party-template-dance-party-flyer-brochure-night-party-club-sound-banner-poster-72485529.jpg" alt="" />
                        <p>EDM COMPILATION VOLUME 6 BANNER DATES-1 Only the Best MusicEDM COMPILATION </p>
                    </div>
                    <div className="box-grid-lienquan">
                        <img src="https://thumbs.dreamstime.com/b/edm-club-music-party-template-dance-party-flyer-brochure-night-party-club-sound-banner-poster-72485529.jpg" alt="" />
                        <p>EDM COMPILATION VOLUME 6 BANNER DATES-1 Only the Best MusicEDM COMPILATION </p>
                    </div>
                    <div className="box-grid-lienquan">
                        <img src="https://thumbs.dreamstime.com/b/edm-club-music-party-template-dance-party-flyer-brochure-night-party-club-sound-banner-poster-72485529.jpg" alt="" />
                        <p>EDM COMPILATION VOLUME 6 BANNER DATES-1 Only the Best MusicEDM COMPILATION </p>
                    </div>
                  
                </div>
            </div>
            <div className="blog-buttom">
                <div className="blog-flex-buttom">
                    <p className="left"><Left className="a" /></p>
                    <p className="page">1</p>
                    <p className="page">2</p>
                    <p className="page">3</p>
                    <p className="page">4</p>
                    <p className="page">5</p>
                    <p className="right"><Right/></p>
                </div>
            </div>
         </div>
     </div>


    )
}

export default BlogDetail
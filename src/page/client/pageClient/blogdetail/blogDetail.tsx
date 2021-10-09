import React, { useEffect } from 'react'
import './blogdetail.scss'
import {Link} from "react-router-dom"
import {ReactComponent as Sao1} from './sao1.svg'
import {ReactComponent as Sao2} from './sao.svg'
import { Pagination } from "@mui/material"



interface blogDetail<T> {

}

const BlogDetail: React.FC<blogDetail<any>> = ({ ...props }) => {
    return (
     <div className="container-blogdetail-blog">
         <div className="blogdetail-title-grid">
            <div className="title-h4">
                <h2 className="title_all">GRAB YOUR SWORD AND FIGHT THE HORDE</h2>
            </div>
            <div className="hr">
                <hr className="" />
            </div>
         </div>
         <div className="detail-banner-blog">
             <img className="img" src="https://html.nkdev.info/goodgames/assets/images/post-2.jpg" alt="" />
         </div>
         <div className="desc-blogdetail">
            <div  className="desc-blogdetail-link">
                 <h3 className="title_all">GRAB YOUR SWORD AND FIGHT THE HORDE</h3>
                <p>27/09/2021</p>
            </div>
             <div className="text-detail">
                <p>Just then her head struck against the roof of the hall: in fact she was now more than nine feet high, and she at once took up the little golden key and hurried off to the garden door. The first question of course was, how to get dry again: they had a consultation about this, and after a few minutes it seemed quite natural to Alice to find herself talking familiarly with them, as if she had known them all her life. Indeed, she had quite a long argument with the Lory, who at last turned sulky, and would only say, `I am older than you, and must know better'; and this Alice would not allow without knowing how old it was, and, as the Lory positively refused to tell its age, there was no more to be said.</p>
                <div className="grid-2-blogDetail">
                    <div className="image-detail">
                        <img className="img2" src="https://html.nkdev.info/goodgames/assets/images/post-inner-img.jpg" alt="" />
                    </div>
                    <div className="text-blogdetail">
                    <p> I confess this side of the country was much pleasanter than mine; but yet I had not the least inclination to remove, for as I was fixed in my habitation it became natural to me, and I seemed all the while I was here to be as it were upon a journey, and from home. However, I travelled along the shore she clutched the matron by the arm, and forcing her into a chair by the bedside, was about to speak, wh en looking round, she caught sight of the two old women bending forward in the attitude of eager list eners.They belong to the old gentleman, said Oliver, wringing his hands; "to the good, kind, old gentle man who took me into his house, and had me nursed, when I was near dying of the fever . Oh, pray send them back; send him back the books and money</p>
                    </div>
                </div>
                <p className="p3">This sounded nonsense to Alice, so she said nothing, but set off at once toward the Red Queen. To her surprise, she lost sight of her in a moment, and found herself walking in at the front-door again. For some minutes Alice stood without speaking, looking out in all directions over the country - and a most curious country it was.</p>
                <div className="blogdetail-video">
                <iframe style={{width: "100%"}} height={411} src="https://www.youtube.com/embed/6cXyQg_5uoc" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
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
                <hr />
                    <div>
                          <h4>Blog liên quan</h4>
                    </div>
                    <hr />
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
            <div className="Pagination">
            <Pagination count={10} onClick={() => { console.log() }} style={{ padding: 10, paddingTop: 20,color: "#fff" }} />
            </div>
         </div>
     </div>


    )
}

export default BlogDetail
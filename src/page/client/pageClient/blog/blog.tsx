import React, { useEffect } from 'react'
import "./blog.scss"
import {Link} from "react-router-dom"
import {ReactComponent as Right} from './right.svg'
import {ReactComponent as Left} from './left.svg'

import { BiCircle, BiSearch, BiUpload, BiUserCircle } from 'react-icons/bi';

interface blog<T> {

}

const Blog: React.FC<blog<any>> = ({ ...props }) => {


    return (
        <div className="container-blog">
            <div className ="title-blog grid-2">
                <div className="text-title-blog">
                    <h2 className="color-blog">Danh Sách Blog</h2>
                </div>
                <div className="div-hr">
                   <hr />
                </div>
            </div>
            <div className="blog-main">
                <div className="flex-blog">
                    <div className="box ">
                        <div className="blog-image">
                        <h4  className="color text-blog-none">Top 100 Bài Hát</h4>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZZlyRwLsszVeOhyByhFiWqhLtLxaMLOmy3Q&usqp=CAU" alt="" />
                        </div>
                        <div className="title-blog">
                            <h4  className="color">Top 100 Bài Hát</h4>
                            <p className="color desc">Album Top 100 Bài Hát Nhạc Trẻ Hay Nhất Top 100 Nhạc Trẻ là danh sách 100 ca khúc hot nhất hiện tại của thể loại Nhạc Trẻ, được Zing MP3 tự động tổng hợp ...</p>
                            <p  className="color day">24/09/2021</p>
                        </div>   
                    </div>
                    <div className="box box-top">
                        <div className="blog-image">
                        <h4  className="color text-blog-none">Top 100 Bài Hát</h4>
                        <img src="https://media.tinmoi.vn/resize_354x213/upload/honghanh/2021/04/05/cung-xuat-hien-tai-phim-truong-son-tung-va-jack-co-dang-ap-u-cuoc-chien-moi1617617664.jpg" alt="" />
                        </div>
                        <div className="title-blog">
                            <h4  className="color">Top 100 Bài Hát</h4>
                            <p className="color desc">Album Top 100 Bài Hát Nhạc Trẻ Hay Nhất Top 100 Nhạc Trẻ là danh sách 100 ca khúc hot nhất hiện tại của thể loại Nhạc Trẻ, được Zing MP3 tự động tổng hợp ...</p>
                            <p  className="color day">24/09/2021</p>
                        </div>   
                    </div>
                    <div className="box box-top">
                        <div className="blog-image">
                        <h4  className="color text-blog-none">Top 100 Bài Hát</h4>
                        <img src="https://media.tinmoi.vn/resize_354x213/upload/honghanh/2021/04/05/cung-xuat-hien-tai-phim-truong-son-tung-va-jack-co-dang-ap-u-cuoc-chien-moi1617617664.jpg" alt="" />
                        </div>
                        <div className="title-blog">
                            <h4  className="color">Top 100 Bài Hát</h4>
                            <p className="color desc">Album Top 100 Bài Hát Nhạc Trẻ Hay Nhất Top 100 Nhạc Trẻ là danh sách 100 ca khúc hot nhất hiện tại của thể loại Nhạc Trẻ, được Zing MP3 tự động tổng hợp ...</p>
                            <p  className="color day">24/09/2021</p>
                        </div>   
                    </div>
                </div>
                <div className="blog-2">
                    <div className="search" >
                        <BiSearch className="icon"/>
                        <input placeholder="Search" type="text" />
                       
                    </div>
                    <div className="box-1">
                        <h4 className="color">Bài viết gần đây</h4>
                        <Link className="title-blog-name color" to="">Top 100 Bài Hát ...</Link>
                        <Link className="title-blog-name color" to="">Top 100 Bài Hát ...</Link>
                        <Link className="title-blog-name color" to="">Top 100 Bài Hát ...</Link>
                    </div>
                    <div className="box-2">
                        <h4 className="color"> Bình luận gần đây</h4>
                        <Link className="title-blog-name color"  to="">Top 100 Bài Hát ...</Link>
                        <Link className="title-blog-name color" to="">Top 100 Bài Hát ...</Link>
                        <Link className="title-blog-name color" to="">Top 100 Bài Hát ...</Link>
                    </div>
                    <div className="box-3">
                        <h4 className="color">Danh Mục</h4>
                        <Link className="title-blog-name color" to="">Top 100 Bài Hát</Link>
                        <Link className="title-blog-name color" to="">Top 100 Bài Hát </Link>
                        <Link className="title-blog-name color" to="">Top 100 Bài Hát </Link>
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










    )
}

export default Blog
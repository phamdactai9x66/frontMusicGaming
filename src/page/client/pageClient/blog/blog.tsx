import React, { useEffect } from 'react'
import {Link} from "react-router-dom"
import { Pagination } from "@mui/material"
import { BiCircle, BiSearch, BiUpload, BiUserCircle } from 'react-icons/bi';
import ListBlog from './component/ListBlog';
import ListCategoryBlog from './component/listCategoryBlog';
import PostNew from './component/PostNew';
interface blog<T> {

}

const Blog: React.FC<blog<any>> = ({...props }) => {


    return (
        <div className="container-blog">
            <div className ="title-blog grid-2">
                <div className="text-title-blog">
                    <h2 className="color-blog title_all">Danh Sách Blog</h2>
                </div>
                <div className="div-hr">
                   <hr />
                </div>
            </div>
            <div className="blog-main">
                <div className="flex-blog">
                  <ListBlog />
                    <div className="box_blog box-top ">
                        <div className="blog-image">
                        <h4  className="color text-blog-none">Top 100 Bài Hát</h4>
                        <Link to="/blogDetail">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZZlyRwLsszVeOhyByhFiWqhLtLxaMLOmy3Q&usqp=CAU" alt="" />
                        </Link>
                        </div>
                        <div className="title-blog">
                            <h4  className="color">Top 100 Bài Hát</h4>
                            <p className="color desc">Album Top 100 Bài Hát Nhạc Trẻ Hay Nhất Top 100 Nhạc Trẻ là danh sách 100 ca khúc hot nhất hiện tại của thể loại Nhạc Trẻ, được Zing MP3 tự động tổng hợp</p>
                            <p  className="color day">24/09/2021</p>
                        </div>   
                    </div>
                    <div className="box_blog box-top">
                        <div className="blog-image">
                        <h4  className="color text-blog-none">Top 100 Bài Hát</h4>
                        <img src="https://media.tinmoi.vn/resize_354x213/upload/honghanh/2021/04/05/cung-xuat-hien-tai-phim-truong-son-tung-va-jack-co-dang-ap-u-cuoc-chien-moi1617617664.jpg" alt="" />
                        </div>
                        <div className="title-blog">
                            <h4  className="color">Top 100 Bài Hát</h4>
                            <p className="color desc">Album Top 100 Bài Hát Nhạc Trẻ Hay Nhất Top 100 Nhạc Trẻ là danh sách 100 ca khúc hot nhất hiện tại của thể loại Nhạc Trẻ, được Zing MP3 tự động tổng hợp</p>
                            <p  className="color day">24/09/2021</p>
                        </div>   
                    </div>
                    <div className="box_blog box-top">
                        <div className="blog-image">
                        <h4  className="color text-blog-none">Top 100 Bài Hát</h4>
                        <img src="https://media.tinmoi.vn/resize_354x213/upload/honghanh/2021/04/05/cung-xuat-hien-tai-phim-truong-son-tung-va-jack-co-dang-ap-u-cuoc-chien-moi1617617664.jpg" alt="" />
                        </div>
                        <div className="title-blog">
                            <h4  className="color">Top 100 Bài Hát</h4>
                            <p className="color desc">Album Top 100 Bài Hát Nhạc Trẻ Hay Nhất Top 100 Nhạc Trẻ là danh sách 100 ca khúc hot nhất hiện tại của thể loại Nhạc Trẻ, được Zing MP3 tự động tổng hợp</p>
                            <p  className="color day">24/09/2021</p>
                        </div>   
                    </div>
                </div>
                <div className="blog-2">
                    <div className="search" >
                        <BiSearch className="icon"/>
                        <input placeholder="Tìm kiếm" type="text" />
                       
                    </div>
                  <ListCategoryBlog />
                    <div className="box-2">
                    <div className="box_blog-1">
                        <h4 className="color">Bài viết gần đây</h4>
                        <Link className="title-blog-name color" to="">Top 100 Bài Hát</Link>
                        <Link className="title-blog-name color" to="">Top 100 Bài Hát</Link>
                        <Link className="title-blog-name color" to="">Top 100 Bài Hát</Link>
                    </div>
                    <div className="box_blog-2">
                        <h4 className="color"> Bình luận gần đây</h4>
                        <Link className="title-blog-name color"  to="">Top 100 Bài Hát</Link>
                        <Link className="title-blog-name color" to="">Top 100 Bài Hát</Link>
                        <Link className="title-blog-name color" to="">Top 100 Bài Hát</Link>
                    </div>
                 <PostNew />
               
                    <div className="box_blog-3">
                        <h4 className="color">Danh Mục</h4>
                        <Link className="title-blog-name color" to="">Top 100 Bài Hát</Link>
                        <Link className="title-blog-name color" to="">Top 100 Bài Hát </Link>
                        <Link className="title-blog-name color" to="">Top 100 Bài Hát </Link>
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

export default Blog
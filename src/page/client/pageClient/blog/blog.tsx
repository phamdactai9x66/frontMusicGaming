import React, { useEffect } from 'react'
import {Link} from "react-router-dom"
import { Pagination } from "@mui/material"
import { BiCircle, BiSearch, BiUpload, BiUserCircle } from 'react-icons/bi';
import ListBlog from './component/ListBlog';
import ListCategoryBlog from './component/listCategoryBlog';
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
                </div>
                <div className="blog-2">
                    <div className="search" >
                        <BiSearch className="icon"/>
                        <input placeholder="Search" type="text" />
                       
                    </div>
                  <ListCategoryBlog />
                    <div className="box-2">
                        <h4 className="color"> Bình luận gần đây</h4>
                        <Link className="title-blog-name color"  to="">Top 100 Bài Hát</Link>
                        <Link className="title-blog-name color" to="">Top 100 Bài Hát</Link>
                        <Link className="title-blog-name color" to="">Top 100 Bài Hát</Link>
                    </div>
                    <div className="box-3">
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










    )
}

export default Blog
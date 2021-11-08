import React, { useCallback, useEffect, useState } from 'react'
import { Link } from "react-router-dom"
import { ReactComponent as Right } from './right.svg'
import { ReactComponent as Left } from './left.svg'
import { BiCircle, BiSearch, BiUpload, BiUserCircle } from 'react-icons/bi';
import { Pagination } from '@mui/material'
import ListBlog from './component/ListBlog';
import ListCategoryBlog from './component/listCategoryBlog';
import PostNew from './component/PostNew';
import './blog.scss'
import { debounce } from '@material-ui/core';
import BlogApi from 'api/BlogApi';
import { ReactComponent as Lodding} from '../../loading/lodding.svg'
interface blog<T> {

}

const Blog: React.FC<blog<any>> = ({ ...props }) => {
    const [searchKeyword, setSearchKeyword] = useState('');
    const [searchRecommendResults, setSearchRecommendResults] = useState([]);

    const searchDebounced = useCallback<any>(debounce( async (value: any) => {
        const { data } = await BlogApi.getAll( {title: value} )
        setSearchRecommendResults(data)
    }, 3000), [])
    const handleSearch = (value: string) => {
        setSearchKeyword(value);
        searchDebounced(value);
    }

    console.log(searchRecommendResults)
    return (
        <>
           {/* <div className=" w-100 h-100 d-flex position-fixed top-0" style={{left:"0px",zIndex:10,backgroundColor:"rgb(0 0 0 / 33%)"}}>
               <div className="mx-auto my-auto" >
                    <Lodding style={{width:"2.8rem",height:"2.8rem"}}
                    className="mx-auto my-auto" 
                    /> 
               </div>
         
            </div> */}
        <div className="container-blog">
            <div className="title-blog grid-2">
                <div className="text-title-blog">
                    <h3 className="color-blog title_all" style={{fontSize:'1.3rem'}}>Danh Sách Blog</h3>
                </div>
                <div className="div-hr">
                    <hr />
                </div>
            </div>
            <div className="blog-main">
                <div className="flex-blog">
                    <ListBlog searchRecommendResults={searchRecommendResults} />
                </div>
                <div className="blog-2">
                    <div className="search" >
                        <BiSearch className="icon" />
                        <input placeholder="Search" onChange={(e) => handleSearch(e.target.value)} type="text" />

                    </div>
                    <ListCategoryBlog />
                    <div className="box-2">
                        <h4 className="color"> Bình luận gần đây</h4>
                        <Link className="title-blog-name color" to="">Top 100 Bài Hát ...</Link>
                        <Link className="title-blog-name color" to="">Top 100 Bài Hát ...</Link>
                        <Link className="title-blog-name color" to="">Top 100 Bài Hát ...</Link>
                    </div>
                    <PostNew />
                </div>

            </div>
            <div className="Pagination">
                <Pagination count={10} onClick={() => { console.log() }} style={{ padding: 10, paddingTop: 20, color: "#fff" }} />
            </div>
        </div>
        </>
    )
}

export default Blog


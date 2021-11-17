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
import blogApi from 'api/BlogApi';
import { current } from '@reduxjs/toolkit';


interface blog<T> {

}

const Blog: React.FC<blog<any>> = ({ ...props }) => {
    document.title = "Blogs - Music Game";
    const [searchKeyword, setSearchKeyword] = useState('');
    const [searchRecommendResults, setSearchRecommendResults] = useState([]);
    const [currentPage, setCurrenPage] = useState(1);
    const [count, setCount] = useState(0);
    const [blog, setBlog] = useState<Array<any>>([]);
    const [allBlogs, setAllBlogs] = useState([])

    const searchDebounced = useCallback<any>(debounce( async (value: any) => {
        const { data } = await blogApi.getAll( {title: value} )
        setSearchRecommendResults(data)
    }, 3000), [])
    const handleSearch = (value: string) => {
        setSearchKeyword(value);
        searchDebounced(value);
    }

    const panigationChange = (e: any, page: number) => { 
        const startBlog = 7 * (page - 1);
        const newAllBlogs = [...allBlogs];
        const showBlog = newAllBlogs.splice( startBlog, startBlog + 6)
        setCurrenPage(page);
        setBlog(showBlog);
    }

    useEffect(() => {
        const getBlog = async () => {
            const responseGetAll = await blogApi.getAll({});
            setAllBlogs(responseGetAll.data);

            const counts = Math.ceil(responseGetAll.data.length / 7);
            setCount(counts); 
            
            const newData = [...responseGetAll.data];
            setBlog(newData.splice(0, 7));
        }
        getBlog();
    }, []);
    
    return (
        <>
   
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
                    <ListBlog blog={blog} searchRecommendResults={searchRecommendResults} />
                </div>
                <div className="blog-2">
                    <div className="search" >
                        <BiSearch className="icon" />
                        <input placeholder="Search" onChange={(e) => handleSearch(e.target.value)} type="text" />

                    </div>
                    <ListCategoryBlog />
                    {/* <div className="box-2">
                        <h4 className="color"> Bình luận gần đây</h4>
                        <Link className="title-blog-name color" to="">Top 100 Bài Hát ...</Link>
                        <Link className="title-blog-name color" to="">Top 100 Bài Hát ...</Link>
                        <Link className="title-blog-name color" to="">Top 100 Bài Hát ...</Link>
                    </div> */}
                    <PostNew />
                </div>

            </div>
            <div className="Pagination">
                <Pagination count={count} page={currentPage} onChange={panigationChange} style={{ padding: 10, paddingTop: 20, color: "#fff" }} />
            </div>
        </div>
        </>
    )
}

export default Blog


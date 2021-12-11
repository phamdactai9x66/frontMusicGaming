import React, { useCallback, useEffect, useState } from 'react'
// import { ReactComponent as Right } from './right.svg'
// import { ReactComponent as Left } from './left.svg'
import { BiSearch } from 'react-icons/bi';
import { Pagination } from '@mui/material'
import ListBlog from './component/ListBlog';
import ListCategoryBlog from './component/listCategoryBlog';
import PostNew from './component/PostNew';
import './blog.scss'
import { debounce } from '@material-ui/core';
import blogApi from 'api/BlogApi';
import { RouteComponentProps } from 'react-router-dom';
import Loadings from 'page/client/loading/loading';
import { getDate } from 'component/MethodCommon'

// import { current } from '@reduxjs/toolkit';


interface blog<T> extends RouteComponentProps {

}
interface CategoryBlogIF {
    _id: string,
    name: string,
}

const Blog: React.FC<blog<any>> = ({ match, ...props }) => {
    document.title = "Blogs - Music Game";
    const [searchKeyword, setSearchKeyword] = useState('');
    // const [searchRecommendResults, setSearchRecommendResults] = useState([]);
    const [currentPage, setCurrenPage] = useState(1);
    const [count, setCount] = useState(0);
    const [blog, setBlog] = useState<any>({
        loading: true,
        data: []
    });
    const [allBlogs, setAllBlogs] = useState([]);
    const [category, setCategory] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    const searchDebounced = useCallback<any>(debounce(async (value: any) => {
        const { data } = await blogApi.getAll({ title: value });
        const newData = data;
        setCount(Math.ceil(data.length / 7));
        setAllBlogs(data);
        setBlog({
            loading: false,
            data: newData.splice(0, 7),
        });
        // setSearchRecommendResults(data);
    }, 100), [])
    const handleSearch = (value: string) => {
        setSearchKeyword(value);
        searchDebounced(value);
    }

    const panigationChange = (e: any, page: number) => {
        const startBlog = 7 * (page - 1);
        const newAllBlogs = [...allBlogs];
        const showBlog = newAllBlogs.splice(startBlog, startBlog + 6)
        // console.log(allBlogs)
        setCurrenPage(page);
        setBlog({
            loading: false,
            data: showBlog,
        });
    }

    useEffect(() => {
        const getBlog = async () => {

            const { data } = await blogApi.getAll({});
            setAllBlogs(data);

            const counts = Math.ceil(data.length / 7);
            setCount(counts);

            const newData = data;
            setBlog({
                loading: false,
                data: newData.splice(0, 7),
            });
            setLoading(false);
        }
        getBlog();
    }, []);

    useEffect(() => {
        if (category) {
            (async () => {
                const { data } = await blogApi.getAll({ id_CategoryBlog: category._id });
                setAllBlogs(data);

                const counts = Math.ceil(data.length / 7);
                setCount(counts);

                const newData = data;
                setBlog({
                    loading: false,
                    data: newData.splice(0, 7),
                });
            })()
        }
    }, [category]);

    const handleCategory = (item: CategoryBlogIF) => {
        setCategory(item);
        setBlog({
            loading: true,
            data: [],
        });
    }

    return (
        <>
            {loading && <Loadings />}
            <div className="container-blog">
                <div className="title-blog grid-2">
                    <div className="text-title-blog">
                        <h4 className="color-blog title_all" >{category ? category.name : "Danh Sách Blog"}</h4>
                    </div>
                    <div className="div-hr">
                        <hr />
                    </div>
                </div>
                <div className="blog-main">
                    <div className="flex-blog">
                        <ListBlog blog={blog} />
                        {/* <ListBlog blog={blog} searchRecommendResults={searchRecommendResults} /> */}
                    </div>
                    <div className="blog-2">
                        <div className="search" >
                            <BiSearch className="icon" />
                            <input placeholder="Tìm kiếm Blogs" onKeyUp={(e: any) => {
                                if (e.keyCode === 13) {
                                    handleSearch(e.target?.value)
                                }
                            }} type="text" />

                        </div>
                        <ListCategoryBlog handleCategory={handleCategory} />
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


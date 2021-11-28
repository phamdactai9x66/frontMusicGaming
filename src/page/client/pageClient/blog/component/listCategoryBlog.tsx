import categoryBlogApi from 'api/categoryBlogApi';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

interface ListCategoryBlogComponent<T> {
    handleCategory: any | T,
}
const ListCategoryBlog: React.FC<ListCategoryBlogComponent<any>> = ({ handleCategory }) => {
    const [categoryBlogs, setCategoryBlogs] = useState([]);

    useEffect( () => {
        const getBlog = async () => {
            const { data } = await categoryBlogApi.getAll( {_limit: 4} );
            setCategoryBlogs(data);
        }
        getBlog();
    }, []);


    return (
        <>
         <div className="box-1"> 
            <h4 className="color">Danh Mục Blog</h4>
            {/* { categoryBlogs.length === 0 ? <span>Không có danh mục nào</span> : categoryBlogs.map( (item: any) => <span className="title-blog-name color" key={item._id} >{item.name}</span>)} */}
            { categoryBlogs.length === 0 ? <span>Không có danh mục nào</span> : categoryBlogs.map( (item: any) => <span onClick={() => handleCategory(item)} className="title-blog-name color" key={item._id} >{item.name}</span>)}
            {/* {categoryBlogs.map( (item: any) => <Link className="title-blog-name color" key={item._id} to="">{item.name}</Link>) }  */}
        </div> 
        </>
    
    )
}

export default ListCategoryBlog

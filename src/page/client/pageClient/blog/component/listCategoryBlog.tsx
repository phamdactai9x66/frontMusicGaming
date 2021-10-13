import categoryBlogApi from 'api/categoryBlogApi';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

interface ListCategoryBlogComponent<T> {

}
const ListCategoryBlog: React.FC<ListCategoryBlogComponent<any>> = () => {
    const [blos, setBlogs] = useState([]);

    useEffect( () => {
        const getBlog = async () => {
            const { data } = await categoryBlogApi.getAll( {_limit: 4} );
            setBlogs(data);
        }
        getBlog();
    }, []);


    return (
        <>
         <div className="box-1"> 
            <h4 className="color">Danh Mục Blog</h4>
            { blos.map((item:any ,index)=>{
                return(
                    <> 
                    <Link className="title-blog-name color" key={index} to="">{item.name}</Link>
                    </>
                )
            })} 
        </div> 
        </>
    
    )
}

export default ListCategoryBlog

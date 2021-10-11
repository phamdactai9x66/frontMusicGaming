import blogApi from 'api/BlogApi';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

interface ListBlogComponent<T> {

}
const ListBlog: React.FC<ListBlogComponent<any>> = () => {
    const [blos, setBlogs] = useState([]);

    useEffect( () => {
        const getBlog = async () => {
            const { data } = await blogApi.getAll( {_limit: 4} );
            setBlogs(data);
        }
        getBlog();
    }, []);


    return (
        <>
        {
            blos.map((item:any ,index)=>{
                return(
                    <div className="box " key={index}>
                        <div className="blog-image">
                            <h4  className="color text-blog-none">{item.title}</h4>
                            <Link to="/blogDetail">
                            <img src={item.image} alt="image blog" />
                            </Link>
                        </div>
                        <div className="title-blog">
                            <h4  className="color">{item.title}</h4>
                            <p className="color desc">{item.content}</p>
                            <p  className="color day">{item.createdAt}</p>
                        </div>   
                    </div>
                )
            })
        }
        
      
        </>
    
    )
}

export default ListBlog

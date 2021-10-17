import blogApi from 'api/BlogApi';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

interface ListBlogComponent<T> {

}
const ListBlog: React.FC<ListBlogComponent<any>> = () => {
    const [blog, setBlogs] = useState([]);

    useEffect( () => {
        const getBlog = async () => {
            const { data } = await blogApi.getAll( {_limit:5} );
            setBlogs(data);
        }
        getBlog();
    }, []);
///

    return (
        <>
        {
            blog.map((item:any ,index)=>{
                return(
                    <div className="box_blog " key={index}>
                        <div className="blog-image">
                            <h4  className="color text-blog-none">{item.title}</h4>
                            <Link to="/blogDetail">
                            <img src={item.image} alt="image blog" />
                            </Link>
                        </div>
                        <div className="title-blog">
                            <h4  className="color">{item.title}</h4>
                            <p  className="color day">
                                <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="clock" className="svg-inline--fa fa-clock fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z"></path></svg>
                                {item.createdAt}
                                </p>
                            <p className="color desc">{item.content}</p>
                          
                        </div>   
                    </div>
                )
            })
        }
        
      
        </>
    
    )
}

export default ListBlog

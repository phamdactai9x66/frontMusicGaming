import blogApi from 'api/BlogApi';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getDate } from 'component/MethodCommon';

interface postNewComponent<T> {

}
const PostNew: React.FC<postNewComponent<any>> = () => {
    const [blos, setBlogs] = useState([]);

    useEffect( () => {
        const getBlog = async () => {
            const { data } = await blogApi.getAll( {_limit: 4} );
            const newData = data;
            setBlogs(newData);
        }
        getBlog();
    }, []);


    return (
            <div className="box-3">
                <h4 className="color">Bài Viết Mới Nhất</h4>
                {
                    blos.map((item:any ,index)=>{
                        return(
                            <>
                                <Link className="title-blog-name color" to={`blogDetail/${item?._id}`} key={index}>{item.title}</Link>
                            </>
                            )
                        })
                 }
         </div>
      
        
    
    )
}

export default PostNew

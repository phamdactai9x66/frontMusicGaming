import React, { useState, useEffect } from 'react'
import { Pagination } from "@mui/material"
import BlogApi from "api/BlogApi";
import { HandleGet } from "component/MethodCommon";
import { RouteComponentProps, withRouter } from "react-router-dom";
interface RelatedBlog<T> extends RouteComponentProps {
    id_CategoryBlog: string
}

const RelatedBlog: React.FC<RelatedBlog<any>> = ({ id_CategoryBlog, history, ...props }) => {
    const [blogs, setBlogs] = useState({ display: true, data: [] });

    useEffect(() => {
        if (!blogs.display) return;
        (async () => {
            const [data, error] = await HandleGet(BlogApi.getAll, { id_CategoryBlog })
            if (error) return setBlogs(value => ({ ...value, display: false }));
            setBlogs({ data: data?.data, display: true })
        })()
        return () => {
            setBlogs(value => ({ ...value, display: false }));
        }
    }, [])
    const moveNextBlog = (_idSong: string) => {
        // console.log(_idSong)
        if (!_idSong) return;
        history.push(`/blogDetail/${_idSong}`)
    }
    const listBlog = () => {

        return (
            <div className="grid-4-bloglienquan">
                {
                    blogs.data?.map((current: any, index: number) => {
                        const { image, title, _id } = current
                        return (
                            <div className="box-grid-lienquan" key={index} onClick={() => {
                                moveNextBlog(_id)
                            }}>
                                <img src={image} alt="" />
                                <p>{title}</p>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
    return (
        <>
            <div className="blog-lien-quan">
                <div className="title-blog-lienquan">
                    <hr />
                    <div>
                        <h4>Blog liên quan</h4>
                    </div>
                    <hr />
                </div>
                {listBlog()}
            </div>
            <div className="Pagination">
                <Pagination count={10} onClick={() => { console.log() }} style={{ padding: 10, paddingTop: 20, color: "#fff" }} />
            </div>
        </>
    )
}

export default withRouter(RelatedBlog)

import React, { useState, useEffect, useReducer } from 'react'
import { Pagination } from "@mui/material"
import BlogApi from "api/BlogApi";
import { HandleGet, handleReducer, initialReducer2, typeAciton, pustAction } from "component/MethodCommon";
import { RouteComponentProps, withRouter } from "react-router-dom";
interface RelatedBlog<T> extends RouteComponentProps {
    id_CategoryBlog: string
}

const RelatedBlog: React.FC<RelatedBlog<any>> = ({ id_CategoryBlog, history, ...props }) => {
    const [blogs, setBlogs] = useState({ display: true, data: [] });
    const [state, dispatch] = useReducer(handleReducer, initialReducer2);
    const countPage = Math.ceil(state.DataStatic.length / state.Pagination._limit);

    useEffect(() => {
        if (!blogs.display) return;
        (async () => {
            const query = {
                id_CategoryBlog,
                ...state.Filter
            }
            const [data, error] = await HandleGet(BlogApi.getAll, query)
            const getAll = await BlogApi.getAll<object>({})
            if (error) return setBlogs(value => ({ ...value, display: false }));
            dispatch(pustAction(typeAciton.getData, { Data: data.data, dataStatic: getAll.data }))
            setBlogs({ data: data?.data, display: true })
        })()
        return () => {
            setBlogs(value => ({ ...value, display: false }));
        }
    }, [state.Filter])
    const moveNextBlog = (_idSong: string) => {
        if (!_idSong) return;
        history.push(`/blogDetail/${_idSong}`)
    }
    const movePage = (e: Event | any, newPage: number) => {
        if (newPage === state.Filter._page) return
        dispatch(pustAction(typeAciton.movePage, { nextPage: newPage }))
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
                <Pagination count={countPage} onChange={movePage} style={{ padding: 10, paddingTop: 20, color: "#fff" }} />
            </div>
        </>
    )
}

export default withRouter(RelatedBlog)

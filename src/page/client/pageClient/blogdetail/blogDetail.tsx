import React, { useEffect, useRef, useState } from 'react'
import { RouteComponentProps } from 'react-router-dom'
import BlogApi from "api/BlogApi"
import { variableCommon } from "component/variableCommon";
import { getDate } from "component/MethodCommon";
import DetailBlog from "./component/detailBlog";
import Comment from "./component/comment"
import AddComment from "./component/addComment";
import RelatedBlog from "./component/relatedBlog";
import Loadings from "./../../loading/loading";

interface blogDetail<T> extends RouteComponentProps {

}

const BlogDetail: React.FC<blogDetail<any>> = ({ match, history, ...props }) => {
    const saveId = useRef<string>('');
    const [loading, setLoading] = useState(true);
    
    const [blog, setBlog] = useState<{ display: boolean, data: any }>({ display: true, data: {} });
    useEffect(() => {
        const getId = (match.params as any)?.idBlog;
        if (!getId) return history.goBack();
        saveId.current = getId;

    }, [(match.params as any)?.idBlog])

    useEffect(() => {
        (async () => {
            const query = {
                _id: saveId.current
            }
            const { data, status } = await BlogApi.getAll<object>(query)
            if (status === variableCommon.statusF) return history.goBack()
            setBlog({ display: true, data: { ...data[0] } })
            document.title = `${data[0]?.title} - Music Game`;
            setLoading(false);
        })()
        return () => {
            setBlog(value => ({ ...value, display: false }));
            setLoading(false);
        }
    }, [(match.params as any)?.idBlog])

    // console.log(saveId)

    return (
        <div className="container-blogdetail-blog">
            {loading && <Loadings/> }
            <div className="blogdetail-title-grid">
                <div className="title-h4">
                    <h4 className="title_all">{blog.data?.title}</h4>
                </div>
                <div className="hr">
                    <hr className="" />
                </div>
            </div>
            <div className="detail-banner-blog">
                <img className="img" src={blog.data?.image} alt="" />
            </div>
            <div className="desc-blogdetail">
                <div className="desc-blogdetail-link">
                    <h5 className="title_all">{blog.data?.title}</h5>
                    <p>{getDate(blog.data?.createdAt)}</p>
                </div>
                <div className="text-detail">
                    <p>{blog.data?.content}</p>
                    <DetailBlog id_Blog={blog.data?._id} />
                    {
                        blog.data?.link_Video && <div className="blogdetail-video">
                            <iframe style={{ width: "100%" }} height={411} src={blog.data?.link_Video} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        </div>
                    }
                </div>
                <div className="hr2">
                    <hr />
                </div>
                {blog.display ? (blog.data?._id && <Comment id_Blog={blog.data?._id} />) : null}


                <AddComment idBlog={saveId.current} />
            </div>
            {blog.data.id_CategoryBlog && <RelatedBlog id_CategoryBlog={blog.data.id_CategoryBlog} />}
        </div>


    )
}

export default BlogDetail
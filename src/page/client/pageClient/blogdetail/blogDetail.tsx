import React, { useEffect, useRef, useState } from 'react'
import { ReactComponent as Sao1 } from './sao1.svg'
import { ReactComponent as Sao2 } from './sao.svg'
import { Pagination } from "@mui/material"
import { RouteComponentProps } from 'react-router-dom'
import BlogApi from "api/BlogApi"
import { variableCommon } from "component/variableCommon";
import { getDate } from "component/MethodCommon";
import DetailBlog from "./component/detailBlog";

interface blogDetail<T> extends RouteComponentProps {

}

const BlogDetail: React.FC<blogDetail<any>> = ({ match, history, ...props }) => {
    const saveId = useRef<string>('');
    const [blog, setBlog] = useState<{ display: boolean, data: any }>({ display: true, data: {} });
    useEffect(() => {
        const getId = (match.params as any)?.idBlog;
        if (!getId) return history.goBack();
        saveId.current = getId;

    }, [])

    useEffect(() => {
        (async () => {
            if (!blog.display) return
            const query = {
                _id: saveId.current
            }
            const { data, status } = await BlogApi.getAll<object>(query)
            if (status === variableCommon.statusF) return history.goBack()
            setBlog({ display: true, data: { ...data[0] } })

        })()
        return () => {
            setBlog(value => ({ ...value, display: false }));
        }
    }, [])
    return (
        <div className="container-blogdetail-blog">
            <div className="blogdetail-title-grid">
                <div className="title-h4">
                    <h2 className="title_all">{blog.data?.title}</h2>
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
                    <h3 className="title_all">{blog.data?.title}</h3>
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
                <div className="comment">
                    <div className="grid-3-cmt-detail">
                        <div className="img-user">
                            <img src="https://lms.yamaha-motor.com.vn/root/update/images/avatar-default.png" alt="" />
                        </div>
                        <div className="desc-user-cmt">
                            <h5>Nguyễn văn a</h5>
                            <p className="p-user">Đánh giá :  <span><Sao1 className="sao1" /><Sao1 className="sao1" /><Sao1 className="sao1" /><Sao1 className="sao1" /><Sao2 className="sao2" /></span></p>
                            <div className="flex-desc-cmt">
                                <p className="p1">9:24</p>
                                <p className="p2">EDM COMPILATION VOLUME 6 BANNER DATES-1 Only the Best MusicEDM COMPILATION </p>
                            </div>
                        </div>
                        <div className="button-repply-detail">
                            <button>repply</button>
                        </div>
                    </div>
                    <div className="grid-3-cmt-detail">
                        <div className="img-user">
                            <img src="https://lms.yamaha-motor.com.vn/root/update/images/avatar-default.png" alt="" />
                        </div>
                        <div className="desc-user-cmt">
                            <h5>Nguyễn văn a</h5>
                            <p className="p-user">Đánh giá : <span><Sao1 className="sao1" /><Sao1 className="sao1" /><Sao1 className="sao1" /><Sao1 className="sao1" /><Sao2 className="sao2" /></span></p>
                            <div className="flex-desc-cmt">
                                <p className="p1">9:24</p>
                                <p className="p2">EDM COMPILATION VOLUME 6 BANNER DATES-1 Only the Best MusicEDM COMPILATION </p>
                            </div>
                        </div>
                        <div className="button-repply-detail">
                            <button>repply</button>
                        </div>
                    </div>

                </div>
                <div className="desc-comment">
                    <div className="danhgia">
                        <h5>Đánh giá</h5>
                        <span><Sao2 className="sao2" /><Sao2 className="sao2" /><Sao2 className="sao2" /><Sao2 className="sao2" /><Sao2 className="sao2" /></span>
                    </div>
                    <form action="" className="form">
                        <textarea name="" id="" cols={30} rows={10} placeholder="Message"></textarea>
                        <button>Post comment</button>
                    </form>
                </div>
                <div className="blog-lien-quan">
                    <div className="title-blog-lienquan">
                        <hr />
                        <div>
                            <h4>Blog liên quan</h4>
                        </div>
                        <hr />
                    </div>
                    <div className="grid-4-bloglienquan">
                        <div className="box-grid-lienquan">
                            <img src="https://thumbs.dreamstime.com/b/edm-club-music-party-template-dance-party-flyer-brochure-night-party-club-sound-banner-poster-72485529.jpg" alt="" />
                            <p>EDM COMPILATION VOLUME 6 BANNER DATES-1 Only the Best MusicEDM COMPILATION </p>
                        </div>
                        <div className="box-grid-lienquan">
                            <img src="https://thumbs.dreamstime.com/b/edm-club-music-party-template-dance-party-flyer-brochure-night-party-club-sound-banner-poster-72485529.jpg" alt="" />
                            <p>EDM COMPILATION VOLUME 6 BANNER DATES-1 Only the Best MusicEDM COMPILATION </p>
                        </div>
                        <div className="box-grid-lienquan">
                            <img src="https://thumbs.dreamstime.com/b/edm-club-music-party-template-dance-party-flyer-brochure-night-party-club-sound-banner-poster-72485529.jpg" alt="" />
                            <p>EDM COMPILATION VOLUME 6 BANNER DATES-1 Only the Best MusicEDM COMPILATION </p>
                        </div>
                        <div className="box-grid-lienquan">
                            <img src="https://thumbs.dreamstime.com/b/edm-club-music-party-template-dance-party-flyer-brochure-night-party-club-sound-banner-poster-72485529.jpg" alt="" />
                            <p>EDM COMPILATION VOLUME 6 BANNER DATES-1 Only the Best MusicEDM COMPILATION </p>
                        </div>

                    </div>
                </div>
                <div className="Pagination">
                    <Pagination count={10} onClick={() => { console.log() }} style={{ padding: 10, paddingTop: 20, color: "#fff" }} />
                </div>
            </div>
        </div>


    )
}

export default BlogDetail
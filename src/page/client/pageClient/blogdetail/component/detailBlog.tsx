import React, { useState, useEffect } from 'react'
import blogDetailApi from "api/blogDetailApi";
import { HandleGet } from "component/MethodCommon";
import { variableCommon } from "component/variableCommon";

interface DetailBlog<T> {
    id_Blog: string
}

const DetailBlog: React.FC<DetailBlog<any>> = ({ id_Blog, ...props }) => {
    const [detailBlog, setdetailBlog] = useState({ display: true, data: [] });

    useEffect(() => {
        (async () => {
            if (!detailBlog.display) return
            const [data, error] = await HandleGet(blogDetailApi.getAll, { id_Blog })
            if (data.status === variableCommon.statusF || error) return;
            setdetailBlog({ display: true, data: data?.data })
        })()
        return () => {
            setdetailBlog(value => ({ ...value, display: false }))
        }
    }, [])
    return (
        <>
            {
                detailBlog.data.map((current: any, index: number) => {
                    const { image, title, content } = current;
                    return (
                        <>
                            <div>
                                <p style={{ margin: '20px 0 0 0' }}>{title}</p>
                                <div className="grid-2-blogDetail" key={index}>
                                    <div className="image-detail">
                                        <img className="img2" src={image} alt="" />
                                    </div>
                                    <div className="text-blogdetail">
                                        <p>{content}</p>
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                })
            }

        </>
    )
}

export default DetailBlog

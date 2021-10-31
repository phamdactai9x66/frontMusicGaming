import React, { useEffect, useState } from 'react'
import CommentApi from "api/commentApi"
import UseApi from "api/useApi";
import { tranFormDataId, getDate } from "component/MethodCommon";
import { Rating, Avatar } from "@mui/material";
interface Comment<T> {
    id_Blog: string
}

const Comment: React.FC<Comment<any>> = ({ id_Blog, ...props }) => {
    const [comment, setcomment] = useState({ display: true, data: [] });
    const [staticUser, setstaticUser] = useState<any>({});
    useEffect(() => {
        (async () => {
            if (!comment.display) return
            const query = {
                id_Blog
            }
            const { data } = await CommentApi.getAll(query);
            const getAllUser = await UseApi.getAll({});
            setcomment({ display: true, data })
            setstaticUser(tranFormDataId(getAllUser?.data))
        })()
        return () => {
            setcomment(value => ({ ...value, display: false }));
        }
    }, [])
    return (
        <>
            <div className="comment">
                {comment.data.map((current: any, key: number) => {
                    const user: any = staticUser[current.id_User]
                    const { rangeStart, createdAt, comment } = current
                    return (
                        <div className="grid-3-cmt-detail" key={key}>
                            <div className="img-user">
                                <Avatar src={user?.avatar} sizes="small" />
                            </div>
                            <div className="desc-user-cmt">
                                <h5>{`${user?.first_name} ${user?.last_name}`}</h5>
                                <p className="p-user">Đánh giá :  <Rating name="disabled" value={rangeStart} readOnly size="small" /></p>
                                <div className="flex-desc-cmt">
                                    <p className="p1">{getDate(createdAt)}</p>
                                    <p className="p2">{comment}
                                    </p>
                                </div>
                            </div>
                        </div>
                    )
                })}

            </div>
        </>
    )
}

export default Comment

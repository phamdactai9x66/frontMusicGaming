import React, { useState } from 'react'
import { Rating } from "@mui/material";
import { Formik, Form, FormikHelpers } from "formik";
import * as Yup from "yup";
import commentApi from "api/commentApi";
import { useSelector } from "react-redux";
import { formStateUser } from 'redux/user/stateUser';
import { variableCommon } from "component/variableCommon"
import dataStorage from "component/dataStorage";
const validateFOrm = Yup.object().shape({
    comment: Yup.string().required()
})
interface AddCommentIF<T> {
    idBlog: string

}
const fieldForm = {
    comment: ''
}

const AddComment: React.FC<AddCommentIF<any>> = ({ idBlog, ...props }) => {
    const [selectRating, setselectRating] = useState(5);
    const { user, token } = useSelector<{ user: any }>(state => state.user) as formStateUser;
    const chooseStar = (event: Event | any, star: number | any) => {
        setselectRating(star);
    }
    const submitForm = (values: any, Formikhelper: FormikHelpers<any>) => {
        if (!user || !token) return;
        (async () => {
            const data = {
                title: '',
                rangeStart: selectRating,
                comment: values.comment,
                state: true,
                id_User: user?._id,
                id_Blog: idBlog,
            }
            const pustComment = await commentApi.postOne<object>(data);
            if (pustComment.status !== variableCommon.statusF) {
                dataStorage.renderComment && (dataStorage as any).renderComment()
                return Formikhelper.resetForm();
            }
            console.log(console.log("you could not add new comment."))
        })()
    }
    return (
        <>
            <div className="desc-comment">
                <div className="danhgia">
                    <h5>Đánh giá</h5>
                    <span><Rating value={selectRating} onChange={chooseStar} /></span>
                </div>
                <Formik
                    initialValues={fieldForm}
                    onSubmit={submitForm}
                    validateOnBlur={false}
                    validateOnChange={false}
                    validationSchema={validateFOrm}
                >
                    {(formik) => {
                        return (
                            <Form className="form">
                                <textarea id="" cols={30} rows={10} placeholder="Message"
                                    {...formik.getFieldProps("comment")}
                                ></textarea>
                                <button>Gửi bình luận</button>
                            </Form>
                        )
                    }}
                </Formik>
            </div>
        </>
    )
}


export default AddComment

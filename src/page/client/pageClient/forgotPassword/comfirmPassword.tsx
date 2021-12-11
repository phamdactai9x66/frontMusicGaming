import React, { useState } from 'react'
import { Alert } from "@mui/material"
import { useParams, Link } from "react-router-dom";
import { LoadingButton } from "@mui/lab"
import { InputText } from 'component/customField/index'
import { Formik, Form } from 'formik';
import SchemaConfirmPassWord from './component/schemaConfirmPassWord';
import userApi from 'api/useApi';
import { variableCommon } from 'component/variableCommon';
import { TextField} from '@mui/material';

interface ForgotPasswordIF<T> {

}
const initialValue = {
    passWord: '',
    confirmPassWord: ''
}
const ComfirmPassword: React.FC<ForgotPasswordIF<any>> = ({ ...props }) => {
    document.title = "Nhập mật khẩu mới - Music Game";
    const [alert, setAlert] = useState({ display: false, message: "", type: "" });
    const {idUser, hash} = useParams<{idUser:string,hash:string}>();

    const submitForm = (data: any) => {
        // console.log(data)
        // console.log(idUser)
        // console.log(hash)
        setTimeout(async () => {
            const resetPassWord = await userApi.resetPassWord(idUser, hash, data);
            if (resetPassWord.status !== variableCommon.statusF) {
                setAlert(value => (
                    {
                        ...value,
                        display: true,
                        message: resetPassWord.message,
                        type: 'success'
                    }
                ))
            } else {
                setAlert(value => (
                    {
                        ...value,
                        display: true,
                        message: resetPassWord.message,
                        type: 'error'
                    }
                ))
            }
            }, 1000)
        }

    return (
        <>
            <div className="forgotPassword">
                <div className="main_forgots">
                    <h2>Xác nhận</h2>
                    <p>hãy nhập mật khẩu của bạn</p>
                    {alert.display && <Alert severity={alert.type as any} style={{ marginBottom: 5 }}>
                    {alert.message}
                </Alert>}
                    <Formik
                        initialValues={initialValue}
                        onSubmit={submitForm}
                        validationSchema={SchemaConfirmPassWord}
                        validateOnChange={false}
                    >
                        {formik => {
                            return (
                                <Form>
                                    <TextField label="Mật khẩu mới" variant="filled" type="password" name="passWord" className="input_forgotPass" />
                                    <br />
                                    <TextField label="Xác nhận mật khẩu" variant="filled" type="password" name="confirmPassWord" className="input_forgotPass" />
                                    <br />
                                    <LoadingButton style={{ padding: "0.5rem 3rem", marginBottom: "1rem" }} loading={formik.isSubmitting}
                                        variant="contained" color="secondary" type="submit">
                                        Đặt lại mật khẩu
                                    </LoadingButton>
                                </Form>
                            )
                        }}
                    </Formik>
                </div>
            </div>
        </>
    )
}

export default ComfirmPassword
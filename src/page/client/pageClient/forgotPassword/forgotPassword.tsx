import React, {useState} from 'react'
import { LoadingButton } from "@mui/lab"
import { InputText } from 'component/customField/index'
import { Formik, Form } from 'formik';
import userApi from 'api/useApi';
import SchemaForgotPassword from './component/schemaForgotPassword'
import { variableCommon } from 'component/variableCommon';
import { Alert } from "@mui/material"

interface ForgotPasswordIF<T> {

}
const initialValue = {
    email: ''
}
const ForgotPassword: React.FC<ForgotPasswordIF<any>> = ({ ...props }) => {
    document.title = "Quên mật khẩu - Music Game";
    const [alert, setAlert] = useState({ display: false, message: "", type: "" });

    const submitForm = (data: any) => {
        setTimeout(async () => {
            const resetPassWord = await userApi.forgotPassWord(data);
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
                <div className="main_forgot">
                <h2>Quên mật khẩu</h2>
                <p>Hãy nhập email cần lấy lại mật khẩu<br/>Chúng tôi sẽ gửi mail xác nhận kèm đường dẫn lấy lại mật khẩu cho bạn</p>
                {alert.display && <Alert severity={alert.type as any} style={{ marginBottom: 5 }}>
                    {alert.message}
                </Alert>}
                <Formik
                        initialValues={initialValue}
                        onSubmit={submitForm}
                        validationSchema={SchemaForgotPassword}
                        validateOnChange={false}
                    >
                        {formik => {
                            return (
                                <Form>
                                    <InputText name="email" type="email" label="Nhập email của bạn" />
                                    <br /><br />
                                    <LoadingButton style={{ padding: "0.5rem 3rem", marginBottom: "1rem" }} loading={formik.isSubmitting}
                                        variant="contained" color="secondary" type="submit">
                                        Xác nhận
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

export default ForgotPassword

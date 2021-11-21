import React from 'react'
import { Button } from '@mui/material'
interface ForgotPassword<T> {

}

const ForgotPassword: React.FC<ForgotPassword<any>> = ({ ...props }) => {
    document.title = "Quên mật khẩu - Music Game";
    return (
        <>
            <div className="forgotPassword">
                <div className="main_forgot">
                <h2>Quên mật khẩu</h2>
                <p>Hãy nhập email cần lấy lại mật khẩu<br/>Chúng tôi sẽ gửi mail xác nhận kèm đường dẫn lấy lại mật khẩu cho bạn</p>
              <form action="">
                 <input placeholder="Nhập email" type="email"/>
                 <p className="err">Vui lòng nhập</p>
                 <Button className="btn-forgot">Gửi mail xác nhận</Button>
              </form>
                </div>
            </div>
        </>
    )
}

export default ForgotPassword

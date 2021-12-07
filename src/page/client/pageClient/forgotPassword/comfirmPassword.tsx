import React from 'react'
import { Button } from '@mui/material'
interface ForgotPasswordIF<T> {

}

const ComfirmPassword: React.FC<ForgotPasswordIF<any>> = ({ ...props }) => {
    document.title = "Quên mật khẩu - Music Game";
    return (
        <>
            <div className="forgotPassword">
                <div className="main_forgots">
                <h2>Xác nhận</h2>
                <p>hãy nhập mật khẩu của bạn</p>
              <form action="">
                 <input placeholder="Mật khẩu mới" type="password" required/>
                 <p className="err">Vui lòng nhập</p>
                 <input placeholder="Mật khẩu mới" type="password" required/>
                 <p className="err">Vui lòng nhập</p>
                 <input placeholder="Nhập mã xác thực" type="text" required/>
                 <p className="err">Vui lòng nhập</p>
                 <Button className="btn-forgot"> Xác nhận</Button>
              </form>
                </div>
            </div>
        </>
    )
}

export default ComfirmPassword
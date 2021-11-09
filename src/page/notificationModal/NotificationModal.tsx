import React from 'react'
import avatar from './anc.png'
interface notification<T> {

}

const Notification: React.FC<notification<any>> = ({ ...props }) => {
    return (
        <div className=" w-100 h-100 d-flex position-fixed top-0  text-center" style={{left:"0px",zIndex:10,backgroundColor:"rgb(0 0 0 / 25%)"}}>
        <div className="my-auto mx-auto p-4 rounded-3" style={{backgroundColor:"#9cf6ff"}}>
            <img 
            className="w-25 h-25"
            src={avatar} alt="" />
            <p style={{fontWeight:500}} className="mb-0">Hãy đăng nhập để có thể sử dụng tính năng này</p>
            <p>Tính năng này chỉ dành cho người dùng đã có tài khoản Music Game</p>
            <div className="d-flex justify-content-center">
            <div className="" style={{marginRight:"0.2rem"}}>
                  <button type="button" className="btn btn-light">Đăng kí</button>
              </div>
              <div>
              <button type="button" className="btn btn-primary"  style={{marginLeft:"0.2rem"}}>Đăng nhập</button>
              </div>
            </div>
        </div>

    </div>
    )
}

export default Notification

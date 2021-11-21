import React from 'react'
import './style.scss'
interface profile<T> {
}
const Profile: React.FC<profile<any>> = () => {
    return (
        <div className="profile-grid">
            <div className="profile-box1 p-4">
                <div className="img-centert">
                    <img style={{border:"3px solid #ff6f53e0"}} className="w-50 mx-auto d-flex p-1" src="https://phunugioi.com/wp-content/uploads/2020/01/anh-avatar-supreme-dep-lam-dai-dien-facebook.jpg" alt="" />
                </div>
                <div className="">
                    <h5 className="color-profile  mt-3 text-center border-bottom pb-3">
                        Hoàng Anh Tú
                    </h5>
                </div>
            </div>
            <div className="profile-box2 p-4">
                <h6 className="color-profile border-bottom pb-2">Thông tin tài khoản</h6>
                <p className="color-profile hover-text mt-3" >Tên tài khoản : <span>nam</span></p>

                <p className="color-profile hover-text">Giới tính :  <span>nam</span></p>

                <p className="color-profile hover-text">Địa chỉ : <span> phú mỹ - phù ninh - phú thọ</span></p>
                <p className="color-profile hover-text">Facebook : <span>bla bla</span></p>
                <p className="color-profile hover-text">Google : <span>bla bla</span></p>
                <p className="color-profile hover-text">các thiing tin khác sẽ thêm vào đây <span>bla bla</span></p>

            </div>

    </div>
    )
}

export default Profile

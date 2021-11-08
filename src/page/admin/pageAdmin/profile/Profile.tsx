import React from 'react'
interface profile<T> {
}
const Profile: React.FC<profile<any>> = () => {
    return (
        <div className="profile-grid">
        <div className="profile-box1">
            <div className="img-centert">
                <img src="https://phunugioi.com/wp-content/uploads/2020/01/anh-avatar-supreme-dep-lam-dai-dien-facebook.jpg" alt="" />
            </div>
            <div className="">
                <h5>
                    Hoàng Anh Tú
                </h5>
            </div>
        </div>
        <div className="profile-box2">
            <p>Tên tài khoản : <span>nam</span></p>

            <p>Giới tính :  <span>nam</span></p>

            <p>Địa chỉ : <span> phú mỹ - phù ninh - phú thọ</span></p>
            <p>Facebook : <span>bla bla</span></p>
            <p>Google : <span>bla bla</span></p>

        </div>

    </div>
    )
}

export default Profile

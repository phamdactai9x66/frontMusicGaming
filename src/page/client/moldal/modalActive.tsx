import React from 'react'

const ModalActive = () => {
    return (
        <>
            <div className="position-fixed d-flex top-0 text-cente w-100 h-100 " style={{left:'0px',zIndex:10,background:"rgba(0, 0, 0, 0.25)"}} >
              <div className="border rounded shadow-lg mx-auto my-auto"  style={{background:"#94e6ff"}}>
                <div className=" m-4" >
                  <div className="d-flex justify-content-between">
                    <div><img className="border shadow-lg" width="30" height="30" style={{objectFit:"cover",borderRadius:"50%",width:'30px',height:'30px'}} src="https://i.pinimg.com/564x/ff/31/24/ff3124cfc5c3a46c63db1c9e7692a68b.jpg" alt="" /></div>
                    <div onClick={()=>{}}><p className='text-danger mb-0'>✕</p></div>
                  </div>
                    <div className="text-center">
                        <h6>Xác nhận tài khoản</h6>
                        <p>Bạn vui lòng nhập mã xác nhận tài khoản của bạn qua Email</p>
                    </div>
                    <form action="">
                      <div>
                        <input type="text" className="form-control" placeholder="nhập xã sác nhận" />
                      </div>
                      <div className="text-center">
                        <button className="btn btn-primary  mt-3">Xác nhận</button>
                      </div>
                    </form>
                </div>
              </div>
            </div>
        </>
    )
}

export default ModalActive

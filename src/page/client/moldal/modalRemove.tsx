import React from 'react'
import { BiError } from "react-icons/bi";

interface ModalRemoveIF<T>{
    modalRemove: any | T,
    deleteOne: any,
}
const ModalRemove: React.FC<ModalRemoveIF<any>> = ({deleteOne, modalRemove}) => {
    return (
 
    <div className="position-fixed d-flex top-0 text-cente w-100 h-100 " style={{left:'0px',zIndex:10,background:"rgba(0, 0, 0, 0.25)"}} >
        <div className="border rounded shadow-lg mx-auto my-auto"  style={{background:"#94e6ff"}}>
          <div className=" m-4" >
            <div className="text-center">
                <BiError  style={{width:"3em", height:"3em", color:'#fbaf8a'}}/>
            </div>
              <div className="text-center text-black">
                  <h6>Bạn chắc chắn muốn xóa ?</h6>
              </div>
              <div className='d-flex justify-content-end  mt-4'>
                  <div className='me-2'>
                      <button onClick={()=>modalRemove()} className='btn btn-danger'>Hủy</button>
                     
                  </div>
                  <div className='ms-2'>
                      <button onClick={deleteOne} className='btn btn-primary'>Xác nhận</button>
                      {/*  */}
                  </div>
              </div>
          </div>
        </div>
      </div>
    )
}

export default ModalRemove

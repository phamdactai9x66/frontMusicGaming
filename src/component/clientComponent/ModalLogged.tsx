import React from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import { Alert, AlertTitle } from '@mui/lab';

interface ModalLoggedIF<T> {
    isLogged: boolean,
    handleLogged: any,
}
const ModalLogged: React.FC<ModalLoggedIF<any>> = (props) => {
    
    return (
        <>
        <Modal
        className='modal-logged-parent'
            open={props.isLogged}
            onClose={props.handleLogged}
            aria-labelledby="parent-modal-title"
            aria-describedby="parent-modal-description"
        >
         <Alert severity="warning" className="check_login">
         <h5 style={{textAlign: "center"}}>Bạn cần đăng nhập để tiếp tục.</h5>
         <AlertTitle style={{textAlign: "center"}}>Vui lòng đăng nhập để thực hiện chức năng này.</AlertTitle>     
             <div style={{display: "flex",justifyContent: "center", gridGap: "3rem"}}>
                <div style={{cursor: "pointer"}} onClick={props.handleLogged}>Hủy</div>
                <Link to="/signin">Đăng nhập</Link>
             </div>
         </Alert>
        </Modal>
        {/* // <div className='modal-logged-parent'>
        //     <div className="modal-logged-child">
        //         <div className="modal-logged-content">
        //             <h1>Bạn cần đăng nhập để tiếp tục.</h1>
        //         </div>

        //         <div className="modal-logged-action">
        //             <button>
        //                 <Link to="/login">Đăng nhập</Link>
        //             </button>
        //             <button>Hủy</button>
        //         </div>
        //     </div>
        // </div> */}
        </>
    )
}

export default ModalLogged

import React from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';

interface ModalLoggedIF<T> {
    isLogged: boolean,
    handleLogged: any,
}
const ModalLogged: React.FC<ModalLoggedIF<any>> = (props) => {
    
    return (
        <>
        <Modal
            open={props.isLogged}
            onClose={props.handleLogged}
            aria-labelledby="parent-modal-title"
            aria-describedby="parent-modal-description"
        >
            <Box sx={{ width: 600 }}>
                <h2 id="parent-modal-title">Bạn chưa đăng nhập</h2>
                <p id="parent-modal-description">
                    Vui lòng đăng nhập để thực hiện chức năng này.
                </p>
                <Button onClick={props.handleLogged}>Hủy</Button>
                <Button>
                    <Link to="/signin">Đăng nhập</Link>
                </Button>
            </Box>
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

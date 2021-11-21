import React, { useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom';
import avatar from './anc.png'
interface notification<T> {
    handleLogged: any,
    path?: string,
}



const Notification: React.FC<notification<any>> = ({ ...props }) => {
    const wrapperRef = useRef(null);
    const location = useLocation();

    const  useOutsideAlerter = (ref: any) => {
        useEffect(() => { 
            function handleClickOutside(event: any) {
                if (ref.current && !ref.current.contains(event.target)) {
                    props.handleLogged();
                }
            }
    
            document.addEventListener("mousedown", handleClickOutside);
            return () => {
                document.removeEventListener("mousedown", handleClickOutside);
            };
        }, [ref]);
    }
console.log('this is location: ', location)
    useOutsideAlerter(wrapperRef);
    return (
        <div className="w-100 h-100 d-flex position-fixed top-0 text-center" style={{left:"0px",zIndex:10,backgroundColor:"rgb(0 0 0 / 25%)"}}>
            <div ref={wrapperRef} className="my-auto mx-auto p-4 rounded-3" style={{backgroundColor:"#9cf6ff"}}>
                <img className="w-25 h-25" src={avatar} alt="" />

                <p style={{fontWeight:500}} className="mb-0">Hãy đăng nhập để có thể sử dụng tính năng này</p>

                <p>Tính năng này chỉ dành cho người dùng đã có tài khoản Music Game</p>
                
                <div className="d-flex justify-content-center">
                    <Link to={{
                        pathname: "/signin",
                        state: {
                            step: {
                                displayForm: 1,
                                addStyle: {
                                    borderBottom: " 0.2rem solid rgb(65, 217, 228)"
                                }
                            },
                            lastLocation: props.path ? props.path : location,
                        },
                    }}
                        className="" style={{marginRight:"0.2rem"}}>
                        <button onClick={()=>props.handleLogged()} type="button" className="btn btn-light">Đăng kí</button>
                    </Link>
                    <Link to={{
                        pathname: '/signin',
                        state: {
                            lastLocation: props.path ? props.path : location,
                        },
                    }}>
                        <button onClick={()=>props.handleLogged()} type="button" className="btn btn-primary" style={{marginLeft:"0.2rem"}}>Đăng nhập</button>
                    </Link>
                </div>
            </div>

        </div>
    )
}

export default Notification

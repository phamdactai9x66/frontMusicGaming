import React, {useEffect} from 'react'
import { useParams, useLocation, Link } from "react-router-dom";
import userApi from '../../../../api/useApi';

interface Verify<T> {

}

const Verify: React.FC<Verify<any>> = ({ ...props }) => {
    // document.title = "Verified - Music Game";
    // const idUser:string = useParams();
    // const hash:string = useParams();

    // useEffect(()=>{
    //     const verify = async () => {
    //         const { data } = await userApi.activeUser(idUser, hash);
    //         console.log(data)

    //     }
    //     verify()
    // },[])
    return (
        <>
            <div className="noti_activityAccount">
                <svg id="icon-check" xmlns="http://www.w3.org/2000/svg" width={50} height={50} fill="currentColor" className="bi bi-check-circle-fill" viewBox="0 0 16 16">
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                </svg>
                <h1>Actived account success</h1>
                <Link to='/login'>click go to login</Link>
            </div>
        </>
    )
}

export default Verify
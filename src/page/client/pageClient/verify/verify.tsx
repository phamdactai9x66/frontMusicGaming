import React, {useEffect} from 'react'
import { useParams, useLocation, Link } from "react-router-dom";
import userApi from '../../../../api/useApi';

interface Verify<T> {

}

const Verify: React.FC<Verify<any>> = ({ ...props }) => {
    document.title = "Verified - Music Game";
    const idUser:string = useParams();
    const hash:string = useParams();

    useEffect(()=>{
        const verify = async () => {
            const { data } = await userApi.activeUser(idUser, hash);
            console.log(data)

        }
        verify()
    },[])
    return (
        <>
           <h1>Actived account success</h1>
           <Link to='/login'>click go to login</Link>
        </>
    )
}

export default Verify
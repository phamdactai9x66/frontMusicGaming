import React, {useEffect} from 'react'
import { Button } from '@mui/material'
import { useParams, useLocation, Link } from "react-router-dom";

interface Verify<T> {

}

const Verify: React.FC<Verify<any>> = ({ ...props }) => {
    const idUser = useParams<{ idUser: any}>();
    const hash = useParams<{ hash: any}>();

    console.log(idUser)
    console.log(hash)
    useEffect(()=>{
        
    },[])
    return (
        <>
           <h1>Actived account success</h1>
           <Link to='/login'>click go to login</Link>
        </>
    )
}

export default Verify
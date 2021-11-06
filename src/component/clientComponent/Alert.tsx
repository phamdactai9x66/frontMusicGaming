import { Alert, AlertTitle } from '@mui/lab';
import React from 'react';
import './clientComponent.scss';

interface AlertComponentIF<T> {
    status: any,
    content: string,
}
const AlertComponent: React.FC<AlertComponentIF<any>> = (props) => {
    
    return (
        
        <div className='parent-alert'>
            {props.status !== "" && props.status === "success" ? 
             <Alert severity="success" style={{borderLeft: "0.3rem solid green"}}>
             <AlertTitle style={{textAlign: "left"}}>Success</AlertTitle>
             {props.content}
         </Alert>
             : 
             <Alert severity="error"  style={{borderLeft: "0.3rem solid red"}}>
                 <AlertTitle style={{textAlign: "left"}}>Error</AlertTitle>
                 {props.content}
             </Alert>
             }
        </div>
    )
}

export default AlertComponent

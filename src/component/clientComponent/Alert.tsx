import React from 'react';
import './clientComponent.scss';

interface AlertComponentIF<T> {
    status: any,
    content: string,
}
const AlertComponent: React.FC<AlertComponentIF<any>> = (props) => {
    
    return (
        <div className='parent-alert'>
            {props.status !== "" && props.status === "success" ? <span className="alert-span-success">{props.content}</span> : <span className="alert-span-danger">{props.content}</span>}
        </div>
    )
}

export default AlertComponent

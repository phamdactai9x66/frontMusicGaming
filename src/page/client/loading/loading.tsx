import React from 'react'
import { ReactComponent as Loading} from './lodding.svg'

interface loading<T> {

}

const Loadings: React.FC<loading<any>> = ({ ...props }) => {
    return (
        <div className=" w-100 h-100 d-flex position-fixed top-0" style={{left:"0px",zIndex:10,backgroundColor:"rgb(0 0 0 / 33%)"}}>
        <div className="mx-auto my-auto" >
             <Loading style={{width:"2.8rem",height:"2.8rem"}}
             className="mx-auto my-auto" 
             /> 
        </div>
     </div>
    )
}

export default Loadings

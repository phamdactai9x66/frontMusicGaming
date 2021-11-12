
import React from 'react'
import { RouteChildrenProps, withRouter } from "react-router-dom";

interface RoomDetail<T> {

}

const RoomDetail: React.FC<RoomDetail<any>> = ({ ...props }) => {
    return (
       <>
       <h2 className="text-light">
       roomDetail
       </h2>   
       </>      
    )
}

export default RoomDetail

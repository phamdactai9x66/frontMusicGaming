import React from 'react'
import { HandleGet, handleReducer, typeAciton, initialReducer, pustAction } from "component/MethodCommon"
interface FindRoom<T> {
    dispatch: any
}

const FindRoom: React.FC<FindRoom<any>> = ({ dispatch, ...props }) => {
    const findRoom = (e: Event | any) => {
        const getValue = (e.target as HTMLInputElement).value.trim();
        if (e.keyCode === 13) {
            dispatch(pustAction(typeAciton.findName, { name_Room: getValue }))
        }
    }
    return (
        <>
            <div className="search">
                <div>
                    <i className="fa fa-search" aria-hidden="true"></i>
                    <div className="search_hover"></div>
                    <input type="text" placeholder="Search..." onKeyUp={findRoom} />
                </div>
            </div>
        </>
    )
}

export default FindRoom

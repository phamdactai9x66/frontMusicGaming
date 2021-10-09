import React, { useRef, useState } from 'react'
import { Select, MenuItem, Pagination, Box } from "@mui/material";
import { initialReducer, handleReducer, HandleGet, typeAciton, pustAction } from "component/MethodCommon";

interface PaginationPage<T> {
    state: any,
    dispatch: any
}
const PaginationPage: React.FC<PaginationPage<any>> = ({ state, dispatch, ...props }) => {
    const [page, setnextPage] = useState(state?.Filter?._page)//1
    const getTotalPage = (): number => {
        const { _limit, rows } = state?.Pagination
        return Math.ceil(rows / _limit);
    }
    const movePage = (event: Event | any, value: any) => {
        if (page === value) return
        setnextPage(value)
        dispatch(pustAction(typeAciton.movePage, { nextPage: value }))
    }
    return (
        <>
            <Pagination count={getTotalPage()} page={page} onChange={movePage}
                style={{ padding: 10, paddingTop: 20 }} />
        </>
    )
}

export default PaginationPage

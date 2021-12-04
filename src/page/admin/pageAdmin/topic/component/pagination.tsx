import React, { useState } from 'react'
import { Pagination } from "@mui/material";
import { typeAciton, pustAction } from "component/MethodCommon";

interface PaginationPageIF<T> {
    state: any | T,
    dispatch: any
}
const PaginationPage: React.FC<PaginationPageIF<any>> = ({ state, dispatch, ...props }) => {
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

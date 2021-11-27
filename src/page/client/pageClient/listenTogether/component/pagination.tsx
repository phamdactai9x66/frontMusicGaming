import React from 'react'
import { Pagination, Theme } from '@mui/material';
import { typeAciton, pustAction } from "component/MethodCommon"
import { makeStyles } from '@mui/styles';
interface PaginationRoomIF<T> {
    state: T,
    dispatch: (params: any) => void
}
const styleComponent = makeStyles((theme: Theme) => {
    return (
        {
            stylePagination: {
                padding: 10,
                paddingTop: 20,
                color: "#fff"
            }
        }
    )
})

const PaginationRoom: React.FC<PaginationRoomIF<any>> = ({ state, dispatch, ...props }) => {
    const getPage = Math.ceil(state.Pagination.rows / state.Pagination._limit);
    const makeStyle = styleComponent()
    const movePage = (event: Event | any, page: number) => {
        if (page === state.Filter._page) return
        dispatch(pustAction(typeAciton.movePage, { nextPage: page }))
    }
    return (
        <>
            <Pagination count={getPage} onChange={movePage} className={makeStyle.stylePagination} />
        </>
    )
}

export default PaginationRoom

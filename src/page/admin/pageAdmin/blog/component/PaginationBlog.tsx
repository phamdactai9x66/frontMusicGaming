import React, { useState } from 'react'
import { Pagination } from '@mui/material'
import { typeAciton, pustAction } from 'component/MethodCommon'

interface PaginationBlog<T> {
  state: any,
  dispatch: any
}

const PaginationBlog: React.FC<PaginationBlog<any>> = ({state, dispatch, ...props}) => {
  const [page, setNextPage] = useState(state?.Filter?._page);

  const getTotalPage = (): number => {
    const { _limit, rows } = state?.Pagination;
    return Math.ceil(rows / _limit);
  } 

  const movePage = (event: Event | any, value: any) => {
    if (page === value) return ;
    setNextPage(value);
    dispatch(pustAction(typeAciton.movePage, { nextPage: value }))
  }

  return (
    <>
      <Pagination 
        count={getTotalPage()}
        page={page} 
        onChange={movePage} 
        style={{ padding: 10, paddingTop: 20}} 
      />
    </>
  )
}

export default PaginationBlog
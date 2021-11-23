import React, { useState } from 'react'
import ListComment from './page/ListComment'

export const page = {
  ListComment: 'ListComment'
}

interface IndexComment<T> {

}

const IndexComment: React.FC<IndexComment<any>> = ({...props}) => {
  const [comment, setComment] = useState('');
  const [findId, setFindId] = useState<any>(null);

  const changePage = <T extends string>(page: T): void => {
    if(!page) return;
    setComment(page)
  }
  const set_id = <T extends string>(_id: T): void => {
    if(!_id) return ;
    setFindId(_id);
  }

  const pageComment = () => {
    switch(comment) {
      case page.ListComment: {
        return <ListComment changePage={changePage} set_id={set_id} />
      }
      default: {
        return <ListComment changePage={changePage} set_id={set_id} />
      }
    }
  }

  return (
    <>
      {pageComment()}
    </>
  )
}

export default IndexComment

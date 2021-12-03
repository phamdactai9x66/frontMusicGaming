import React, { useState } from 'react'
import ListUser from './page/ListUser'

export const page = {
  ListUser: 'ListUser'
}

interface IndexUser<T> {

}

const IndexUser: React.FC<IndexUser<any>> = ({ ...props }) => {
  const [user, setUser] = useState('');
  const [findId, setFindId] = useState<any>(null);

  const changePage = <T extends string>(page: T): void => {
    if (!page) return;
    setUser(page)
  }
  const set_id = <T extends string>(_id: T): void => {
    if (!_id) return;
    setFindId(_id);
  }
  const pageUserList = () => {
    switch (user) {
      case page.ListUser: {
        return <ListUser changePage={changePage} set_id={set_id} />
      }
      default: {
        return <ListUser changePage={changePage} set_id={set_id} />
      }
    }
  }
  return (
    <>
      {pageUserList()}
    </>
  )
}

export default IndexUser

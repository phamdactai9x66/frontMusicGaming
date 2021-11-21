import React, {useState} from 'react'
import ListUserPlayList from './page/ListUserPlaylist'
import AddUserPlayList from './page/AddUserPlayList'
import UpdateUserPlayList from './page/UpdateUserPlayList'

export const page = {
  ListUserPlayList: 'ListUserPlayList',
  AddUserPlayList: 'AddUserPlayList',
  UpdateUserPlayList: 'UpdateUserPlayList'
}

interface IndexPlayList<T> {
  
}

const IndexPlayList: React.FC<IndexPlayList<any>> = ({ ...props }) => {
  const [userPlayList, setUserPlayList] = useState('');
  const [findId, setFindId] = useState<any>(null);

  const changePage = <T extends string>(page: T): void => {
    if (!page) return;
    setUserPlayList(page)
  }

  const set_id = <T extends string>(_id: T): void => {
    if (!_id) return;
    setFindId(_id);
  }

  const pageUserPlayList = () => {
    switch (userPlayList) {
      case page.ListUserPlayList: {
        return <ListUserPlayList changePage={changePage} set_id={set_id} />
      }
      case page.AddUserPlayList: {
        return <AddUserPlayList changePage={changePage} />
      }
      case page.UpdateUserPlayList: {
        return <UpdateUserPlayList changePage={changePage} _id={findId} />
      }
      default: {
        return <ListUserPlayList changePage={changePage} set_id={set_id} />
      }
    }
  }

  return (
    <>
      {pageUserPlayList()}
    </>
  )
}

export default IndexPlayList

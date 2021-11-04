import React, {useState} from 'react'
import ListPlay from './page/ListPlay'
import AddPlayList from './page/AddPlayList'
import UpdatePlayList from './page/UpdatePlayList'

export const page = {
  ListPlay: 'ListPlay',
  AddPlayList: 'AddPlayList',
  UpdatePlayList: 'UpdatePlayList'
}

interface IndexPlayList<T> {

}

const IndexPlayList: React.FC<IndexPlayList<any>> = ({...props}) => {
  const [playList, setPlayList] = useState('');
  const [findId, setFindId] = useState<any>(null);

  const changePage = <T extends string>(page: T): void => {
    if(!page) return;
    setPlayList(page)
  }

  const set_id = <T extends string>(_id: T): void => {
    if(!_id) return ;
    setFindId(_id);
  }

  const pagePlayList = () => {
    switch(playList) {
      case page.ListPlay: {
        return <ListPlay changePage={changePage} set_id={set_id} />
      }
      case page.AddPlayList: {
        return <AddPlayList changePage={changePage} />
      }
      case page.UpdatePlayList: {
        return <UpdatePlayList changePage={changePage} _id={findId} />
      }
      default: {
        console.log(changePage);
        return <ListPlay changePage={changePage} set_id={set_id} />
      }
    }
  }

  return (
    <>
    {pagePlayList()}
    </>
  )
}

export default IndexPlayList

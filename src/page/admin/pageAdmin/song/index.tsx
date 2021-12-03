import React, { useState } from 'react'
import ListSong from './page/ListSong'
import AddSong from './page/AddSong'
import UpdateSong from './page/UpdateSong'

export const page = {
  ListSong: 'ListSong',
  AddSong: 'AddSong',
  UpdateSong: 'UpdateSong'
}

interface IndexSong<T> {

}

const IndexSong: React.FC<IndexSong<any>> = ({ ...props }) => {
  const [song, setSong] = useState('');
  const [findId, setFindId] = useState<any>(null);

  const changePage = <T extends string>(page: T): void => {
    if (!page) return;
    setSong(page)
  }

  const set_id = <T extends string>(_id: T): void => {
    if (!_id) return;
    setFindId(_id);
  }

  const pageSong = () => {
    switch (song) {
      case page.ListSong: {
        return <ListSong changePage={changePage} set_id={set_id} />
      }
      case page.AddSong: {
        return <AddSong changePage={changePage} />
      }
      case page.UpdateSong: {
        return <UpdateSong changePage={changePage} _id={findId} />
      }
      default: {
        return <ListSong changePage={changePage} set_id={set_id} />
      }
    }
  }

  return (
    <div>
      {pageSong()}
    </div>
  )
}

export default IndexSong

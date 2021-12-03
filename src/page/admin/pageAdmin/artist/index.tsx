import React, { useState } from 'react'
import ListArtist from './page/ListArtist'
import AddArtist from './page/AddArtist'
import UpdateArtist from './page/UpdateArtist'

export const page = {
  ListArtist: 'ListArtist',
  AddArtist: 'AddArtist',
  UpdateArtist: 'UpdateArtist'
}

interface IndexArtist<T> {

}

const IndexArtist: React.FC<IndexArtist<any>> = ({ ...props }) => {
  const [artist, setArtist] = useState('');
  const [findId, setFindId] = useState<any>(null);

  const changePage = <T extends string>(page: T): void => {
    if (!page) return;
    setArtist(page);
  }

  const set_id = <T extends string>(_id: T): void => {
    if (!_id) return;
    setFindId(_id);
  }

  const pageArtist = () => {
    switch (artist) {
      case page.ListArtist: {
        return <ListArtist changePage={changePage} set_id={set_id} />
      }
      case page.AddArtist: {
        return <AddArtist changePage={changePage} />
      }
      case page.UpdateArtist: {
        return <UpdateArtist changePage={changePage} _id={findId} />
      }
      default: {
        return <ListArtist changePage={changePage} set_id={set_id} />
      }
    }
  }
  return (
    <div>
      {pageArtist()}
    </div>
  )
}

export default IndexArtist

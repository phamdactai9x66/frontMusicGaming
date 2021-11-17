import React, { useState } from 'react'
import ListBlog from './page/ListBlog'
import AddBlog from './page/AddBlog'
import UpdateBlog from './page/UpdateBlog'

export const page = {
  ListBlog: 'ListBlog',
  AddBlog: 'AddBlog',
  UpdateBlog: 'UpdateBlog'
}

interface IndexBlog<T> {

}

const IndexBlog: React.FC<IndexBlog<any>> = ({...props}) => {
  const [blog, setBlog] = useState('');
  const [findId, setFindId] = useState<any>(null);

  const changePage = <T extends string>(page: T): void => {
    if(!page) return;
    setBlog(page)
  }
  const set_id = <T extends string>(_id: T): void => {
    if(!_id) return ;
    setFindId(_id);
  }

  const pageBlog = () => {
    switch(blog) {
      case page.ListBlog: {
        return <ListBlog changePage={changePage} set_id={set_id} />
      }
      case page.AddBlog: {
        return <AddBlog changePage={changePage} />
      }
      case page.UpdateBlog: {
        return <UpdateBlog changePage={changePage} _id={findId} />
      }
      default: {
        console.log(changePage);
        return <ListBlog changePage={changePage} set_id={set_id} />
      }
    }
  }

  return (
    <div>
      {pageBlog()}
    </div>
  )
}

export default IndexBlog

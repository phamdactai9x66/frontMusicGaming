import React, {useState} from 'react'
import ListCategoryBlog from './page/ListCategoryBlog'
import AddCategoryBlog from './page/AddCategoryBlog'
import UpdateCategoryBlog from './page/UpdateCategoryBlog'

export const page = {
  ListCategoryBlog: 'ListCategoryBlog',
  AddCategoryBlog: 'AddCategoryBlog',
  UpdateCategoryBlog: 'UpdateCategoryBlog'
}

interface IndexCategoryBlog<T> {

}

const IndexCategoryBlog: React.FC<IndexCategoryBlog<any>> = ({ ...props }) => {
  const [categoryBlog, setCategoryBlog] = useState('');
  const [findId, setFindId] = useState<any>(null);

  const changePage = <T extends string>(page: T): void => {
    if (!page) return;
    setCategoryBlog(page)
  }

  const set_id = <T extends string>(_id: T): void => {
      if (!_id) return;
      setFindId(_id);
  }

  const pageCategoryBlog = () => {
    switch (categoryBlog) {
      case page.ListCategoryBlog: {
        return <ListCategoryBlog changePage={changePage} set_id={set_id} />
      }
      case page.AddCategoryBlog: {
        return <AddCategoryBlog changePage={changePage} />
      }
      case page.UpdateCategoryBlog: {
        return <UpdateCategoryBlog changePage={changePage} _id={findId} />
      }
      default: {
        return <ListCategoryBlog changePage={changePage} set_id={set_id} />
      }
    }
  }

  return (
    <>
      {pageCategoryBlog()}
    </>
  )
}

export default IndexCategoryBlog

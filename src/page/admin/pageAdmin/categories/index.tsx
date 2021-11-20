import React, {useState} from 'react'
import ListCategory from './page/ListCategory'
import AddCategory from './page/AddCategory'
import UpdateCategory from './page/UpdateCategory'

export const page = {
  ListCategory: 'ListCategory',
  AddCategory: 'AddCategory',
  UpdateCategory: 'UpdateCategory'
}

interface IndexCategories<T> {

}

const IndexCategories: React.FC<IndexCategories<any>> = ({...props}) => {
  const [category, setCategory] = useState('');
  const [findId, setFindId] = useState<any>(null);

  const changePage = <T extends string>(page: T): void => {
    if(!page) return;
    setCategory(page)
  }
  const set_id = <T extends string>(_id: T): void => {
    if(!_id) return ;
    setFindId(_id);
  }
  const pageCategoryList = () => {
    switch(category) {
      case page.ListCategory: {
        return <ListCategory changePage={changePage} set_id={set_id} />
      }
      case page.AddCategory: {
        return <AddCategory changePage={changePage} />
      }
      case page.UpdateCategory: {
        return <UpdateCategory changePage={changePage} _id={findId} />
      }
      default: {
        // console.log(changePage);
        return <ListCategory changePage={changePage} set_id={set_id} />
      }
    }
  }

  return (
    <>
      {pageCategoryList()}
    </>
  )
}

export default IndexCategories

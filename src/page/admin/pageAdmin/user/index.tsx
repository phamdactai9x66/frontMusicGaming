import React, { useState } from 'react';
import ListUser from './page/ListUser';
import UpdateUser from './page/UpdateUser';
import { useSelector } from "react-redux";
import { formStateUser } from "redux/user/stateUser";
import { Redirect } from 'react-router-dom';

export const page = {
  ListUser: 'ListUser',
  UpdateUser: 'UpdateUser',
}

interface IndexUser<T> {

}

const IndexUser: React.FC<IndexUser<any>> = ({ ...props }) => {
  const [user, setUser] = useState('');
  const [findId, setFindId] = useState<any>(null);
  const state = useSelector<{ user: any }>(state => state.user) as formStateUser;

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
      case page.UpdateUser: {
        return <UpdateUser changePage={changePage} _id={findId} />
      }
      default: {
        return <ListUser changePage={changePage} set_id={set_id} />
      }
    }
  }
  return (
    <>
      {state.user.role && state.user.role < 2 ? <Redirect to={{ pathname: '/admin' }} /> : pageUserList()}
    </>
  )
}

export default IndexUser

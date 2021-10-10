import React, { useState } from 'react'
import Todolist from "./page/todolist";
import AddTodolist from "./page/addMusic";
import UpdateTodoList from "./page/update";
export const page = {
    todolist: 'todolist',
    add: 'add',
    update: 'update'
}

interface IndexTodolist<T> {

}

const IndexTodolist: React.FC<IndexTodolist<any>> = ({ ...props }) => {
    const [state, setstate] = useState('')
    const [find_id, setfind_id] = useState<any>(null);


    const changePage = <T extends string>(page: T): void => {
        if (!page) return;
        setstate(page)
    }
    const set_id = <T extends string>(_id: T): void => {
        if (!_id) return;
        setfind_id(_id);
    }
    const pageTodolist = () => {
        switch (state) {
            case page.todolist: {
                return <Todolist changePage={changePage} set_id={set_id} />
            }
            case page.add: {
                return <AddTodolist changePage={changePage} />
            }
            case page.update: {
                return <UpdateTodoList changePage={changePage} _id={find_id} />
            }
            default: {
                return <Todolist changePage={changePage} set_id={set_id} />
            }
        }
    }

    return (
        <>
            {pageTodolist()}
        </>
    )
}

export default IndexTodolist

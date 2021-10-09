import React, { useState } from 'react'
import Todolist from "./page/todolist";
import AddTodolist from "./page/addMusic";
export const page = {
    todolist: 'todolist',
    add: 'add',
    update: 'update'
}

interface IndexTodolist<T> {

}

const IndexTodolist: React.FC<IndexTodolist<any>> = ({ ...props }) => {
    const [state, setstate] = useState('')


    const changePage = <T extends string>(page: T): void => {
        if ([undefined, null].includes(page as any)) return;
        setstate(page)
    }
    const pageTodolist = () => {
        switch (state) {
            case page.todolist: {
                return <Todolist changePage={changePage} />
            }
            case page.add: {
                return <AddTodolist changePage={changePage} />
            }
            default: {
                return <Todolist changePage={changePage} />
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

import React, { useState } from 'react'
import ListSlide from "./page/listSlide";
import AddSlide from "./page/addSlide";
import UpdateSlide from "./page/updateSlide";

export const page = {
    ListSlide: 'listSlide',
    AddSlide: 'addSlide',
    UpdateSlide: 'updateSlide'
}

interface IndexSlide<T> {

}

const IndexSlide: React.FC<IndexSlide<any>> = ({ ...props }) => {
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
    const pageSlide = () => {
        switch (state) {
            case page.ListSlide: {
                return <ListSlide changePage={changePage} set_id={set_id} />
            }
            case page.AddSlide: {
                return <AddSlide changePage={changePage} />
            }
            case page.UpdateSlide: {
                return <UpdateSlide changePage={changePage} _id={find_id} /> 
            }
            default: {
                return <ListSlide changePage={changePage} set_id={set_id} />
            }
        }
    }

    return (
        <>
            {pageSlide()}
        </>
    )
}

export default IndexSlide

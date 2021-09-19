import React from 'react'
import { RouteChildrenProps, withRouter } from "react-router-dom";
import "./todolist.scss";
import { AiOutlineSearch } from 'react-icons/ai';

interface Todolist<T> {

}

const Todolist: React.FC<Todolist<any>> = ({ ...props }) => {
    return (
        <>
        <div className="title">
            <span>Todolist</span>
        </div>
        <div className="listToDo">
            <table>
                <tr className="col">
                    <th className="add-todo"><button className="btn btn-primary">Add Todo</button></th>
                    <th className="col-2"></th>
                    <th>
                    <select>
                            <option value="volvo">Trạng thái</option>
                            <option value="saab">Hiển thị</option>
                    </select>
                    </th>
                    <th className="search">
                        <input type="text" placeholder="Tìm kiếm"/>
                        <AiOutlineSearch className="col-icon"/>
                    </th>
                </tr>
                <tr className="col">
                    <th><input type="number"/></th>
                    <th></th>
                    <th></th>
                    <th></th>
                </tr>
                <tr className="col title-table">
                    <th>ID</th>
                    <th>Name Todolist</th>
                    <th>Trạng thái</th>
                    <th>Hành động</th>
                </tr>
                <tr className="col">
                    <td className="">1</td>
                    <td className="">Name 1</td>
                    <td className="status"><button className="btn btn-primary">Hiển thị</button></td>
                    <td className="rows">
                        <button className="btn btn-primary">Sửa</button>
                        <button className="btn btn-danger">Xóa</button>
                    </td>
                </tr>
                <tr className="col">
                    <td className="">1</td>
                    <td className="">Name 1</td>
                    <td className="status"><button className="btn btn-primary">Hiển thị</button></td>
                    <td className="rows">
                        <button className="btn btn-primary">Sửa</button>
                        <button className="btn btn-danger">Xóa</button>
                    </td>
                </tr>
                <tr className="col">
                    <td className="">1</td>
                    <td className="">Name 1</td>
                    <td className="status"><button className="btn btn-primary">Hiển thị</button></td>
                    <td className="rows">
                        <button className="btn btn-primary">Sửa</button>
                        <button className="btn btn-danger">Xóa</button>
                    </td>
                </tr>
            </table>
        </div>
        </>
    )
}

export default Todolist

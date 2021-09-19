import React from 'react'
import { RouteChildrenProps, withRouter } from "react-router-dom";
import { AiOutlineSearch } from 'react-icons/ai';

interface Todolist<T> {

}

const Todolist: React.FC<Todolist<any>> = ({ ...props }) => {
    return (
        <>
        <div className="todo_main"> 
            <h3>Todolist</h3>
        <div className="listToDo">
            <table>
                <tr className="col">
                    <th className="add-todo"><button className="btn btn-primary">Add Todo</button></th>
                    <th className="col-2"></th>
                    <th>
                    <select>
                            <option value="">Chọn trạng thái</option>
                            <option value="hienthi">Hiển thị</option>
                            <option value="chuahienthi">Chưa hiển thị</option>
                    </select>
                    </th>
                    <th className="search">
                        <input type="text" placeholder="Tìm kiếm"/>
                        <AiOutlineSearch className="col-icon"/>
                    </th>
                </tr>
                <tr className="col">
                    <th><input type="number" min="0"/></th>
                    <th></th>
                    <th></th>
                    <th></th>
                </tr>
                <tr className="col title-table">
                    <th>ID</th>
                    <th>Name</th>
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
        </div>
        </>
    )
}

export default Todolist

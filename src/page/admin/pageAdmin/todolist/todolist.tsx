import React from 'react'
import { RouteChildrenProps, withRouter } from "react-router-dom";
import { AiOutlineSearch } from 'react-icons/ai';
import { ImNext2 } from 'react-icons/im';
import { ImPrevious2 } from 'react-icons/im';

interface Todolist<T> {

}

const Todolist: React.FC<Todolist<any>> = ({ ...props }) => {
    return (
        <>
            <div className="todo_main">
                <h3>Todolist</h3>
                <div className="listToDo">
                    <table>
                        <thead className="thead_mobie">
                            <tr className="col thead_mobie_extend">
                                <th><button className="btn btn-primary">Add Todo</button></th>
                                <th className="col-2"></th>
                                <th><select>
                                    <option value="">Chọn trạng thái</option>
                                    <option value="hienthi">Hiển thị</option>
                                    <option value="chuahienthi">Chưa hiển thị</option>
                                </select>
                                </th>
                                <th>
                                    <div className="search_main">
                                        <input type="text" placeholder="Tìm kiếm" />
                                        <AiOutlineSearch className="col-icon" />
                                    </div>
                                </th>
                            </tr>
                            <tr className="col">
                                <th><input type="number" min="0" /></th>
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
                        </thead>
                        <tbody>
                            <tr className="col">
                                <td data-label="ID">1</td>
                                <td data-label="Name">Name 1</td>
                                <td data-label="Trạng thái" className="status"><button className="btn btn-primary">Hiển thị</button></td>
                                <td data-label="Hành động" className="rows">
                                    <button className="btn btn-primary">Sửa</button>
                                    <button className="btn btn-danger">Xóa</button>
                                </td>
                            </tr>
                            <tr className="col">
                                <td data-label="ID">1</td>
                                <td data-label="Name" >Name 1</td>
                                <td data-label="Trạng thái" className="status"><button className="btn btn-danger">Chưa hiển thị</button></td>
                                <td data-label="Hành động" className="rows">
                                    <button className="btn btn-primary">Sửa</button>
                                    <button className="btn btn-danger">Xóa</button>
                                </td>
                            </tr>
                            <tr className="col">
                                <td data-label="ID" >1</td>
                                <td data-label="Name" >Name 1</td>
                                <td data-label="Trạng thái" className="status"><button className="btn btn-primary">Hiển thị</button></td>
                                <td data-label="Hành động" className="rows">
                                    <button className="btn btn-primary">Sửa</button>
                                    <button className="btn btn-danger">Xóa</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="pagination">
                        <a href="#"><ImPrevious2/></a>
                        <a href="#">&laquo;</a>
                        <a href="#">1</a>
                        <a href="#">2</a>
                        <a href="#">3</a>
                        <a href="#">4</a>
                        <a href="#">&raquo;</a>
                        <a href="#"><ImNext2/></a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Todolist

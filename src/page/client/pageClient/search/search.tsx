
import React from 'react'
import { RouteChildrenProps, withRouter } from "react-router-dom";

interface Search<T> {

}

const Search: React.FC<Search<any>> = ({ ...props }) => {
    return (
       <>
       <div className="m-4">
       <h5 className="text-light">
          Ai làm phần này thì cop đoạn box-music ở trang home phần danh sách bài hát
       </h5>
       </div>
      
       </>
    )
}

export default Search

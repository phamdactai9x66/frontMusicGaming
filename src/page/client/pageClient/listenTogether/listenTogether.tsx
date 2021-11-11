
import React from 'react'
import { RouteChildrenProps, withRouter } from "react-router-dom";
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';

interface ListenTogether<T> {

}

const ListenTogether: React.FC<ListenTogether<any>> = ({ ...props }) => {
    return (
       <>
        <div className="listenTogeter">
        <div className="room">
          <div className="search">
            <form action="">
              <i className="fa fa-search" aria-hidden="true"></i>
              <div className="search_hover"></div>
              <input type="text" placeholder="Search..." />
            </form>
          </div>
          <div className="room_box">
            <div className="name">
              <h6>Name room</h6>
              <div>
              <AvatarGroup max={4}>
      <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
      <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
      <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
      <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
      <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
    </AvatarGroup>
              </div>
            </div>
            <div className="key">
              key
            </div>
          </div>
          <div className="room_box">
            <div className="name">
              <h6>Name room</h6>
              <div>
              <AvatarGroup max={4}>
      <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
      <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
      <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
      <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
      <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
    </AvatarGroup>
              </div>
            </div>
            <div className="key">
              key
            </div>
          </div>
        </div>
        <div className="create_room">
          <input type="text"/>
          <input type="text"/>
        </div>
        <div>
        </div>
      </div>
       </> 
    )
}

export default ListenTogether

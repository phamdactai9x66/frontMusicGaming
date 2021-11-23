import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { HandleGet, handleReducer, typeAciton, initialReducer, pustAction } from "component/MethodCommon"
interface FindRoom<T> {
  dispatch: any
}

const FindRoom: React.FC<FindRoom<any>> = ({ dispatch, ...props }) => {
  const findRoom = (e: Event | any) => {
    const getValue = (e.target as HTMLInputElement).value.trim();
    if (e.keyCode === 13) {
      dispatch(pustAction(typeAciton.findName, { name_Room: getValue }))
    }
  }
  return (
    <>
      <div className="search_music">
        <i className="fa fa-search" aria-hidden="true"></i>
        <input type="text" placeholder="Search..." onKeyUp={findRoom} />
        {/* <ul className="results" >
          <List>
            <ListItem
              style={{ display: "flex", cursor: "pointer" }}
              secondaryAction={
                <IconButton edge="end" aria-label="delete">
                  <DeleteIcon style={{ color: "#5ac0f0" }} />
                </IconButton>
              }
            >
              <ListItemAvatar style={{ marginLeft: "-2rem" }}>
                <Avatar alt="Remy Sharp" sx={{ width: "2.1rem", height: "2.1rem" }} src="https://i.pinimg.com/236x/c6/78/a6/c678a60f6c6127ba4d61ee6b9394cc58.jpg" />
              </ListItemAvatar>
              <div className="key_name">This is search jsncjnsdjkhcnjsdncjdsdcscdcdcsdcdc</div>
            </ListItem>
          </List>
        </ul> */}
      </div>
    </>
  )
}

export default FindRoom

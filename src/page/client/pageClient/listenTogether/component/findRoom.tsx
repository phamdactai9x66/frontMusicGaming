import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import TextField from '@mui/material/TextField';

// import { HandleGet, handleReducer, typeAciton, initialReducer, pustAction } from "component/MethodCommon"
import { typeAciton, pustAction } from "component/MethodCommon"
interface FindRoomIF<T> {
  dispatch: any | T,
}

const FindRoom: React.FC<FindRoomIF<any>> = ({ dispatch, ...props }) => {
  const findRoom = (e: Event | any) => {
    const getValue = (e.target as HTMLInputElement).value.trim();
    if (e.keyCode === 13) {
      dispatch(pustAction(typeAciton.findName, { name_Room: getValue }))
    }
  }
  return (
    <>
      <div className="search_music">
        <TextField
          sx={{ width: "100%" }}
          label="Search..."
          onKeyUp={findRoom}
        />

      </div>
    </>
  )
}

export default FindRoom

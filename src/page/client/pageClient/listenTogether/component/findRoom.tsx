import React from 'react';
import { InputAdornment } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import TextField from '@mui/material/TextField';
import Search from '@mui/icons-material/Search';

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
          fullWidth
          variant="standard"
          label="Search..."
          color="primary"
          // style={{ color: 'white' }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search />
              </InputAdornment>
            )
          }}
          onKeyUp={findRoom}
        />

      </div>
    </>
  )
}

export default FindRoom

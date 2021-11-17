
import React, { useEffect, useState, useReducer, useRef } from 'react'
import { Button, TextField } from '@mui/material';
import roomApi from "api/roomApi";
import { HandleGet, handleReducer, typeAciton, initialReducer, pustAction } from "component/MethodCommon"
import { variableCommon } from "component/variableCommon";
import ListRoom from "./component/listRoom"
import roomUser from "api/roomUser";
import userApi from "api/useApi";
import Pagination from "./component/pagination";
import FindRoom from "./component/findRoom";

interface ListenTogether<T> {

}

const ListenTogether: React.FC<ListenTogether<any>> = ({ ...props }) => {
  const [state, dispatch] = useReducer(handleReducer, initialReducer, undefined);
  const [saveData, setSaveData] = useState({ user: [], roomUser: [], display: true });

  useEffect(() => {
    (async () => {
      if (!saveData.display) return;
      const { data: listRoomUser } = await roomUser.getAll({});
      const { data: listUserApi } = await userApi.getAll({});
      setSaveData({ display: true, user: listUserApi, roomUser: listRoomUser })
    })()
    return () => {
      setSaveData((value) => ({ ...value, display: false }))
    }
  }, [])
  useEffect(() => {
    (async () => {
      const query = {
        ...state.Filter
      }
      const [data, error] = await HandleGet<Function>(roomApi.getAll, query);
      delete query._page;
      delete query._page;
      const countLength = Object.entries(query).length;
      if (error || data.status === variableCommon.statusF) return;
      const getAllRoom = await roomApi.getAll((countLength && query.name_Room) ? query : {});

      dispatch(pustAction(typeAciton.getData, { Data: data.data, dataStatic: getAllRoom.data }))
    })()
    return () => {
      dispatch(pustAction(typeAciton.reset))
    }
  }, [state.Filter])

  const listRoom = () => {
    return (
      <React.Fragment>
        {
          state.Data.map((current: any, index: number) => {
            return <ListRoom current={current} index={index} saveData={saveData} />
          })
        }

      </React.Fragment>
    )
  }
  return (
    <>
      <div className="listenTogeter">
        <div className="room">
          <FindRoom dispatch={dispatch} />
          {
            state.Display ? listRoom() : null
          }
          <div className="Pagination">
            <Pagination state={state} dispatch={dispatch} />
          </div>
        </div>
        <div className="create_room">
          <TextField label="Name" variant="filled" className="input_room" />
          <TextField label="Password" variant="filled" className="input_room" />
          <Button variant="contained" color="primary">
            Create room
          </Button>
        </div>
      </div>
    </>
  )
}

export default ListenTogether

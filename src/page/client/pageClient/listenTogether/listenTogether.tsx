import React, { useEffect, useState, useReducer, useRef } from 'react'
import { Button, TextField, Box, CircularProgress } from '@mui/material';
import roomApi from "api/roomApi";
import { HandleGet, handleReducer, typeAciton, initialReducer, pustAction } from "component/MethodCommon"
import { variableCommon } from "component/variableCommon";
import ListRoom from "./component/listRoom"
import roomUser from "api/roomUser";
import userApi from "api/useApi";
import Pagination from "./component/pagination";
import FindRoom from "./component/findRoom";
import CreateRoom from "./component/createRoom"

interface ListenTogether<T> { }

const ListenTogether: React.FC<ListenTogether<any>> = ({ ...props }) => {
  const [state, dispatch] = useReducer(handleReducer, initialReducer, undefined);
  const [saveData, setSaveData] = useState({ user: [], roomUser: [], display: true });

  useEffect(() => {
    if (!saveData.display) return;
    setTimeout(async () => {
      const { data: listRoomUser } = await roomUser.getAll({});
      const { data: listUserApi } = await userApi.getAll({});
      setSaveData({ display: true, user: listUserApi, roomUser: listRoomUser })
    }, 1000);
    return () => {
      setSaveData((value) => ({ ...value, display: false }))
    }
  }, [])
  useEffect(() => {
    setTimeout(async () => {
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
    }, 1000);
    return () => {
      dispatch(pustAction(typeAciton.reset))
    }
  }, [state.Filter])

  const listRoom = () => {
    return (
      <>
        {
          state.Data.map((current: any, index: number) => {
            return <ListRoom current={current} index={index} saveData={saveData} />
          })
        }

      </>
    )
  }
  const InProgress = () => {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignContent: 'center', paddingTop: '30px' }}>
        <CircularProgress />
      </Box>
    )
  }
  return (
    <>
      <div className="listenTogeter">
        <div className="room">
          <FindRoom dispatch={dispatch} />
          {
            state.Display ? listRoom() : InProgress()
          }

          <div className="Pagination">
            <Pagination state={state} dispatch={dispatch} />
          </div>
        </div>
        <CreateRoom />
      </div>
    </>
  )
}

export default ListenTogether;

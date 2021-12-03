import React, { useEffect, useReducer, useState } from 'react'
import { page } from '../index'
import useApi from 'api/useApi'
import { Select, MenuItem, Avatar } from "@mui/material"
import SearchIcon from '@mui/icons-material/Search'
import { variableCommon } from "component/variableCommon"
import PaginationUser from '../component/PaginationUser'
import { makeStyles } from "@mui/styles"
import ModalUser from '../component/ModalUser'
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material"
import { Button, Checkbox, TextField, Typography, CircularProgress, Box } from "@mui/material"
import { initialReducer, handleReducer, HandleGet, typeAciton, pustAction } from "component/MethodCommon";

interface ListUser<T> {
  changePage: any,
  set_id: Function
}

const useStyle = makeStyles((theme) => ({
  styleBox: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
}))

const columns = [
  { id: 'userName', label: 'UserName', minWidth: 170, alert: 'left' },
  { id: 'email', label: 'Email', minWidth: 170, align: 'left' },
  { id: 'avatar', label: 'Avatar', minWidth: 100, align: 'left' },
  { id: 'gender', label: 'Gender', minWidth: 100, align: 'left' },
  { id: 'role', label: 'Role', minWidth: 100, align: 'left' },
  { id: 'active', label: 'Active', minWidth: 100, align: 'left' },
  { id: '', label: 'Handle', minWidth: 170, align: 'center' }
]

const ListUser: React.FC<ListUser<any>> = ({ changePage, set_id, ...props }) => {
  const classes = useStyle();
  const [state, dispatch] = useReducer(handleReducer, initialReducer);
  const [stateModalUser, setStateModalUser] = useState<any>({ display: false, _id: null });

  useEffect(() => {
    (async () => {
      const query = {
        ...state.Filter
      }
      const [data, error] = await HandleGet(useApi.getAll, query);

      delete query._limit;
      delete query._page;

      const checkFindName = Object.entries(query).length;
      var [dataStatic] = await HandleGet(useApi.getAll, checkFindName ? { ...query } : {});

      if (data?.status !== variableCommon.statusS) return dispatch(pustAction(typeAciton.error));

      setTimeout(() => {
        dispatch(pustAction(typeAciton.getData, { Data: data?.data, dataStatic: dataStatic?.data }))
      }, 1000);
    })()
    return () => {
      dispatch(pustAction(typeAciton.reset))
    }
  }, [state.Filter])

  const findUserName = (event: Event | any) => {
    const getValue = ((event.target as HTMLInputElement).value).trim();
    if (event.keyCode === 13) {
      dispatch(pustAction(typeAciton.findName, { userName: getValue }))
    }
  }

  const onOpen = <T extends string>(_id: T) => {
    if ([undefined, null].includes(_id as any)) return;
    setStateModalUser((value: any) => ({ _id, display: true }))
  }

  const onClose = () => {
    setStateModalUser((value: any) => ({ ...value, display: false }))
  }

  const deleteOne = async (_id: string) => {
    if (!_id) return;
    dispatch(pustAction(typeAciton.deleteOne, { _id }));
    await useApi.deleteOne(_id);
  }

  const deleteAll = () => {
    dispatch(pustAction(typeAciton.deleteAll));
    state.Data.forEach(async (currenV: any) => {
      const { _id, check } = currenV;
      if (check) {
        await useApi.deleteOne(_id)
      }
    })
  }

  return (
    <>
      {stateModalUser._id && <ModalUser state={stateModalUser} onClose={onClose}></ModalUser>}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '800px',
          width: '100%'
        }}
      >
        <div style={{ flexBasis: 1000, margin: '0 auto' }}>
          <h2 className="mb-5">User</h2>
          <Paper sx={{ width: '100%' }}>
            <TableContainer style={{ padding: 20 }}>
              <Typography
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}
              >
                <TextField
                  InputProps={{
                    startAdornment: <SearchIcon style={{ marginRight: 10 }}></SearchIcon>,
                    placeholder: "searching"
                  }}
                  onKeyDown={findUserName}
                  size="small"
                />

                <Select
                  labelId="demoSelectLabel"
                  id="demoSelectLabel"
                  label="Age"
                  value={10}
                  size="small"
                  style={{ width: 200 }}
                >
                  <MenuItem value={10}>Sort date</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </Typography>

              <Table stickyHeader>
                <TableHead>
                  <TableRow>
                    <TableCell key="awd" align="left" style={{ minWidth: 170 }}>
                      <Checkbox
                        id="checkAll"
                        onClick={() => { dispatch(pustAction(typeAciton.checkAll)) }}
                        checked={state.checkAll}
                      />
                      <label htmlFor="checkAll">All</label>
                    </TableCell>
                    {columns.map((column) => (
                      <TableCell
                        key={column.id}
                        align={column.align as any}
                        style={{ minWidth: column.minWidth }}
                      >
                        {column.label}
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>

                <TableBody>
                  {
                    state.Data.length && state.Display ?
                      state.Data.map((row: any, index: any) => {
                        const { userName, email, avatar, gender, role, active, check, _id } = row;
                        return (
                          <TableRow hover role="checkbox" key={index}>
                            <TableCell align="left">
                              <Checkbox checked={check} onClick={() => {
                                dispatch(pustAction(typeAciton.checkOne, { _id }))
                              }} />
                            </TableCell>
                            <TableCell align="left">{userName}</TableCell>
                            <TableCell align="left">{email}</TableCell>
                            <TableCell align="left">
                              <Avatar alt="" variant="rounded" src={avatar} />
                            </TableCell>
                            <TableCell align="left">
                              {gender === true ? 'Nam' : 'Nữ'}
                            </TableCell>
                            <TableCell align="left">{role}</TableCell>
                            <TableCell align="left">
                              {active === true ? 'Hoạt động' : 'Không hoạt động'}
                            </TableCell>
                            <TableCell align="left">
                              <Button
                                variant="contained"
                                color="error"
                                style={{ marginRight: 5 }}
                                size="small"
                                onClick={() => { deleteOne(_id) }}
                              >
                                Delete
                              </Button>
                              <Button
                                variant="contained"
                                color="primary"
                                size="small"
                                onClick={() => { onOpen<string>(_id) }}
                              >
                                More
                              </Button>
                            </TableCell>
                          </TableRow>
                        );
                      }) : state.Display ?
                        null : <TableRow>
                          <TableCell align="center" colSpan={12}>
                            <CircularProgress />
                          </TableCell>
                        </TableRow>
                  }
                </TableBody>
              </Table>
              <Box className={classes.styleBox}>
                <div>
                  <Button variant="contained" size="small" onClick={deleteAll}>
                    Delete All
                  </Button>
                </div>
                <PaginationUser state={state} dispatch={dispatch} />
              </Box>
            </TableContainer>
          </Paper>
        </div>
      </div>
    </>
  )
}

export default ListUser

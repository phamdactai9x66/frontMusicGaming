import React, { useReducer, useState, useEffect } from 'react'
import { page } from '../index'
import blogApi from 'api/BlogApi'
import { makeStyles } from "@mui/styles"
import { Select, MenuItem, Avatar } from "@mui/material"
import SearchIcon from '@mui/icons-material/Search'
import { variableCommon } from "component/variableCommon"
import PaginationBlog from '../component/PaginationBlog'
import ModalBlog from '../component/ModalBlog'
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material"
import { Button, Checkbox, TextField, Typography, CircularProgress, Box } from "@mui/material"
import { initialReducer, handleReducer, HandleGet, typeAciton, pustAction } from "component/MethodCommon";

interface ListBlog<T> {
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
  { id: '', label: 'Name blog', minWidth: 120, align: 'left' },
  { id: '', label: 'Image', minWidth: 120, align: 'left' },
  { id: '', label: 'Trạng thái', minWidth: 120, align: 'left' },
  { id: '', label: 'View', minWidth: 100, align: 'left' },
  { id: '', label: 'Handle', minWidth: 20, align: 'center' }
]

const ListBlog: React.FC<ListBlog<any>> = ({ changePage, set_id, ...props }) => {
  const classes = useStyle();
  const [state, dispatch] = useReducer(handleReducer, initialReducer);
  const [stateModalBlog, setStateModalBlog] = useState<any>({ display: false, _id: null });

  useEffect(() => {
    (async () => {
      const query = {
        ...state.Filter
      }
      const [data, error] = await HandleGet(blogApi.getAll, query);

      delete query._limit;
      delete query._page;

      const checkFindName = Object.entries(query).length;
      var [dataStatic] = await HandleGet(blogApi.getAll, checkFindName ? { ...query } : {});

      if (data?.status !== variableCommon.statusS) return dispatch(pustAction(typeAciton.error));

      setTimeout(() => {
        dispatch(pustAction(typeAciton.getData, { Data: data?.data, dataStatic: dataStatic?.data }))
      }, 1000);

    })()
    return () => {
      dispatch(pustAction(typeAciton.reset))
    }
  }, [state.Filter])

  const findName = (event: Event | any) => {
    const getValue = ((event.target as HTMLInputElement).value).trim();
    if (event.keyCode === 13) {
      dispatch(pustAction(typeAciton.findName, { title: getValue }))
    }
  }

  const onOpen = <T extends string>(_id: T) => {
    if ([undefined, null].includes(_id as any)) return;
    setStateModalBlog((value: any) => ({ _id, display: true }))
  }

  const onClose = () => {
    setStateModalBlog((value: any) => ({ ...value, display: false }))
  }

  const navigatePage = <T extends string>(page: T, _id?: T): void => {
    changePage(page);
    if (_id) set_id(_id);
  }

  const deleteOne = async (_id: string) => {
    if (!_id) return;
    dispatch(pustAction(typeAciton.deleteOne, { _id }));
    await blogApi.deleteOne(_id);
  }

  const deleteAll = () => {
    dispatch(pustAction(typeAciton.deleteAll));
    state.Data.forEach(async (currenV: any) => {
      const { _id, check } = currenV;
      if (check) {
        await blogApi.deleteOne(_id)
      }
    })
  }

  return (
    <>
      {stateModalBlog._id && <ModalBlog state={stateModalBlog} onClose={onClose}></ModalBlog>}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '600px',
          width: '100%'
        }}
      >
        <div style={{ flexBasis: 1000, margin: '0 auto' }}>
          <h2 className="mb-5">Blog</h2>
          <Paper sx={{ width: '100%' }}>
            <TableContainer style={{ padding: 20 }}>
              <Typography style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <TextField
                  InputProps={{
                    startAdornment: <SearchIcon style={{ marginRight: 10 }}></SearchIcon>,
                    placeholder: "searching"
                  }}
                  onKeyDown={findName}
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
                        const { title, image, content, status, view, check, _id } = row;
                        return (
                          <TableRow hover role="checkbox" key={index}>
                            <TableCell align="left">
                              <Checkbox checked={check} onClick={() => {
                                dispatch(pustAction(typeAciton.checkOne, { _id }))
                              }} />
                            </TableCell>
                            <TableCell align="left">{title}</TableCell>
                            <TableCell align="left">
                              <Avatar alt={title} variant="rounded" src={image} />
                            </TableCell>
                            <TableCell align="left">{status === true ? 'Công khai' : 'Cá nhân'}</TableCell>
                            <TableCell align="left">{view}</TableCell>
                            <TableCell align='center'>
                              <Button
                                variant="contained"
                                color="error"
                                style={{ marginRight: 5 }} size="small"
                                onClick={() => { deleteOne(_id) }}
                              >
                                Delete
                              </Button>
                              <Button variant="contained" color="primary" size="small"
                                onClick={() => { navigatePage(page.UpdateBlog) }}
                              >Edit</Button>
                              <Button variant="contained" color="primary" size="small" style={{ marginLeft: 5 }}
                                onClick={() => { onOpen<string>(_id) }}
                              >More</Button>
                            </TableCell>
                          </TableRow>
                        )
                      }) : state.Display ? null : <TableRow>
                        <TableCell align="center" colSpan={12}>
                          <CircularProgress />
                        </TableCell>
                      </TableRow>
                  }
                </TableBody>
              </Table>
              <Box className={classes.styleBox}>
                <div>
                  <Button variant="contained" size="small" onClick={deleteAll}>Delete All</Button>
                  <Button
                    variant="contained"
                    size="small"
                    style={{ marginLeft: 5 }} onClick={() => { navigatePage(page.AddBlog) }}
                  >
                    Add
                  </Button>
                </div>
                <PaginationBlog state={state} dispatch={dispatch} />
              </Box>
            </TableContainer>
          </Paper>
        </div>
      </div>
    </>
  )
}

export default ListBlog

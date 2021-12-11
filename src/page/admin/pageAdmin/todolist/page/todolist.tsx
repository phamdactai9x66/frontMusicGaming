import React, { useReducer, useEffect, useState } from 'react'
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material"
import { Button, Checkbox, TextField, Typography, CircularProgress, Box } from "@mui/material"
import { Select, MenuItem,Menu, Avatar } from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';
import apiAlbum from "api/albumApi";
import { initialReducer, handleReducer, HandleGet, typeAciton, pustAction } from "component/MethodCommon";
import { variableCommon } from "component/variableCommon";
import PaginationPage from "../component/pagination";
import { makeStyles } from "@mui/styles";
import Modal from "page/admin/pageAdmin/todolist/component/Modal";
import { page } from "../index";
interface Todolist<T> {
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
  { id: 'name', label: 'Name ablum', minWidth: 170, align: 'left' },
  { id: 'price', label: 'Image', minWidth: 100, align: 'left' },
  // { id: 'quantity', label: 'Quantity', minWidth: 170, align: 'left' },
  { id: '', label: 'Handle', minWidth: 170, align: 'center' },
];
const Todolist: React.FC<Todolist<any>> = ({ changePage, set_id, ...props }) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  //
  const classes = useStyle();
  const [state, dispatch] = useReducer(handleReducer, initialReducer);
  const [stateModal, setstateModal] = useState<any>({ display: false, _id: null })

  useEffect(() => {
    (async () => {
      const query = {
        ...state.Filter
      }
      const [data, error] = await HandleGet(apiAlbum.getAll, query);
      delete query._limit;
      delete query._page
      const checkFindName = Object.entries(query).length;
      var [dataStatic] = await HandleGet(apiAlbum.getAll, checkFindName ? { ...query } : {});

      if (data?.status !== variableCommon.statusS) return dispatch(pustAction(typeAciton.error))

      setTimeout(() => {
        dispatch(pustAction(typeAciton.getData, { Data: data?.data, dataStatic: dataStatic?.data }))
      }, 1000);

    })()
    return () => {
      dispatch(pustAction(typeAciton.reset))
    }
  }, [state.Filter])

  const findName = (event: Event | any) => {
    const getValue = ((event.target as HTMLInputElement).value).trim()
    if (event.keyCode === 13) {
      dispatch(pustAction(typeAciton.findName, { title: getValue }))
    }
  }
  const onOpen = <T extends string>(_id: T) => {
    if ([undefined, null].includes(_id as any)) return;
    setstateModal((value: any) => ({ _id, display: true }))
  }
  const onClose = () => {
    setstateModal((value: any) => ({ ...value, display: false }))
  }
  const navigatePage = <T extends string>(page: T, _id?: T): void => {
    changePage(page);
    if (_id) set_id(_id)
  }
  const deleteOne = async (_id: string) => {
    if (!_id) return;
    dispatch(pustAction(typeAciton.deleteOne, { _id }))

    await apiAlbum.deleteOne(_id);
  }

  const deleteAll = () => {
    dispatch(pustAction(typeAciton.deleteAll))
    state.Data.forEach(async (currenV: any) => {
      const { _id, check } = currenV;
      if (check) {
        await apiAlbum.deleteOne(_id);
      }
    })
  }
  return (
    <>
      {stateModal._id && <Modal state={stateModal} onClose={onClose}></Modal>}
      <div style={{
        display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '800px', width: "100%"
      }}>
        <div style={{ flexBasis: 1000, margin: "0 auto" }}>
        <h2 className="mb-5">Albums</h2>
          <Paper sx={{ width: '100%' }}>
            <TableContainer style={{ padding: 20 }}>
              <Typography style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <TextField
                  InputProps={{
                    startAdornment: <SearchIcon style={{ marginRight: 10 }}></SearchIcon>,
                    placeholder: "searching"
                  }}
                  onKeyDown={findName}
                  size="small"
                />
                <Select
                  labelId="demosimpleselectlabel"
                  id="demosimpleselect"
                  label="Age"
                  value={10}
                  size="small"
                  style={{ width: 200 }}
                >
                  <MenuItem value={10}>sort date</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </Typography>

              <Table stickyHeader >
                <TableHead>
                  <TableRow>
                    <TableCell
                      key="awd"
                      align='left'
                      style={{ minWidth: 170 }}
                    >
                      <Checkbox id="checkAll" onClick={() => { dispatch(pustAction(typeAciton.checkAll)) }}

                        checked={state.checkAll} />
                      <label htmlFor="checkAll"> All</label>
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
                        const { title, image, id_Artist, check, _id } = row;
                        // console.log(check)
                        return (
                          <TableRow hover role="checkbox" key={index}>
                            <TableCell align='left'>
                              <Checkbox checked={check} onClick={() => {
                                dispatch(pustAction(typeAciton.checkOne, { _id }))
                              }} />
                            </TableCell>
                            <TableCell align='left'>
                              {title}
                            </TableCell>
                            <TableCell align='left'>
                              <Avatar alt="Remy Sharp" variant="rounded" src={image} />
                            </TableCell>
                            {/* <TableCell align='left'>
                              {id_Artist}
                            </TableCell> */}
                            <TableCell align='center'>
                            <div>
                                <Button
                                  id="demo-positioned-button"
                                  aria-controls="demo-positioned-menu"
                                  aria-haspopup="true"
                                  aria-expanded={open ? 'true' : undefined}
                                  onClick={handleClick}
                                >
                                  Click
                                </Button>
                                <Menu
                                  id="demo-positioned-menu"
                                  aria-labelledby="demo-positioned-button"
                                  anchorEl={anchorEl}
                                  open={open}
                                  onClose={handleClose}
                                  anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                  }}
                                  transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                  }}
                                >
                                  <div onClick={handleClose}><MenuItem onClick={() => { deleteOne(_id) }}>Delete</MenuItem></div>
                                  <div onClick={handleClose}><MenuItem onClick={() => { navigatePage(page.update, _id) }}>Edit</MenuItem></div>
                                  <div onClick={handleClose}><MenuItem onClick={() => { onOpen<string>(_id) }}>More</MenuItem></div>
                                </Menu>
                              </div>
                            </TableCell>
                          </TableRow>
                        );
                      }) :
                      state.Display ? null : <TableRow >
                        <TableCell align='center' colSpan={12} >
                          <CircularProgress />
                        </TableCell>
                      </TableRow>

                  }

                </TableBody>
              </Table>
              <Box className={classes.styleBox}>
                <div>
                  <Button variant="contained" size="small" onClick={deleteAll}>Delete All</Button>
                  <Button variant="contained" size="small"
                    style={{ marginLeft: 5 }} onClick={() => { navigatePage(page.add) }} >Add</Button>
                </div>
                <PaginationPage state={state} dispatch={dispatch} />
              </Box>
            </TableContainer>

          </Paper>
        </div>
      </div>

    </>
  )
}

export default Todolist

import React, { useReducer, useEffect, useState } from 'react'
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material"
import { Button, Checkbox, TextField, Typography, CircularProgress, Box } from "@mui/material"
import { Select, MenuItem, Avatar } from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';
import apiAlbum from "api/albumApi";
import { initialReducer, handleReducer, HandleGet, typeAciton, pustAction } from "component/MethodCommon";
import { variableCommon } from "component/variableCommon";
import PaginationPage from "./component/pagination";
import { makeStyles } from "@mui/styles";
import Modal from "component/Modal";
interface Todolist<T> {

}
const useStyle = makeStyles((theme) => ({
  styleBox: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
}))
const columns = [
  { id: 'name', label: 'Name', minWidth: 170, align: 'left' },
  { id: 'price', label: 'Price', minWidth: 100, align: 'left' },
  { id: 'quantity', label: 'Quantity', minWidth: 170, align: 'left' },
  { id: '', label: 'Handle', minWidth: 170, align: 'center' },
];
const Todolist: React.FC<Todolist<any>> = ({ ...props }) => {
  const classes = useStyle();
  const [state, dispatch] = useReducer(handleReducer, initialReducer);
  const [stateModal, setstateModal] = useState<any>(false)
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
    const getValue = (event.target as HTMLInputElement).value
    if (event.keyCode === 13) {
      dispatch(pustAction(typeAciton.findName, { title: getValue }))
    }
  }
  const onOpen = () => {
    setstateModal(true)
  }
  const onClose = () => {
    setstateModal(false)
  }
  return (
    <>
      <Modal state={stateModal} onClose={onClose}></Modal>
      <div style={{
        display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '600px', width: "100%"
      }}>
        <div style={{ flexBasis: 1000, margin: "0 auto" }}>
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
                            <TableCell align='left'>
                              {id_Artist}
                            </TableCell>
                            <TableCell align='center'>
                              <Button variant="contained" color="error" style={{ marginRight: 5 }} size="small"
                                onClick={() => {
                                  dispatch(pustAction(typeAciton.deleteOne, { _id }))
                                }}
                              >Delete</Button>
                              <Button variant="contained" color="primary" size="small">Edit</Button>
                              <Button variant="contained" color="primary" size="small" style={{ marginLeft: 5 }}
                                onClick={onOpen}
                              >More</Button>
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
                  <Button variant="contained" size="small" onClick={() => {
                    dispatch(pustAction(typeAciton.deleteAll))
                  }}>Delete All</Button>
                  <Button variant="contained" size="small" style={{ marginLeft: 5 }} >Add</Button>
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

import React, { useReducer, useState, useEffect } from 'react'
import { page } from '../index'
import categoryApi from 'api/categoryApi'
import { Select, Menu, MenuItem, Avatar } from "@mui/material"
import SearchIcon from '@mui/icons-material/Search'
import { variableCommon } from "component/variableCommon"
import PaginationCategory from "../component/PaginationCategory"
import { makeStyles } from "@mui/styles"
import ModalCategory from "page/admin/pageAdmin/categories/component/ModalCategory"
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material"
import { Button, Checkbox, TextField, Typography, CircularProgress, Box } from "@mui/material"
import { initialReducer, handleReducer, HandleGet, typeAciton, pustAction } from "component/MethodCommon";

interface ListCategory<T> {
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
  { id: 'name', label: 'Name category', minWidth: 170, align: 'left' },
  { id: 'price', label: 'Image', minWidth: 100, align: 'left' },
  { id: '', label: 'Handle', minWidth: 170, align: 'center' }
]

const ListCategory: React.FC<ListCategory<any>> = ({ changePage, set_id, ...props }) => {
  const classes = useStyle();
  const [state, dispatch] = useReducer(handleReducer, initialReducer);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const [stateModalCategory, setStateModalCategory] = useState<any>({ display: false, _id: null });

  useEffect(() => {
    (async () => {
      const query = {
        ...state.Filter
      }
      const [data, error] = await HandleGet(categoryApi.getAll, query);

      delete query._limit;
      delete query._page;

      const checkFindName = Object.entries(query).length;
      var [dataStatic] = await HandleGet(categoryApi.getAll, checkFindName ? { ...query } : {});

      if (data?.status !== variableCommon.statusS) return dispatch(pustAction(typeAciton.error));

      setTimeout(() => {
        dispatch(pustAction(typeAciton.getData, { Data: data?.data, dataStatic: dataStatic?.data }))
      }, 1000);

    })()
    return () => {
      dispatch(pustAction(typeAciton.reset))
    }
  }, [state.Filter])

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const findName = (event: Event | any) => {
    const getValue = ((event.target as HTMLInputElement).value).trim();
    if (event.keyCode === 13) {
      dispatch(pustAction(typeAciton.findName, { name: getValue }))
    }
  }

  const onOpen = <T extends string>(_id: T) => {
    if ([undefined, null].includes(_id as any)) return;
    setStateModalCategory((value: any) => ({ _id, display: true }))
  }

  const onClose = () => {
    setStateModalCategory((value: any) => ({ ...value, display: false }))
  }

  const navigatePage = <T extends string>(page: T, _id?: T): void => {
    changePage(page);
    if (_id) set_id(_id);
  }

  const deleteOne = async (_id: string) => {
    if (!_id) return;
    dispatch(pustAction(typeAciton.deleteOne, { _id }));
    await categoryApi.deleteOne(_id);
  }

  const deleteAll = () => {
    dispatch(pustAction(typeAciton.deleteAll));
    state.Data.forEach(async (currenV: any) => {
      const { _id, check } = currenV;
      if (check) {
        await categoryApi.deleteOne(_id)
      }
    })
  }

  return (
    <>
      {stateModalCategory._id && <ModalCategory state={stateModalCategory} onClose={onClose}></ModalCategory>}
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
          <h2 className="mb-5">Thể loại</h2>
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
                        const { name, image, check, _id } = row;
                        return (
                          <TableRow hover role="checkbox" key={index}>
                            <TableCell align="left">
                              <Checkbox checked={check} onClick={() => {
                                dispatch(pustAction(typeAciton.checkOne, { _id }))
                              }} />
                            </TableCell>
                            <TableCell align="left">{name}</TableCell>
                            <TableCell align="left">
                              <Avatar alt={name} variant="rounded" src={image} />
                            </TableCell>
                            <TableCell align='center'>
                            <div className="dropdown">
                                <button className="dropbtn">Action</button>
                                <div className="dropdown-content">
                                  <div onClick={() => { deleteOne(_id) }}><i className="fa fa-trash-o" aria-hidden="true"></i> Delete</div>
                                  <div onClick={() => { navigatePage(page.UpdateCategory, _id) }}><i className="fa fa-pencil-square-o" aria-hidden="true"></i> Edit</div>
                                  <div onClick={() => { onOpen<string>(_id) }}><i className="fa fa-info-circle" aria-hidden="true"></i> More</div>
                                </div>
                              </div> 
                            </TableCell>
                          </TableRow>
                        );
                      }) :
                      state.Display ? null : <TableRow>
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
                    style={{ marginLeft: 5 }} onClick={() => { navigatePage(page.AddCategory) }}
                  >
                    Add
                  </Button>
                </div>
                <PaginationCategory state={state} dispatch={dispatch} />
              </Box>
            </TableContainer>
          </Paper>
        </div>
      </div>
    </>
  )
}

export default ListCategory

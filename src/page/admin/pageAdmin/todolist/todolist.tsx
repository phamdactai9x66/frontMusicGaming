import React, { useReducer, useEffect } from 'react'
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material"
import { Button, Checkbox, TextField, Typography, CircularProgress, Box } from "@mui/material"
import { Select, MenuItem, Pagination } from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';
import apiAlbum from "api/albumApi";
import { initialReducer, handleReducer, HandleGet, typeAciton, pustAction } from "component/MethodCommon";
import { variableCommon } from "component/variableCommon";

interface Todolist<T> {

}
const columns = [
  { id: 'name', label: 'Name', minWidth: 170, align: 'left' },
  { id: 'price', label: 'Price', minWidth: 100, align: 'left' },
  { id: 'quantity', label: 'Quantity', minWidth: 170, align: 'left' },
  { id: '', label: 'Handle', minWidth: 170, align: 'center' },
];
const Todolist: React.FC<Todolist<any>> = ({ ...props }) => {
  const [state, dispatch] = useReducer(handleReducer, initialReducer);
  useEffect(() => {
    (async () => {
      let query = {
        ...initialReducer.Filter
      }
      const [data, error] = await HandleGet(apiAlbum.getAll, query);

      const [dataStatic] = await HandleGet(apiAlbum.getAll, query);
      console.log(data)
      if (data.status === variableCommon.statusF) dispatch(pustAction(typeAciton.reset))

      setTimeout(() => {
        dispatch(pustAction(typeAciton.getData, { Data: data.data, dataStatic: dataStatic.data }))
      }, 500);

    })()
    return () => {
      dispatch(pustAction(typeAciton.reset))
    }
  }, [])
  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80%', width: "100%" }}>
        <div style={{ flexBasis: 1000, margin: "0 auto" }}>
          <Paper sx={{ width: '100%' }}>
            <TableContainer style={{ padding: 20 }}>
              <Typography style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <TextField
                  InputProps={{
                    startAdornment: <SearchIcon style={{ marginRight: 10 }}></SearchIcon>,
                    placeholder: "searching"
                  }}
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
                  <MenuItem value={10}>Ten</MenuItem>
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
                      <Checkbox />
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
                  {/* {rows.map((row) => {
                    return (
                      <TableRow hover role="checkbox" key={row._id}>
                        <TableCell align='left'>
                          <Checkbox />
                        </TableCell>
                        <TableCell align='left'>
                          {row.name}
                        </TableCell>
                        <TableCell align='left'>
                          {row.price}
                        </TableCell>
                        <TableCell align='left'>
                          {row.quantity}
                        </TableCell>
                        <TableCell align='center'>
                          <Button variant="contained" color="error" style={{ marginRight: 5 }}>Contained</Button>
                          <Button variant="contained" color="primary">Contained</Button>
                        </TableCell>
                      </TableRow>
                    );
                  })} */}
                  <TableRow >
                    <TableCell align='center' colSpan={12} >
                      <CircularProgress />
                    </TableCell>
                  </TableRow>


                </TableBody>
              </Table>
              <Pagination count={10} onClick={() => { console.log() }} style={{ padding: 10, paddingTop: 20 }} />
            </TableContainer>

          </Paper>
        </div>
      </div>

    </>
  )
}

export default Todolist

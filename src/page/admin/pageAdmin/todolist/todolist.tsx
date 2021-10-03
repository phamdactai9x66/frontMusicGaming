import React from 'react'
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material"
import { Button, Checkbox, TextField, Typography, FormControl, InputLabel } from "@mui/material"
import { Select, MenuItem, Pagination } from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';
// import {} from "../../../../"

interface Todolist<T> {

}

const columns = [
  { id: 'name', label: 'Name', minWidth: 170, align: 'left' },
  { id: 'price', label: 'Price', minWidth: 100, align: 'left' },
  { id: 'quantity', label: 'Quantity', minWidth: 170, align: 'left' },
  { id: '', label: 'Handle', minWidth: 170, align: 'center' },
];
const rows = [
  { _id: 1, name: "test1", price: 100, quantity: 10 },
  { _id: 2, name: "test12", price: 100, quantity: 10 },
  { _id: 3, name: "test123", price: 100, quantity: 10 }
];
const Todolist: React.FC<Todolist<any>> = ({ ...props }) => {
  // const [state, dispatch] = useReducer(reducer, initialState, init)

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80%', width: "100%" }}>
        <div style={{ flexBasis: 1000, margin: "0 auto" }}>
          <Paper sx={{ width: '100%' }}>
            <TableContainer style={{ padding: 20 }}>
              <Typography style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <TextField
<<<<<<< HEAD
                  // multiline
                  // sx={{ m: 1, width: '25ch' }}
=======
>>>>>>> 6f127aab0ee9a3c338863df5f194cc6a136566c3
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
                  {rows.map((row) => {
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
                  })}
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

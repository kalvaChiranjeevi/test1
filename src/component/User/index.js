import React,{useMemo,useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MOCK_DATA from '../../MOCK_DATA.json';
import {COLUMNS} from '../../Colomns';
import { useTable, usePagination,useGlobalFilter } from 'react-table';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Header from '../Header';

/**
* @author
* @function Admin
**/

const Admin = (props) => {

  const mockdata =MOCK_DATA

  const [ob1, setOb1] = useState([...mockdata])

  const columns = useMemo(()=> COLUMNS,[]);
  const data = useMemo(()=>ob1,[ob1]);
  

  const tableInstance =useTable(
    {
      columns,
      data,
      initialState: { pageSize: 5 } 
    },
    useGlobalFilter, // useGlobalFilter!
    usePagination
  );
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    setGlobalFilter,
    state,
    page, // Instead of using 'rows', we'll use page,
    // which has only the rows for the active page

    // The rest of these things are super handy, too ;)
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize, globalFilter }
  } = tableInstance
  const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 300,
      display:'flex',
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));
  const classes = useStyles();
  const handleChange = (event) => {
    setGlobalFilter(event.target.value);
    
  };


  const add=()=>{
    const obj2 = {
    name:globalFilter,
    code:'ca11'
    }

  setOb1([...ob1,obj2])
  }

  return(
    <>
    {console.log( page.length)}
    {
      
      page.length!=0?" ":null
    }
    <Header />
    <Paper component="form" className={classes.root} onSubmit={(e)=>e.preventDefault()}>
      
      <InputBase
        className={classes.input}
        placeholder="Search Item"
        inputProps={{ 'aria-label': 'search google maps' }}
      value= {globalFilter ||''} 
        onChange={e=>setGlobalFilter(e.target.value)}
      />
      <IconButton type="submit"  className={classes.iconButton} aria-label="search">
        <SearchIcon />
      </IconButton>
      <Divider className={classes.divider} orientation="vertical" />
     
    </Paper>

    <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">Country</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={globalFilter || ''}
          onChange={handleChange}
          label="Age"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {
            page.map(res=>{
              return <MenuItem key={res.original.code} value={res.original.name}>{res.original.name}</MenuItem>
            })
          }
          
         
        </Select>
      </FormControl>
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps()}>
                {column.render("Header")}
                {/* Render the columns filter UI */}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        { page.length!=0?  page.map((row, i) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => {
                return (
                  <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                );
              })}
            </tr>
          );
        }):"NO DATA FOUND"}
      </tbody>
    </table>
    <div className="pagination">
      
      

      <button onClick={() => nextPage()} disabled={!canNextPage}>
        {"5 more"}
      </button>
    </div>

    <br />
    
  </>
   )

 }

export default Admin
import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import MaterialTable from 'material-table';
import tableIcons from './tableIcons';
import "./table.css";
import { Button } from '@material-ui/core';
// import { ThemeProvider } from "@mui/material";

const Table = ({data, setData}) => {
  
  // const { useState } = React;

  const [columns, setColumns] = useState([
    { title: 'NAME', field: 'name' },
    { title: 'EMAIL-ID', field: 'emailId'},
    { title: 'SCHOOL NAME', field: 'schoolName'},
    { title: 'GRADES' , field: 'grades'},
    { title: 'STATUS' , field: 'status'},
    {
      title: 'ACTION',
        field: 'url',
        render: rowData => <>
        <span style={{marginRight: '10px'}} onClick={() => {
            if (window.confirm('Are you sure you want to delete this row?')) {
              const index = data.indexOf(rowData);
              data.splice(index, 1);
              setColumns([...columns]);
            }
          }}>
            <svg fill="#fc0000" height="20px" width="20px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" stroke="#fc0000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M5.755,20.283,4,8H20L18.245,20.283A2,2,0,0,1,16.265,22H7.735A2,2,0,0,1,5.755,20.283ZM21,4H16V3a1,1,0,0,0-1-1H9A1,1,0,0,0,8,3V4H3A1,1,0,0,0,3,6H21a1,1,0,0,0,0-2Z"></path></g></svg>
          </span>
          <span style={{marginLeft: '10px'}}>
            <Link to={`/student/${rowData.id}`}><svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 20 20"><path d="M14.846 1.403l3.752 3.753.625-.626A2.653 2.653 0 0015.471.778l-.625.625zm2.029 5.472l-3.752-3.753L1.218 15.028 0 19.998l4.97-1.217L16.875 6.875z" fill="#5C5F62"/></svg></Link>
          </span>
          </>
      }
  ]);

  // const [data, setData] = useState(rowData);
  
  // const handleUpdateData = (updatedData) => {
  //   setData(updatedData);
  //   updateData(updatedData);
  // };
  const filteredData = data.filter((row) => {
    const [date, month, year] = row.date.split('/');
    return  year === '2023';
  });

  return (
    <div className='table-main'>
    <MaterialTable
    title="Student"
    columns={columns}
    icons={tableIcons}
    data={filteredData}
    // editable={{
    //     // onRowAdd: newData =>
    //     //   new Promise((resolve, reject) => {
    //     //     setTimeout(() => {
    //     //       setData([...data, newData]);
              
    //     //       resolve(); 
    //     //     }, 1000)
    //     //   }),
    //     // onRowUpdate: (newData, oldData) =>
    //     //   new Promise((resolve, reject) => {
    //     //     setTimeout(() => {
    //     //       const dataUpdate = [...data];
    //     //       const index = oldData.tableData.id;
    //     //       dataUpdate[index] = newData;
    //     //       setData([...dataUpdate]);

    //     //       resolve();
    //     //     }, 1000)
    //     //   }),
    //     // onRowDelete: oldData =>
    //     //   new Promise((resolve, reject) => {
    //     //     setTimeout(() => {
    //     //       const dataDelete = [...data];
    //     //       const index = oldData.tableData.id;
    //     //       dataDelete.splice(index, 1);
    //     //       setData([...dataDelete]);
              
    //     //       resolve()
    //     //     }, 1000)
    //     //   }),
        
    //   }}
      // actions={[
      //   rowData => ({
      //     icon: 'delete',
      //     tooltip: 'Delete User',
      //     onClick: (event, rowData) => window.confirm("You want to delete " + rowData.name),
      //   })
      // ]}

      options={{

        search: true,
        paginationStyle: { backgroundColor: 'red'},
        actionsColumnIndex: -1, sorting: true, selection: true,
        pageSizeOptions: [], paginationType: 'stepped',
        pageSize: 8 , showFirstLastPageButtons: false, 

        rowStyle: rowData => ({
          backgroundColor: (rowData.tableData.id %2 === 0) ? '#FFF' : '#D9D9D9',
        fontSize: '18px' ,
        fontWeight: '400' ,
      }),
          headerStyle: {
              backgroundColor: '#0E192F',
              color: '#FFFFFF',
              selectionBox: '#ffffff',
              fontSize: '16px' ,
              padding: '1px',
              fontWeight: '500' ,
            },
        }}
    />
    </div>
  )
}

export default Table;
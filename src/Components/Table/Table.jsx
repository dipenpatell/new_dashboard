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
  ]);

  // const [data, setData] = useState(rowData);
  
  // const handleUpdateData = (updatedData) => {
  //   setData(updatedData);
  //   updateData(updatedData);
  // };
  
  return (
    <div className='table-main'>
    <MaterialTable
    title="Student"
    columns={columns}
    icons={tableIcons}
    data={data}
    editable={{
        // onRowAdd: newData =>
        //   new Promise((resolve, reject) => {
        //     setTimeout(() => {
        //       setData([...data, newData]);
              
        //       resolve(); 
        //     }, 1000)
        //   }),
        // onRowUpdate: (newData, oldData) =>
        //   new Promise((resolve, reject) => {
        //     setTimeout(() => {
        //       const dataUpdate = [...data];
        //       const index = oldData.tableData.id;
        //       dataUpdate[index] = newData;
        //       setData([...dataUpdate]);

        //       resolve();
        //     }, 1000)
        //   }),
        onRowDelete: oldData =>
          new Promise((resolve, reject) => {
            setTimeout(() => {
              const dataDelete = [...data];
              const index = oldData.tableData.id;
              dataDelete.splice(index, 1);
              setData([...dataDelete]);
              
              resolve()
            }, 1000)
          }),
        
      }}

      actions={[
          
          {
          icon: 'delete',
          tooltip: 'Delete User',
          onClick: (event, rowData) => alert("You want to delete " + rowData.name),
          },
        ]}

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
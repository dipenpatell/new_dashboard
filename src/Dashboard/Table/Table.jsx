import React, {useState} from 'react';
import MaterialTable from 'material-table';
import tableIcons from './tableIcons';
import "./table.css";
// import { ThemeProvider } from "@mui/material";

function Table() {
    
  const { useState } = React;

  const [columns, setColumns] = useState([
    { title: 'NAME', field: 'name' },
    { title: 'EMAIL-ID', field: 'emailId'},
    { title: 'SCHOOL NAME', field: 'schoolName'},
    { title: 'GRADES' , field: 'grades'},
    { title: 'STATUS' , field: 'status'},
  ]);

  const [data, setData] = useState([
    { name: 'Dipen Patel', emailId: 'dipenpatel123@gmail.com', schoolName: 'ABC School', grades: '90%', status: 'Completed'},
    { name: 'Dipen Patel', emailId: 'dipenpatel123@gmail.com', schoolName: 'ABC School', grades: '90%', status: 'Incomplete' },
    { name: 'Dipen Patel', emailId: 'dipenpatel123@gmail.com', schoolName: 'ABC School', grades: '90%', status: 'Pending' },
    { name: 'Dipen Patel', emailId: 'dipenpatel123@gmail.com', schoolName: 'ABC School', grades: '90%', status: 'Completed' },
    { name: 'Dipen Patel', emailId: 'dipenpatel123@gmail.com', schoolName: 'ABC School', grades: '90%', status: 'Completed'},
    { name: 'Dipen Patel', emailId: 'dipenpatel123@gmail.com', schoolName: 'ABC School', grades: '90%', status: 'Incomplete' },
    { name: 'Dipen Patel', emailId: 'dipenpatel123@gmail.com', schoolName: 'ABC School', grades: '90%', status: 'Pending' },
    { name: 'Dipen Patel', emailId: 'dipenpatel123@gmail.com', schoolName: 'ABC School', grades: '90%', status: 'Completed' },
    { name: 'Dipen Patel', emailId: 'dipenpatel123@gmail.com', schoolName: 'ABC School', grades: '90%', status: 'Completed'},
    { name: 'Dipen Patel', emailId: 'dipenpatel123@gmail.com', schoolName: 'ABC School', grades: '90%', status: 'Incomplete' },
    { name: 'Dipen Patel', emailId: 'dipenpatel123@gmail.com', schoolName: 'ABC School', grades: '90%', status: 'Completed'},
    { name: 'Dipen Patel', emailId: 'dipenpatel123@gmail.com', schoolName: 'ABC School', grades: '90%', status: 'Incomplete' },
    { name: 'Dipen Patel', emailId: 'dipenpatel123@gmail.com', schoolName: 'ABC School', grades: '90%', status: 'Pending' },
    { name: 'Dipen Patel', emailId: 'dipenpatel123@gmail.com', schoolName: 'ABC School', grades: '90%', status: 'Completed' },
    { name: 'Dipen Patel', emailId: 'dipenpatel123@gmail.com', schoolName: 'ABC School', grades: '90%', status: 'Completed'},
    { name: 'Dipen Patel', emailId: 'dipenpatel123@gmail.com', schoolName: 'ABC School', grades: '90%', status: 'Incomplete' },
    { name: 'Dipen Patel', emailId: 'dipenpatel123@gmail.com', schoolName: 'ABC School', grades: '90%', status: 'Pending' },
    { name: 'Dipen Patel', emailId: 'dipenpatel123@gmail.com', schoolName: 'ABC School', grades: '90%', status: 'Completed' },
    { name: 'Dipen Patel', emailId: 'dipenpatel123@gmail.com', schoolName: 'ABC School', grades: '90%', status: 'Completed'},
    { name: 'Dipen Patel', emailId: 'dipenpatel123@gmail.com', schoolName: 'ABC School', grades: '90%', status: 'Incomplete' },
  ]);
  
  
  return (
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
        onRowUpdate: (newData, oldData) =>
          new Promise((resolve, reject) => {
            setTimeout(() => {
              const dataUpdate = [...data];
              const index = oldData.tableData.id;
              dataUpdate[index] = newData;
              setData([...dataUpdate]);

              resolve();
            }, 1000)
          }),
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
      options={{
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
  )
}

export default Table;
import './App.css';
import { useState } from 'react';
import { BrowserRouter, Switch, Route, Routes } from 'react-router-dom';
import SearchBar from './Dashboard/Sidebar/SearchBar';
import SideBar from './Dashboard/Sidebar/SideBar';
import Table from './Components/Table/Table';
import StudentDetails from './Components/Student Detail/StudentDetails';



const App = () => {
  const [rowData, setData] = useState([
      {id: '001', name: 'Dipen Patel', emailId: 'dipenpatel123@gmail.com', schoolName: 'ABC School', grades: '90%', status: 'Completed', class: '8', contact: '9874561231', exCurr: 'Painting', Address: 'New Delhi', Attendance: '95'},
      {id: '003', name: 'Dipen Patel', emailId: 'dipenpatel123@gmail.com', schoolName: 'ABC School', grades: '90%', status: 'Pending', class: '8', contact: '9874561231', exCurr: 'Painting', Address: 'New Delhi', Attendance: '95' },
      {id: '004', name: 'Dipen Patel', emailId: 'dipenpatel123@gmail.com', schoolName: 'ABC School', grades: '90%', status: 'Completed', class: '8', contact: '9874561231', exCurr: 'Painting', Address: 'New Delhi', Attendance: '95' },
      {id: '005', name: 'Dipen Patel', emailId: 'dipenpatel123@gmail.com', schoolName: 'ABC School', grades: '90%', status: 'Completed', class: '8', contact: '9874561231', exCurr: 'Painting', Address: 'New Delhi', Attendance: '95'},
      {id: '006', name: 'Dipen Patel', emailId: 'dipenpatel123@gmail.com', schoolName: 'ABC School', grades: '90%', status: 'Incomplete' , class: '8', contact: '9874561231', exCurr: 'Painting', Address: 'New Delhi', Attendance: '95'},
      {id: '002', name: 'Dipen Patel', emailId: 'dipenpatel123@gmail.com', schoolName: 'ABC School', grades: '90%', status: 'Incomplete' , class: '8', contact: '9874561231', exCurr: 'Painting', Address: 'New Delhi', Attendance: '95'},
      {id: '007', name: 'Dipen Patel', emailId: 'dipenpatel123@gmail.com', schoolName: 'ABC School', grades: '90%', status: 'Pending' , class: '8', contact: '9874561231', exCurr: 'Painting', Address: 'New Delhi', Attendance: '95'},
      {id: '008', name: 'Dipen Patel', emailId: 'dipenpatel123@gmail.com', schoolName: 'ABC School', grades: '90%', status: 'Completed' , class: '8', contact: '9874561231', exCurr: 'Painting', Address: 'New Delhi', Attendance: '95'},
      {id: '009', name: 'Dipen Patel', emailId: 'dipenpatel123@gmail.com', schoolName: 'ABC School', grades: '90%', status: 'Completed', class: '8', contact: '9874561231', exCurr: 'Painting', Address: 'New Delhi', Attendance: '95'},
      {id: '010', name: 'Dipen Patel', emailId: 'dipenpatel123@gmail.com', schoolName: 'ABC School', grades: '90%', status: 'Incomplete' , class: '8', contact: '9874561231', exCurr: 'Painting', Address: 'New Delhi', Attendance: '95'},
      {id: '011', name: 'Dipen Patel', emailId: 'dipenpatel123@gmail.com', schoolName: 'ABC School', grades: '90%', status: 'Completed', class: '8', contact: '9874561231', exCurr: 'Painting', Address: 'New Delhi', Attendance: '95'},
      {id: '012', name: 'Dipen Patel', emailId: 'dipenpatel123@gmail.com', schoolName: 'ABC School', grades: '90%', status: 'Incomplete' , class: '8', contact: '9874561231', exCurr: 'Painting', Address: 'New Delhi', Attendance: '95'},
      {id: '013', name: 'Dipen Patel', emailId: 'dipenpatel123@gmail.com', schoolName: 'ABC School', grades: '90%', status: 'Pending' , class: '8', contact: '9874561231', exCurr: 'Painting', Address: 'New Delhi', Attendance: '95'},
      {id: '014', name: 'Dipen Patel', emailId: 'dipenpatel123@gmail.com', schoolName: 'ABC School', grades: '90%', status: 'Completed' , class: '8', contact: '9874561231', exCurr: 'Painting', Address: 'New Delhi', Attendance: '95'},
      ]);

    // const updateData = (updatedData) => {
    //   setData(updatedData);
    // }
    
    return (
    <div className="App">
      <BrowserRouter>
        <SideBar/>
          <div className='side-main'>
            <SearchBar />  
            <Routes>  
            <Route exact element={<Table data={rowData} setData={setData} />} path="/dashboard" />
            <Route  element={<StudentDetails data={rowData} setData={setData} />}
              path="/Student-Detail/:id" />
            </Routes>
          </div>
      </BrowserRouter>
    </div>
  );
}

export default App;

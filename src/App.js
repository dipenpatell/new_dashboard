import './App.css';
import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SearchBar from './Dashboard/Sidebar/SearchBar';
import SideBar from './Dashboard/Sidebar/SideBar';
import Table from './Components/Table/Table';
import StudentDetails from './Components/Student Detail/StudentDetails';



const App = () => {
  const [route, setRoute] = useState("/dashboard");

const handleRouteChange = (event) => {
  setRoute(event.path);
};
  const [rowData, setData] = useState([
      {id: '001', name: 'Dipen Patel', emailId: 'dipenpatel123@gmail.com', schoolName: 'ABC School', grades: '90%', status: 'Completed', class: '8', contact: '9874561231', exCurr: 'Painting', Address: 'New Delhi', Attendance: '95', date: "16/06/2023"},
      {id: '003', name: 'Dipen Patel', emailId: 'dipenpatel123@gmail.com', schoolName: 'ABC School', grades: '90%', status: 'Pending', class: '8', contact: '9874561231', exCurr: 'Painting', Address: 'New Delhi', Attendance: '95', date: "16/06/2023" },
      {id: '004', name: 'Dipen Patel', emailId: 'dipenpatel123@gmail.com', schoolName: 'ABC School', grades: '90%', status: 'Completed', class: '8', contact: '9874561231', exCurr: 'Painting', Address: 'New Delhi', Attendance: '95', date: "16/06/2023" },
      {id: '005', name: 'Dipen Patel', emailId: 'dipenpatel123@gmail.com', schoolName: 'ABC School', grades: '90%', status: 'Completed', class: '8', contact: '9874561231', exCurr: 'Painting', Address: 'New Delhi', Attendance: '95', date: "16/05/2023"},
      {id: '006', name: 'Dipen Patel', emailId: 'dipenpatel123@gmail.com', schoolName: 'ABC School', grades: '90%', status: 'Incomplete' , class: '8', contact: '9874561231', exCurr: 'Painting', Address: 'New Delhi', Attendance: '95', date: "16/05/2023"},
      {id: '002', name: 'Dipen Patel', emailId: 'dipenpatel123@gmail.com', schoolName: 'ABC School', grades: '90%', status: 'Incomplete' , class: '8', contact: '9874561231', exCurr: 'Painting', Address: 'New Delhi', Attendance: '95', date: "16/05/2023"},
      {id: '007', name: 'Dipen Patel', emailId: 'dipenpatel123@gmail.com', schoolName: 'ABC School', grades: '90%', status: 'Pending' , class: '8', contact: '9874561231', exCurr: 'Painting', Address: 'New Delhi', Attendance: '95', date: "16/05/2023"},
      {id: '008', name: 'Dipen Patel', emailId: 'dipenpatel123@gmail.com', schoolName: 'ABC School', grades: '90%', status: 'Completed' , class: '8', contact: '9874561231', exCurr: 'Painting', Address: 'New Delhi', Attendance: '95', date: "16/04/2023"},
      {id: '009', name: 'Dipen Patel', emailId: 'dipenpatel123@gmail.com', schoolName: 'ABC School', grades: '90%', status: 'Completed', class: '8', contact: '9874561231', exCurr: 'Painting', Address: 'New Delhi', Attendance: '95', date: "16/04/2023"},
      {id: '010', name: 'Dipen Patel', emailId: 'dipenpatel123@gmail.com', schoolName: 'ABC School', grades: '90%', status: 'Incomplete' , class: '8', contact: '9874561231', exCurr: 'Painting', Address: 'New Delhi', Attendance: '95', date: "16/03/2023"},
      {id: '011', name: 'Dipen Patel', emailId: 'dipenpatel123@gmail.com', schoolName: 'ABC School', grades: '90%', status: 'Completed', class: '8', contact: '9874561231', exCurr: 'Painting', Address: 'New Delhi', Attendance: '95', date: "16/03/2023"},
      {id: '012', name: 'Dipen Patel', emailId: 'dipenpatel123@gmail.com', schoolName: 'ABC School', grades: '90%', status: 'Incomplete' , class: '8', contact: '9874561231', exCurr: 'Painting', Address: 'New Delhi', Attendance: '95', date: "16/03/2023"},
      {id: '013', name: 'Dipen Patel', emailId: 'dipenpatel123@gmail.com', schoolName: 'ABC School', grades: '90%', status: 'Pending' , class: '8', contact: '9874561231', exCurr: 'Painting', Address: 'New Delhi', Attendance: '95', date: "16/03/2023"},
      {id: '014', name: 'Dipen Patel', emailId: 'dipenpatel123@gmail.com', schoolName: 'ABC School', grades: '90%', status: 'Completed' , class: '8', contact: '9874561231', exCurr: 'Painting', Address: 'New Delhi', Attendance: '95', date: "16/03/2023"},
      ]);

    // const updateData = (updatedData) => {
    //   setData(updatedData);
    // }
    
    return (
    <div className="App">
      <div className='main-container'>
      <BrowserRouter>
        <SideBar/>
          <div className='side-main'>
            <SearchBar />  
            <Routes onChange={handleRouteChange}>  
              <Route exact element={<Table data={rowData} setData={setData} />} path="/" />
              <Route  element={<StudentDetails data={rowData} setData={setData} />} path="/student/:id" />
            </Routes>
          </div>
      </BrowserRouter>
      </div>
    </div>
  );
}

export default App;

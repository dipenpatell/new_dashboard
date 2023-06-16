import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import "./StudentDetails.css";

const StudentDetails = ({ data, setData }) => {
  const [editable, setEditable] = useState(false);

  const handleEdit = () => {
    setEditable(true);
  };

  const handleSave = () => {
    setEditable(false);
  };

  const handleChange = (event, field) => {
    const updatedData = data.map((student) => {
      if (student.id === id) {
        return { ...student, [field]: event.target.textContent };
      }
      return student;
    });
    setData(updatedData);
  };

  const { id } = useParams();
  const student = data.find((item) => item.id === id);

  if (!student) {
    return <div>Student not found.</div>;
  }

  return (
    <div className="DetailContainer">
      <div className="heading">
        <h1>{student.id}</h1>
        {editable ? (
          <button onClick={handleSave}>
            Save
            <svg xmlns="http://www.w3.org/2000/svg" fill="#5C5F62" width="25px" height="25px" viewBox="0 0 24 24"><g id="SVGRepo_bgCarrier" stroke-width="0"/><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/><g id="SVGRepo_iconCarrier"><path d="M21,20V8.414a1,1,0,0,0-.293-.707L16.293,3.293A1,1,0,0,0,15.586,3H4A1,1,0,0,0,3,4V20a1,1,0,0,0,1,1H20A1,1,0,0,0,21,20ZM9,8h4a1,1,0,0,1,0,2H9A1,1,0,0,1,9,8Zm7,11H8V15a1,1,0,0,1,1-1h6a1,1,0,0,1,1,1Z"/></g></svg>
          </button>
        ) : (
          <button onClick={handleEdit}>
            Edit
            <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 20 20"><path d="M14.846 1.403l3.752 3.753.625-.626A2.653 2.653 0 0015.471.778l-.625.625zm2.029 5.472l-3.752-3.753L1.218 15.028 0 19.998l4.97-1.217L16.875 6.875z" fill="#5C5F62"/></svg>
            </button>
        )}
      </div>
      <div className="profile">
        <div className="avatar">
          <img className="avatar" src="https://cdn-icons-png.flaticon.com/512/354/354637.png" alt="Avatar" />
        </div>
        <div className="details">
          <p
            contentEditable={editable}
            onBlur={(event) => handleChange(event, 'name')}
          >
            {student.name}
          </p>
          <p
            contentEditable={editable}
            onBlur={(event) => handleChange(event, 'class')}
          >
            Class {student.class}
          </p>
          <p>{student.schoolName}</p>
        </div>
      </div>

      <h2>Personal Information</h2>
      <div className="InfoContainer">
        <div className="pt 1">
          <h3>Email ID</h3>
          <p
            contentEditable={editable}
            onBlur={(event) => handleChange(event, 'emailId')}
          >
            {student.emailId}
          </p>
          <h3>Contact Number</h3>
          <p
            contentEditable={editable}
            onBlur={(event) => handleChange(event, 'contact')}
          >
            {student.contact}
          </p>
        </div>
        <div className="pt 2">
          <h3>Grades</h3>
          <p
            contentEditable={editable}
            onBlur={(event) => handleChange(event, 'grades')}
          >
            {student.grades}
          </p>
          <h3>Attendance</h3>
          <p
            contentEditable={editable}
            onBlur={(event) => handleChange(event, 'Attendance')}
          >
            {student.Attendance}%
          </p>
        </div>
        <div className="pt 3">
          <h3>Address</h3>
          <p
            contentEditable={editable}
            onBlur={(event) => handleChange(event, 'Address')}
          >
            {student.Address}
          </p>
          <h3>Extra curricular</h3>
          <p
            contentEditable={editable}
            onBlur={(event) => handleChange(event, 'exCurr')}
          >
            {student.exCurr}
          </p>
        </div>
      </div>
      </div>
      )
}

export default StudentDetails;


// import "./StudentDetails.css";

// import React, { useState } from 'react';
// import { useParams } from 'react-router-dom';


// const StudentDetails = ({data, setData}) => {
  
//   const [editable, setEditable] = useState(false);
//   const [editedName, setEditedName] = useState('');
  
//   const handleEdit = () => {
//     setEditable(true);
//     setEditedName(student.name);
//   };

//   const handleSave = () => {
//     setEditable(false);
//     // Save the edited content to the state
    
//     const updatedData = data.map((student) => {
//       if (student.id === id) {
//         return { ...student, name: editedName };
//       }
//       return student;
//     });
//     setData(updatedData);
    
//   };

//   const handleChange = (event) => {
//     // setData(event.target.value);
//   };
//   const { id } = useParams();

//   // Find the selected student based on the ID
//   const student = data.find(item => item.id === id);

//   if (!student) {
//     return <div>Student not found.</div>;
//   }
  
//   return (
//     <div className="DetailContainer">
//       <div className="heading">
//         <h1>Profile Details</h1>
//         {editable ? (
//           <button onClick={handleSave}>Save</button>
//         ) : (
//           <button onClick={handleEdit}>Edit</button>
//         )}
//       </div>
//       <div className="profile">
//         <div className="avatar">
//         <img className='avatar' src='https://cdn-icons-png.flaticon.com/512/354/354637.png'/>
//         </div>
//         <div className="details">
//           <p contentEditable={editable} onBlur={handleChange}>{student.name}</p>
//           <p>Class {student.class}</p>
//           <p>{student.schoolName}</p>
//         </div>
//       </div>

//       <h2>Personal Information</h2>
//       <div className="InfoContainer">
//         <div className="pt 1">
//           <h3>Email ID</h3>
//           <p>{student.emailId}</p>
//           <h3>Contact Number</h3>
//           <p>{student.contact}</p>
//         </div>
//         <div className="pt 2">
//           <h3>Grades</h3>
//           <p>{student.grades}</p>
//           <h3>Attendance</h3>
//           <p>{student.Attendance}%</p>
//         </div>
//         <div className="pt 3">
//           <h3>Address</h3>
//           <p>{student.Address}</p>
//           <h3>Extra curricular</h3>
//           <p>{student.exCurr}</p>
//         </div>
//       {/* <p>Status: {student.status}</p> */}
      
//       </div>
//     </div>
//   )
// }

// export default StudentDetails
import React from 'react'
import './Calender.css'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
const Calender = () => {
  const today = new Date();
  const formattedDate = today.toLocaleDateString();

  return (
    <div id='ccd'>
        <h1 id='cdd'>{formattedDate}</h1> 
        {/* <NotificationsNoneIcon className='mui' style={{
             fontSize: "40px",
             marginTop:"5px"
     }}/> */}
    </div>
  )
}

export default Calender

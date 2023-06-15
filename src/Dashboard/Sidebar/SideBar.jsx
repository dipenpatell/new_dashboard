import React from 'react'
import './SideBar.css'
import { SideBarData } from './SideBarData';
import LogoutIcon from '@mui/icons-material/Logout';
const SideBar = () => {
  return (
    <div className='main'>
      <div className='top'>
        <div className='hh3' ><h3>Peershala</h3></div>
        <img className='imgp' src='https://cdn-icons-png.flaticon.com/512/354/354637.png'/>
        <div><p className='hh3'>Jenifer</p></div>
        <hr id='hrline'/>
      </div>
        <div className='bottom'>
          <ul>
            {SideBarData.map((val,key)=>{
              return (
                <div className='anim'>
                <li className='row' key={key}
                onClick={()=>{
                  window.location.pathname = val.link;
                }}
                >
                {" "}
                <div id='icon'>{val.icon}</div>
                <div id='title'>{val.title}</div>
                </li>
                </div>
              )
            })}
          </ul>  
        </div>
        <div className='log'>
        <LogoutIcon className='ic'/>
        <button id='but' className='lg'>Logout</button>
          </div>
    </div>
  )
}

export default SideBar

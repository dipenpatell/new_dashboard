import React from 'react' 
import './SearchBar.css'
import { Height } from '@material-ui/icons';
import Calender from './Calender';
const SearchBar = () => {
  const mystyle = {
    borderRadius : '25px'
  };
  return (
    <>
    <div className='cal'>
    <div>
      <div className='sb'>
      <form className='roww'>
      <input type='text' style={mystyle}placeholder='Search'/>
      <button className='butt' type='submit'>
        <img className='imgg' src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Search_Icon.svg/1024px-Search_Icon.svg.png'/>
      </button>
      </form>
      </div>
    </div>
    <Calender/>
    </div>
    </>
  )
}

export default SearchBar

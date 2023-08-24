import React, {useState} from 'react';
import Sidebar from '../Sidebar/Sidebar';
import Navbar from '../Navbar/Navbar';

const Reminder = (props) => {
    const[bool,SetBool]=useState(false)

  function handleMenu(){
    bool ? SetBool(false):SetBool(true)
  }
  return (
    <div>
        <Sidebar hide={bool && "55px"} active="active"/>
    {/* <Navbar 
      menu={handleMenu}
      style={{left:bool && "60px", width:bool && "calc(100% - 60px)"}}
    /> */}
       <div> Reminder</div>
    </div>
  )
}

export default Reminder
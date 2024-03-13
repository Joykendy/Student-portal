import React, { useState } from 'react';
import './sidebar.css';
// import { FiHome } from "react-icons/fi";
import { SidebarData } from '../../Data/SideBarData';
const Logo ='/src/images/Logo.jpg';


const SideBar = () => {

      const[selected,setSelected]=useState(0)
  return (
    <div className='Sidebar'>
      <div className='logo'>
        <img src={Logo} alt="logo" />
        <span>student</span>
      </div>
      <div className="menu">
        {SidebarData.map((item, index) => (
          <div className={selected===index ?'menuItem active':'menuItem' }
          key={index}
          onClick={()=>setSelected(index)}>
            <item.icon/>
            <span>{item.heading}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SideBar;

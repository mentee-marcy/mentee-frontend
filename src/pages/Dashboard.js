import React, {useState} from 'react';
import Sidebar from '../components/SideBar';
import Switch from '../components/Switch';


export default function Dashboard() {
  return (
    <div style={{minHeight: '100vh', backgroundColor:'#2B2B2B!important'}}>
      <Sidebar/>
      <div style={{paddingLeft: '50%'}}>
      <Switch />
      </div>
    </div>
  )
}

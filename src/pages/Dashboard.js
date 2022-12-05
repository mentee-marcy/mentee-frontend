import React, {useState} from 'react';
import Sidebar from '../components/SideBar';
import Switch from '../components/Switch';


export default function Dashboard() {
  return (
    <div style={{minHeight: '100vh', maxWidth:'100vh', backgroundColor:'blue!important'}}>
      <Sidebar/>
      <p style={{}}>Find your Mentee Community Today</p>
      <div style={{paddingLeft: '10%'}}>
      <Switch />
      </div>
    </div>
  )
}

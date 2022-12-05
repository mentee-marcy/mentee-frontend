import React, {useState} from 'react';
import Sidebar from '../components/SideBar';
import Switch from '../components/Switch';


export default function Dashboard() {
  return (
    <div style={{minHeight: '100vh', maxWidth:'100vh', backgroundColor:'blue!important'}}>
      <Sidebar/>
      <div>
      <p style={{fontFamily:'KohinoorBangla-Semibold', fontSize:'2.5rem', position: 'absolute', paddingLeft: '30%'}}>Find your Mentee Community Today</p>
      </div>
      <div style={{paddingLeft: '20%', paddingTop: '4rem'}}>
      <Switch />
      </div>
    </div>
  )
}

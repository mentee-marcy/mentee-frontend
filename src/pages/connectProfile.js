import React from 'react'
import Sidebar from '../components/SideBar'
import axios from 'axios'
import { useState, useEffect } from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

export default function Profile() {

let [name, setName] = useState('')
let [techStack, setStack] = useState([]);
useEffect(() => {
    axios.get('http://localhost:8000/users/profile')
    .then(resp => {
        setName(resp.data);
        const tech = resp.data.tech_stack;
        setStack(tech);
    })
}, []);
const isMentor = name.mentor;

function stringToColor(string) {
    let hash = 0;
    let i;
  
    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }
  
    let color = '#';
  
    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }
  
    return color;
  }
  
  function stringAvatar(name) {
    return {
      sx: {
        bgcolor: stringToColor(name),
      },
      children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
    };
  }
  

  return (
    <div>
        <Sidebar/>
        <div style={{display:'grid',color:'white',paddingLeft: '35rem', paddingRight: '20rem'}}>
        <div style={{paddingLeft:'5rem'}}>
            <Avatar style={{width:'150px',height:'150px', marginLeft:'10px', fontSize:'5.5rem'}} {...stringAvatar(`${name.first_name} ${name.last_name}`)} />
        </div>
        <div style={{display:'flex',paddingLeft:'1rem'}}>
            <p style={{fontSize:'3rem'}}>{`${name.first_name} ${name.last_name} `}</p>
            {isMentor ? <img style={{width:'50px',height:'50px', marginLeft:'10px'}}alt=''src={require('../icon.PNG')}/> : <div/>}
        </div>
            <p style={{paddingLeft:'8.5rem',paddingBottom:'1rem'}}>New York</p>
            
            <ul style={{display:'flex', flexDirection:'row', listStyle:'none', paddingLeft:'1.9rem'}}>
            {techStack.map(el => <li style={{padding:'.7rem', fontSize:'1.3rem'}}>{`${el}  `}</li>)}
            </ul>
        </div>
    </div>
  )
}

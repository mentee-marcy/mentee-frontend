import React from 'react'
import Sidebar from '../components/SideBar'
import axios from 'axios'
import { useState, useEffect } from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

export default function Profile() {
const config = {
    headers:{
      'x-access-token': localStorage.getItem('token')
    }
};
let [name, setName] = useState('')
let [techStack, setStack] = useState([]);
useEffect(() => {
    axios.get('http://localhost:8000/users/profile', config)
    .then(resp => {
        setName(resp.data);
        const tech = resp.data.tech_stack;
        setStack(tech);
        console.log(resp.data)
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

  const renderIcon = (word)  => {
    switch(word){
      case 'Javascript':
        return require('../components/languages/javascript.png')
        break;
      case 'Python':
        return require('../components/languages/python.png')
        break;
      case 'Java':
        return require('../components/languages/java.png')
        break;
      case 'C++':
        return require('../components/languages/c++.png')
        break;
      case 'C#':
        return require('../components/languages/csharp.png')
        break;
      case 'C':
        return require('../components/languages/c.png')
        break;
      case 'Go':
        return require('../components/languages/go.png')
        break;
      case 'Ruby':
        return require('../components/languages/ruby.png')
        break;
      case 'Swift':
        return require('../components/languages/swift.png')
        break;
      case 'PHP':
        return require('../components/languages/php.png')
        break;
    }
  } 
  

  return (
    <div>
        <Sidebar/>
        <div style={{display:'grid',color:'white',paddingLeft: '35rem', paddingRight: '20rem', paddingTop: '3rem'}}>
        <div style={{paddingLeft:'5rem'}}>
            <Avatar style={{width:'150px',height:'150px', marginLeft:'10px', fontSize:'5.5rem'}} {...stringAvatar(`${name.first_name} ${name.last_name}`)} />
        </div>
        <div style={{display:'flex',paddingLeft:'1rem'}}>
            <p style={{fontSize:'3rem'}}>{`${name.first_name} ${name.last_name} `}</p>
            {isMentor ? <img style={{width:'50px',height:'50px', marginLeft:'10px'}}alt=''src={require('../icon.PNG')}/> : <div/>}
        </div>
            <p style={{paddingLeft:'8.5rem',paddingBottom:'1rem'}}>New York</p>
            
          <div style={{paddingLeft:'6.1rem',paddingBottom:'1rem'}}>
          {techStack.map(el => {
            return <img src={renderIcon(el)} width='50vw'/>
          })}
          </div>
        </div>
    </div>
  )
}

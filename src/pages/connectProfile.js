import React from 'react'
import Sidebar from '../components/SideBar'
import axios from 'axios'
import { useState, useEffect } from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { useLocation } from 'react-router-dom';


export default function Profile() {
const { state } = useLocation();
const id = state.id;
console.log(id);

let [name, setName] = useState('')
let [techStack, setStack] = useState([]);
useEffect(() => {
    axios.get(`https://mentee-backend-production-e50e.up.railway.app/users/${id}`)
    .then(resp => {
        console.log(resp.data);
        setName(resp.data);
        const tech = resp.data.tech_stack;
        setStack(tech);
    })
}, []);
const isMentor = name.mentor;

// function stringToColor(string) {
//     let hash = 0;
//     let i;
  
//     /* eslint-disable no-bitwise */
//     for (i = 0; i < string.length; i += 1) {
//       hash = string.charCodeAt(i) + ((hash << 5) - hash);
//     }
  
//     let color = '#';
  
//     for (i = 0; i < 3; i += 1) {
//       const value = (hash >> (i * 8)) & 0xff;
//       color += `00${value.toString(16)}`.slice(-2);
//     }
  
//     return color;
//   }
  
//   function stringAvatar(name) {
//     return {
//       sx: {
//         bgcolor: stringToColor(name),
//       },
//       children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
//     };
//   }
  const greeting = `Hey I'm ${name.first_name} ${name.last_name}. I'm a passionate programmer from New York. Let's Connect!`
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
        <div style={{paddingLeft:'2.8rem'}}>
          <img src={name.avatar}/>
        </div>
        <div style={{display:'flex', textAlign:'center'}}>
            <p style={{fontSize:'3rem', textAlign: 'center'}}>{`${name.first_name} ${name.last_name} `}</p>
            {isMentor ? <img style={{width:'50px',height:'50px', marginLeft:'10px'}}alt=''src={require('../icon.PNG')}/> : <div/>}
        </div>
            <p style={{paddingLeft:'8.5rem',paddingBottom:'1rem'}}>New York</p>
            
          <div style={{paddingLeft:'6.7rem',paddingBottom:'1rem'}}>
          {techStack.map(el => {
            return <img src={renderIcon(el)} width='40vw'/>
          })}
          </div>
        </div>
        <div>
            <p style ={{color: 'white', textAlign: 'center', paddingLeft: '1rem'}}>{greeting}</p>
        </div>
    </div>
  )
}

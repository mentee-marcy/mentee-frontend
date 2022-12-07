import React from 'react'
import Sidebar from '../components/SideBar'
import axios from 'axios'

const config = {
    headers:{
      'x-access-token': localStorage.getItem('token')
    }
  };

axios.get('http:localhost3000/users/profile', config).then(resp => resp.json).then(data => console.log(data))

export default function Profile() {
  return (
    <div>
        <Sidebar/>
        Hello
    </div>
  )
}

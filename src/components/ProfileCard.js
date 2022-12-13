import * as React from 'react';
import { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography';
import Avatar from './Avatar'
import Icon from '../images/icon.PNG'
import axios from 'axios';
import { Link } from 'react-router-dom';
import connectProfile from '../pages/connectProfile'


export default function BasicCard(props) {
  console.log(props, "here")
  const [ button, setButton ] = useState('Connect')
  const [ userID , setUserId ] = useState('')
  const {MentorStatus, Name, TechStack, addMentor, id} = props
  const token = localStorage.getItem('token');
  const config = {
    headers:{
      'x-access-token': token,
    }
  }
  const getID = async () => {
    try {
      await axios.get('http://localhost:8000/users/profile', config).then(resp => setUserId(resp.data.id));
      console.log(userID);
    }catch(error) {
      console.log(error);
    }
  }
  getID();
  
  let isFriend = false;
  // const checkforFriend = async (id) => {
  //   try {
  //     await axios.get(`http://localhost:8000/users/${id}/friends`).then(resp => resp.data.map(x => x.id == id ? isFriend = true : isFriend = false))
  //   }catch(error) {
  //     console.log(error)
  //   }
  // }
  // checkforFriend();
  const userBody = {
      'userId' : userID
    
  }
  const addFriend = async (id) => {
    try {
      await axios.post(`http://localhost:8000/users/friend/${id}`,userBody).then(resp => console.log(resp.data))
      setButton('Pending')
    }catch(error) {
      console.log(error)
    }
  }

  return (
    <Card sx={{ minWidth: 300, maxWidth: 300,  minHeight: 350, textAlign: 'center', padding: '2rem', borderRadius:"20px", position: 'relative',  '&:hover': {
      cursor: 'pointer',
      backgroundColor: '#486f8d!important'}}} id={id}>
      <CardContent>
        <Typography sx={{ fontSize: 20, fontWeight: 'bold' }} color="text.secondary" gutterBottom>
        {MentorStatus}
        </Typography>
        <div style={{paddingLeft:'5rem', paddingTop:'.5rem', paddingBottom:'.5rem'}}>
        <Link to='/connectProfile' style={{ textDecoration: 'none' }}>
          <Avatar Name={Name}/>
        </Link>
        </div>
        <Typography className= "Name"sx={{ mb: 1.9 }} color="text.secondary">
            {Name}
        </Typography>
        <Typography sx={{ fontSize: '1rem', fontWeight: 'bold' }}variant="body2">{[TechStack].join(' ')}
        </Typography>
      </CardContent>
      <CardActions style={{paddingLeft:'4.5rem'}}>
        <Button id={id} onClick={(e) => addFriend(e.target.id)}style={{fontWeight: 'bolder', padding: '.7rem', backgroundColor: 'white', borderRadius:'20px'}}size="small">{button}</Button> 
      </CardActions>
    </Card>
  );
}
import * as React from 'react';
import { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography';
// import Avatar from './Avatar'
import Icon from '../images/icon.PNG'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import connectProfile from '../pages/connectProfile'


export default function BasicCard(props) {
  const [ button, setButton ] = useState('Connect')
  const [ userID , setUserId ] = useState('')
  const {MentorStatus, Name, TechStack, addMentor, id, Avatar} = props
  const token = localStorage.getItem('token');
  console.log(Avatar)
  const config = {
    headers:{
      'x-access-token': token,
    }
  }
  const getID = async () => {
    try {
      await axios.get('http://localhost:8000/users/profile', config).then(resp => setUserId(resp.data.id));
    }catch(error) {
      console.log(error);
    }
  }
  getID();
  
  let isFriend = false;

  const userBody = {
      'userId' : userID
    
  }
  const renderIcon = (word)  => {
    switch(word){
      case 'Javascript':
        return require('./languages/javascript.png')
        break;
      case 'Python':
        return require('./languages/python.png')
        break;
      case 'Java':
        return require('./languages/java.png')
        break;
      case 'C++':
        return require('./languages/c++.png')
        break;
      case 'C#':
        return require('./languages/csharp.png')
        break;
      case 'C':
        return require('./languages/c.png')
        break;
      case 'Go':
        return require('./languages/go.png')
        break;
      case 'Ruby':
        return require('./languages/ruby.png')
        break;
      case 'Swift':
        return require('./languages/swift.png')
        break;
      case 'PHP':
        return require('./languages/php.png')
        break;
    }
  } 

  const navigate = useNavigate();
  const toProfile = () => {
    navigate('/connectProfile', {state: { id: id } })
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
    <Card sx={{ minWidth: 300, maxWidth: 300,  minHeight: 370, textAlign: 'center', padding: '2rem', borderRadius:"20px", position: 'relative',  '&:hover': {
      cursor: 'pointer',
      backgroundColor: '#486f8d!important'}}} id={id}>
      <CardContent>
        <Typography sx={{ color: 'white', fontSize: 20, fontWeight: 'bold' }} color="text.secondary" gutterBottom>
        {MentorStatus}
        </Typography>
        <div onClick={ toProfile } style={{paddingTop:'.5rem', paddingBottom:'.5rem'}}>
          <img src={Avatar} width='70px'/>
          {/* <Avatar onClick={toProfile} Name={Name}/> */}
        
        </div>
        <Typography className= "Name"sx={{ mb: 1.9, color: 'white', fontFamily: 'Helvetica', fontWeight: 'bold', fontSize: '1.2rem'}} color="text.secondary">
            {Name}
        </Typography>
        <div>
          {TechStack.map(el => {
            return <img src={renderIcon(el)} width='40vw'/>
          })}
        </div>
      </CardContent>
      <CardActions style={{paddingLeft:'4.5rem', position: 'absolute', bottom: 5}}>
        <Button id={id} onClick={(e) => addFriend(e.target.id)}style={{fontWeight: 'bolder', padding: '.8rem', backgroundColor: 'white', borderRadius:'20px'}}size="small">{button}</Button> 
      </CardActions>
    </Card>
  );
}
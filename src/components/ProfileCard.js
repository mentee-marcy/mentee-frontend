import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Avatar from './Avatar'
import Icon from '../images/icon.PNG'
import axios from 'axios';

export default function BasicCard(props) {
  const {MentorStatus, Name, TechStack, addMentor, id} = props
  let userId = localStorage.getItem(id)
  const body = {
    "userId": userId
  }
  let isFriend = false;
  const checkforFriend = async (id) => {
    try {
      await axios.get(`http://localhost:8000/users/${id}/friends`).then(resp => resp.data.map(x => x.id == id ? isFriend = true : isFriend = false))
    }catch(error) {
      console.log(error)
    }
  }
  checkforFriend(localStorage.getItem('id'));

  const addFriend = async (id) => {
    try {
      await axios.post(`http://localhost:8000/users/friend/${id}`,body).then(resp => console.log(resp.data))
      
    }catch(error) {
      console.log(error)
    }
  }
  

  return (
    <Card sx={{ minWidth: 300, maxWidth: 300, textAlign: 'center', padding: '2rem', borderRadius:"20px"}} id={id}>
      <CardContent>
        <Typography sx={{ fontSize: 20, fontWeight: 'bold' }} color="text.secondary" gutterBottom>
        {MentorStatus}
        </Typography>
        <div style={{paddingLeft:'5rem', paddingTop:'.5rem', paddingBottom:'.5rem'}}>
        <Avatar Name={Name}/>
        </div>
        <Typography className= "Name"sx={{ mb: 1.9 }} color="text.secondary">
            {Name}
        </Typography>
        <Typography sx={{ fontSize: '1rem', fontWeight: 'bold' }}variant="body2">{[TechStack].join(' ')}
        </Typography>
      </CardContent>
      <CardActions style={{paddingLeft:'3.4rem'}}>
        {!isFriend ? <Button id={id} onClick={(e) => addFriend(e.target.id)}style={{fontWeight: 'bolder', padding: '.7rem', backgroundColor: 'white', borderRadius:'20px'}}size="small">{addMentor}</Button> : <Button id={id} style={{fontWeight: 'bolder', padding: '.7rem', backgroundColor: 'white', borderRadius:'20px'}}size="small">Pending</Button>}
      </CardActions>
    </Card>
  );
}
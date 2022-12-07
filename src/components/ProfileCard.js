import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Avatar from './Avatar'
import Icon from '../images/icon.PNG'

export default function BasicCard(props) {
  const {MentorStatus, Name, TechStack, addMentor} = props

  return (
    <Card sx={{ minWidth: 300, maxWidth: 300, textAlign: 'center', padding: '2rem', borderRadius:"20px"}}>
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
        <Typography sx={{ fontSize: 12, fontWeight: 'bold' }}variant="body2">{[TechStack].join(' ')}
        </Typography>
      </CardContent>
      <CardActions style={{paddingLeft:'3.4rem'}}>
        <Button style={{fontWeight: 'bolder', padding: '.7rem', backgroundColor: 'white', borderRadius:'20px'}}size="small">{addMentor}</Button>
      </CardActions>
    </Card>
  );
}
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Avatar from './Avatar'

export default function BasicCard(props) {
  const {MentorStatus, Name, TechStack, addMentor} = props
  console.log(TechStack);

  return (
    <Card sx={{ maxWidth: 275, textAlign: 'center'}}>
      <CardContent>
        <Typography sx={{ fontSize: 16, fontWeight: 'bold' }} color="text.secondary" gutterBottom>
        {MentorStatus}
        </Typography>
        <div style={{paddingLeft:'6.3rem', paddingTop:'.5rem', paddingBottom:'.5rem'}}>
        {/* <Avatar Name={Avatar}/> */}
        </div>
        <Typography className= "Name"sx={{ mb: 1.9 }} color="text.secondary">
            {Name}
        </Typography>
        <Typography sx={{ fontSize: 12, fontWeight: 'bold' }}variant="body2">{TechStack}
        </Typography>
      </CardContent>
      <CardActions style={{paddingLeft:'1.45rem'}}>
        <Button size="small">{addMentor}</Button>
      </CardActions>
    </Card>
  );
}
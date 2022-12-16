import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useState } from 'react';


export default function BasicButtons({setClicked}) {

  return (
    <Stack sx ={{justifyContent:'center'}}spacing={2} direction="row">
      <Button sx={{color: '#F3F4F8', padding: '1rem 3rem',fontSize: '1rem',  '&:hover': {
    backgroundColor: '#1E2431!important'
  },}}style ={{backgroundColor: '#1E1E1E'}}onClick={() => setClicked(true)} variant="text">Mentors</Button>
      <Button sx={{alignSelf: 'center',color: '#F3F4F8', fontSize: '1rem', padding: '1rem 3rem', '&:hover': {
    backgroundColor: '#1E2431!important'
  }}}style ={{backgroundColor: '#1E1E1E'}}onClick={() => setClicked(false)} variant="text">Mentees</Button>
      
    </Stack>
  );
}
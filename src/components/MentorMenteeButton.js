import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useState } from 'react';


export default function BasicButtons({setClicked}) {

  return (
    <Stack sx ={{minWidth:'100rem',justifyContent: 'center', alignItems: 'center', paddingLeft:'5rem'}}spacing={2} direction="row">
      <Button sx={{color: '#486f8d', padding: '1rem 3rem',fontSize: '1rem',  '&:hover': {
    backgroundColor: '#1E2431!important'
  },}}style ={{backgroundColor: '#1E1E1E'}}onClick={() => setClicked(true)} variant="text">Mentors</Button>
      <Button sx={{alignSelf: 'center',color: '#486f8d', fontSize: '1rem', padding: '1rem 3rem', '&:hover': {
    backgroundColor: '#1E2431!important'
  }}}style ={{backgroundColor: '#1E1E1E'}}onClick={() => setClicked(false)} variant="text">Mentees</Button>
      
    </Stack>
  );
}
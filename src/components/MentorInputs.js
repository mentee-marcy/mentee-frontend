import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
// import userEvent from '@testing-library/user-event';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '40ch',
    },
  },
}));

export default function FormPropsTextFields(props) {
  const classes = useStyles();
  const {user, setUser} = props.prop

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div style={{display: 'grid', color: 'white !important'}}>
        <TextField required id="standard-required" label="Company" defaultValue="" onChange={(e) => setUser({...user, mentor_obj : {...user.mentor_obj, company_name : e.target.value}})} />
        <TextField required id="standard-required" label="Title" defaultValue="" onChange={(e) => setUser({...user, mentor_obj : {...user.mentor_obj, title : e.target.value}})}/>
        <TextField required id="standard-required" label="Location" defaultValue="" onChange={(e) => setUser({...user,mentor_obj : {...user.mentor_obj, location : e.target.value}})}/>
        <TextField required id="standard-required" label="Bio" defaultValue="" onChange={(e) => setUser({...user,mentor_obj : {...user.mentor_obj, bio : e.target.value}})}/>
      </div>
    </form>
  );
}
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
        <TextField required id="standard-required" label="First Name" defaultValue="" onChange={(e) => setUser({...user, "firstName" : e.target.value})} />
        <TextField required id="standard-required" label="Last Name" defaultValue="" onChange={(e) => setUser({...user, "lastName" : e.target.value})}/>
        <TextField required id="standard-required" label="Email" defaultValue="" onChange={(e) => setUser({...user, "email" : e.target.value})}/>
        <TextField
          id="standard-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          onChange={(e) => setUser({...user, "password" : e.target.value})}
        />
        <TextField required id="standard-required" label="Username" defaultValue="" onChange={(e) => setUser({...user, "username" : e.target.value})}/>
      </div>
    </form>
  );
}
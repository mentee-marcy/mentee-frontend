import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '40ch',
    },
  },
}));

export default function FormPropsTextFields() {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div style={{display: 'grid', color: 'white !important'}}>
        <TextField required id="standard-required" label="First Name" defaultValue="" />
        <TextField required id="standard-required" label="Last Name" defaultValue="" />
        <TextField required id="standard-required" label="Email" defaultValue="" />
        <TextField
          id="standard-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
        />
        <TextField required id="standard-required" label="Username" defaultValue="" />
      </div>
      </form>
  );
}
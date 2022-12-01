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
        <TextField required id="standard-required" label="Company Name" defaultValue="" />
        <TextField required id="standard-required" label="Title" defaultValue="" />
        <TextField required id="standard-required" label="Location" defaultValue="" />
        <TextField label="Bio" defaultValue="" />
      </div>
      </form>
  );
}
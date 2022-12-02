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

export default function FormPropsTextFields(props) {
  const classes = useStyles();
  const {user, setUser} = props.prop

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div style={{display: 'grid', color: 'white !important'}}>
        <TextField onChange={(e) => setUser({...user.mentor_obj, "company_name" : e.target.value})}required id="standard-required" label="Company Name" defaultValue="" />
        <TextField onChange={(e) => setUser({...user.mentor_obj, "title" : e.target.value})}required id="standard-required" label="Title" defaultValue="" />
        <TextField onChange={(e) => setUser({...user.mentor_obj, "location" : e.target.value})}required id="standard-required" label="Location" defaultValue="" />
        <TextField onChange={(e) => setUser({...user.mentor_obj, "bio" : e.target.value})}label="Bio" defaultValue="" />
      </div>
      </form>
  );
}
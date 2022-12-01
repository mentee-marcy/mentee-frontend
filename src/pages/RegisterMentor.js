import React from 'react';
import SelectField from '../components/SelectField';
import InputForm from '../components/InputForm';
import Button from '@material-ui/core/Button';
import MentorInputs from '../components/MentorInputs';
import { AppBar, Toolbar } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import {Link} from "react-router-dom";
import bg from '../images/register.jpg';

const useStyles = makeStyles((theme) => ({
    appbar: {
      background: '#3C4E5C!important',
    },
    appbarWrapper: {
      width: '80%',
      margin: '0 auto',
    },
    appbarTitle: {
      flexGrow: '1',
    },
  }));

export const RegisterMentor = () => {
  return (
    <div style={{minHeight: '100vh',backgroundImage: `url(${bg})`,backgroundSize: 'cover', position: 'relative', alignItems: 'center', display: "flex", flexDirection: 'column', flex: '50%'}}>
        <AppBar style={{ background: '#2E3B55' }}>
        <Toolbar className={useStyles.appbarWrapper}>
          <Link to="/"style= {{textDecoration: 'none', color: 'white'}}><h1 className={useStyles.appbarTitle}>
            mentee.<span className={useStyles.colorText}></span>
          </h1></Link>
        </Toolbar>
        </AppBar>
        <div style={{paddingTop: '5rem',color: 'white !important', flex: '50%'}}>
            <InputForm/>
            <SelectField style={{alignItems: 'center'}}/>
        </div>
        <div>
            <MentorInputs/>
        </div>
        <div style={{padding: '2rem'}}>
            <Button variant="contained" color="primary">Register</Button>
        </div>
    </div>
  )
}
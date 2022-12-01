import React, {useState } from 'react';
import SelectField from '../components/SelectField';
import InputForm from '../components/InputForm';
import Button from '@material-ui/core/Button';
import { AppBar, Toolbar } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import {Link} from "react-router-dom";
import bg from '../images/register.jpg';
import axios from 'axios';

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

export const RegisterMentee = () => {

    const [user, setUser] = useState({mentor: false});

    const createUser = async (e)  => {
        try {
            const resp = await axios.post('localhost:8000/user/register', user);
            console.log(resp.data);
            console.log('Hello');
        }catch (error){
            console.log(error.response);
        }
    }
    
  return (
    <div style={{minHeight: '100vh',backgroundImage: `url(${bg})`,backgroundSize: 'cover', position: 'relative', alignItems: 'center', display: "flex", flexDirection: 'column'}}>
        <AppBar style={{ background: '#2E3B55' }}>
        <Toolbar className={useStyles.appbarWrapper}>
          <Link to="/"style= {{textDecoration: 'none', color: 'white'}}><h1 className={useStyles.appbarTitle}>
            mentee.<span className={useStyles.colorText}></span>
          </h1></Link>
        </Toolbar>
        </AppBar>
        <div style={{padding: '7rem', color: 'white !important'}}>
            <InputForm prop={{user, setUser}}/>
            <SelectField prop={{user, setUser}} style={{alignItems: 'center'}}/>
        </div>
        <div style={{paddingTop: '1rem'}}>
            <Button onClick={() => createUser()} variant="contained" color="primary">Register</Button>
        </div>
    </div>
  )
}
import React, { Component } from "react";
import "../styles.css";
import CustomInput from "../components/CustomInput";
import Button from "../components/Button";
import { AppBar, Toolbar } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import {Link} from "react-router-dom";
import { Navigate } from "react-router-dom";
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


export default class Login extends Component {
  state = {
    username: "",
    password: "",
    token: ""
  };
  handleChange = e => {
    this.setState({ [e.currentTarget.id]: e.currentTarget.value });
  };
  loginUser = async (data)  =>{
    try {
      const resp = await axios.post('http://localhost:8000/users/login', data);
      window.localStorage.setItem('token', resp.data.token);
      this.setState({...this.state, token : resp.data.token})
  }catch (error){
    console.log(error)
      alert('Incorrect Username or Password');
      console.log('No')
    }
  };
  render() {
    return (
      <div className="Login">
        <AppBar style={{ background: '#2E3B55' }}>
        <Toolbar className={useStyles.appbarWrapper}>
          <Link to="/"style= {{textDecoration: 'none', color: 'white'}}><h1 className={useStyles.appbarTitle}>
            mentee.<span className={useStyles.colorText}></span>
          </h1></Link>
        </Toolbar>
        </AppBar>
        <form id="testing" className="form" style={{borderColor: 'white !important'}}>
          <CustomInput
            sx={{color:'white !important', borderColor: 'white!important'}}
            labelText="Username"
            id="username"
            formControlProps={{
              fullWidth: true
            }}
            handleChange={this.handleChange}
            type="text"
          />
          <CustomInput
            style={{fontSize: '2rem'}}
            labelText="Password"
            id="password"
            formControlProps={{
              fullWidth: true
            }}
            handleChange={this.handleChange}
            type="password"
          />
          <Button sx={{ ".makeStyles-button-60:hover, .makeStyles-button-60:focus": {
    boxShadow: "none !important"
  },}}onClick={() => this.loginUser(this.state)}type="button" className="form__custom-button">
            Log in
          </Button>
          {this.state.token && <Navigate to="/dashboard" replace={true} />}
        </form>
      </div>
    );
  }
}

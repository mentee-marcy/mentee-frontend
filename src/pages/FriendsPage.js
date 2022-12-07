import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import { AppBar, Toolbar } from "@material-ui/core";
import {Link} from "react-router-dom";
import Header from '../components/Header';
import bg from '../images/register.jpg';
import FriendsList from '../components/FriendsList';
import '../components/CSS/friendsList.css'
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
    table:{
      color:"white"
    }
  }));

export const FriendsPage = () => {
    return (
        <div style={{ minHeight: '100vh',background: "#2a2a2a", backgroundSize: 'cover', position: 'relative', alignItems: 'center', display: "flex", flexDirection: 'column' }}>
            <AppBar style={{ background: '#2E3B55' }}>
                <Toolbar className={useStyles.appbarWrapper}>
                    <Link to="/" style={{ textDecoration: 'none', color: 'white' }}><h1 className={useStyles.appbarTitle}>
                        Friends<span className={useStyles.colorText}></span>
                    </h1></Link>
                </Toolbar>
            </AppBar>
            <FriendsList className={useStyles.title} />
           
        </div>
    )

}


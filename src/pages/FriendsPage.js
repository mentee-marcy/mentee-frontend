import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FriendsList from '../components/FriendsList';
import Sidebar from '../components/SideBar';
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
      <>
        <Sidebar/>
        <div style={{ minHeight: '100vh',background: "#2a2a2a", backgroundSize: 'cover', position: 'relative', alignItems: 'center', display: "flex", flexDirection: 'column' }}>
            <FriendsList className={useStyles.title} />
        </div>
      </>
    )

}


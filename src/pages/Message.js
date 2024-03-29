import React from 'react';
import Sidebar from '../components/SideBar';
import { useEffect, useState, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from 'axios';
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import "./CSS/messageBox.css"
import Contacts from '../components/Contacts';
import Welcome from '../components/Welcome';
import ChatContainer from '../components/ChatContainer';
import {io} from "socket.io-client"


const Message = () => {


  const socket = useRef();
 
  const [contacts, setContacts] = useState([]);
  const [currentChat, setCurrentChat] = useState(undefined);
  const [user, setUser] = useState(null)

  const token = localStorage.getItem('token');

  const config = {
    headers:{
      "x-access-token": token
    }
  };
  async function getUser(){
    const user = await axios.get(`https://mentee-backend-production-e50e.up.railway.app/users/profile`,config).then(data=>data.data)
    setUser(user.id)
  }
  useEffect(()=>{
    getUser();
    if(user) getFriends();
  },[user])

  useEffect(()=>{
    if(user){
      function getCurrentUser(){
        socket.current = io("https://mentee-backend-production-e50e.up.railway.app")
        socket.current.emit("add-user",user)
      }
      getCurrentUser()
    }
  },[user])

  async function getFriends(){
    const data = await axios.get(`https://mentee-backend-production-e50e.up.railway.app/users/${user}/friends`)
    const friends = data.data;
    const filterFriends = friends.filter((frnd) => frnd.id !== user);
    setContacts(filterFriends)
  }

  const handleChatChange = (chat) =>{
    setCurrentChat(chat)
  }
  return (
    <div className = 'containerBox' >
        <Sidebar/>
        <div className='container'>
          <Contacts contacts={contacts} user={user} changeChat={handleChatChange} />
          {currentChat === undefined ? (
            <Welcome />
          ) : (
            <ChatContainer currentChat={currentChat} user={user} socket={socket}/>
          )}
        </div>
    </div> 
  )
}


export default Message

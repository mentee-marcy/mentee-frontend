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

//const socket = io.connect("http://localhost:8000");
const Message = () => {

  // const [message, setMessage] = React.useState("");
  // const { id } = useParams();
  // const [chat, setChat] = React.useState([]);
  // const scrollRef = React.useRef();

  const socket = useRef();
 

  const [contacts, setContacts] = useState([]);
  const [currentChat, setCurrentChat] = useState(undefined);
  const [user, setUser] = useState(null)

  const token = localStorage.getItem('token');
  //console.log(token)
  const config = {
    headers:{
      "x-access-token": token
    }
  };
  async function getUser(){
    const user = await axios.get(`http://localhost:8000/users/profile`,config).then(data=>data.data)
    console.log(user)
    setUser(user.id)
  }
  useEffect(()=>{
    getUser();
    if(user) getFriends();
  },[user])

  useEffect(()=>{
    if(user){
      function getCurrentUser(){
        socket.current = io("http://localhost:8000")
        socket.current.emit("add-user",user)
      }
      getCurrentUser()
    }
  },[user])

  async function getFriends(){
    const data = await axios.get(`http://localhost:8000/users/${user}/friends`)
    const friends = data.data;
    const filterFriends = friends.filter((frnd) => frnd.id !== user);
    setContacts(filterFriends)
  }

  const handleChatChange = (chat) =>{
    setCurrentChat(chat)
  }
  return (
    <div className = 'containerBox' >
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

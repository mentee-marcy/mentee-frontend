import React from 'react';
import Sidebar from '../components/SideBar';
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from 'axios';
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import "./CSS/messageBox.css"
import Contacts from '../components/Contacts';
import Welcome from '../components/Welcome';
import ChatContainer from '../components/ChatContainer';

//const socket = io.connect("http://localhost:8000");
const Message = () => {

  // const [message, setMessage] = React.useState("");
  // const { id } = useParams();
  // const [chat, setChat] = React.useState([]);
  // const scrollRef = React.useRef();



  const [contacts, setContacts] = useState([]);
  const [currentChat, setCurrentChat] = useState(undefined);
  const [user, setUser] = useState(1)
  async function getFriends(){
    const data = await axios.get(`http://localhost:8000/users/${user}/friends`)
    const friends = data.data;
    const filterFriends = friends.filter((frnd) => frnd.id !== user);
    setContacts(filterFriends)
  }
  useEffect(()=>{
    getFriends();
  },[user])

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
            <ChatContainer currentChat={currentChat} user={user}/>
          )}
        </div>
    </div> 
  )
}


export default Message

import React from 'react';
import MessageBoard from '../components/MessageBoard';
import Sidebar from '../components/SideBar';
import Conversation from '../components/Conversation'

export const Message = () => {
  return (
    <>
      <Sidebar/>
      <div style={{backgroundColor:'#3C4E5C!important', marginTop: '0!important'}}>
        <Conversation/>
        <MessageBoard/>
      </div>
    </>
  )
}

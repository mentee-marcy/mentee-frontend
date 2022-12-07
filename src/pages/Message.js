import React from 'react';
import TopNav from '../components/TopNav';
import MessageBoard from '../components/MessageBoard';

export const Message = () => {
  return (
    <>
      <TopNav/>
      <div style={{backgroundColor:'#3C4E5C!important'}}>
        <MessageBoard/>
      </div>
    </>
  )
}

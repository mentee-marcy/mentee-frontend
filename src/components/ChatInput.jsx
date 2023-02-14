import React, {useState} from 'react'
import {IoMdSend} from 'react-icons/io'

const ChatInput = ({handleSendMsg}) => {
    const [msg, setMsg] = useState('') 
    const sendChat = (event) =>{
        event.preventDefault();
        if(msg.length>0){
            handleSendMsg(msg);
            setMsg('')
        }
    }
  return (
    <div className='input-containerBox'>
        <div className='button-container'>
        </div>
        <form className='input-container' onSubmit={(e)=>sendChat(e)}>
            <input type='text' placeholder='type your message here' 
            value={msg}
            onChange = {(e)=> setMsg(e.target.value)}
            />
            <button className='submit'>
                <IoMdSend />
            </button>
        </form>
    </div>
  )
}

export default ChatInput
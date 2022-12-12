import React,{useEffect,useState} from 'react'
import ChatInput from './ChatInput'
import Texts from './Texts'
import axios from 'axios'

const ChatContainer = ({currentChat, user}) => {

    const [messages,setMessages] = useState([])
    console.log(messages)
    useEffect(()=>{
        async function getMessages(){
            const response = await axios.get(`http://localhost:8000/messages/${user}/${currentChat.id}`)
            setMessages(response.data)
        }
        getMessages()
    },[currentChat] )

    const handleSendMsg = async (msg) =>{
        await axios.post(`http://localhost:8000/messages/${user}/${currentChat.id}`,{
            "message":msg
        })
    }
  return (
    <>
    {
        currentChat && (
        <div className='chat-Container'>
            <div className='chat-header'>
                <div className='user-details'>
                    <div className='username'>
                        <h3>{currentChat.first_name}</h3>
                    </div>
                </div>
            </div>
            {/* <Texts   /> */}
            <div className='chat-messages'>
                {
                    messages.map((message) =>{
                        console.log(message.text)
                        return(
                            
                            <div  className={`message ${message.sender_id == user? "sent":"recieved"}`}> 
                                <div  className='content' id='content-message'>
                                    <p>
                                        { message.text}
                                    </p>
                                </div>
                            </div>
                    
                        )
                    })
                }
            </div>
            <ChatInput handleSendMsg={handleSendMsg}/>
        </div>
    )}
    </>
  )
}

export default ChatContainer
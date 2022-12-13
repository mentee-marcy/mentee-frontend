import React,{useEffect,useState,useRef} from 'react'
import ChatInput from './ChatInput'
import Texts from './Texts'
import axios from 'axios'
import { v4 as uuidv4} from 'uuid'
const ChatContainer = ({currentChat, user, socket}) => {

    const [messages,setMessages] = useState([])
    const [arrivalMessage,setArrivalMessage] = useState(null)
    const scrollRef = useRef()
    useEffect(()=>{
        if(currentChat){
            async function getMessages(){
                const response = await axios.get(`http://localhost:8000/messages/${user}/${currentChat.id}`)
                console.log(user,currentChat.id)
                setMessages(response.data)
            }
            getMessages()
        }
        
    },[currentChat] )

    const handleSendMsg = async (msg) =>{
        await axios.post(`http://localhost:8000/messages/${user}/${currentChat.id}`,{
            "message":msg
        })
        socket.current.emit("send-msg",{
            sender_id: user,
            reciever_id: currentChat.id,
            "text": msg
        })
        const msgs = [...messages];
        msgs.push({sender_id:user,reciever_id:currentChat.id,"text":msg})
        setMessages(msgs)
    }
    useEffect(()=>{
        if(socket.current){
            function arrivalMessages(){
                socket.current.on("msg-recieve",(msg)=>{
                    console.log({msg})
                    setArrivalMessage({sender_id:currentChat.id, reciever_id:user,"text":msg})
                })
            }
            arrivalMessages()
        }
    },[])

    useEffect(()=>{
        function setArrivalMessages(){
            arrivalMessage && setMessages((prev)=>[...prev, arrivalMessage])
        }
        setArrivalMessages()
    },[arrivalMessage])

    useEffect(()=>{
        function scrollRefFunc(){
            scrollRef.current?.scrollIntoView({behaviour:"smooth"})
        }
        scrollRefFunc()
    },[messages])
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
                        return(
                            <div ref={scrollRef} key={uuidv4()}>
                                {console.log(message.sender_id, user)}
                                <div  className={`message ${message.sender_id === +user? "sent":"recieved"}`}> 
                                    <div  className="content" id='content-message'>
                                        <p>
                                            { message.text}
                                        </p>
                                    </div>
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
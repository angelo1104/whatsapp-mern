import React, {useEffect, useState} from "react";
import "./Chat.css"
import ChatAppBar from "./ChatAppBar/ChatAppBar";
import  ChatBubble  from "../ChatBubble/ChatBubble";
import ChatFooter from "./ChatFooter/ChatFooter";
import axios from '../../axios'
import Pusher from 'pusher-js'

function Chat(props) {

    const [messages,setMessages] = useState([])

    useEffect(()=>{
        axios.get('/sync')
            .then(res=>{
                setMessages(res.data)

            })
            .catch(err =>{
                console.log(err)
            })
        // eslint-disable-next-line
    },[])

    useEffect(()=>{
        const pusher = new Pusher('bebe1133ba92e16d78fc', {
            cluster: 'ap1'
        });

        const channel = pusher.subscribe('messages');
        channel.bind('inserted', function(data) {
            setMessages([...messages,data])
        });

        return ()=>{
            channel.unbind_all()
            channel.unsubscribe()
            pusher.unsubscribe('messages')
        }
    },[messages])

    useEffect(()=>{
        let chatBody = document.querySelector('.chat-body')
        chatBody.scrollTop = chatBody.scrollHeight;
    })

    return(
        <div className="chat">
            <ChatAppBar/>
            <div className="chat-body">
                {
                    messages?.map(message=>(
                        <ChatBubble key={message._id} name={message.name} timestamp={message.timestamp} isReceiver={message.received} message={message.message}/>
                    ))
                }
            </div>
            <ChatFooter/>
        </div>
    )
}

export default Chat
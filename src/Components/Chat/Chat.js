import React from "react";
import "./Chat.css"
import ChatAppBar from "./ChatAppBar/ChatAppBar";
import  ChatBubble  from "../ChatBubble/ChatBubble";
import ChatFooter from "./ChatFooter/ChatFooter";

function Chat(props) {
    return(
        <div className="chat">
            <ChatAppBar/>
            <div className="chat-body">
                <ChatBubble isReceiver={true}/>
                <ChatBubble isReceiver={false}/>
            </div>

            <ChatFooter/>
        </div>
    )
}

export default Chat
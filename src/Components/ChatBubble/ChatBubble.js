import React from "react";
import "./ChatBubble.css"

function ChatBubble({isReceiver,message,name, timestamp}) {
    const chat_bubble_style = {
        justifySelf:  isReceiver? "flex-end":"flex-start",
        alignSelf: isReceiver? "flex-end":"flex-start"
    }

    const chat_bubble_main_style = {
        backgroundColor: isReceiver? "#DCF8C6":"white"
    }


    return(
        <div className="chat-bubble" style={chat_bubble_style}>
            <span className="chat-bubble-name">{name}</span>
            <div className="chat-bubble-main" style={chat_bubble_main_style}>
                <p className="chat-bubble-message">{message}</p>
                <span className="chat-bubble-date">{timestamp}</span>
            </div>
        </div>
    )
}

export default ChatBubble
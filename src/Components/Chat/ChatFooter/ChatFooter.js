import React from 'react'
import "./ChatFooter.css"
import {IconButton} from "@material-ui/core"
import { InsertEmoticon, Mic } from '@material-ui/icons'

function ChatFooter() {
    return (
        <div className="chat-footer">
            <IconButton>
                <InsertEmoticon/>
            </IconButton>
            <form>
                <input type="text" className="chat-text" placeholder="Type a message"/>
                <button className="submit-button" type="submit">Send a message</button>
            </form>
            <IconButton>
                <Mic/>
            </IconButton>
        </div>
    )
}

export default ChatFooter

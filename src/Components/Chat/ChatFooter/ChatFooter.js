import React, {useState} from 'react'
import "./ChatFooter.css"
import {IconButton} from "@material-ui/core"
import { InsertEmoticon, Mic } from '@material-ui/icons'
import axios from '../../../axios'

function ChatFooter() {
    const [message,setMessage] = useState('')

    const onSubmit = (e)=>{
        e.preventDefault()

        axios.post('/new',{
            name:'anonymous',
            message:message,
            received: false,
            timestamp: new Date().toUTCString()
        }).then(res=>{
            console.log(res)
        }).catch(err=>{
            console.log(err)
        })

        setMessage('')
    }

    const onMessageChange = e=>{
        setMessage(e.target.value)
    }

    return (
        <div className="chat-footer">
            <IconButton>
                <InsertEmoticon/>
            </IconButton>
            <form onSubmit={onSubmit}>
                <input type="text" value={message} onChange={onMessageChange} className="chat-text" placeholder="Type a message"/>
                <button className="submit-button" type="submit">Send a message</button>
            </form>
            <IconButton>
                <Mic/>
            </IconButton>
        </div>
    )
}

export default ChatFooter

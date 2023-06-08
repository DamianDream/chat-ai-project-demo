import React from 'react'
import './ChatItem.css'

export default function ChatItem(props) {

    const time = new Date(Date.now()).getHours() + ":" + new Date(Date.now()).getMinutes()
    const user = (props.role === "User") ? "User" : "ChatGPT"

    return (
        <div className={`chat-item__${props.role}`}>
            <p className="chat-item__content">{props.content}</p>
            <span className="chat-item__time">{time}</span>
            <span className="chat-item__title">{user}</span>
        </div>
    )
}

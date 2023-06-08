import React from 'react'
import './FAQ.css'

export default function FAQ(props) {
    return (
        <p className="chat-question-item" onClick={() => props.onClick(props.content)}>{props.title}</p>
    )
}

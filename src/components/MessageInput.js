import React from 'react';
import {useState} from 'react';

const MessageInput = () => {
    const [content, setContent]= useState(null)

    return (
        <div className="messageInput">
        <textarea value={''} onChange={(e) => setContent(e.target.value)}/>
        <button className='submit' >Submit</button>
        </div>
    )
}

export default MessageInput;
import React from 'react';
import DisplayHeader from './DisplayHeader';
import DisplayMatches from './DisplayMatches';
import Messages from './Messages';
import {Link} from "react-router-dom"
import Chat  from '@mui/icons-material';
import  Avatar  from '@mui/material/Avatar';


const ChatRoom = (name, message, image) => {
    return <div className='chatroom'>
    <Avatar className="profile_pic" alt={name} src={image}/>
    <div>
       
       </div>
    </div>
    
}

export default ChatRoom;
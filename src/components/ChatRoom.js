import React from 'react';
import DisplayHeader from './DisplayHeader';
import DisplayMatches from './DisplayMatches';
import Messages from './Messages';
import {Link} from "react-router-dom"


const ChatRoom = ({user}) => {
    return (
        <div className="chatRoom">
        <DisplayHeader user={user}/>

        <div>
        <Link to ="DisplayMatches">
            <button className="option">Matches</button>
            </Link>
        <button className="option">Messages</button>
        </div>
        
        <DisplayMatches/>
        <Messages/> 
        </div>
    )
}

export default ChatRoom;
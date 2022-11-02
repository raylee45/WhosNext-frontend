import React from 'react';
import DisplayHeader from './DisplayHeader';
import DisplayMatches from './DisplayMatches';
import Messages from './Messages';

const ChatRoom = () => {
    return (
        <div className="chatRoom">
        <DisplayHeader/>

        <div>
            <button className="option">Matches</button>
        <button className="option">Messages</button>
        </div>
        
        <DisplayMatches/>
        <Messages/>
        </div>
    )
}

export default ChatRoom;
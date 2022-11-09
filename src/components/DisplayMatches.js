import React from 'react';
import Conversation from './Conversation';
import MessageInput from './MessageInput';
import DisplayHeader from './DisplayHeader';

const DisplayMatches = ({user}) => {
    return (
        <div className ="chatRoom">
            <DisplayHeader user={user}/>
        
        <Conversation/>
        <MessageInput/>
        </div>
    )
}

export default DisplayMatches;
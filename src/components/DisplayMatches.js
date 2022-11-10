import React from 'react';
import { useEffect, useState } from "react";
import Conversation from './Conversation';
import MessageInput from './MessageInput';
import DisplayHeader from './DisplayHeader';
import MatchedPerson from './MatchedPerson';


const DisplayMatches = () => {

const [users, setUsers] = useState([])
const [likedUsers, setLikedUsers] = useState([])
const [dislikedUsers, setDislikedUsers] = useState([])
const activeUser = 0; 
const [userId, setUserId] = useState('')
    
const removePerson = (index, user_id) => 
index.filter(user => user._id != user_id);

const matchedList = (user_id, choice) => {
    const newPeople = [];
    const newLikedUsers = [...likedUsers]
    const newDislikedUsers = [...dislikedUsers]




    switch(choice) {
        case 'ADD_TO_LIKED_USER':
            if(!users[activeUser].likedUsers.includes(user_id)){
                newPeople[activeUser].likedUser.push(user_id);
                newLikedUsers.push([user_id])
                
                setLikedUsers(newLikedUsers);
                setUsers(removePerson(users,user_id))
            }
          break;
          case 'ADD_TO_DISLIKED_USER':
            if(!users[activeUser].dislikedUsers.includes(user_id)){
                newPeople[activeUser].dislikedUser.push(user_id);
                newDislikedUsers.push([user_id])
                
                setLikedUsers(newLikedUsers);
                setUsers(removePerson(users,user_id))
            }
            break;
            default:
            return users;
    }
};


    return (
        <div className ="chatRoom">
            <DisplayHeader users={users}/>
            <div className= "matches" 
            {...userId === userId ? <span></span> : setUsers(users._id)}  key={users._id} user={users} matchedList= {matchedList} likedUsers={likedUsers}>
        
            
        <Conversation
            from_userId= ''
            message= ''
            to_userId=''
        />
        <MessageInput/>
            
        </div>
        </div>
    )
};


export default DisplayMatches;
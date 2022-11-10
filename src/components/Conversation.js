import React from 'react';
import { useEffect, useState } from "react";
import './Conversation.css';
import ChatRoom from './ChatRoom';
import axios from "axios";
const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL


const Conversation = () => {
    const [messages, setMessages] = useState([])
    const [messageId, setMessageId]=useState([])

    useEffect(() => {
        console.log("i need this to work", localStorage.getItem("jwtToken"))
        axios.get(`${REACT_APP_SERVER_URL}/messages`, {headers: {'Authorization': localStorage.getItem("jwtToken")}})
          .then(response => {
            setMessages(response.data.messages);
            console.log(response.data.messages)
          })
          .catch(error =>
            console.log(error))
      }, [])

      const submitMessages = () => {
        console.log('in progress')
        axios.post(`${REACT_APP_SERVER_URL}/messages/create`, {headers: {'Authorization': localStorage.getItem("jwtToken")}, data: {messageId}})
        .then(response => {
          console.log(response.data)
          setMessageId('')
        })
        .catch(error =>
          console.log(error))
      }

    return (
        <div>
        <ChatRoom/>
        </div>
        
    )
}

export default Conversation;
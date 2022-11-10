import TinderCard from "react-tinder-card";
import { useEffect, useState } from "react";
import React from "react";
import ChatRoom from "./ChatRoom";
import { FrameValue } from "@react-spring/web";
import DisplayMatches from "./DisplayMatches";
import axios from "axios";
import { SettingsSuggestRounded, SwipeDown } from "@mui/icons-material";
import SwipeButtons from "./SwipeButtons";
const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL



const Matches = (props) => {

  const [users, setUsers] = useState([])
  const [matchId, setMatchId] = useState('')

  const { handleLogout, user } = props; 
  const { id, name, email, exp } = user;
  const expirationTime = new Date(exp * 1000);
  let currentTime = Date.now();

  // make a condition that compares exp and current time
  if (currentTime >= expirationTime) {
    handleLogout();
    alert('Session has ended. Please login to continue.');
  }

  useEffect(() => {
    console.log("i need this to work", localStorage.getItem("jwtToken"))
    axios.get(`${REACT_APP_SERVER_URL}/users`, {headers: {'Authorization': localStorage.getItem("jwtToken")}})
      .then(response => {
        setUsers(response.data.users);
        console.log(response.data.users)
      })
      .catch(error =>
        console.log(error))
  }, [])

  // useEffect(() => {
  //   axios.get(`${REACT_APP_SERVER_URL}/users`)
  //    .then(response => {
  // setUser(response.data.user);
  //    })
  //    .catch(error => 
  //      console.log(error))
  //    } , [user]) 



  const [lastSwipe, setLastSwipe] = useState();

  const swiped = (direction, nameDelete) => {
    console.log('removing' + nameDelete)
    setLastSwipe(direction)
  }

  const outOfFrame = (name) => {
    console.log(name + ' left the screen!')
  }

  const submitMatch = () => {
    console.log('in progress')
    console.log(matchId)
    axios.post(`${REACT_APP_SERVER_URL}/matches/create`, {headers: {'Authorization': localStorage.getItem("jwtToken")}, data: {matchId}})
    .then(response => {
      console.log(response.data)
      setMatchId('')
    })
    .catch(error =>
      console.log(error))
  }
  

  return (
    <div className='matches'>
      <div className="setMatches">

          {users.map((match) => (
            <TinderCard className='swipe' key={match.name} preventSwipe={['up','down']} 
            onSwipe={(dir) => swiped(dir, match.name)} onCardLeftScreen= {() => outOfFrame(match.name)}>

              <div style={{ backgroundImage: `url(${match.image})` }}className='card'>
              <h3>{match.name}</h3>
              </div>
            </TinderCard> 
            
          ))}
          
          <SwipeButtons />
          </div>
          <DisplayMatches />
        </div>
  );
}



export default Matches;
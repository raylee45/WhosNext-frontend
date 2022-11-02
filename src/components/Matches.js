import TinderCard from "react-tinder-card";
import { useEffect, useState } from "react";
// import "../index.css";
import React from "react";
import ChatRoom from "./ChatRoom";

const Matches =() => {

    const db = [
        {
            name: 'Minnie',
            url: './Pictures/heart.png'
          },
          {
            name: 'Mickey',
            url: './img/erlich.jpg'
          },
          {
            name: 'Monica',
            url: './img/monica.jpg'
          },
          {
            name: 'Daffy',
            url: './img/jared.jpg'
          },
          {
            name: 'Goofy',
            url: './img/dinesh.jpg'
          }
        ]
    ;

    const match = db;
    const[lastSwipe, setLastSwipe] = useState();

    const unMatched = (direction, nameDelete) =>{
        console.log('removing' + nameDelete)
        setLastSwipe(direction)
    }

    const outOfFrame = (name) => {
        console.log(name + ' left the screen!')
      }


    return(
    <div className ='matches'>
        <ChatRoom/>
        <div className="setMatches">
            <div className="matchedPerson">

            {match.map((match) =>
        <TinderCard className='swipe' key={match.name} onSwipe={(dir) => unMatched(dir, match.name)} onCardLeftScreen={() => outOfFrame(match.name)}>
          <div style={{ backgroundImage: match.url  }} className='card'>
            <h3>{match.name}</h3>
          </div>
        </TinderCard>
    )}
    <div className="aboutMe">
        {lastSwipe ? <p>You swiped {lastSwipe}</p>:
        <p/> }
    </div>
    </div>
    </div>
    </div>
    )
            }
 


export default Matches;
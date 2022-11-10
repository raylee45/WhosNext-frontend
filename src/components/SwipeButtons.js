import React from 'react';
import "./SwipeButtons.css"
import CloseIcon from "@mui/icons-material/Close"
import FavoriteIcon from "@mui/icons-material/Favorite"
import IconButton from '@mui/material/IconButton'
import MatchedList from './MatchedList';
import {Link} from "react-router-dom"

const SwipeButtons = (userId, matchedList,unMatchedList) => {
return(
        <div className="buttons">
        <IconButton className="swipeLeft" onClick={() => matchedList (userId, 'ADD_TO_DISLIKED_USERS')}><CloseIcon fontSize= "large"/> </IconButton>
        
        <IconButton className="swipeRight" onClick={() => unMatchedList (userId, 'ADD_TO_LIKED_USERS')}><FavoriteIcon fontSize= "large"/> </IconButton>
        
    
        </div>
)
}

export default SwipeButtons;
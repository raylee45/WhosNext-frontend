import React from 'react';
import "./SwipeButtons.css"
import CloseIcon from "@mui/icons-material/Close"
import FavoriteIcon from "@mui/icons-material/Favorite"
import IconButton from '@mui/material/IconButton'
import {Link} from "react-router-dom"

const SwipeButtons = (match) => {
    return (
        <div className="buttons">
        <IconButton className="swipeLeft"><CloseIcon fontSize= "large"/> </IconButton>
        <Link to ="DisplayMatches" >
        <IconButton className="swipeRight"><FavoriteIcon fontSize= "large"/> </IconButton>
        </Link>
    
        </div>
    )
}

export default SwipeButtons;
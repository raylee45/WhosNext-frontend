import React from 'react';
import CompareArrowsOutlinedIcon from '@mui/icons-material/CompareArrowsOutlined';


const DisplayHeader = (user) => {
    return (
        <div className="displayHeader">
        <div className="profile">
            <div className ="img-container">
            <img src={user.image} alt= {"userPhoto"}/>
            </div>
            <h3>{user.name}</h3>
            </div>
            <CompareArrowsOutlinedIcon fontSize='large' className='arrows' />
            </div>
            
        
    )
}

export default DisplayHeader;
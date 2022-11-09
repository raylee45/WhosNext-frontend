import React, {useState} from 'react';
// import Button from 'react-bootstrap/Button';
import SignupModal from './popUps/SignupModal';

const Welcome = () => {
    // const {showSignupModal, setShowSignupModal} = useState(false);

    // const handleClick = () => {
    //     console.log('clicked')
    //     // setShowSignupModal={() => {
    //     // }}
    //     // showSignupModal={false}
    // };

    return (
        <>
        <div className='container-home'>
            <div className='tagline'>
                <h1>WhosNext</h1>
                <p>The NEXT ONE may be THE ONE.</p>
            </div>
            <SignupModal />
            {/* <Button class='start' variant="primary" onclick={handleClick}>{setAuthtoken ? 'Get Started' : 'Signout'}
            </Button> */}
        </div>
        
        </>    
    )
}

export default Welcome;
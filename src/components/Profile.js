import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import Image from 'react-bootstrap/Image';
// import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import Figure from 'react-bootstrap/Figure';

const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;
const handleClick = () => {
    console.log('clicked');
};

const Profile = (props) => {
   const [profile, setProfile] = useState(props);
   const { handleLogout, user } = props;
   const { id, name, email, dob_month, dob_day, dob_year, gender, preference, image, matches, exp } = props.user;
   const dob = `${dob_month}, ${dob_day}, ${dob_year}`;

   

   const expirationTime = new Date(exp * 1000);
   let currentTime = Date.now();

   // make a condition that compares exp and current time
   if (currentTime >= expirationTime) {
       handleLogout();
       alert('Session has ended. Please login to continue.');
   }

  

   const userData = user ?
   (<div>
       <h1>Profile</h1>
       <img src={image}/>
       <p>ID: {id}</p>
       <p>Name: {name}</p>
       <p>Email: {email}</p>
       <p>Dob: {dob}</p>
       <p>Gender: {gender}</p>
       <p>Preference: {preference}</p>
       <p>Matches: {matches}</p>
    </div>) : <h2>Loading...</h2>

    const errorDiv = () => {
        return (
            <div className="text-center pt-4">
                <h3>Please <Link to="/login">login</Link> to view this page</h3>
            </div>
        );
    };
    
    // Todo: useEffect 
    const [profileImage, setProfileImage] = useState(props.user.profileImage);

    useEffect(() => {
        axios.get('')
        .then(response => {
            console.log(response.data);
        })
        .catch(error => {
            console.log(error);
        })

    }, [])

    const handleImageDelete = (e) => {
        //Todo: handleImageDelete api call
        e.preventDefault();
        axios.delete(`${REACT_APP_SERVER_URL}/users/profileImg`)
        .then(response => {
            setProfileImage("")
        })
        .catch(error => {
            console.log('===> Error loading profile image', error);
            alert('');
        });
    };

    const handleImageEdit = (e) => {
        e.preventDefault();
        axios.edit(`${REACT_APP_SERVER_URL}/users/profileImg`)
        .then(response => {
            setProfileImage("")
        })
        .catch(error => {
            console.log('===> Error loading profile image', error);
            alert('');
        });
    };

    const ProfileImage = (props) => {
    
        return(
            <div className="profile-image">
                <img src={props.image} alt="harry styles" />
                <Button onClick={props.onEdit}>Edit</Button>
                <Button onClick={props.onDelete}>Delete</Button>
            </div>
    
        )
    }

    return (
        <>  
            <section className='matches-section'>
                <div className='matches-container'>
                    <div className='matches'>
                    {matches}
                        <Figure>
                            <Figure.Image
                                width={171}
                                height={180}
                                alt="171x180"
                                src=""
                            />
                            <Figure.Caption>
                              
                            </Figure.Caption>
                            <Button href="">View Profile</Button>
                            <Button href="">Send Message</Button>
                        </Figure>
                    </div> 
                </div>
            </section>
            {/* <div className="text-center pt-4">
                
            </div> */}

            <div className='profile-container'>
            <section className="userDataSection">
                <div className="userData-container">
                    <div className='userData'>
                        {user ? userData : errorDiv()}
                    </div>
                </div>
            </section>
    
            <section className='pictureSection'>
                <div className="profileImage-container">
                    {/* <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="images/JaredPic.jpg" />
                        <Card.Body>
                            <Card.Title>Profile Image</Card.Title>
                            <Card.Text>

                            </Card.Text>
                            <Button variant="primary">Remove</Button>
                        </Card.Body>
                    </Card> */}
                </div>    
                {<ProfileImage onDelete={handleImageDelete} onEdit={handleImageEdit} image={profileImage}/>}
            </section>             
        </div>
        </>
    );
}

// export default ProfilePage;
export default Profile;
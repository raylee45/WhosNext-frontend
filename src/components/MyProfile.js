// import React, { useState } from 'react';
// import ReactDOM from 'react-dom';
// import Button  from 'react-bootstrap';
// import Card  from 'react-bootstrap';
// import axios from 'axios';


// const ProfilePage = (props) => {
//     const [profilePage, setProfilePage] = useState(props);
//     const { id, name, email, dob_month, dob_day, dob_year, gender, preference, matches, exp } = props.user;

//     // Todo: useEffect 
//     const [profileImage, setProfileImage] = useState(props.user.profileImage);
    
//     const handleImageDelete = (e) => {
//         //Todo: handleImageDelete api call
//         e.preventDefault();
//         axios.delete(`${REACT_APP_SERVER_URL}/users/profileImg`)
//         .then(response => {
//             setProfileImage("")
//         })
//         .catch(error => {
//             console.log('===> Error loading profile image', error);
//             alert('');
//         });
//     };

//     const handleImageEdit = (e) => {
//         e.preventDefault();
//         axios.edit(`${REACT_APP_SERVER_URL}/users/profileImg`)
//         .then(response => {
//             setProfileImage("")
//         })
//         .catch(error => {
//             console.log('===> Error loading profile image', error);
//             alert('');
//         });
//     };

//     const ProfileImage = (props) => {
    
//         return(
//             <div className="profile-image">
//                 <img src={props.image} alt="harry styles" />
//                 <Button  onClick={props.onEdit}>Edit</Button>
//                 <Button onClick={props.onDelete}>Delete</Button>

//             </div>
    
//         )
//     }
    
//     return(
//         <div className='profile-container'>
//             <section className="userDataSection">
//                 <div className="userData-container">
//                     <div className='userData'>
                        
//                     </div>
//                 </div>
//             </section>
    
//             <section className='pictureSection'>
//                 <div className="profileImage-container">
//                 </div>    
//                 {<ProfileImage onDelete={handleImageDelete} onEdit={handleImageEdit} image={profileImage}/>}
//             </section>             
//         </div>
//     )
// }


// export default ProfilePage;
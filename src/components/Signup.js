// Imports
import React, { useState } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
const { REACT_APP_SERVER_URL } = process.env;

const Signup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [day, setDay] = useState('');
    const [month, setMonth] = useState('');
    const [year, setYear] = useState('');
    const [gender, setGender] = useState('');
    const [preference, setPreference] = useState('');
    const [image, setImage] = useState('');
    const [about, setAbout] = useState('');
    const [redirect, setRedirect] = useState(false);

    const handleName = (e) => {
        setName(e.target.value);
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
    }

    const handleConfirmPassword = (e) => {
        setConfirmPassword(e.target.value);
    }

    const handleDobDay = (e) => {
        setDay(e.target.value);
    }

    const handleDobMonth = (e) => {
        setMonth(e.target.value);
    }

    const handleDobYear = (e) => {
        setYear(e.target.value);
    }

    const handleGender = (e) => {
        setGender(e.target.value);
    }

    const handlePreference = (e) => {
        setPreference(e.target.value);
    }

    const handleAbout = (e) => {
        setAbout(e.target.value);
    }

    const handleImage = (e) => {
        setImage(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault(); // at the beginning of a submit function
        // make sure password and confirm password are equal
        // password length >= 8 characters
        if (password === confirmPassword && password.length >= 8) {
            const newUser = { name, email, password, dob_day: day, dob_month: month, dob_year: year, gender, preference, about, image };
            axios.post(`${REACT_APP_SERVER_URL}/users/signup`, newUser)
            .then(response => {
                console.log('===> Yay, new user');
                console.log(response);
                setRedirect(true);
            })
            .catch(error => console.log('===> Error in Signup', error));
        } else {
            if (password !== confirmPassword) return alert('Passwords don\'t match');
            alert('Password needs to be at least 8 characters. Please try again.');
        }
    }

    if (redirect) return <Redirect to="/login" /> // You can have them redirected to profile (your choice)

    return (
        <div className="row mt-3">
            <div className="col-md-7 offset-md-3">
                <div>
                    {/* <h2 className="py-2">Signup</h2> */}
                    <form onSubmit={handleSubmit}>
                        
                        <div>
                            <input type="text" name="name" placeholder="Name" value={name} onChange={handleName} className="form-control"/>
                        </div>
                        <div>
                            <input type="email" name="email" placeholder="Email" value={email} onChange={handleEmail} className="form-control"/>
                        </div>
                        <div className="form-group">
                            <input type="password" name="password" placeholder="Password" value={password} onChange={handlePassword} className="form-control"/>
                        </div>
                        <div className="form-group">
                            <input type="password" name="confirmPassword" placeholder="Confirm password" value={confirmPassword} onChange={handleConfirmPassword} className="form-control"/>
                        </div>
                        <div className="form-group">
                            <input type="text" name="day" placeholder="Day"value={day} onChange={handleDobDay} className="form-control"/>
                        </div>
                        <div className="form-group">
                            <input type="text" name="month" placeholder="Month"value={month} onChange={handleDobMonth} className="form-control"/>
                        </div>
                        <div className="form-group">
                            <input type="text" name="year" placeholder="Year" value={year} onChange={handleDobYear} className="form-control"/>
                        </div>
                        <div className="form-group">
                            <input type="text" name="gender" placeholder="Gender" value={gender} onChange={handleGender} className="form-control"/>
                        </div>
                        <div className="form-group">
                            <input type="text" name="preference" placeholder="Preference" value={preference} onChange={handlePreference} className="form-control"/>
                        </div>
                        <div className="form-group">
                            <input type="text" name="image" placeholder="Image" value={image} onChange={handleImage} className="form-control"/>
                        </div>
                        <div className="form-group">
                            <input type="text" name="about" placeholder="About" value={about} onChange={handleAbout} className="form-control"/>
                        </div>
                        <button type="submit" className="btn btn-primary float-right" href='/profile'>Submit</button>
                    </form>
                    
                </div>
            </div>
        </div>
    )
}

export default Signup;

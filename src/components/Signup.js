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
    const [dob_day, setDob_Day] = useState('');
    const [dob_month, setDob_Month] = useState('');
    const [dob_year, setDob_Year] = useState('');
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
        setDob_Day(e.target.value);
    }

    const handleDobMonth = (e) => {
        setDob_Month(e.target.value);
    }

    const handleDobYear = (e) => {
        setDob_Year(e.target.value);
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
            const newUser = { name, email, password, dob_day, dob_month, dob_year, gender, preference, about, image};
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

    if (redirect) return <Redirect to="/profile" /> // You can have them redirected to profile (your choice)

    return (
        <div className="row mt-3">
            <div className="col-md-7 offset-md-3">
                <div>
                    {/* <h2 className="py-2">Signup</h2> */}
                    <form onSubmit={handleSubmit}>
                        
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" name="name" value={name} onChange={handleName} className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" value={email} onChange={handleEmail} className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" value={password} onChange={handlePassword} className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="confirmPassword">Confirm Password</label>
                            <input type="password" name="confirmPassword" value={confirmPassword} onChange={handleConfirmPassword} className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="dob_day">Dob_Day</label>
                            <input type="text" name="dob_day" value={dob_day} onChange={handleDobDay} className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="dob_month">Dob_Month</label>
                            <input type="text" name="dob_month" value={dob_month} onChange={handleDobMonth} className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="dob_year">Dob_Year</label>
                            <input type="text" name="dob_year" value={dob_year} onChange={handleDobYear} className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="gender">Gender</label>
                            <input type="text" name="gender" value={gender} onChange={handleGender} className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="preference">Preference</label>
                            <input type="text" name="preference" value={preference} onChange={handlePreference} className="form-control"/>
                        </div>
                        {/* <button type="submit" className="btn btn-primary float-right">Submit</button> */}
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Signup;

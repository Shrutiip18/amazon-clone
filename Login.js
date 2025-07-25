import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import './Login.css'

import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";

function Login() {
    const navigate = useNavigate(); //navigate instead of history (deprecated)
    const [{}, dispatch] = useStateValue();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();  //to prevent page from reloading because of form tag

        auth
            .signInWithEmailAndPassword(email, password)
            .then(authUser => {
                dispatch({
                    type: 'SET_USER',
                    user: authUser.user
                });
                    navigate('/');
                
            })
            .catch(error => alert(error.message))
    }

    const register = e => {
        e.preventDefault();

        auth
            .createUserWithEmailAndPassword(email, password)
            .then(authUser => {
                dispatch({
                    type: 'SET_USER',
                    user: authUser.user
                });
                // it successfully created a new user with email and password
                
                    navigate('/')
                
            })
            .catch(error => alert(error.message))
    }


    return (
        <div className='login'>
            <Link to='/'>
                <img
                    className="login__logo"
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png'
                />
            </Link>

            <div className='login__container'>
                <h1>Sign-in</h1>

                <form>
                    <h5>E-mail</h5>
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)} />

                    <button type='submit' className='login__signInButton' onClick={signIn}>Sign In</button>
                </form>

                <p>
                    By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please
                    see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>

                <button onClick={register} className='login__registerButton'>Create your Amazon Account</button>
            </div>
        </div>
    )
}

export default Login
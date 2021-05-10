import React, {useState} from 'react';
import SignupForm from './SignupForm';
import {NavLink} from "react-router-dom";
import SignInForm from "./SignInForm";



function Signup({currentCreative,addCreative,setCreatives}) {

    const [isClicked, setSignupForm] = useState(false)
    const [isClicked2, setSignInForm] = useState(false)

function handleClick () {
setSignupForm(!isClicked)
}

function handleClickSignIn () {
    setSignInForm(!isClicked2)

}


    return (
         
        <div>
           <span> <button onClick={handleClick} >Sign up!</button> </span>
           {isClicked? <SignupForm isClicked={isClicked} setSignupForm={setSignupForm} currentCreative={currentCreative} addCreative={addCreative} setCreatives={setCreatives} /> : null}
           <span> <button onClick={handleClickSignIn} >Sign in!</button></span>
           {isClicked2? <SignInForm setSignInForm={setSignInForm} /> : null}
        </div>
       
    )
        
}
 
export default Signup;
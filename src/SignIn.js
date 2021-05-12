import React, {useState} from 'react';
import SignInForm from './SignInForm';


////////////SetCurrentCreative/////
function SignIn({setCurrentCreative}) {

    const [isClicked, setSignInForm] = useState(false)

function handleClick () {
    setSignInForm(!isClicked)
}


    return (
         
        <div className="intro">

           {/* <span><button id="homepage" onClick={handleClick} >Sign In</button></span>
           {isClicked? <SignInForm setCurrentCreative={setCurrentCreative} isClicked={isClicked} setSignInForm={setSignInForm}  /> : null}
                       */}
        </div>
       
    )///////SetCurrentCreative={SetCurrentCreative}/////////
        
}
 
export default SignIn;
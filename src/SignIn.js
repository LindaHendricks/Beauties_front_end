import React, {useState} from 'react';
import SignInForm from './SignInForm';


////////////SetCurrentCreative/////
function SignIn() {

    const [isClicked, setSignInForm] = useState(false)

function handleClick () {
    setSignInForm(!isClicked)
}


    return (
         
        <div>

           <button onClick={handleClick} >Sign In</button>
           {isClicked? <SignInForm isClicked={isClicked} setSignInForm={setSignInForm}  /> : null}
                      
        </div>
       
    )///////SetCurrentCreative={SetCurrentCreative}/////////
        
}
 
export default SignIn;
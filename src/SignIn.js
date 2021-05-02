import React, {useState} from 'react';
import SignInForm from './SignInForm';



function SignIn({SetCurrentCreative}) {

    const [isClicled, setSignInForm] = useState(false)

function handleClick () {
    setSignInForm(!isClicled)
}


    return (
         
        <div>

           <button onClick={handleClick} >Sign In</button>
           {isClicled? <SignInForm SetCurrentCreative={SetCurrentCreative} /> : null}

        </div>
       
    )
        
}
 
export default SignIn;
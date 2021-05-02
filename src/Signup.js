import React, {useState} from 'react';
import SignupForm from './SignupForm';



function Signup({addCreative,setCreatives}) {

    const [isClicled, setSignupForm] = useState(false)

function handleClick () {
setSignupForm(!isClicled)
}


    return (
         
        <div>

           <button onClick={handleClick} >Sign up !</button>
           {isClicled? <SignupForm addCreative={addCreative} setCreatives={setCreatives} /> : null}

        </div>
       
    )
        
}
 
export default Signup;
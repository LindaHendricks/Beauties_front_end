import Signup from './Signup';
import SignIn from './SignIn';
import React, {useState} from 'react';

function Header({addCreative, setCreatives, setCurrentCreative}) {

    return (
        <div class="header">
        <h2>Header</h2>
           <Signup  addCreative={addCreative} setCreatives={setCreatives}/>
           <SignIn setCurrentCreative={setCurrentCreative}/>
      </div>
 
    )
        
}
 
export default Header;
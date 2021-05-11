import Signup from './Signup';
// import SignIn from './SignIn';
import React, {useState} from 'react';
import { NavLink } from "react-router-dom"
import Search from './Search';
import styled from "styled-components";
import SignIn from './SignIn';




function Header({addCreative, setCreatives,isDarkMode, onToggleDarkMode,searchTerm, setSearchTerm}) {
//////setCurrentCreative///////////
    return (
        <header className="header">
            <div className="inner_header">
           <NavLink exact to="/home"><h1>Beauties</h1></NavLink>
           <h3>Everyday, browse, like and save your next beauty inspiration</h3>
           <div className="toggle-switch">
               <ul className="navigation">
               <NavLink exact to="/UploadImages"><li>UplaodImageForm</li></NavLink>
               <NavLink exact to="/saved_images"><li>Saved Imaged</li></NavLink>
               <NavLink exact to="/liked_images"><li>Favorites</li></NavLink>
               <NavLink exact to="/profile"><li>My profile</li></NavLink>
               <li>About</li>
               </ul>
           
           {/* <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} /> */}
           </div>  
          </div>
        </header>
    )
        
}
 
export default Header;
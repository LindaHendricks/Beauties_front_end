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
         <h1>Inspired</h1>
         <h3>Everyday, browse, like and save your next inspiration</h3>
          <div className="toggle-switch">
           <NavLink exact to="/home">Home</NavLink>
           <NavLink exact to="/profile">My profile</NavLink>
           <NavLink exact to="/liked_images">Favorites</NavLink>
           <NavLink exact to="/saved_images">Saved Image</NavLink>
           <NavLink exact to="/UploadImages">UplaodImageForm</NavLink>
           <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
           </div>  
          </div>
        </header>
    )
        
}
 
export default Header;
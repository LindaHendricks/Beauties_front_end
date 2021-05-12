import Signup from './Signup';
// import SignIn from './SignIn';
import React, {useState} from 'react';
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import Search from './Search';
import styled from "styled-components";
import SignIn from './SignIn';
import LogOut from './LogOut';

const P3 = styled.p `
position:absolute; 
top:20px; 
right:140px;
font-size:12px;
font-style:italic;
transition-duration: 0.4s;
padding: 0.25rem 1rem;
font-family: Times New Roman;
border: 1px solid rgb(216, 168, 168);
cursor: pointer;
border-radius: 15px; 

  &:hover {
    background: rgb(216, 168, 168);
    color: white;
    border: none;
  }
  &:focus {
    background: #FFB6C1;
    color: white;
    border: none;
  }
`
const H1b = styled.h1`
color: rgb(216, 168, 168);
padding-bottom: 0px;
font-size: 40px;
`

const H3 = styled.h3`
color: rgb(216, 168, 168);
`

const Li = styled.li `
margin-right: 10px;
font-size: 16px;
font-style:italic;
transition-duration: 0.4s;
padding: 0.25rem 1rem;
font-family: Times New Roman;
cursor: pointer;
border-radius: 15px; 

&:hover {
    background: rgb(216, 168, 168);
    color: white;
    border: none;
  }
  &:focus {
    background: #FFB6C1;
    color: white;
    border: none;
  }
`

function Header({addCreative, setCreatives,isDarkMode, onToggleDarkMode,searchTerm, setSearchTerm}) {
//////setCurrentCreative///////////
    return (
        <header className="header">
            <div className="inner_header">
           <Link exact to="/home"><H1b>"Beauties"</H1b></Link>
           <H3>- Discover, Like, Save and Share your next beauty inspiration -</H3>
           <div className="toggle-switch">
               <NavLink exact to="/"><P3>Log Out</P3></NavLink>
               <ul className="navigation">
               <NavLink exact to="/UploadImages"><Li>"Share Ideas"</Li></NavLink>
               <NavLink exact to="/saved_images"><Li>"Save Ideas"</Li></NavLink>
               <NavLink exact to="/liked_images"><Li>"Like Ideas"</Li></NavLink>
               <NavLink exact to="/profile"><Li>"My profile"</Li></NavLink>
               <Li>"About us"</Li>
               </ul>
           
           {/* <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} /> */}
           </div>  
          </div>
        </header>
    )
        
}
 
export default Header;
import EditCreativeProfileForm from './EditCreativeProfileForm';
import React, {useState, useEffect} from 'react';
import styled from "styled-components";

const Div = styled.div`
margin-right: 250px;
text-align: center;
background-color: white;
font-family: Times New Roman;
margin-left: 250px;
margin-top: 30px;
margin-bottom: 20px;
padding-top: 40px;
padding-bottom: 40px;
border: 1px solid rgb(216, 168, 168);
cursor: pointer;
border-radius: 15px; 
`;

const Img = styled.img`
border-radius: 30px;
`;

const P1 = styled.h1`
font-style: bold;
font-size: 20px;
`;

const P2 = styled.h1`
font-style: bold;
font-size: 16px;
`;

const P3 = styled.h1`
font-style: italic;
font-size: 16px;
`;

const Button3 = styled.button`
background-color: white;
font-family: Times New Roman;
margin-top: 10px;
margin-bottom: 20px;
margin-left: 450px;
transition-duration: 0.4s;
padding-left:30px;
padding-top: 5px;
padding-bottom: 5px;
padding-right:30px;
font-family: inherit;
border: 1px solid rgb(230, 184, 184);
cursor: pointer;
border-radius: 8px; 

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
`;

const Button4 = styled.button`
background-color: white;
font-family: Times New Roman;
padding-left:45px;
padding-top: 5px;
padding-bottom: 5px;
padding-right:45px;
margin-top: 10px;
margin-bottom: 20px;
margin-left: 185px;
transition-duration: 0.4s;
padding: 0.25rem 1rem;
font-family: inherit;
border: 1px solid rgb(230, 184, 184);
cursor: pointer;
border-radius: 8px; 

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
`;

function CreativeProfileCard ({setCreatives, creatives, deleteProfile, id, firstname, lastname, email, username, password, age, bio, avatar, portfolio, admin,location,accountType }) {
 

    const [isUpdating, setUpdatedProfile] = useState(false)

    function handleUpdateCreativeProfile(updatedProfile) {
        const updatedProfileArray = creatives.map((profile) => {
          if (profile.id === updatedProfile.id) {
            return updatedProfile;
          } else {
            return profile;
          }
        });
        setUpdatedProfile(!isUpdating);
        // console.log(updatedProfileArray)
        setCreatives(updatedProfileArray)
      }

    

    function handleUpdate () {
        setUpdatedProfile(!isUpdating)
    }


    function handleDelete () {
        
        fetch(`http://localhost:3000/creatives/${id}`, {
            method: "DELETE",
          })
          
          deleteProfile(id)
    }

    return (
        <> 
        <Div className="creativecard">
            <P1>Firstname: {firstname}</P1>
            <P2>Lastname: {lastname}</P2>
            <p>Username: {username}</p>
            <p>{password}</p>
            <p>Email: {email}</p>
            <p>Age: {age}</p>
            <Img src={avatar}/>
            <p>Location: {location}</p>
            <P3>Fonction: {bio}</P3>
            <p>Portfolio: {portfolio}</p>
            <p>{accountType}</p>

        </Div>
        <div>
        <Button3 onClick={handleDelete}>🗑</Button3>
        <Button4 onClick={handleUpdate}>Update</Button4>
        {isUpdating ? <EditCreativeProfileForm handleUpdateCreativeProfile={handleUpdateCreativeProfile} id={id} setUpdatedProfile={setUpdatedProfile}/> : null}
        </div>
        </>
       
    )
        
}
 
export default CreativeProfileCard;
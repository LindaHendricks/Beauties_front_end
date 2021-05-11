// import EditCreativeProfileForm from './EditCreativeProfileForm';
import React, {useEffect, useState} from 'react';
import CreativeProfileCard from './CreativeProfileCard';
import styled from "styled-components";

const H1 = styled.h1`
text-align: center;
padding-top: 30px;
padiing-bottom: 40px;
font-style: italic;
font-family: Times New Roman
`


function CreativeProfile({creatives, setCreatives}) {

   

    function deleteProfile(id) {
        const updatedCreativesArray = creatives.filter((creative) => creative.id !== id);
        setCreatives(updatedCreativesArray);
      }
 
    const creativesList = creatives.map((creative) => {
        return <CreativeProfileCard 
        key={creative.id}
        id={creative.id} 
        firstname={creative.firstname} 
        lastname={creative.lastname} 
        email={creative.email} 
        username={creative.username} 
        password={creative.password} 
        age={creative.age} 
        bio={creative.bio} 
        avatar= {creative.avatar} 
        portfolio={creative.portfolio} 
        admin={creative.admin}
        deleteProfile={deleteProfile} 
        creatives={creatives}
        setCreatives={setCreatives}
        />
    })

    return (
         
        <div>
            <H1>My Profile</H1>
            <ul>{creativesList}</ul>
        </div>
       
    )
        
}
 
export default CreativeProfile;
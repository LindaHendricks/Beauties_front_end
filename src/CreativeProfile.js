// import EditCreativeProfileForm from './EditCreativeProfileForm';
import React, {useEffect, useState} from 'react';
import CreativeProfileCard from './CreativeProfileCard';



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
            <h1>My Profile</h1>
            <ul>{creativesList}</ul>
        </div>
       
    )
        
}
 
export default CreativeProfile;
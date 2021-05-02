// import EditCreativeProfileForm from './EditCreativeProfileForm';
import React, {useEffect, useState} from 'react';
import CreativeProfileCard from './CreativeProfileCard';



function CreativeProfile() {

    const [creatives, setCreatives] = useState([])

    function deleteProfile(id) {
        const updatedCreativesArray = creatives.filter((creative) => creative.id !== id);
        setCreatives(updatedCreativesArray);
      }


    useEffect(() => {  
        fetch('http://localhost:3000/creatives')
        .then((r) =>r.json())
        .then(r => setCreatives(r)) 

    },[])
 
    const creativesList = creatives.map((creative) => {
        return <CreativeProfileCard 
        key={creative.id}
        id={creative.id} 
        firstName={creative.firstName} 
        lastName={creative.lastName} 
        email={creative.email} 
        username={creative.username} 
        password={creative.password} 
        age={creative.age} 
        bio={creative.bio} 
        avatar= {creative.avatar} 
        portfolio={creative.portfolio} 
        admin={creative.admin}
        deleteProfile={deleteProfile} 
        />
    })

    return (
         
        <div>
            <ul>{creativesList}</ul>
        </div>
       
    )
        
}
 
export default CreativeProfile;
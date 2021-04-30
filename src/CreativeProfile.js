// import EditCreativeProfileForm from './EditCreativeProfileForm';
import React, {useEffect, useState} from 'react';
import CreativeProfileCard from './CreativeProfileCard';


function CreativeProfile() {

    const [creatives, setCreatives] = useState([])
    

    useEffect(() => {  
        fetch('http://localhost:3000/creatives')
        .then((r) =>r.json())
        .then(r => setCreatives(r)) 

    },[])
 
    const creativesList = creatives.map((creative) => {
        return <CreativeProfileCard key={creative.id} firstName={creative.firstName} lastName={creative.lastName} email={creative.email} username={creative.username} password={creative.password} age={creative.age} bio={creative.bio} avatar={creative.avatar} portfolio={creative.portfolio} admin={creative.admin} />
    })

    return (
         
        <div>
           <h2>CreativeProfile</h2>
            <ul>{creativesList}</ul>
        </div>
       
    )
        
}
 
export default CreativeProfile;
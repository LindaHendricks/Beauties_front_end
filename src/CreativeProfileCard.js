import EditCreativeProfileForm from './EditCreativeProfileForm';
import React, {useState, useEffect} from 'react';


function CreativeProfileCard ({setCreatives,creatives, deleteProfile,id,firstname, lastname, email, username, password, age, bio, avatar, portfolio, admin,location,accountType }) {
 

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
        console.log(updatedProfileArray)
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
         
        <div className="creativecard">
            <p>{firstname}</p>
            <p>{lastname}</p>
            <p>{email}</p>
            <p>{age}</p>
            <p>{username}</p>
            <p>{password}</p>
            <p>{avatar}</p>
            <p>{location}</p>
            <p>{bio}</p>
            <p>{portfolio}</p>
            <p>{accountType}</p>
            <button onClick={handleDelete}>🗑</button>
            <button onClick={handleUpdate}>update</button>
            {isUpdating ? <EditCreativeProfileForm handleUpdateCreativeProfile={handleUpdateCreativeProfile} id={id} setUpdatedProfile={setUpdatedProfile}/> : null}
        </div>
       
    )
        
}
 
export default CreativeProfileCard;
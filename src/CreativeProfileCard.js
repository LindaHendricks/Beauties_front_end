import EditCreativeProfileForm from './EditCreativeProfileForm';
import React, {useState, useEffect} from 'react';


function CreativeProfileCard ({deleteProfile,id,firstname, lastname, email, username, password, age, bio, avatar, portfolio, admin,location,accountType }) {
 

    const [isUpdating, setUpdatedProfile] = useState("")

    

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
            {isUpdating ? <EditCreativeProfileForm id={id} setUpdatedProfile={setUpdatedProfile}/> : null}
        </div>
       
    )
        
}
 
export default CreativeProfileCard;
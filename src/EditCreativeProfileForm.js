import React, {useState} from 'react';


function EditCreativeProfileForm({handleUpdateCreativeProfile,id,setUpdatedProfile}) {


    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [age, setAge] = useState(0);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [avatar, setAvatar] = useState("");
    const [location, setLocation] = useState("");
    const [bio, setBio] = useState("");
    const [portfolio, setPortfolio] = useState("");
    const [accountType, setAccountType] = useState(false);

  
    function handleEditSubmit(event) {
      event.preventDefault();
       console.log('clicked')
      fetch(`http://localhost:3000/creatives/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
        firstname: firstname,
        lastname: lastname,
        email: email,
        age: age,
        username: username,
        password: password,
        avatar: avatar,
        location: location, 
        bio: bio,
        portfolio: portfolio, 
        accountType: accountType, 
        }),
      })
      .then((r) => r.json())
      .then((UpdatedData) => {handleUpdateCreativeProfile(UpdatedData);
      })

    }
    
   
    return (
         
        <form onSubmit={handleEditSubmit}>

         <h3>Create an Account</h3>

      <label htmlFor="firstname">Firstname</label>
      <input
        type="text"
        id="firstname"
        value={firstname}
        onChange={(e) => setFirstname(e.target.value)}
      />

      <label htmlFor="lastname">Lastname</label>
      <input
        type="text"
        id="lastname"
        value={lastname}
        onChange={(e) => setLastname(e.target.value)}
      />

      <label htmlFor="email">Email</label>
      <input
        type="text"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <label htmlFor="age">Age</label>
      <input
        type="integer"
        id="age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      
      <label htmlFor="username">Username</label>
      <input
        type="text"
        id="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <label htmlFor="password">Password</label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <label htmlFor="avatar">Avatar Image</label>
      <input
        type="text"
        id="avatar"
        value={avatar}
        onChange={(e) => setAvatar(e.target.value)}
      />

      <img
        src={avatar}
        alt="Avatar preview"
      />


      <label htmlFor="location">Location</label>
      <input
        type="text"
        id="location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />

      <label htmlFor="bio">Bio</label>
      <input
        type="text"
        id="bio"
        value={bio}
        onChange={(e) => setBio(e.target.value)}
      />

      <label htmlFor="portfolio">Portfolio</label>
      <input
        type="text"
        id="portfolio"
        value={portfolio}
        onChange={(e) => setPortfolio(e.target.value)}
      />


      <label htmlFor="type">Account Type</label>
      <select
        id="type"
        value={accountType}
        onChange={(e) => setAccountType(e.target.value)}
      >
        <option value="admin">Admin</option>
        <option value="creative">Creative</option>
        <option value="pro">Pro</option>
      </select>

      <input type="submit" value="submit" />
    </form>
  );
       
        
}
 
export default EditCreativeProfileForm;
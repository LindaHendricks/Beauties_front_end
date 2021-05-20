import React, {useState} from 'react';
import styled from "styled-components";

const EditFormSignup = styled.form`
  font-family: 'Times New Roman';
  padding: 20px;
  border: none;
  border-radius: 15px;
  width: 100%;
  border-color: rgb(230, 184, 184);
  background-color:  rgb(230, 184, 184);
  font-size: 40px;
  text-align: center;
  margin-top: 10px;
`

const Input = styled.input `
margin-left: 10px;
margin-bottom: 10px;
background-color: rgb(230, 184, 184)
`

const Input2 = styled.input `
margin-left=70px;
`

const Label = styled.label `
margin-left: 40px;
margin-bottom: 50px
`

const Select = styled.select `
margin-right: 10px;
margin-left: 10px;
margin-bottom: 10px;
background-color: rgb(230, 184, 184)
`

const Input3 = styled.input`
margin-left: 65px;
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

const H1 = styled.h1`
text-align: center;
padding-top: 30px;
padiing-bottom: 40px;
font-style: italic;
font-family: Times New Roman
font-size: 12px;
`;



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
         
        <EditFormSignup onSubmit={handleEditSubmit}>

         <H1>Update your profile</H1>

      <label htmlFor="firstname">Firstname</label>
      <Input
        type="text"
        id="firstname"
        value={firstname}
        onChange={(e) => setFirstname(e.target.value)}
      />

      <label htmlFor="lastname">Lastname</label>
      <Input
        type="text"
        id="lastname"
        value={lastname}
        onChange={(e) => setLastname(e.target.value)}
      />

      <label htmlFor="email">Email</label>
      <Input
        type="text"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <label htmlFor="age">Age</label>
      <Input
        type="integer"
        id="age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      
      <label htmlFor="username">Username</label>
      <Input
        type="text"
        id="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <label htmlFor="password">Password</label>
      <Input
        type="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <label htmlFor="avatar">Avatar Image</label>
      <Input
        type="text"
        id="avatar"
        value={avatar}
        onChange={(e) => setAvatar(e.target.value)}
      />

      <img
        src={avatar}
      />


      <label htmlFor="location">Location</label>
      <Input
        type="text"
        id="location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />

      <label htmlFor="bio">Bio</label>
      <Input
        type="text"
        id="bio"
        value={bio}
        onChange={(e) => setBio(e.target.value)}
      />

      <label htmlFor="portfolio">Portfolio</label>
      <Input
        type="text"
        id="portfolio"
        value={portfolio}
        onChange={(e) => setPortfolio(e.target.value)}
      />


      <label htmlFor="type">Account Type</label>
      <Select
        id="type"
        value={accountType}
        onChange={(e) => setAccountType(e.target.value)}
      >
        <option value="admin">Admin</option>
        <option value="creative">Creative</option>
      </Select>

      <Input3 type="submit" value="submit" />
    </EditFormSignup>
  );         
}
 
export default EditCreativeProfileForm;
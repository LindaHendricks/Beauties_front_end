import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

const FormSignup = styled.form`
  font-family: "Times New Roman";
  padding: 20px;
  border: none;
  border-radius: 15px;
  width: 100%;
  border-color: rgb(230, 184, 184);
  background-color: rgb(230, 184, 184);
  font-size: 40px;
  text-align: center;
  margin-top: 10px;
`;

const Input = styled.input`
  margin-left: 10px;
  margin-bottom: 10px;
  background-color: rgb(230, 184, 184);
`;

const Input2 = styled.input`
margin-left=70px;
`;

const Label = styled.label`
  margin-left: 40px;
  margin-bottom: 50px;
`;

const Select = styled.select`
  margin-right: 10px;
  margin-left: 10px;
  margin-bottom: 10px;
  background-color: rgb(230, 184, 184);
`;

const Input3 = styled.input`
  margin-left: 65px;
  font-size: 12px;
  font-style: italic;
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
    background: #ffb6c1;
    color: white;
    border: none;
  }
`;

function SignupForm({
  isClicked,
  setSignupForm,
  currentCreative,
  addCreative,
  setCreatives,
}) {
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
  const history = useHistory();

  function handleSubmit(event) {
    event.preventDefault();

    const signUpData = {
      firstname,
      lastname,
      email,
      age,
      username,
      password,
      avatar,
      location,
      bio,
      portfolio,
      accountType,
    };

    fetch(`http://localhost:3000/creatives`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(signUpData),
    })
      .then((r) => r.json())
      .then((signUpData) => {
        addCreative(signUpData);
        history.push(`/home`);
      });
  }

  return (
    <main>
      <FormSignup onSubmit={handleSubmit}>
        <h1>Create Your Profile! </h1>

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

        <label htmlFor="avatar">Pic</label>
        <Input
          type="text"
          id="avatar"
          value={avatar}
          onChange={(e) => setAvatar(e.target.value)}
        />

        <img src={avatar} />

        <Label htmlFor="location">Location</Label>
        <Input
          type="text"
          id="location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />

        <label htmlFor="bio">Function</label>
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

        <Label htmlFor="type">Account Type</Label>
        <Select
          id="type"
          value={accountType}
          onChange={(e) => setAccountType(e.target.value)}
        >
          <option value="admin">Admin</option>
          <option value="creative">Creative</option>
        </Select>

        <Input3 type="submit" value="submit" />
      </FormSignup>
    </main>
  );
}

export default SignupForm;

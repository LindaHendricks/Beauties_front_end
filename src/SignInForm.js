import React, { useState } from "react";
import { useHistory } from "react-router-dom";


function SignInForm({isClicked2, setSignInForm, setCurrentCreative}) {
  const [formData, setFormData] = useState({
    username: "",
    password: ""
  });
  const [errors, setErrors] = useState([]);
  const history = useHistory();

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    // request => POST /login
    fetch("http://localhost:3000/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(formData),
      
    }) 
      .then((response) => response.json())
      .then((user) => setCurrentCreative(user))

      setSignInForm(!isClicked2)
      history.push(`/home`)
  }

  return (
    <div>
      <form className="signinform" onSubmit={handleSubmit} autoComplete="off">
        <label>Username</label>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
        <label className="signinform" >Password</label>
        <input
          className="signinform"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />

        {errors.map((error) => (
          <p key={error} style={{ color: "red" }}>
            {error}
          </p>
        ))}
        <input className="signinform" type="submit" value="singin" />
      </form>
    </div>
  );
}

export default SignInForm;

 

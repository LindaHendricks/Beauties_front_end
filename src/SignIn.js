import React, { useState } from "react";
import SignInForm from "./SignInForm";

function SignIn({ setCurrentCreative }) {
  const [isClicked, setSignInForm] = useState(false);

  function handleClick() {
    setSignInForm(!isClicked);
  }

  return <div className="intro"></div>;
}

export default SignIn;

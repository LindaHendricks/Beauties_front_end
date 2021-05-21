import ImageCardDetails from "./ImageCardDetails";
import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import ImagePage from "./ImagePage";
import { useParams } from "react-router-dom";

function LogOut() {
  function handleClick() {
    console.log("Clicked");
  }

  return (
    <div>
      <NavLink to={`/`} exact>
        {" "}
        <button onClick={handleClick}> Log Out </button>{" "}
      </NavLink>
    </div>
  );
}

export default LogOut;

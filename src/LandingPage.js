import { NavLink } from "react-router-dom";
import Signup from "./Signup";

function LandingPage({ currentCreative, addCreative, setCreatives }) {
  return (
    <div className="intro">
      <NavLink NavLink exact to="/"></NavLink>
    </div>
  );
}

export default LandingPage;

import styled from "styled-components";
import { NavLink } from "react-router-dom";

const P1 = styled.p`
  text-align: center;
  margin-left: 30px;
  margin-right: 30px;

  padding-top: 15px;
  padiing-bottom: 10px;
  font-style: italic;
  font-family: Times New Roman;
`;

const Img1 = styled.img`
  border-radius: 15px;
  width: 75%;
  border: transparent 10px solid;
  box-sizing: border-box;
`;

const Div = styled.div`
  margin: auto;
  width: 50%;
  padding: 10px;
`;

function SavedImageCardDetails({
  key,
  id,
  title,
  picture,
  description,
  setSavedImages,
}) {
  return (
    <Div>
      <NavLink to={`/images/${id}`} exact>
        {" "}
        <Img1 src={picture} />{" "}
      </NavLink>

      <P1>Description: {description}</P1>
    </Div>
  );
}

export default SavedImageCardDetails;

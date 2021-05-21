import ImageCardDetails from "./ImageCardDetails";
import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import ImagePage from "./ImagePage";
import { useParams } from "react-router-dom";

function ImageCard({
  addtoLikedImageList,
  setCurrentCreative,
  setComments,
  creativeId,
  image_id,
  title,
  description,
  picture,
  addComment,
  comments,
}) {
  const [imagePage, setImagePage] = useState(null);

  function handleClick() {
    console.log(image_id);

    fetch(`http://localhost:3000/images/${image_id}`)
      .then((response) => response.json())
      .then((response) => console.log(response));
  }

  return (
    <span className="imgitem">
      <NavLink to={`/images/${image_id}`} exact>
        {" "}
        <img
          onClick={handleClick}
          src={picture}
          alt={title}
          image_id={image_id}
        />{" "}
      </NavLink>
    </span>
  );
}

export default ImageCard;

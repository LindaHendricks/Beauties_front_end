import LikedImageCard from "./LikedImageCard";
import React, { useEffect } from "react";

import styled from "styled-components";

const Div = styled.div`
  margin-right: 250px;
  text-align: center;
  background-color: white;
  font-family: Times New Roman;
  margin-left: 250px;
  margin-top: 30px;
  margin-bottom: 20px;
  padding-top: 40px;
  padding-bottom: 40px;
  border: 1px solid rgb(216, 168, 168);
  cursor: pointer;
  border-radius: 15px;
`;

function LikedImageContainer({
  addtoLikedImageList,
  likedImages,
  setLikedImages,
}) {
  useEffect(() => {
    fetch(`http://localhost:3000/liked_images`)
      .then((response) => response.json())
      .then((response) => setLikedImages(response));
  }, []);

  const LikedImageList = likedImages.map((likedImage) => {
    return (
      <LikedImageCard
        key={likedImage.image.id}
        id={likedImage.image.id}
        title={likedImage.image.title}
        picture={likedImage.image.picture}
        description={likedImage.image.description}
        addtoLikedImageList={addtoLikedImageList}
      />
    );
  });

  return (
    <div>
      <ul>{LikedImageList}</ul>
    </div>
  );
}

export default LikedImageContainer;

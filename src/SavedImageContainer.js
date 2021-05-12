import SavedImageCard from './SavedImageCard';
import React, {useEffect,useState} from 'react';
import styled from "styled-components";

const H1 = styled.h1`
text-align: center;
padding-top: 30px;
padiing-bottom: 40px;
font-style: italic;
font-family: Times New Roman
`;

function SavedImageContainer({addtoSavedImageList, savedImages, setSavedImages}) {

       
    useEffect(() => {
        fetch (`http://localhost:3000/saved_images`)
        .then(response => response.json())
        .then(response => setSavedImages(response))
        },[])
    
        const SavedImageList = savedImages.map((savedImage) => {
           
            return < SavedImageCard
            key={savedImage.image.id}
            id={savedImage.image.id} 
            title={savedImage.image.title} 
            picture={savedImage.image.picture} 
            description={savedImage.image.description}
            addtoSavedImageList={addtoSavedImageList}
            setSavedImages={setSavedImages}
            />
        })
 

    return (
         
        <div>
            <ul>{SavedImageList}</ul>
        </div>
       
    )
        
}
 
export default SavedImageContainer;
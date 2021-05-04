import SavedImageCard from './SavedImageCard';
import React, {useEffect,useState} from 'react';

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
           <h2>Your Saved Images</h2>
           <ul>{SavedImageList}</ul>
          
        </div>
       
    )
        
}
 
export default SavedImageContainer;
import LikedImageCard from './LikedImageCard';
import React, {useEffect} from 'react';

function LikedImageContainer({addtoLikedImageList, likedImages, setLikedImages}) {
    
    
    
    useEffect(() => {
    fetch (`http://localhost:3000/liked_images`)
    .then(response => response.json())
    .then(response => setLikedImages(response))
    },[])

   







    const LikedImageList = likedImages.map((likedImage) => {
       
        return < LikedImageCard
        key={likedImage.image.id}
        id={likedImage.image.id} 
        title={likedImage.image.title} 
        picture={likedImage.image.picture} 
        description={likedImage.image.description}
        addtoLikedImageList={addtoLikedImageList}
        />
    })
    
    return (
         
        <div>
            <h2>Your Favorites Images</h2>
            <ul>{LikedImageList}</ul>
        </div>
       
    )
        
}
 
export default LikedImageContainer;
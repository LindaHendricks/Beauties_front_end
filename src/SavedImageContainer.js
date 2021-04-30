import SavedImageCard from './SavedImageCard';
// import React, {useEffect,useState} from 'react';

function SavedImageContainer() {
 
    // const [savedImages, setSavedImages] = useState([])
   
    // useEffect(() => {
  
      
    //     fetch(`http://localhost:3000/saved_images/1`)
    //    .then(response => response.json())
    //    .then(response => console.log(response.image))
    //    },[])

    // //  const savedImagesList = savedImages.map(savedImage => {
    // //    return <SavedImageCard 
    // //      user_id={savedImage.user}
    // //    />
    // //  })

    return (
         
        <div>
           <h2>SavedImageContainer</h2>
           <SavedImageCard/>
        </div>
       
    )
        
}
 
export default SavedImageContainer;
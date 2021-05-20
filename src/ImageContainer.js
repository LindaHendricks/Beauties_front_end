import ImageCard from './ImageCard';
import React, {useState, useEffect} from 'react';
// import NewCommentForm from './NewCommentForm';
import UplaodImageForm from './UplaodImageForm';
import Comments from './Comments';
import Search from './Search';

function ImageContainer({addtoLikedImageList, searchTerm, setSearchTerm, setCurrentCreative, addComments, comments, addImage,images, setImages,creatives,ImageCards}) {
console.log(ImageCards)
    return (
       
        <main>
        <div className="imagescontainer"> 
           {ImageCards}
        </div>
        </main>
        
       
        
       
    )
        
}
 
export default ImageContainer;
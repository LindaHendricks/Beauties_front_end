import ImageCard from './ImageCard';
import React, {useState, useEffect} from 'react';
// import NewCommentForm from './NewCommentForm';
import UplaodImageForm from './UplaodImageForm';
import Comments from './Comments';

function ImageContainer({addComments, comments, addImage,images, setImages,creatives,ImageCards}) {

    return (
         
        <div>  
           <ul className="imagecards">{ImageCards}</ul>
           <UplaodImageForm addImage={addImage}/>
        </div>
       
    )
        
}
 
export default ImageContainer;
import ImageCard from './ImageCard';
import React, {useState, useEffect} from 'react';
// import NewCommentForm from './NewCommentForm';
import UplaodImageForm from './UplaodImageForm';
import Comments from './Comments';
import Search from './Search';

function ImageContainer({searchTerm, setSearchTerm, setCurrentCreative, addComments, comments, addImage,images, setImages,creatives,ImageCards}) {
console.log(ImageCards)
    return (
         
        <div> 
         <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
           <ul className="imagecards">{ImageCards}</ul> 
           {/* <UplaodImageForm addImage={addImage}/> */}
        </div>
       
    )
        
}
 
export default ImageContainer;
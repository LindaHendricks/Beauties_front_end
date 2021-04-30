import ImageCard from './ImageCard';
import React, {useState, useEffect} from 'react';
// import NewCommentForm from './NewCommentForm';
import UplaodImageForm from './UplaodImageForm';

function ImageContainer() {

    const [images, setImages] = useState([])
    const [comments, setComments] = useState([])
    // console.log(comments)
    
    
    function addComment(creativeInput) {
        const updatedCommentList = [creativeInput, ...comments]
        console.log(updatedCommentList)
        setComments(updatedCommentList)
    }

    function addImage(newImage) {
        const updatedImagesList = [newImage, ...images]
        console.log(updatedImagesList)
        setImages(updatedImagesList)
    }

    useEffect(() => { fetch(`http://localhost:3000/comments`)
    .then(response => response.json())
    .then(arrayOfComments => setComments(arrayOfComments))
},[])
    
   
    

    useEffect(() => {
  
      
     fetch(`http://localhost:3000/images`)
    .then(response => response.json())
    .then(ArraysOfImages => setImages(ArraysOfImages))
    },[])
    
    const ImageCards = images.map((image) => (
      <ImageCard 
      key={image.id} 
      id={image.id }
      title={image.title} 
      picture={image.picture}
      description={image.description}
      addComment={addComment}
      comments={comments}
      
      />
      ));




    return (
         
        <div>  
           <ul className="imagecards">{ImageCards}</ul>
           <UplaodImageForm addImage={addImage}/>
        </div>
       
    )
        
}
 
export default ImageContainer;
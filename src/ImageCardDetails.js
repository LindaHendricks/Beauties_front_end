import NewCommentForm from './NewCommentForm';
import React, {useState} from 'react';
import Comments from './Comments';
import ImagePage from './ImagePage';
import { NavLink } from 'react-router-dom'

function ImageCardDetails({addtoLikedImageList, title, picture, creativeId, image_id, description, addComment, comments}) {




console.log(image_id)

    const [isFav, setIsFavorited] = useState(false)
    const [isSaved, setIsSaved] = useState(false)

    function handleClickSaved () {
        setIsSaved(!isSaved)
        const SavedImage = {
            creative_id: 2, 
          //   title: title,
          //   picture: picture,
          //   description: description,
            image_id: image_id
        }
  
        console.log(SavedImage)
  
          fetch((`http://localhost:3000/saved_images`), {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
                  'Accept': 'application/json'
              },
              body: JSON.stringify(SavedImage)
  
          })
          .then(response => response.json())
          .then(response => console.log(response))

    }


    function handlHeartClick(){
      setIsFavorited (!isFav)

      const likedImage = {
          creative_id: 2, 
        //   title: title,
        //   picture: picture,
        //   description: description,
          image_id: image_id
      }

      console.log(likedImage)

        fetch((`http://localhost:3000/liked_images`), {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(likedImage)

        })
        .then(response => response.json())
        .then(response => console.log(response))
    }

    


    return (
        <div className="imgdetails">
         <span className="imgdetails">  
           <h4>{title}</h4>
            <p>{description}</p>
            <button  className="imgdetails" onClick={handlHeartClick}>{isFav ? "★" : "☆" }</button>
            <button className="imgdetails" onClick={handleClickSaved }>{isSaved ? "saved" : "save" }</button>
            <Comments />
            <NewCommentForm addComment={addComment}  image_id={ image_id} comments={comments}/>
            <Comments/>   
            <ImagePage image_id={ image_id} /> 
               
        </span>
        </div> 
        
    )
        
}
 
export default ImageCardDetails;
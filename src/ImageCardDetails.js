import NewCommentForm from './NewCommentForm';
import React, {useState} from 'react';
import Comments from './Comments';

function ImageCardDetails({creativeId, image_id, description, addComment, comments}) {

console.log(creativeId)
console.log(image_id)

    const [isFav, setIsFavorited] = useState(false)
    const [isSaved, setIsSaved] = useState(false)

    function handleClickSaved () {
        setIsSaved(!isSaved)
    }

    function handlHeartClick(){
        setIsFavorited (!isFav)

        fetch((`http://localhost:3000/liked_images/`), {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(isFav)

        })
        .then(response => response.json())
        .then(response =>console.log(response))
    }

    


    return (
         
        <>  <h4>Description</h4>
            <p>{description}</p>
           <div className="button">
            <button onClick={handlHeartClick}>{isFav ? "★" : "☆" }</button>
            <button onClick={handleClickSaved }>{isSaved ? "saved" : "save" }</button>
            <Comments />
            <NewCommentForm addComment={addComment}  image_id={ image_id} comments={comments}/>
          </div>
          
       </>
    )
        
}
 
export default ImageCardDetails;
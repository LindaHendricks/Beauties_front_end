import NewCommentForm from './NewCommentForm';
import React, {useState} from 'react';

function ImageCardDetails({id, description, addComment, comments}) {

    const [isFav, setIsFavorited] = useState(false)

    function handlHeartClick(){
        setIsFavorited (!isFav)

        fetch((`http://localhost:3000/liked_images`), {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(isFav)

        })
        .then(response => response.json())
        .then(response =>setIsFavorited(response))
    }

    


    return (
         
        <>  <h4>Description</h4>
            <p>{description}</p>
           <div className="button">
            <button onClick={handlHeartClick}>{isFav ? "★" : "☆" }</button>
            <button>save</button>
            <NewCommentForm addComment={addComment} id={id} comments={comments}/>
          </div>
          
       </>
    )
        
}
 
export default ImageCardDetails;
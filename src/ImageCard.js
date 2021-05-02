import ImageCardDetails from './ImageCardDetails';
import React, {useState} from 'react';


function ImageCard({setComments, creativeId, image_id, title, description, picture,addComment,comments}) {


    const [isShown, setShown] = useState(false)

    function handleClick() {
        setShown(!isShown)
    }


    return (
         
        <main>
         <div >
            <h3>{title}</h3>
            <img onClick={handleClick}src={picture} alt={title}  image_id={ image_id}/>
            {isShown ? <ImageCardDetails creativeId={creativeId} addComment={addComment} description={description}  image_id={ image_id} comments={comments}/>  : null}
            </div>
        </main>
       
    )
        
}
 
export default ImageCard;
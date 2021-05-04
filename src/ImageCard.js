import ImageCardDetails from './ImageCardDetails';
import React, {useState} from 'react';


function ImageCard({setCurrentCreative, setComments, creativeId, image_id, title, description, picture,addComment,comments}) {


    const [isShown, setShown] = useState(false)

    function handleClick() {
        setShown(!isShown)
    }


    return (
         
        
         <div className="card">
            <h3>{title}</h3>
            <img onClick={handleClick}src={picture} alt={title}  image_id={ image_id}/>
            {isShown ? <ImageCardDetails  picture={picture} title={title} setCurrentCreative={setCurrentCreative} creativeId={creativeId} addComment={addComment} description={description}  image_id={ image_id} comments={comments}/>  : null}
        </div>
        
       
    )
        
}
 
export default ImageCard;
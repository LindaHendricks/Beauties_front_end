import ImageCardDetails from './ImageCardDetails';
import React, {useState} from 'react';


function ImageCard({id, title, description, picture,addComment,comments}) {


    const [isShown, setShown] = useState(false)

    function handleClick() {
        setShown(!isShown)
    }


    return (
         
        <main>
         <div >
            <h3>{title}</h3>
            <img onClick={handleClick}src={picture} alt={title} id ={id}/>
            {isShown ? <ImageCardDetails addComment={addComment} description={description} id={id} comments={comments}/>  : null}
            </div>
        </main>
       
    )
        
}
 
export default ImageCard;
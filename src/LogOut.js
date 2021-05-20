import ImageCardDetails from './ImageCardDetails';
import React, {useState, useEffect} from 'react';
import {NavLink} from 'react-router-dom';
import ImagePage from './ImagePage';
import {useParams} from 'react-router-dom';



function LogOut() {

    function handleClick () {
        // const [isClicked3, setIsClicked3] = useState(false)
        // const [isLoaded, setIsLoaded] = useState(false)
        console.log("Clicked")

    }

    return (
         
    
         <div>
             
            <NavLink to={`/`} exact > <button onClick={handleClick} > Log Out </button> </NavLink>
            
            {/* <ImagePage image_id={image_id} title={title} description={description} picture={picture} addComment={addComment} comments={comments} comments={comments}/> */}
            {/* {isShown ? <ImageCardDetails addtoLikedImageList={addtoLikedImageList} picture={picture} title={title} setCurrentCreative={setCurrentCreative} creativeId={creativeId} addComment={addComment} description={description}  image_id={ image_id} comments={comments}/>  : null} */} 
            
        </div>
    )
    }
 
export default LogOut;
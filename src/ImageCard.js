import ImageCardDetails from './ImageCardDetails';
import React, {useState, useEffect} from 'react';
import {NavLink} from 'react-router-dom';
import ImagePage from './ImagePage';
import {useParams} from 'react-router-dom';



function ImageCard({addtoLikedImageList, setCurrentCreative, setComments, creativeId, image_id, title, description, picture,addComment,comments}) {

    const [imagePage, setImagePage] = useState(null)
    // const {id} = useParams();

    function handleClick () {
        // const [imagePage, setImagePage] = useState(null)
        // const [isLoaded, setIsLoaded] = useState(false)
       
        console.log(image_id)
    
        
        
            fetch(`http://localhost:3000/images/${image_id}`)
                .then(response => response.json())
                .then(response => console.log(response))
                // setIsLoaded(true)
        


    // const [imagePage, setImagePage] = useState(null)
    // const [isLoaded, setIsLoaded] = useState(false)
    // const {id} = useParams();
    // console.log(id)
    

    
    // useEffect(()=> {
    //     fetch(`http://localhost:3000/images/${1}`)
    //         .then(response => response.json())
    //         .then(response => setImagePage(response))
    //         setIsLoaded(true)
    // }, [id])
    //    fetch(`http://localhost:3000/images/${image_id}`)
    //    .then(response => response.json())
    //    .then(response => setImagePage(response))

    //    setImagePage

    }

    return (
         
    
         <span className="imgitem">
             
            <NavLink to={`/images/${image_id}`} exact > <img onClick={handleClick} src={picture} alt={title}  image_id={image_id}/> </NavLink>
            
            {/* <ImagePage image_id={image_id} title={title} description={description} picture={picture} addComment={addComment} comments={comments} comments={comments}/> */}
            {/* {isShown ? <ImageCardDetails addtoLikedImageList={addtoLikedImageList} picture={picture} title={title} setCurrentCreative={setCurrentCreative} creativeId={creativeId} addComment={addComment} description={description}  image_id={ image_id} comments={comments}/>  : null} */} 
            
        </span>
    )
    }
 
export default ImageCard;
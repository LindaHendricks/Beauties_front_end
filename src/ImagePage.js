import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import NewCommentForm from './NewCommentForm';
import NewCommentsDetailsForm from './NewCommentsDetailsForm';
import Comments from './Comments';

function ImagePage({ images, setImages, addtoLikedImageList, creativeId, image_id, addComment, comments}){
   
    // {addtoLikedImageList, title, picture, creativeId, image_id, description, addComment, comments}

    const [imagePage, setImagePage] = useState(null)
    const [isFav, setIsFavorited] = useState(false)
    const [isSaved, setIsSaved] = useState(false)
    // const [isLoaded, setIsLoaded] = useState(false)
    const {id} = useParams();
    console.log(id)
    console.log(imagePage)
    


    useEffect(()=> {
        fetch(`http://localhost:3000/images/${id}`)
            .then(response => response.json())
            .then(imagePage => setImagePage(imagePage))
            // setIsLoaded(true)
    }, [id])

    // if (!isLoaded) return <h2>Loading...</h2>;
    
    // const { title, description, picture} = imagePage



    function handleClickSaved () {
        setIsSaved(!isSaved)
        const SavedImage = {
            creative_id: 1, 
            image_id: id
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
          creative_id: 1, 
          image_id: id
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


    return(
        
       
       
       <div className="imagepage">
            <p>I AM REDERING SOMETHING LINDA</p>
            {imagePage? <> <h1>{imagePage.title}</h1>
        <img src={imagePage.picture} alt={imagePage.title}/>
        <p>{imagePage.description}</p> </> : "hi"}

        <button  className="imgdetails" onClick={handlHeartClick}>{isFav ? "★" : "☆" }</button>
        <button className="imgdetails" onClick={handleClickSaved }>{isSaved ? "saved" : "save" }</button>
        <NewCommentForm addComment={addComment}  image_id={image_id} new_image_id={id} comments={comments}/>
        <Comments/> 
        </div>
       
    )
}

export default ImagePage;



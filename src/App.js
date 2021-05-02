// import React, {useState, useEffect} from 'react';
import { Switch, Route } from "react-router-dom";
import Header from './Header';
import Search from './Search';
import './App.css';
import ImageContainer from './ImageContainer';
import ImageCard from './ImageCard';
import CreativeProfile from './CreativeProfile';
import SavedImageContainer from './SavedImageContainer';
import LikedImageContainer from './LikedImageContainer';
import React, {useState, useEffect} from 'react';
// import ImageCard from './ImageCard';
// import NewCommentForm from './NewCommentForm';



function App() {

  const [savedImages, setSavedImages] = useState([])
  const [LikedImages, setLikedImages] = useState([])
  const [images, setImages] = useState([])
  const [creatives, setCreatives] = useState([])
  const [comments, setComments] = useState([])
  const [currentCreative, setCurrentCreative] = useState(null)

  console.log(currentCreative)

  function addComment(creativeInput) {
    const updatedCommentList = [creativeInput, ...comments]
    console.log(updatedCommentList)
    setComments(updatedCommentList)
}

useEffect(() => { fetch(`http://localhost:3000/comments`)
.then(response => response.json())
.then(arrayOfComments => setComments(arrayOfComments))
},[])


  function addSavedImage(newSavedImage){
    const updatedSavecImagesList = [...savedImages, newSavedImage]
    setSavedImages(updatedSavecImagesList)
  }

 useEffect(() => {
   fetch(`http://localhost:3000/saved_images`)
   .then((response) =>response.json())
   .then(response => setSavedImages(response))
},[])


  function addCreative(signupData) {
    const updatedCreativesList = [...creatives, signupData]
    setCreatives(updatedCreativesList)
  }

  useEffect(() => {  
    fetch('http://localhost:3000/creatives')
    .then((r) =>r.json())
    .then(r => setCreatives(r)) 

     },[])


     useEffect(() => {
  
      
      fetch(`http://localhost:3000/images`)
     .then(response => response.json())
     .then(ArraysOfImages => setImages(ArraysOfImages))
     },[])

     function addImage(newImage) {
      const updatedImagesList = [newImage, ...images]
      console.log(updatedImagesList)
      setImages(updatedImagesList)
  }
     
     const ImageCards = images.map((image) => (
       <ImageCard 
       key={image.id} 
       image_id={image.id }
       title={image.title} 
       picture={image.picture}
       description={image.description}
       addComment={addComment}
       comments={comments}
       addImage={addImage}
       setComments={setComments}
       
 
       
       />
       ));
 
 
 

  return (
    <div className="App">
      <Header addCreative={addCreative} setCreatives={setCreatives} setCurrentCreative={setCurrentCreative}/>
      <Search />
       
          <ImageContainer setComments={setComments} ImageCards={ImageCards} images={images} setImages={setImages} setComments={setComments}/>
         
          <CreativeProfile />
        
          <SavedImageContainer creatives={creatives} addSavedImage={addSavedImage} savedImages={addSavedImage}/>
          
          <LikedImageContainer/>
        
   
    </div>
  );
}

export default App;

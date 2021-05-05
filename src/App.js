
 import Header from './Header';
import Search from './Search';
import { Switch, Route } from 'react-router-dom'
import './App.css';
import ImageContainer from './ImageContainer';
import ImageCard from './ImageCard';
import CreativeProfile from './CreativeProfile';
import SavedImageContainer from './SavedImageContainer';
import LikedImageContainer from './LikedImageContainer';
import React, {useState, useEffect} from 'react';
import Signup from './Signup';
import UplaodImageForm from './UplaodImageForm';
// import ImageCard from './ImageCard';
// import NewCommentForm from './NewCommentForm';



function App() {

  const [savedImages, setSavedImages] = useState([])
  const [likedImages, setLikedImages] = useState([])
  const [images, setImages] = useState([])
  const [creatives, setCreatives] = useState([])
  const [comments, setComments] = useState([])
  const [searchTerm, setSearchTerm] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(false)
  console.log(searchTerm)

  console.log({ isDarkMode })
  ///const [currentCreative, setCurrentCreative] = useState(null)

  //console.log(currentCreative)



//////////////////////////-- ADD COMMENTS -- //////////////////////////////////////

  function addComment(creativeInput) {
    const updatedCommentList = [creativeInput, ...comments]
    console.log(updatedCommentList)
    setComments(updatedCommentList)
}

useEffect(() => { fetch(`http://localhost:3000/comments`)
.then(response => response.json())
.then(arrayOfComments => setComments(arrayOfComments))
},[])

//////////////////////////-- ADD SAVED IMAGE -- /////////////////////////////////////

  function addtoSavedImageList (newSavedImage){
    const updatedSavedImagesList = [...savedImages, newSavedImage]
    setSavedImages(updatedSavedImagesList)
  }

  useEffect(() => {
    fetch(`http://localhost:3000/saved_images`)
    .then((response) =>response.json())
    .then(response => setSavedImages(response))
 },[])
///////////////////////////////-- ADD LIKED IMAGE --/////////////////////////////////

  function addtoLikedImageList (newLikedImage){
    const updatedLikedImagesList = [...likedImages, newLikedImage]
    setLikedImages(updatedLikedImagesList)
  }

 useEffect(() => {
    fetch(`http://localhost:3000/liked_images`)
    .then((response) =>response.json())
    .then(response => setLikedImages(response))
 },[])


///////////////////////////////-- CREATE NEW CREATIVE  --/////////////////////////////////

  function addCreative(signUpData) {
    const updatedCreativesList = [signUpData,...creatives]
    setCreatives(updatedCreativesList)
  }


  useEffect(() => {  
    fetch('http://localhost:3000/creatives')
    .then((r) =>r.json())
    .then(r => setCreatives(r)) 

     },[])


///////////////////////////////////////////// ----- Currrent Creative User ------- //////////////////////////////////

    //  function putCcurrentCreative(creativeInfo) {
    //    const updatedCreativeInfo = [creativeInfo, ...currentCreative]
    //    setCurrentCreative(updatedCreativeInfo )
    //  }

//////////////////////////////////--- ADD NEW IMAGES IN IMAGE CONTAINER --- //////////////////////////////////////////


     function addImage(newImage) {
       console.log(newImage)
      const updatedImagesList = [...images,newImage]
      console.log(updatedImagesList)
      setImages(updatedImagesList)
  }

  /////////------SEARCH------------////////////////

  function filterImagebySearch () {
    return ImageCards.filter((ImageCard) => {
      return ImageCard.props.title.toLowerCase().includes(searchTerm)
  })
  }

  //////////////////////////////

  useEffect(() => {
  
      
    fetch(`http://localhost:3000/images`)
   .then(response => response.json())
   .then(ArraysOfImages => setImages(ArraysOfImages))
   },[])


   ////////////////////// --- IMAGE CARDS --- ////////////////////////////////////////////
     
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
       addtoSavedImageList={addtoSavedImageList}
       addtoLikedImageList={addtoLikedImageList}

       
 
       
       />
       ));
 
 
 

  return (
    
    <main className={isDarkMode ? "dark-mode" : ""}>
    
    <Header addCreative={addCreative} setCreatives={setCreatives} isDarkMode={isDarkMode} onToggleDarkMode={setIsDarkMode} searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
     {/* <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} displayedImage={displayedImage}/> */}
     <Signup  addCreative={addCreative} setCreatives={setCreatives}/>
      <Switch>
        <Route exact path="/home">
         <ImageContainer setSearchTerm={setSearchTerm}  addtoLikedImageList={addtoLikedImageList} addtoSavedImageList={addtoSavedImageList} setComments={setComments} ImageCards={filterImagebySearch ()} images={images} setImages={setImages} setComments={setComments} addImage={addImage} />
        </Route>
         
        <Route exact path="/profile">
          <CreativeProfile creatives={creatives} setCreatives={setCreatives}/>
        </Route>
          
        <Route exact path="/saved_images"> 
         <SavedImageContainer addtoSavedImageList={addtoSavedImageList} creatives={creatives} savedImages={savedImages} setSavedImages={setSavedImages}/>
        </Route>
         
        <Route exact path="/liked_images"> 
          <LikedImageContainer addtoLikedImageList={addtoLikedImageList} likedImages={likedImages} setLikedImages={setLikedImages}/>
        </Route>
        <Route exact path="/UploadImages"></Route>
        </Switch>
    </main>
  );
}

export default App;

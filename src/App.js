
import ImagePage from './ImagePage';
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
import LandingPage from './LandingPage';
import SignIn from './SignIn';
import ImageCardDetails from './ImageCardDetails';
import LogOut from './LogOut';
// import NewCommentForm from './NewCommentForm';



function App() {

  const [savedImages, setSavedImages] = useState([])
  const [likedImages, setLikedImages] = useState([])
  const [images, setImages] = useState([])
  const [creatives, setCreatives] = useState([])
  const [comments, setComments] = useState([])
  const [searchTerm, setSearchTerm] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [currentCreative, setCurrentCreative] = useState (null)
  console.log(searchTerm)

  console.log({ isDarkMode })
  ///const [currentCreative, setCurrentCreative] = useState(null)

  //console.log(currentCreative)



//////////////////////////-- ADD COMMENTS -- //////////////////////////////////////

  function addComment(creativeInput) {
    const updatedCommentList = [creativeInput, ...comments]
    setComments(updatedCommentList)
    console.log(updatedCommentList)
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
    console.log(updatedCreativesList)
    setCreatives(updatedCreativesList)
  }


  useEffect(() => {  
    fetch('http://localhost:3000/creatives')
    .then((r) =>r.json())
    .then(r => setCreatives(r)) 

     },[])


///////////////////////////////////////////// ----- Currrent Creative User ------- //////////////////////////////////

     function putCcurrentCreative(creativeInfo) {
       const updatedCreativeInfo = [creativeInfo, ...currentCreative]
       setCurrentCreative(updatedCreativeInfo )
     }

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
    <div className="intro"> 
    <div className="app">
      <Switch>
      <Route exact path="/">
      <LandingPage addCreative={addCreative} setCreatives={setCreatives} />
      <Signup  addCreative={addCreative} setCreatives={setCreatives} setCurrentCreative={setCurrentCreative}/>
      <SignIn setCurrentCreative={setCurrentCreative}/>
      </Route>

         <Route exact path="/home">
          
         <Header addCreative={addCreative} setCreatives={setCreatives} searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
         <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
         <ImageContainer setSearchTerm={setSearchTerm}  addtoLikedImageList={addtoLikedImageList} addtoSavedImageList={addtoSavedImageList} setComments={setComments} ImageCards={filterImagebySearch ()} images={images} setImages={setImages} setComments={setComments} addImage={addImage} />
         </Route>
         
        <Route exact path="/profile">
        <Header addCreative={addCreative} setCreatives={setCreatives} searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
        <CreativeProfile creatives={creatives} setCreatives={setCreatives}/>
         </Route>
          
        <Route exact path="/saved_images"> 
        <Header addCreative={addCreative} setCreatives={setCreatives} searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>

         <SavedImageContainer addtoSavedImageList={addtoSavedImageList} creatives={creatives} savedImages={savedImages} setSavedImages={setSavedImages}/>
         </Route>
         
        <Route exact path="/liked_images"> 
        <Header addCreative={addCreative} setCreatives={setCreatives} searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>

        <LikedImageContainer addtoLikedImageList={addtoLikedImageList} likedImages={likedImages} setLikedImages={setLikedImages}/>
        </Route>
        <Route exact path="/UploadImages">
        <Header addCreative={addCreative} setCreatives={setCreatives} searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>

        <UplaodImageForm addImage={addImage}/>
        </Route>
        <Route exact path= "/images/:id">
        <Header addCreative={addCreative} setCreatives={setCreatives} searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
        <ImagePage images={images} setImages={setImages} addtoLikedImageList={addtoLikedImageList} addComment={addComment} comments={comments}/>
        </Route>

        </Switch>
        
    </div>
    </div>
  );
}

export default App;

// import React, {useState, useEffect} from 'react';
import Header from './Header';
import Search from './Search';
import './App.css';
import ImageContainer from './ImageContainer';
import CreativeProfile from './CreativeProfile';
import SavedImageContainer from './SavedImageContainer';
import LikedImageContainer from './LikedImageContainer';
// import ImageCard from './ImageCard';
// import NewCommentForm from './NewCommentForm';


function App() {


  // const displayedImages = images.filter((image) => {
  //   return image.name.toLowerCase().includes(searchTerm.toLowerCase());
  // });

  return (
    <div className="App">
      <Header/>
      <Search />
        <ImageContainer/>
        <comment/>
      <CreativeProfile />
      <SavedImageContainer/>
      <LikedImageContainer />

    </div>
  );
}

export default App;

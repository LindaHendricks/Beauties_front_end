import React, {useState} from 'react';



function UplaodImageForm({addImage}) {

    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [picture, setPicture] = useState("");
    const [description, setDescription] = useState("");
  
    function handleSubmit(event) {
      event.preventDefault();
      const newImage = { 
        title,
        author,
        picture,
        description
      }
      console.log(newImage);

      fetch('http://localhost:3000/images',{
       method: 'POST',
       headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
       body: JSON.stringify(newImage)   
      })
      .then(response => response.json())
      .then(response => addImage(response))
    }
    
  
    return (
      <form onSubmit={handleSubmit}>
        <h1>Upload an Image</h1>
        <label htmlFor="Title">Title</label>
        <input
          type="text"
          id="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
  
        <label htmlFor="Author">Author</label>
        <input
          type="text"
          id="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
  
        <label htmlFor="picture">Picture</label>
        <input
          type="text"
          id="picture"
          value={picture}
          onChange={(e) => setPicture(e.target.value)}
        />
  
        <label htmlFor="description">Description</label>
        <input
          type="text"
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
  
       <input type="submit" value="Submit" />
      </form>
    );
        
}
 
export default UplaodImageForm;

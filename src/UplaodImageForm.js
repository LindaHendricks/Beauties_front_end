import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import styled from "styled-components";

const Input = styled.input`
padding: 0.25rem;
border: none;
font-family: 'Times New Roman';
font-size: 8px;
border-bottom: 1px solid rgb(216, 168, 168);
transition: all 0.2s;
width: 25%;
position: center;
border-radius: 5px;
margin-left: 15px;
font-style: italic
`
const Input4 = styled.input`
margin-bottom: 20px;
border:none
`


const Input2 = styled.input`
padding: 0.25rem;
border: none;
font-family: 'Times New Roman';
font-size: 8px;
border-bottom: 1px solid rgb(216, 168, 168);
transition: all 0.2s;
width: 25%;
position: center;
border-radius: 5px;
margin-left: 10px;
margin-bottom: 20px;
font-style: italic
`

const Input3 = styled.input`
padding: 0.25rem;
border: none;
font-family: 'Times New Roman';
font-size: 8px;
border-bottom: 1px solid rgb(216, 168, 168);
transition: all 0.2s;
width: 25%;
position: center;
border-radius: 5px;
margin-left: 10px;
margin-bottom: 20px;
font-style: italic
`

const Label3 = styled.label`
padding: 0.25rem;
border: none;
font-family: 'Times New Roman';
font-size: 12px;
transition: all 0.2s;
width: 25%;
position: center;
border-radius: 5px;
margin-left: 15px;
margin-right: 1px;
margin-bottom: 20px;
font-style: italic
`

function UplaodImageForm({addImage}) {


    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [picture, setPicture] = useState("");
    const [description, setDescription] = useState("");
    const history = useHistory();
  
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
      history.push(`/home`)

    }
    
  
    return (
      <form  onSubmit={handleSubmit}>
        <h1>Upload an Image</h1>
        <label htmlFor="Title">Title</label>
        <Input
          type="text"
          id="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
  
        <label htmlFor="Author">Author</label>
        <Input2
          type="text"
          id="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
  
        <label htmlFor="picture">Picture</label>
        <Input3
          type="text"
          id="picture"
          value={picture}
          onChange={(e) => setPicture(e.target.value)}
        />
  
        <Label3 htmlFor="description">Description</Label3>
        <Input4
          type="text"
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
  
       <Input type="submit" value="Submit" />
      </form>
    );
        
}
 
export default UplaodImageForm;

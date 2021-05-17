
import React, { useState } from "react";
import NewCommentsDetailsForm from "./NewCommentsDetailsForm";
import styled from "styled-components";

const Form6 = styled.form`
margin-bottom: 20px;
margin-top: 5px
`

const H6 = styled.h6 `
text-align: center;
padding-top: 30px;
font-style: italic;
font-family: Times New Roman;
color: rgb(230, 184, 184);
font-size: 20px
`


function NewCommentForm({setComments,addComment, image_id, comments, new_image_id}) {

console.log(new_image_id)

const formId =  new_image_id

const [note, setNote] = useState("")
const [rating, setRating] = useState (0)

console.log(note)
console.log(rating)

function handleSubmit (event) {
  event.preventDefault()

  const creativeInput = {
    creative_id: 1,
    image_id: formId,
    note: note,
    rating: rating
  }


  fetch(`http://localhost:3000/comments/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify(creativeInput)
  })
  .then(r => r.json())
  .then(creativeInput => addComment(creativeInput))
  
  //addComment
}

  return (
    <>
       <H6>Share your opinion:</H6>
       <Form6 className="comment" new_image_id={new_image_id} onSubmit={handleSubmit} className="newcomment">
      <input className="comment" value={note} onChange={e => setNote(e.target.value)} placeholder="Your comment here" />
      <input className="comment" value={rating} onChange={e => setRating(e.target.value)} placeholder="rating" />
      <input type="submit" value="add" />
    </Form6>
    <NewCommentsDetailsForm note={note} rating={rating} comments={comments}  image_id={image_id} new_image_id={new_image_id}/>

    </>
  );
}

 
export default NewCommentForm;
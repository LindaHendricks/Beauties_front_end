
import React, { useState } from "react";
import NewCommentsDetailsForm from "./NewCommentsDetailsForm";


function NewCommentForm({setComments,addComment, image_id, comments}) {


const formId =  image_id

const [note, setNote] = useState('')
const [rating, setRating] = useState (0)


function handleSubmit (event) {
  event.preventDefault()

  const creativeInput = {
    creative_id: 2,
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
  
}

  return (
    <>
    <form  image_id={image_id} onSubmit={handleSubmit} className="newcomment">
      <input value={note} onChange={e => setNote(e.target.value)} placeholder="Note" />
      <input value={rating} onChange={e => setRating(e.target.value)} placeholder="Rating" />
      <input type="submit" value="Share your findings" />
    </form>
    <NewCommentsDetailsForm note={note} rating={rating} comments={comments}  image_id={ image_id}/>
    </>
  );
}

 
export default NewCommentForm;
import Comments from './Comments';


function NewCommentsDetailsForm({comments,note,rating,image_id, new_image_id}) {


  const commentsList = comments.map(comment => {
   
      if ( new_image_id && comment.image.id ==  new_image_id ){

        return <Comments 
        key={comment.note} 
        id={comment.id} 
        creative_id={comment.creative_id}
        image_id={comment.image.id}
        rating={comment.rating}
        note={comment.note}
       /> 
      }
      
        
  })

    return (
         
        <> 
         {commentsList}
        </>
    )
        
}
 
export default NewCommentsDetailsForm;
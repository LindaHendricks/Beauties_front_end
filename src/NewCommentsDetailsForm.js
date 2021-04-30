import Comments from './Comments';


function NewCommentsDetailsForm({comments, id}) {



const {note, user_id, creative_id, rating} = comments


  const commentsList = comments.map(comment =>{
    
       let commentId = id
       if (commentId = comment.id) {
        return <Comments 
        key={comment.id} 
        id={comment.id} 
        creative_id={comment.creative_id}
        image_id={comment.image_id}
        rating={comment.rating}
        note={comment.note}
       /> }
  })

    return (
         
        <> 
         <h4>Comment</h4>
         {commentsList}
            <Comments note={note} user_id={user_id} creative_id={creative_id} rating={rating}/>
            
        </>
    )
        
}
 
export default NewCommentsDetailsForm;
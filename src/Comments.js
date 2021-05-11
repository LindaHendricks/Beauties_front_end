

function Comments ({note, rating, image_id, user_id, id, creative_id}) {

    return (
        <div className="commentdetails">
        <h3>Comments</h3>
        <p>{note}</p>
        <p>{rating}</p>
        </div>
    )

}


export default Comments;
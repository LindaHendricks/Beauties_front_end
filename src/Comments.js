

function Comments ({note, rating, image_id, user_id, id, creative_id}) {

    return (
        <div className="commentdetails">
        <p>Comments</p>
        <p>{note}</p>
        <p>{rating}</p>
        </div>
    )

}


export default Comments;
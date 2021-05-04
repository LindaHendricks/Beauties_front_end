function SavedImageCardDetails({key, id, title, picture, description, setSavedImages}) {
    return (
         
        <div>
             <img src={picture}/>
             <p>{description}</p>
        </div>
       
    )
        
}
 
export default SavedImageCardDetails;
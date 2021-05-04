import SavedImageCardDetails from './SavedImageCardDetails';


function SavedImageCard({key,id, title, picture, description, addtoSavedImageList, setSavedImages}) {
    return (
         
        <div>
           <h2>{title}</h2>
           <SavedImageCardDetails key={key} id={id} title={title} picture={picture} description={description} setSavedImages={setSavedImages}/>
        </div>
       
    )
        
}
 
export default SavedImageCard;
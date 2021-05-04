import LikedImageCardDetails from './LikedImageCardDetails';

function LikedImageCard({key, id, title, picture, description, addtoLikedImageList}) {
    
    console.log(title)
    
    return (
         
        <div>
           <p>{title}</p>
           <img src={picture}/>

           <LikedImageCardDetails key={key} id={id} title={title} description={description} addtoLikedImageList={addtoLikedImageList}/>
        </div>
       
    )
        
}
 
export default LikedImageCard;
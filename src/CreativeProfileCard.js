import EditCreativeProfileForm from './EditCreativeProfileForm';



function CreativeProfileCard ({id,firstname, lastname, email, username, password, age, bio, avatar, portfolio, admin }) {


    return (
         
        <div>
           <h2>{firstname}</h2>

           <EditCreativeProfileForm/>
        </div>
       
    )
        
}
 
export default CreativeProfileCard;
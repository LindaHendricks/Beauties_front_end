import styled from "styled-components";
import {NavLink} from "react-router-dom";

const P1 = styled.p`
text-align: center;
padding-top: 15px;
padiing-bottom: 10px;
font-style: italic;
font-family: Times New Roman
`




function SavedImageCardDetails({key, id, title, picture, description, setSavedImages}) {
    
    return (
         
        <div>
            <NavLink to={`/images/${id}`} exact > <img src={picture}/> </NavLink>
             
             <P1>Description: {description}</P1>
        </div>
       
    )
        
}
 
export default SavedImageCardDetails;
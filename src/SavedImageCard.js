import SavedImageCardDetails from './SavedImageCardDetails';
import styled from "styled-components";
import {NavLink} from "react-router-dom";



const Div1 = styled.div `
margin-right: 250px;
text-align: center;
background-color: white;
font-family: Times New Roman;
margin-left: 250px;
margin-top: 20px;
margin-bottom: 20px;
padding-top: 10px;
padding-bottom: 40px;
border: 1px solid rgb(216, 168, 168);
cursor: pointer;
border-radius: 15px; 
`;

const HH1 = styled.h1`
text-align: center;
padding-top: 30px;
padiing-bottom: 40px;
font-style: italic;
font-family: Times New Roman
`

function SavedImageCard({key,id, title, picture, description, addtoSavedImageList, setSavedImages}) {
    return (
        <main>
           
             <Div1>
           <HH1>{title}</HH1>
           <SavedImageCardDetails key={key} id={id} title={title} picture={picture} description={description} setSavedImages={setSavedImages}/>
        </Div1>

        </main> 
       
       
    )
        
}
 
export default SavedImageCard;
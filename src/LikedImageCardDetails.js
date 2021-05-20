import styled from "styled-components";

const P = styled.p`
text-align: center;
padding-top: 15px;
padiing-bottom: 10px;
font-style: italic;
font-family: Times New Roman
`

function LikedImageCardDetails({key, id, title, picture, description, addtoLikedImageList}) {
    console.log(picture)
    console.log(description)


    
    return (
         
        <div>
           
            <P>Description: {description}</P>
        </div>
       
    )
        
}
 
export default LikedImageCardDetails;
import styled from "styled-components";

const P45 = styled.p `
font-size: 12px;
margin-botton: 0;
font-style: italic;
padding-bottom: 0px

`



function Comments ({note, rating, image_id, user_id, id, creative_id}) {

    return (
        <div>
        <span><P45><strong>--- Comment:</strong>{note}<strong> ---- Rating:</strong>{rating}* </P45></span>
        </div>
    )

}


export default Comments;
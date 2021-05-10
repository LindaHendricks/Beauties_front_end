import styled from "styled-components"

const SearchStyle = styled.label`
position: relative;
text-align: center;
border-radius: 50px;
`




function Search({searchTerm, setSearchTerm}) {

return (

<div className="searchbar">
 <label >Search Image:</label>
 <input type="text" id="search" placeholder="Type a keyword..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/>
</div>


)


}




//     function handleSearch (event) {
//         event.preventDefault()
//         setSearchTerm(searchTerm)
//     }

//     return (
         
//     <form onSubmit={handleSearch} action="/action_page.php">
//       <input type="text"
//           id="search"
//           placeholder="Type a name to search..."
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}/>
//       <button type="submit">Submit</button>
//     </form>
 

//     )
        
// }
 
export default Search;

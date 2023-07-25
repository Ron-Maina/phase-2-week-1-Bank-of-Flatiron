//Renders the search bar

import React, {useState} from 'react'

function SearchTransaction({renderSearch}) {
 const[searchTerm, setSearchTerm] = useState("")
 console.log(searchTerm)

 //Handles submit of the search term and passes it to the App.js component
 function handleSubmit(e){
        e.preventDefault()
        if (searchTerm === ""){
          alert("Must have a value");
          return false
        }
        renderSearch(searchTerm)
        setSearchTerm("")    
    }

  return (
    <form onSubmit={handleSubmit}>
        <h2>Search Transaction</h2>
        <label htmlFor="search">Search: </label>
        <input
        type="text"
        placeholder='search by description'
        id="search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        /> 
        <input type="submit" value="Search"/>
    </form>
  )
}
export default SearchTransaction
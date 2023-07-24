import React, {useState, useEffect} from 'react'


function SearchTransaction({transactions}) {
 const[search, setSearch] = useState("")

 
    function handleSubmit(e){
        e.preventDefault()
        console.log(search)
        const match = transactions.filter(transaction => {
            return transaction.description.includes(search.charAt(0).toUpperCase()+search.slice(1,search.length-1)) == true}) 
        console.log(match) 
    }
      
 
  return (
    <form onSubmit={handleSubmit}>
        <h2>Search Transaction</h2>
        <label htmlFor="search">Search: </label>
        <input
        type="text"
        placeholder='search by description'
        id="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        /> 
        <input type="submit" value="Search"/>
    </form>
  )
}


export default SearchTransaction
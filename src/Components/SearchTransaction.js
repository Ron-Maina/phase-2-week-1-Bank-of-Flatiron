import React, {useState, useEffect} from 'react'
import TableOfTransactions from './TableOfTransactions'


function SearchTransaction({transactions}) {
 const[searchTerm, setSearchTerm] = useState("")
 const[filteredData, setFilteredData] = useState(transactions)

 
    function handleSubmit(e){
        e.preventDefault()
        // console.log(search)
        
    }
    useEffect(() => {
      const match = transactions.filter(transaction => {
        return transaction.description.includes(searchTerm.charAt(0).toUpperCase()+searchTerm.slice(1,searchTerm.length-1)) == true}) 
        setFilteredData(match)
        // return <TableOfTransactions transactions={filteredData}/>
        // console.log(match)
      }, [searchTerm])
   
      
      
 
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
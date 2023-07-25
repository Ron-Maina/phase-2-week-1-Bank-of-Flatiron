//Parent component

import React, {useEffect, useState} from 'react';
import './App.css';
import TableOfTransactions from './TableOfTransactions';
import DisplayForms from './DisplayForms';

function App() {
  //Fetching data from the db.json file to populate the transaction table
  useEffect(() => {
    fetch('http://localhost:3001/transactions')
    .then(res => res.json())
    .then(data => {
      const details = data.map(item => ({
        id: item.id,
        date: item.date,
        description: item.description,
        category: item.category,
        amount: item.amount,
      }))
      setTransactions(details)
    })
  }, [])

  const [transactions, setTransactions] = useState([])
  
  const [searchQuery, setSearchQuery] = useState("")
  
  function updateTableData(newTransactions){
    setTransactions((transactions) =>  [...transactions, newTransactions])
  }

  
  function renderSearch(searchTerm){
    setSearchQuery(searchTerm)
  }

  //Filter data based on the search query
  useEffect(() => {
    const filteredArray = transactions.filter(transaction => transaction.description.includes(searchQuery.charAt(0).toUpperCase()+searchQuery.slice(1,searchQuery.length-1)))
    console.log(filteredArray)
    setTransactions(filteredArray)
  },[searchQuery])
  
  return (
    <div id="main">
      <DisplayForms renderSearch={renderSearch} updateTableData={updateTableData}/>
      
      {/* Render table with the fetched transactions and filtered transaction*/}
      <TableOfTransactions transactions={transactions}/>
    </div>
  )

}

export default App;

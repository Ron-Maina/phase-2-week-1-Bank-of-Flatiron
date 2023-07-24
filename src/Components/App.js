//Parent component

import React, {useEffect, useState} from 'react';
import './App.css';
import TableOfTransactions from './TableOfTransactions';
import DisplayForms from './DisplayForms';



function App() {

  const [transactions, setTransactions] = useState([])

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

  

  function updateTableData(newTransactions){
    setTransactions((transactions) =>  [...transactions, newTransactions])
  }

  
  function renderSearch(searchTerm){
    const match = transactions.filter(transaction => transaction.description.includes(searchTerm.charAt(0).toUpperCase()+searchTerm.slice(1,searchTerm.length-1)) == true)
    setTransactions(match)
    
  }
  return (
    <div id="main">
      <DisplayForms renderSearch={renderSearch} updateTableData={updateTableData}/>
      <TableOfTransactions transactions={transactions}/>
    </div>
  )
 
}

export default App;

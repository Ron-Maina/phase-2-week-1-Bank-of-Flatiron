import React, {useEffect, useState} from 'react';
import './App.css';
import NewTransaction from './NewTransaction';
import SearchTransaction from './SearchTransaction';
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

  return (
    <div id="main">
      <SearchTransaction transactions={transactions}/>
      <NewTransaction />
      <TableOfTransactions transactions={transactions}/>
    </div>
  )
 
}

export default App;

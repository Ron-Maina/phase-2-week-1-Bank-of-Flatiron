import React, {useEffect, useState} from 'react';
import './App.css';
import NewTransaction from './NewTransaction';
import SearchTransaction from './SearchTransaction';
import TableOfTransactions from './TableOfTransactions';
import DisplayForms from './DisplayForms';



function App() {

  const [transactions, setTransactions] = useState([])
  // const [tableData, setTableData] = useState([])
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

  function updateTableData(newtransactions){
    setTransactions((transactions) =>  [...transactions, newtransactions])
  }

  return (
    <div id="main">
      <DisplayForms transactions={transactions} updateTableData={updateTableData}/>
      <TableOfTransactions transactions={transactions}/>
    </div>
  )
 
}

export default App;

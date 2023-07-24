//Parent component

import React, {useEffect, useState} from 'react';
import './App.css';
import TableOfTransactions from './TableOfTransactions';
import DisplayForms from './DisplayForms';




function App() {

  const [transactions, setTransactions] = useState([])
  const [searchData, setSearchData] = useState([])
  const [searchWord, setSearchWord] = useState("")
  const [match, setMatch] = useState([])

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
    setSearchWord("")
    setSearchWord(searchTerm)
    // setMatch([])
    // setSearchData([...transactions])
    // const match = searchData.filter(transaction => transaction.description.includes(searchWord.charAt(0).toUpperCase()+searchWord.slice(1,searchWord.length-1)) == true)
    // console.log(match)
    // setTransactions(match)
  }

  useEffect(() => {
    setMatch([])
    setSearchData([...transactions])
    const match = searchData.filter(transaction => transaction.description.includes(searchWord.charAt(0).toUpperCase()+searchWord.slice(1,searchWord.length-1)) == true)
    console.log(match)
    setTransactions(match)
  },[searchWord])

  return (
    <div id="main">
      <DisplayForms renderSearch={renderSearch} updateTableData={updateTableData}/>
      <TableOfTransactions transactions={transactions}/>
    </div>
  )
 
}

export default App;

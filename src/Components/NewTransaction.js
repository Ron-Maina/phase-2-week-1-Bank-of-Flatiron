//Handles the creation of a new transaction
import React, {useState, useEffect, useRef} from 'react'
// import TableOfTransactions from './TableOfTransactions'
import App from './App'
import DisplayForms from './DisplayForms'


function NewTransaction() {
   
 
    //Single state element for all input fields
    const [newtransactions, setnewTransactions] = useState({
        date: "",
        description: "",
        category: "",
        amount: "",
    })
    
    

    function handleSubmit(e){
        e.preventDefault()
        console.log(newtransactions)
         
    }
    // useEffect(() => {
    //     fetch('http://localhost:3001/transactions', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify(newtransactions)
    //     })
    // }, [])
    
    return (
        <>
        <form onSubmit={handleSubmit}>
            <h2>Add Transaction</h2>
            <label htmlFor="date">Date: </label>
            <input
            type="text"
            placeholder='(YYYY-MM-DD)'
            pattern="\d{4}-\d{2}-\d{2}"
            id="date"
            value={newtransactions.date}
            onChange={(e) => setnewTransactions({...newtransactions, date: e.target.value})}
            /> 

            <label htmlFor="description">Description: </label>
            <input
            type="text"
            id="description"
            value={newtransactions.description}
            onChange={(e) => setnewTransactions({...newtransactions, description: e.target.value})}
            /> 

            <label htmlFor="category">Category: </label>
            <input
            type="text"
            id="category"
            value={newtransactions.category}
            onChange={(e) => setnewTransactions({...newtransactions, category: e.target.value})}
            /> 

            <label htmlFor="amount">Amount: </label>
            <input
            type="text"
            id="amount"
            value={newtransactions.amount}
            onChange={(e) => setnewTransactions({...newtransactions, amount: e.target.value})}
            /> 

            <input type="submit" value="Add"/>
        </form>
        </>
    )
}

export default NewTransaction
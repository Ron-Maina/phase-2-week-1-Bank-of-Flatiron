//Handles the creation of a new transaction
import React, {useState} from 'react'

function NewTransaction({updateTableData}) {
   
   console.log(updateTableData)
    //Single state element for all input fields
    const [newTransactions, setnewTransactions] = useState({
        date: "",
        description: "",
        category: "",
        amount: "",
    })
   
    //handles form submit functionality
    function handleSubmit(e){
        e.preventDefault()
        updateTableData(newTransactions)
        setnewTransactions({
            date: "",
            description: "",
            category: "",
            amount: "",
        })
    }

    //rendered JSX
    return (
        <>
        <form onSubmit={handleSubmit}>
            <h2>Add Transaction</h2>
            <label htmlFor="date">Date: </label>
            <input
            type="date"
            id="date"
            value={newTransactions.date}
            onChange={(e) => setnewTransactions({...newTransactions, date: e.target.value})}
            /> 

            <label htmlFor="description">Description: </label>
            <input
            type="text"
            id="description"
            value={newTransactions.description}
            onChange={(e) => setnewTransactions({...newTransactions, description: e.target.value})}
            /> 

            <label htmlFor="category">Category: </label>
            <input
            type="text"
            id="category"
            value={newTransactions.category}
            onChange={(e) => setnewTransactions({...newTransactions, category: e.target.value})}
            /> 

            <label htmlFor="amount">Amount: </label>
            <input
            type="text"
            id="amount"
            value={newTransactions.amount}
            onChange={(e) => setnewTransactions({...newTransactions, amount: e.target.value})}
            /> 

            <input type="submit" value="Add"/>
        </form>
        </>
    )
}
export default NewTransaction
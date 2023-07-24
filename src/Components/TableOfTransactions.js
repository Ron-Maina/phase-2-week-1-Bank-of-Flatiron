//Renders all transactions to the DOM

import React, {useState, useEffect} from 'react'



function TableOfTransactions({transactions}) {
  return (
    <div id="table">
        <h2>Transactions</h2>
        <table>
            <tbody>
            <tr>
                <th>Date</th>
                <th>Description</th>
                <th>Category</th>
                <th>Amount</th>
            </tr>
            <>
            {transactions.map(transaction => (
            <tr key={transaction.id}>
                <td>{transaction.date}</td>
                <td>{transaction.description}</td>
                <td>{transaction.category}</td>
                <td>{transaction.amount}</td>
            </tr>   
            ))}
            </> 
        </tbody>
        </table>
    </div>
  )
}

export default TableOfTransactions
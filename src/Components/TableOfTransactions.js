import React, {useState, useEffect} from 'react'

function TableOfTransactions({transactions}) {
  return (
    <table>
        <tr>
            <th>Date</th>
            <th>Description</th>
            <th>Category</th>
            <th>Amount</th>
        </tr>
        {transactions.map(transaction => (
        <>
        <tr>
            <td>{transaction.date}</td>
            <td>{transaction.description}</td>
            <td>{transaction.category}</td>
            <td>{transaction.amount}</td>
        </tr>
        </>    
        
    
        ))}
       
    </table>
  )
}

export default TableOfTransactions
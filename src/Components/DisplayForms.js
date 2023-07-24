//Renders forms for adding a new transaction and searching a transaction

import React, {useState, useEffect} from 'react'
import SearchTransaction from './SearchTransaction'
import NewTransaction from './NewTransaction'

function DisplayForms({transactions,updateTableData}) {
    const [searchVisible, setSearchVisible] = useState(false)
    const [NewTransactionForm, setNewTransactionForm] = useState(false)


  return (
    <div>
        <nav>
            <button onClick={() => setNewTransactionForm(true)}>Add New Transaction</button>
            <button onClick={() => setSearchVisible(true)}>Search Transaction</button>
        </nav>
          {searchVisible ? <SearchTransaction transactions={transactions}/> : null}
          {NewTransactionForm ? <NewTransaction updateTableData={updateTableData}/> : null}  
    </div>
   
  )
}

export default DisplayForms
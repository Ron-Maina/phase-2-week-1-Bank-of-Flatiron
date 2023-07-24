//Renders forms for adding a new transaction and searching a transaction
//Allows user to view their selected input form 

import React, {useState, useEffect} from 'react'
import SearchTransaction from './SearchTransaction'
import NewTransaction from './NewTransaction'

function DisplayForms({renderSearch,updateTableData,resetData}) {
    const [searchVisible, setSearchVisible] = useState(false)
    const [NewTransactionForm, setNewTransactionForm] = useState(false)


  return (
    <div>
        <nav>
            <button onClick={() => setNewTransactionForm(true)}>Add New Transaction</button>
            <button onClick={() => setSearchVisible(true)}>Search Transaction</button>
        </nav>
          {searchVisible ? <SearchTransaction renderSearch={renderSearch}/> : null}
          {NewTransactionForm ? <NewTransaction updateTableData={updateTableData}/> : null}  
    </div>
   
  )
}

export default DisplayForms
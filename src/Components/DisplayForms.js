//Renders forms for adding a new transaction and searching a transaction
//Allows user to view their selected input form 

import React, {useState} from 'react'
import SearchTransaction from './SearchTransaction'
import NewTransaction from './NewTransaction'

function DisplayForms({renderSearch,updateTableData}) {
    const [searchVisible, setSearchVisible] = useState(true)
    const [NewTransactionForm, setNewTransactionForm] = useState(false)

    function handleClick(){
      setSearchVisible((prevState) => !prevState)
      setNewTransactionForm((prevState) => !prevState)
    }
    
  return (
    <div>
        <nav>
            <button onClick={handleClick}>Add New Transaction</button>
            <button onClick={handleClick}>Search Transaction</button>
        </nav>
          {searchVisible ? <SearchTransaction renderSearch={renderSearch}/> : null}
          {NewTransactionForm ? <NewTransaction updateTableData={updateTableData}/> : null}  
    </div>
   
  )
}

export default DisplayForms
import React, {useEffect, useState} from 'react';
import './App.css';
import Transactions from './components/Transactions'
import Formcomponent from './components/Formcomponent'
import Searchfilter from './components/Searchfilter'


function App() {
  const API = "http://localhost:3000/transactions";
    //State to hold transactions
  const [transactions, setTransactions] = useState([])
  const [isLoaded, setLoaded] = useState(false)
    //gets term from search component
  const [searchValue, setSearchValue] = useState('')

    //Use effect hook to run initially when the component mounts
  useEffect(() => {
   fetchTransaction()
  },[])

    //Fetch Transaction in an asynchronous manner
  const fetchTransaction = async () => {
    try{
      const response = await fetch(API)
      const data = await response.json()
      setTransactions(data)
        /* Added setTimeout to mimic server loading after 2.5 seconds */
      setTimeout(()=>{
        setLoaded(true)
      }, 2500)
    }catch(e){
      console.log(e)
    }
  }

  const newTransaction = (data) => {
      //Assign a new ID
    const id = parseInt(transactions.length + 1)
    data.id = id

    const newArr = [...transactions, data]
      //set Items to update
    setTransactions(newArr)
  }

    //callback function for receiving search value from Search component and setting it to the searchValue state
  const searchTransaction = async (value) => {
    setSearchValue(value.replace(/[^a-zA-Z0-9]/g, '').toLowerCase())
  }
    //Filter transactions and pass value to the Transactions component
  const filteredTransactions = transactions.filter((transaction) => {
    return transaction.description.toLowerCase().includes(searchValue)
  })

  const deleteTransaction = (id) => {
    const remainingTransactions = transactions.filter(tran => {
      return tran.id !== id
    })
    setTransactions(remainingTransactions)
  }

  {/* Use useEffect to fetch transactions whenever the user loads the App component.Pass the results as from the state as props to transactions to render the table*/}

  return (
    <div className='App'>
      <h1 className='App-header pt-10'>BANK OF FLATIRON</h1>  
      <Searchfilter searchFunction={searchTransaction}/>

      {!isLoaded ? <p style={{color: 'green'}} >Loading Transactions ...</p> : <Transactions transactions={filteredTransactions} removeTransaction={deleteTransaction}/>}
      
      <Formcomponent updateTransaction={newTransaction}/>
    </div>
  );
}

export default App;

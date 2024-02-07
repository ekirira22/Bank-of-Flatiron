import React, {useEffect, useState} from 'react';
import './App.css';
import Transactions from './components/Transactions'
import Formcomponent from './components/Formcomponent'
import Searchfilter from './components/Searchfilter'


function App() {
  const API = "http://localhost:3000/transactions";
  const [transactions, setTransactions] = useState([])
  const [isLoaded, setLoaded] = useState(false)
  const [filteredTransac, setFilteredTransac] = useState(false)

  useEffect(() => {
    try{
      fetch(API)
      .then(res => res.json())
        .then(res => {
          setTransactions(res)
            {/* Added setTimeout to mimic server loading after 3 seconds */}
          setTimeout(()=>{
            setLoaded(true)
          }, 2500)
        })
    }catch(error){
      console.log(error)
    }
  },[filteredTransac])

  function newTransaction(data){
      //Assign a new ID
    const id = parseInt(transactions.length + 1)
    data.id = id

    const newArr = [...transactions, data]
      //set Items to update
    setTransactions(newArr)
  }

  function filteredTransactions(value){
    const val = value.replace(/^[0-9\s]*|[+*\r\n]/g, '').toLowerCase()
      const filteredTransaction = transactions.filter(tran => {
        return tran.description.toLowerCase() == val
      })
      if(filteredTransaction.length < 1){
        setFilteredTransac(!filteredTransac)
      }
      setTransactions(filteredTransaction)

  }

  function deleteTransaction(id){
    const remainingTransactions = transactions.filter(tran => {
      return tran.id !== id
    })
    setTransactions(remainingTransactions)
  }

  {/* Use useEffect to fetch transactions whenever the user loads the App component.Pass the results as from the state as props to transactions to render the table*/}

  return (
    <div className='App'>
      <h1 className='App-header pt-10'>BANK OF FLATIRON</h1>  
      {!isLoaded ? <p style={{color: 'green'}} >Loading Transactions ...</p> : <Transactions transactions={transactions} removeTransaction={deleteTransaction}/>}
      
      <Formcomponent updateTransaction={newTransaction}/>
      <Searchfilter filteredFunction={filteredTransactions}/>

      
    </div>
  );
}

export default App;

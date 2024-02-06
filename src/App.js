import React, {useEffect, useState} from 'react';
import './App.css';
import Transactions from './components/Transactions'


function App() {
  const API = "http://localhost:3000/transactions";
  const [transactions, setTransactions] = useState([])
  const [isLoaded, setLoaded] = useState(false)

  useEffect(() => {
    fetch(API)
      .then(res => res.json())
        .then(res => {
          setTransactions(res)
          setLoaded(true)
        })
  },[])

  {
    /* 
      Use useEffect to fetch transactions whenever the user loads the App component.
      Pass the results as from the state as props to transactions to render the table
    */
  }

  return (
    <div className='App'>
      <h1 className='App-header pt-10'>BANK OF FLATIRON</h1>  
      {!isLoaded ? <p>Loading Transactions ...</p> : <Transactions transactions={transactions}/>}
      
    </div>
  );
}

export default App;

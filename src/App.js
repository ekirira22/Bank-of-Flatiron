import React, {useEffect, useState} from 'react';
import './App.css';
import Transactions from './components/Transactions'
import Formcomponent from './components/Formcomponent'
import Searchfilter from './components/Searchfilter'


function App() {
  const API = "https://transactions-api-rfqa.onrender.com/transactions";
    //State to hold transactions
  const [transactions, setTransactions] = useState([])
  const [isLoaded, setLoaded] = useState(false)
    //gets term from search component
  const [searchValue, setSearchValue] = useState('')
  const [errors, setErrors] = useState('')
  const [editFormData, setEditFormData] = useState({})
  const [toggleForm, setToggleForm] = useState(false)

  // console.log(toggleForm)

    //Use effect hook to run initially when the component mounts
  useEffect(() => {
   const data = fetchTransaction(API,"GET")
    //Returns a promise
    data.then(data => {
      setTransactions(data)
    }).then(setLoaded(true))
    },[])

    //Fetch Transaction in an asynchronous manner // Modularized function
  const fetchTransaction = async (url,method,dataObj=null) => {
    const fetchObject = {
      method: method,
      headers: {
        "Content-Type": "application/json",
      }
    }
    try{
        if(dataObj !== null){
          fetchObject.body = JSON.stringify(dataObj)
        }
        const response = await fetch(url,fetchObject)
          //Check if response is okay or not
        if(!response.ok){
          const errorMessage = `Error Message : ${response} : ${response.message}`
          setErrors(errorMessage)
        }
        const data = await response.json()
        return data

    }catch(error){
        const errorMessage = `Error Message : ${error}`
        setErrors(errorMessage)
    }
  }

  const newTransaction = async(data) => {
      //Since we need to get the new ID . Log to the DB first // Then update State
    try{
        const url = API
        const method = "POST"
        const updatedTransaction = await fetchTransaction(url,method,data)
          //Update current transactions component
        setTransactions([...transactions, updatedTransaction])
    }catch(error){
        const errorMessage = `Error Message : ${error}`
        setErrors(errorMessage)
    }
  }


    //Filter transactions and pass value to the Transactions component //Filters based on category or description
  const filteredTransactions = transactions.filter((transaction) => {
    if(transaction.description.toLowerCase().includes(searchValue) || transaction.category.toLowerCase().includes(searchValue)){
      return true
    }
  })

  const handleDelete = async(id) => {
    try{
          //Update component
        const myTransactions = transactions.filter(transaction => {
          return transaction.id !== id
        })
        
        setTransactions(myTransactions)

          //Delete from json
        const url = `${API}/${id}`
        const method = 'DELETE'
        await fetchTransaction(url,method)
    }catch(error){
        const errorMessage = `Error Message : ${error}`
        setErrors(errorMessage)
    }
  }

  const findEditData = (id) => {
    setToggleForm(true)
    try{
      const transaction = transactions.filter(transaction => {
        return transaction.id === id
      })

      // 
      setEditFormData(transaction)

    }catch(error){
      const errorMessage = `Error Message : ${error}`
      setErrors(errorMessage)
    }
  }

  const handleEdit = async(data) => {
    try{
        //Update component
        const myTransactions = transactions.map(trans => {
          if(trans.id === data.id){
            return data
          }else{
            return trans
          }
        })
        setTransactions(myTransactions)

        //UPDATE from json
      const url = `${API}/${data.id}`
      const method = 'PATCH'
      await fetchTransaction(url,method,data)

    }catch(error){
        const errorMessage = `Error Message : ${error}`
        setErrors(errorMessage)
    }
  }

    //Function for handling sort
  const handleSort = (type) => {

    if(type.length > 0){
      //If sort type is not null? setSortType = type
        //Make a copy of the existing array iof objects
        const sortedTransactions = [...transactions]
        //if sortType has been set and equal to type
          //a -> captures the current state of the array in terms of arrangement
          //b -> shows it the new incoming mode of arrangement
          //a.category will hold it in descending order by default
          //b.category switches it to ascending
          // sortedTransactions.sort((a,b) => a.category.localeCompare(b.category))

        sortedTransactions.sort((a,b) => a[type].localeCompare(b[type]))
          //Update componenet
        setTransactions(sortedTransactions)
    }
    
  }

  {/* Use useEffect to fetch transactions whenever the user loads the App component.Pass the results as from the state as props to transactions to render the table*/}

  return (
    <div className='App'>
      {errors.length > 0 ? <p className='text-red-500 font-bold text-2xl mt-4'>{errors}</p> : null}
      <h1 className='App-header pt-10'>BANK OF FLATIRON</h1>  
      <Searchfilter setSearchValue={setSearchValue} setToggleForm={setToggleForm} toggleState={toggleForm} onSort={handleSort}/>

      {toggleForm ? <Formcomponent onAdd={newTransaction} onEdit={handleEdit} editFormData={editFormData} toggleForm={setToggleForm} clearFormData={setEditFormData}/> : null}


      {!isLoaded ? <p style={{color: 'green'}} >Loading Transactions ...</p> : <Transactions transactions={filteredTransactions} onDelete={handleDelete} onEdit={findEditData}/>}
      
    </div>
  );
}

export default App;

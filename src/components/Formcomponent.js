import React, {useState} from "react";

function Formcomponent ({updateTransaction}){
    const [formdata, setFormData] = useState({
        id: 0,
        date : "2024-02-04",
        description : "Enter a description",
        category : "income",
        amount : 1000
    })
    
        //Handles live changes
    function handleChange(e){ 
        const name = e.target.name
        const val = e.target.value
        setFormData({
            ...formdata,
            [name] : val
        })
    }

    function handleSubmit(e){
        e.preventDefault()
        // console.log(console.table(formdata))
            //Validate
            updateTransaction(formdata)
        
    }

    // console.log(formdata)

    return (
        <div className="pt-10 mx-40">
            <h3>Add a Transaction </h3>
            <form className="mt-5 my-2">
                <label className="block">
                    <span className="block text-sm font-medium text-white">Enter Date of Transaction</span>
                    <input type="date" name="date" className="input-form" onChange={handleChange} defaultValue={formdata.date}></input>  
                </label>
                <label className="block">
                    <span className="block text-sm font-medium text-white">Enter Description</span>
                    <input type="text" name="description" className="input-form" defaultValue={formdata.description} onChange={handleChange}></input>  
                </label> 
                <label className="block">
                    <span className="block text-sm font-medium text-white">Enter Category</span>
                    <select name="category" className="input-form" onChange={handleChange}>
                        <option value='Housing'>Housing</option>
                        <option value='Entertainment'>Entertainment</option>
                        <option value='Transportation'>Transportation</option>
                        <option value='Gift'>Gift</option>
                        <option value='Fashion'>Fashion</option>
                        <option value='Food'>Food</option>
                        <option value='Income'>Income</option>
                    </select> 
                </label> 
                <label className="block">
                    <span className="block text-sm font-medium text-white">Enter Amount</span>
                    <input type="number" name="amount" className="input-form" placeholder="Enter amount" onChange={handleChange} defaultValue={formdata.amount}></input>  
                </label> 
                <button className="rounded-full bg-cyan-500 px-4 py-1 mt-2 text-lg" onClick={handleSubmit}>SAVE</button>
            </form>
        </div>
    )
}

export default Formcomponent;
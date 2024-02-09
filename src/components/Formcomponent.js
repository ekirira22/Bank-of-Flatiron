import React, {useEffect, useState} from "react";

function Formcomponent ({onAdd}){
        //Set a use Effect that will do the following, while tracking any changes to the state
        //Form component receives the state of the form and its callback function based on user selection. Add or edit. Add by default
        //Set the form values to empty values if formState = 'add' and values fetched from database if formState = 'edit'
        //Once the submit button is clicked. Clear the values / Hide the Form / Redirect to Home page
    const [formdata, setFormData] = useState({
        date : '',
        description : '',
        category : '',
        amount : ''
    })
        //Form change tracker
    
        //Handles live changes
    const handleChange = (e) => { 
        // const {name, val} = e.target
        const {name, value} = e.target;

        setFormData({
            ...formdata,
            [name] : value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        onAdd(formdata)
            //Reset Form
        setFormData({
            date : '',
            description : '',
            category : '',
            amount : ''
        })           
    }

    // console.log(formdata)

    return (
        <div className="pt-10 mx-40">
            <h3 className="text-2xl text-cyan-400">Add / Edit Transaction </h3>
            <form className="mt-5 my-2" onSubmit={handleSubmit}>
                <label className="block text-sm font-medium text-white" htmlFor="date">Enter Date of Transaction</label>
                <input type="date" name="date" id="date" className="input-form" defaultValue={formdata.date} onChange={handleChange} required /> 

                <label className="block text-sm font-medium text-white" htmlFor="description">Enter description</label>
                <input type="text" name="description" id="description" className="input-form" defaultValue={formdata.description} onChange={handleChange} required /> 

                
                <label className="block text-sm font-medium text-white" htmlFor="category">Enter Category</label>
                <select name="category" id="category" className="input-form" onChange={handleChange} defaultValue={formdata.category} required>
                    <option value='' disabled>-- Select Category --</option>
                    <option value='Housing'>Housing</option>
                    <option value='Entertainment'>Entertainment</option>
                    <option value='Transportation'>Transportation</option>
                    <option value='Gift'>Gift</option>
                    <option value='Fashion'>Fashion</option>
                    <option value='Food'>Food</option>
                    <option value='Income'>Income</option>
                </select> 

                <label className="block text-sm font-medium text-white" htmlFor="number">Enter Amount</label>
                <input type="number" name="amount" id="amount" className="input-form" defaultValue={formdata.date} onChange={handleChange} required /> 

                <br></br>
                <button type="submit" className="rounded-full bg-cyan-500 px-4 py-1 mt-2 text-lg">SAVE</button>
            </form>
        </div>
    )
}

export default Formcomponent;
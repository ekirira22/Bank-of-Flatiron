import React, {useEffect, useState} from "react";

function Formcomponent ({onAdd, onEdit, editFormData, toggleForm, clearFormData}){
        //Set a use Effect that will do the following, while tracking any changes to the state
        //Form component receives the state of the form and its callback function based on user selection. Add or edit. Add by default
        //Set the form values to empty values if formState = 'add' and values fetched from database if formState = 'edit'
        //Once the submit button is clicked. Clear the values / Hide the Form / Redirect to Home page
    
    const [formdata, setFormData] = useState({})
    useEffect(() => {
        if(editFormData.length === undefined){
            setFormData({
                date : '',
                description : '',
                category : '',
                amount : ''
            })
        }else{
            setFormData({
                date : editFormData[0].date,
                description : editFormData[0].description,
                category : editFormData[0].category,
                amount : editFormData[0].amount
            })
        }
    },[editFormData])

        //Form change tracker
        //Handles live changes
    const handleChange = (e) => { 
        const {name, value} = e.target;

        setFormData({
            ...formdata,
            [name] : value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        const dataObj = {...formdata}
        onAdd(dataObj)
            //Reset Form
        setFormData({
            date : '',
            description : '',
            category : '',
            amount : ''
        })
            //After submitiing, hide the form
        toggleForm(false)       
    }

    const handleEdit = (e) => {
        e.preventDefault()
        const dataObj = {...formdata}
        dataObj.id = editFormData[0].id
        onEdit(dataObj)
            //Reset Form
        setFormData({
            date : '',
            description : '',
            category : '',
            amount : ''
        })
        toggleForm(false)
            //Resets the state of the form from edit to add
        clearFormData({})
    }

    const handleReset = (e) => {
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
            <form className="mt-5 my-2" onSubmit={editFormData.length > 0 ? handleEdit : handleSubmit}>
                <label className="text-sm font-medium text-white" htmlFor="date">Enter Date of Transaction</label>
                <input type="date" name="date" id="date" className="input-form" defaultValue={formdata.date} onChange={handleChange} required /> 

                <label className="text-sm font-medium text-white" htmlFor="description">Enter description</label>
                <input type="text" name="description" id="description" className="input-form" defaultValue={formdata.description} onChange={handleChange} required /> 

                
                <label className="text-sm font-medium text-white" htmlFor="category">Enter Category</label>
                <input name="category" id="category" className="input-form" onChange={handleChange} defaultValue={formdata.category} required />
                 
                <label className="text-sm font-medium text-white" htmlFor="number">Enter Amount</label>
                <input type="number" name="amount" id="amount" className="input-form" defaultValue={formdata.amount} onChange={handleChange} required /> 

                <br></br>
                <button type="reset" className="rounded-full bg-yellow-500 px-4 py-1 mt-2 mx-2 text-sm" onClick={handleReset}>RESET</button>
                <button type="submit" className="rounded-full bg-cyan-500 px-4 py-1 mt-2 mx-2 text-sm">{editFormData.length > 0 ? "EDIT TRANSACTION" : "ADD TRANSACTION"}</button>
            </form>
        </div>
    )
}

export default Formcomponent;
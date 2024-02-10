import {useState} from "react";

function Searchfilter({searchFunction, toggleForm}){

    const [searchValue, setSearchValue] = useState('')
    const [toggleState, setToggleState] = useState(false)

   
    const handleChange = (e) => {
            //captures live form input and sets it to searchValue state
        const value = e.target.value
        setSearchValue(value)
            //Passes the value up to the parent .App component
        searchFunction(searchValue)
    }

    const handleSort = () => {

    }

    const toggle = () => {
        setToggleState(!toggleState)
        toggleForm(toggleState)
    }
    // console.log(searchValue)
    
    return (
        <div className="pt-10 mx-40 space-y-2">
            <h3>Search Items </h3>
            <div className="mt-5 my-2">
                <label>
                    <input type="search" name="date" className="input-form" onChange={handleChange} placeholder="Search by description or category..." value={searchValue}></input>  
                </label>
            </div>
            <div className="inline-flex justify-between space-x-4 md:space-x-6">
                <button className="rounded-full bg-cyan-500 px-3  py-1" onClick={()=> handleSort(null)}>Clear Sort</button>
                <button className="rounded-full bg-cyan-500 px-3  py-1" onClick={()=> handleSort(null)}>Sort By Category</button>
                <button className="rounded-full bg-cyan-500 px-3  py-1" onClick={()=> handleSort(null)}>Sort By Description</button>
                <button className="rounded-full bg-cyan-500 px-3  py-1" onClick={toggle}>Toggle Form</button>

            </div>
        </div>
    )
}

export default Searchfilter;
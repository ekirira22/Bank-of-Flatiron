import {useState} from "react";

function Searchfilter({searchFunction}){

    const [searchValue, setSearchValue] = useState('')

    const handleChange = (e) => {
            //captures live form input and sets it to searchValue state
        const value = e.target.value
        setSearchValue(value)
            //Passes the value up to the parent .App component
        searchFunction(searchValue)
    }

    // console.log(searchValue)
    
    return (
        <div className="pt-10 mx-40">
            <h3>Search Items </h3>
            <div className="mt-5 my-2">
                <label>
                    <input type="search" name="date" className="input-form" onChange={handleChange} placeholder="Search Transaction..." value={searchValue}></input>  
                </label>
            </div>
        </div>
    )
}

export default Searchfilter;
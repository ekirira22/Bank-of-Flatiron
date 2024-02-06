import React, {useState} from "react";

function Searchfilter({filteredFunction}){

    const [searchValue, setSearchValue] = useState('')

    function handleChange(e){
        setSearchValue(e.target.value)
    }

    function handleSearch(e){
        e.preventDefault()
        filteredFunction(searchValue)
    }
    // console.log(searchValue)
    
    return (
        <div className="pt-10 mx-40">
            <h3>Search Items </h3>
            <form className="mt-5 my-2">
                <label className="block">
                    <input type="search" name="date" className="input-form" onChange={handleChange} placeholder="Search Transaction..."></input>  
                </label>
                <button className="rounded-full bg-red-500 px-4 py-1 mt-2 text-lg" onClick={handleSearch}>Filter</button>
            </form>
        </div>
    )
}

export default Searchfilter;
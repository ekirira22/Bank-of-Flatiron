import {useState} from "react";

function Searchfilter({setSearchValue, setToggleForm, toggleState, onSort}){

    // console.log(searchValue)
    
    return (
        <div className="pt-10 mx-40 space-y-2">
            <h3>Search Items </h3>
            <div className="mt-5 my-2">
                <label>
                    <input type="search" name="date" className="input-form" onChange={(e) => setSearchValue(e.target.value.replace(/[^a-zA-Z0-9]/g, '').toLowerCase())} placeholder="Search by description or category..."></input>  
                </label>
            </div>
            <div className="inline-flex justify-between space-x-4 md:space-x-6">
                <button className="rounded-full bg-cyan-500 px-3  py-1" onClick={()=> onSort('')}>Clear Sort</button>
                <button className="rounded-full bg-cyan-500 px-3  py-1" onClick={()=> onSort('category')}>Sort By Category</button>
                <button className="rounded-full bg-cyan-500 px-3  py-1" onClick={()=> onSort('description')}>Sort By Description</button>
                <button className="rounded-full bg-cyan-500 px-3  py-1" onClick={() => setToggleForm(!toggleState)}>Toggle Form</button>

            </div>
        </div>
    )
}

export default Searchfilter;
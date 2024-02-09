import React from "react";

function Transaction(props){

    const handleDelete = () => {
        props.onDelete(props.id)
    }

    const handleEdit = () => {
        props.onDelete(props.id)
    }
    
    return (
        <tr>
            <td className="border border-slate-700">{props.id}</td>
            <td className="border border-slate-700">{props.date}</td>
            <td className="border border-slate-700">{props.description}</td>
            <td className="border border-slate-700">{props.category}</td>
            <td className="border border-slate-700">{props.amount}</td>
            <td className="border border-slate-700 "><button className="rounded-full bg-cyan-500 px-3" onClick={handleDelete}>EDIT</button></td>
            <td className="border border-slate-700 "><button className="rounded-full bg-red-500 px-3" onClick={handleEdit}>DELETE</button></td>

        </tr>
    )
}

export default Transaction;
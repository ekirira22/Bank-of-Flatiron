import React from "react";
import Transaction from "./Transaction";

function Transactions({transactions}){
        {/* 
            Loops through transactions passed as props and renders a single transaction
    */}

    const singleTransaction = transactions.map(transaction => {
        return (
            <Transaction key={transaction.id} id={transaction.id} date={transaction.date} description={transaction.description} category={transaction.category} amount={transaction.amount} />
        )
    })
    return (
        <div>
            <h3 className="text-lg">Current Transactions</h3>
            <table className="table-auto container mx-auto px-4 border-separate border border-slate-500 ...">
                <thead>
                    <tr>
                        <th className="border border-slate-600">ID</th>
                        <th className="border border-slate-600">DATE</th>
                        <th className="border border-slate-600">DESCRIPTION</th>
                        <th className="border border-slate-600">CATEGORY</th>
                        <th className="border border-slate-600">AMOUNT</th>
                        <th className="border border-slate-600 text-red-400 ...">DELETE</th>

                    </tr>
                </thead>
                <tbody>
                    {singleTransaction}
                </tbody>
                </table>
        </div>
    )
}

export default Transactions;
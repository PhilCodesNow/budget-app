import React from 'react';
import "./Output.css";



function Output( {budgetItems }) {
    return (
        <div className="output">
        {
            budgetItems.map(budgetItems =>{
                return <h1>{budgetItems.name}{budgetItems.price}</h1>
            })
        }
        </div>
    )
}

export default Output

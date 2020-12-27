import React from 'react';
import "./Output.css";



function Output( {budgetItems }) {
    let totalPrice = 0
    console.log(`total price: ${totalPrice}`)
    budgetItems.map(item =>{
        const currentPrice = parseInt(item.price) + totalPrice
        totalPrice = currentPrice
        console.log(totalPrice)
    })


    return (
        <div className="output">
        {
            budgetItems.map((budgetItems, index) =>{
                return <div className="output__item"
                        key={index}
                        >
                        <div>{budgetItems.name}</div>
                        <div>{budgetItems.price}</div>
                    </div>
            })
        }
        <div className="output__total">
            <h1>Total Output: {totalPrice}</h1>

        </div>
        </div>
    )
}

export default Output

import React from 'react';
import "./Output.css";
import HighlightOffIcon from '@material-ui/icons/HighlightOff';



function Output( { budgetItems }) {



    let totalPrice = 0
    budgetItems.map(item =>{
        const currentPrice = parseInt(item.price) + totalPrice
        totalPrice = currentPrice
    })


    return (
        <div className="output">
        {
            budgetItems.map((Item, index) =>{
                return <div className="output__item"
                        key={index}
                        >
                        <div>{Item.name}</div>
                        <div>{Item.price}</div>
                        <HighlightOffIcon onClick={deleteItem =>{
                            console.log(budgetItems)
                            budgetItems.splice(index, 1)
                        }}
                        />
                    </div>
            })
        }
        <div className="output__total">
            <h1>Monthly Spending: {totalPrice}</h1>

        </div>
        </div>
    )
}

export default Output

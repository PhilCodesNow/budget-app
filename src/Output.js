import React, { useState } from 'react';
import "./Output.css";
import HighlightOffIcon from '@material-ui/icons/HighlightOff';



function Output({ budgetItems, setBudgetItems }) {

    let [newBudgetItems, setNewBudgetItems] = useState([...budgetItems])


    let deleteBudgetItem = (i) =>{
        console.log(i)
        budgetItems.splice(i, 1)
        setBudgetItems(prevBudgetItems =>{
            return [...prevBudgetItems]
        })
    }

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
                        {/* <HighlightOffIcon onClick={() =>{
                            console.log(budgetItems)
                            budgetItems.splice(index, 1)
                        }}
                        /> */}
                        
                        <HighlightOffIcon onClick={deleteBudgetItem.bind(deleteBudgetItem, index)} />
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

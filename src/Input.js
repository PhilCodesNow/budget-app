import React, { useRef } from 'react';
import "./Input.css";

<<<<<<< HEAD
function Input() {


=======
function Input({ budgetItemRef, handleAddBudgetItem, budgetItemPriceRef}) {
>>>>>>> df441b30355bd885eb3c830debc53cd523da6dab
    return (
        <div className="input">
            <div className="input__header">
                Input
            </div>
            <div className="input__addBudgetItem">
                <input ref={budgetItemRef} type='text' placeholder='budget category'/>
                <input ref={budgetItemPriceRef} type='number' placeholder='money'/>
                <button onClick={handleAddBudgetItem}>Add Item</button>
            </div>
        </div>
    )
}

export default Input

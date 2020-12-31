import React from 'react';
import "./Input.css";

function Input() {


    return (
        <div className="input">
            <div className="input__header">
                Input
            </div>
            <div className="input__addBudgetItem">
                <form action="addBudgetItem">
                    <input type="text" placeholder="Add Budget Item" />
                    <button>Add Item</button>
                </form>
                
            </div>
        </div>
    )
}

export default Input

import React from 'react';
import './Category.css';

function Category(props) {
    const {
        Category,
        budgetItemRef, 
        handleAddBudgetItem, 
        budgetItemPriceRef
    } = props
    return (
        <div className="input">
            <div className="input__header">
                <h1>{Category.name}</h1>
            </div>
            <div className="input__addBudgetItem">
                <input ref={budgetItemRef} type='text' placeholder='name'/>
                <input ref={budgetItemPriceRef} type='number' placeholder='money'/>
                <button onClick={() => handleAddBudgetItem(Category.id, Category.name, Category.items)}>Add Item</button>
            </div>
        </div>
    )
}

export default Category

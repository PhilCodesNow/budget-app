import React from 'react';
import './Category.css';

function Category(props) {
    const {
        Category,
        id,
        handleItemInputChange,
        budgetItemRef, 
        handleAddBudgetItem, 
        budgetItemPriceRef,
        handleNewItemSubmit
    } = props


    return (
        <div className="input">
            <div className="input__header">
                <h1>{Category.name}</h1>
            </div>
            {/* <div className="input__addBudgetItem">
                <input ref={budgetItemRef} type='text' placeholder='name'/>
                <input ref={budgetItemPriceRef} type='number' placeholder='money'/>
                <button onClick={() => handleAddBudgetItem(Category.id, Category.name, Category.items)}>Add Item</button>
            </div> */}
            <form>
                <input 
                type="text" 
                placeholder="Budget Item"
                name="budgetItem"
                />
                {/* <input
                type="text"
                placeholder="Price"
                name="budgetItemPrice"
                onChange={}
                /> */}
                <button onClick={() => handleNewItemSubmit(id)}>Add Item</button>
            </form>
        </div>
    )
}

export default Category

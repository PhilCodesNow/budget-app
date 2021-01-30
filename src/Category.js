import React from 'react';
import './Category.css';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/HighlightOff';


function Category(props) {
    const {
        Category,
        id,
        handleItemNameInputChange,
        handleItemPriceInputChange,
        handleNewItemSubmit
    } = props


    return (
        <div className="category">
            <DeleteIcon></DeleteIcon>
            <div className="category__header">
                <h3>{Category.name}</h3>
            </div>
            
            <div className="category__input">
                <h1>Add Item</h1>
                <div>
                
                <AddIcon onClick={() => handleNewItemSubmit(id)}>Add Item</AddIcon>
                </div>
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
                name="budgetItemName"
                onChange={handleItemNameInputChange}
                />
                <input 
                type="text" 
                placeholder="Price"
                name="budgetItemPrice"
                onChange={handleItemPriceInputChange}
                />

            </form>
        </div>
    )
}

export default Category

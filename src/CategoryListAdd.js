import React from 'react';
import './CategoryListAdd.css';

function CategoryListAdd(props) {
    const {
        handleAddBudgetCategory,
        newCategoryRef
    } = props
    
    

    

    return (
        <div className="categoryListAdd">
                <input ref={newCategoryRef} type='text' placeholder='category'/>
                <button onClick={handleAddBudgetCategory}>Add Category</button>
        </div>
    )
}

export default CategoryListAdd

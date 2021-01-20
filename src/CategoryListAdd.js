import React from 'react';
import './CategoryListAdd.css';

function CategoryListAdd(props) {
    const {
        handleAddBudgetCategory,
        newCategoryRef
    } = props
    
    

    

    return (
        <div>
            <div>
                <input ref={newCategoryRef} type='text' placeholder='category'/>
                <button onClick={handleAddBudgetCategory}>Add Category</button>
            </div>
        </div>
    )
}

export default CategoryListAdd

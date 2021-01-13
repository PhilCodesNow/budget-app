import React from 'react';
import './CategoryListAdd.css';

function CategoryListAdd(props) {
    const {
        handleAddBudgetCategory,
        newCategoryRef
    } = props
    

    return (
        <div>
            <form>
                <label name="New Category" htmlFor="newCategory">New Category: </label>
                <input type="text" name="newCategory" onInput={e => {
                    newCategoryRef = e.target.value
            }}/>
                <button>Add Category</button>
            </form>
        </div>
    )
}

export default CategoryListAdd

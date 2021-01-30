import React from 'react';
import Category from './Category';
import "./CategoryList.css";

function CategoryList(props) {
    const {
        budgetCategories,
        handleItemNameInputChange,
        handleItemPriceInputChange,
        handleNewItemSubmit
    } = props

    return (
        <div className="categoryList">
        {
            budgetCategories.map((budgetItem) => {
                return (
                    <Category 
                        id={budgetItem.id}
                        key={budgetItem.id}
                        Category={budgetItem}
                        handleItemNameInputChange={handleItemNameInputChange}
                        handleItemPriceInputChange={handleItemPriceInputChange}
                        handleNewItemSubmit={handleNewItemSubmit}
                    />
                )
            })
        }
        </div>
    )

}

export default CategoryList

import React from 'react';
import Category from './Category';
import "./CategoryList.css";
import CategoryListAdd from './CategoryListAdd';

function CategoryList(props) {
    const {
        budgetItemRef, 
        handleAddBudgetItem, 
        newCategoryRef,
        budgetItemPriceRef, 
        budgetCategories,
        handleAddBudgetCategory,
        setBudgetCategories,
        handleItemInputChange,
        handleNewItemSubmit
    } = props

    return (
        <div>
            <CategoryListAdd
                handleAddBudgetCategory={handleAddBudgetCategory}
                newCategoryRef={newCategoryRef}
                budgetCategories={budgetCategories}
                setBudgetCategories={setBudgetCategories}
            />
        {
            budgetCategories.map((budgetItem) => {
                return (
                    <Category 
                        id={budgetItem.id}
                        key={budgetItem.id}
                        Category={budgetItem}
                        budgetItemRef={budgetItemRef}
                        handleAddBudgetItem={handleAddBudgetItem}
                        budgetItemPriceRef={budgetItemPriceRef}
                        handleItemInputChange={handleItemInputChange}
                        handleNewItemSubmit={handleNewItemSubmit}
                    />
                )
            })
        }
        </div>
    )

}

export default CategoryList

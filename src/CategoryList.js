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
        setBudgetCategories
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
                        CategoryName={budgetItem}
                        budgetItemRef={budgetItemRef}
                        handleAddBudgetItem={handleAddBudgetItem}
                        budgetItemPriceRef={budgetItemPriceRef}
                    />
                )
            })
        }
        </div>
    )

}

export default CategoryList

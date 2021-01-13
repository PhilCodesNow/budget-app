import React, { useState } from 'react';
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
        newCategoryName
    } = props

    return (
        <div>
            <CategoryListAdd
                handleAddBudgetCategory={handleAddBudgetCategory}
                newCategoryRef={newCategoryRef}
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

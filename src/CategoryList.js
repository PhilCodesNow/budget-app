import React, { useState } from 'react';
import Category from './Category';
import "./CategoryList.css";

function CategoryList(props) {
    const {
        budgetItemRef, 
        handleAddBudgetItem, 
        budgetItemPriceRef, 
        budgetCategories
    } = props

    return (
        <div>
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

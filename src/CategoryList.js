import React from 'react';
import Category from './Category';
import "./CategoryList.css";

function Input(props) {
    const {
        budgetItemRef, 
        handleAddBudgetItem, 
        budgetItemPriceRef, 
        budgetCategories
    } = props
    return (
        <div>
            <Category
                CategoryName="Transportation"
                budgetItemPriceRef={budgetItemPriceRef} 
                budgetItemRef={budgetItemRef} 
                handleAddBudgetItem={handleAddBudgetItem} 
                budgetCategories={budgetCategories}
            />
            <Category
                CategoryName="Housing"
                budgetItemPriceRef={budgetItemPriceRef} 
                budgetItemRef={budgetItemRef} 
                handleAddBudgetItem={handleAddBudgetItem} 
                budgetCategories={budgetCategories}
            />
            <Category
                CategoryName="Fun"
                budgetItemPriceRef={budgetItemPriceRef} 
                budgetItemRef={budgetItemRef} 
                handleAddBudgetItem={handleAddBudgetItem} 
                budgetCategories={budgetCategories}
            />
  </div>
    )

}

export default Input

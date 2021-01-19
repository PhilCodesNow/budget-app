import React from 'react';
import Category from './Category';
import "./CategoryList.css";
import CategoryListAdd from './CategoryListAdd';
import { v4 as uuidv4 } from 'uuid';

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
                        key={uuidv4()}
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

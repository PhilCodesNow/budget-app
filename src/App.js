import { useState, useRef } from 'react';
import './App.css';
import Output from "./Output";
import CategoryList from "./CategoryList";
import Header from "./Header";





function App() {
  
  const budgetItemRef = useRef()
  const budgetItemPriceRef = useRef()
  const [budgetItems, setBudgetItems] = useState([])
  
  const newCategoryRef = useRef()
  const [budgetCategories, setBudgetCategories] = useState(['houseing','transportation'])




  function handleAddBudgetItem(e) {
    const name = budgetItemRef.current.value
    const price = budgetItemPriceRef.current.value
    if ((name === '') || (price === '')) return
    setBudgetItems(prevBudgetItems => {
      return [...prevBudgetItems, {name: name, price: price}]
    })
    budgetItemRef.current.value = null
    budgetItemPriceRef.current.value = null
  }

  function handleAddBudgetCategory() {
    const category = newCategoryRef.current.value
    if(category === '') return
   setBudgetCategories(prevCategories => {
      return [...prevCategories, category]
    })
    newCategoryRef.current.value = null
  }


  // function  handleAddBudgetCategory(newCategory) {
  //   const newCategoryName = newCategory
  //   setBudgetCategories(prevBudgetCategories => {
  //     return [...prevBudgetCategories, newCategoryName]
  //   })
  // }


  return (
    <div className="app">
      <div className="app__header">
        <Header />
      </div>
      <div className="app__body">
        <div className="app__categories">
          <CategoryList 
            budgetItemPriceRef={budgetItemPriceRef} 
            budgetItemRef={budgetItemRef} 
            newCategoryRef={newCategoryRef}
            handleAddBudgetItem={handleAddBudgetItem} 
            budgetCategories={budgetCategories}
            handleAddBudgetCategory={handleAddBudgetCategory}
            setBudgetCategories={setBudgetCategories}
          />
            
        </div>
        <Output 
          budgetItems={budgetItems}
          setBudgetItems={setBudgetItems}
          budgetCategories={budgetCategories}
          />
      </div>
    </div>
  );
}

export default App;

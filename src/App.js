import react, { useState, useRef } from 'react';
import './App.css';
import Output from "./Output";
import CategoryList from "./CategoryList";
import Header from "./Header";





function App() {
  
  const budgetItemRef = useRef()
  const budgetItemPriceRef = useRef()
  const newCategoryRef = useRef()
  const [budgetItems, setBudgetItems] = useState([])

  const [budgetCategories, setBudgetCategories] = useState(["transportation", "housing", "fun"])

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

  function  handleAddBudgetCategory(newCategory) {
    const newCategoryName = newCategoryRef.current.value
    if(newCategoryName === '') return
    setBudgetCategories(prevBudgetCategories => {
      return [...prevBudgetCategories, newCategory]
    })
    newCategoryRef.current.value = null
  }



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
            budgetCategories={budgetCategories}/>
            handleAddBudgetCategory={handleAddBudgetCategory}
            
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

import react, { useState, useRef } from 'react';
import './App.css';
import Output from "./Output";
import Input from "./Input";
import Header from "./Header";





function App() {
  
  const budgetItemRef = useRef()
  const budgetItemPriceRef = useRef()
  const [budgetItems, setBudgetItems] = useState([])

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

  return (
    <div className="app">
      <div className="app__header">
        <Header />
      </div>
      
      <div className="app__body">
        <Input 
        budgetItemPriceRef={budgetItemPriceRef} 
        budgetItemRef={budgetItemRef} 
        handleAddBudgetItem={handleAddBudgetItem} 
        />
        <Output 
        budgetItems={budgetItems}
        />
      </div>
    </div>
  );
}

export default App;

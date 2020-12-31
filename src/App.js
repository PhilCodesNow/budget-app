import react, { useState, useRef } from 'react';
import './App.css';
import Output from "./Output";
import Input from "./Input";
import Header from "./Header";





function App() {
  
  const budgetItemRef = useRef()
  const budgetItemPriceRef = useRef()
  const [budgetItems, setBudgetItems] = useState([{name: 'one', price: 100}, {name: 'two', price: 50}, {name: 'three', price: 20}, {name: 'four', price: 10}, {name: 'five', price: 15}])

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

//   const deleteBudgetItem = (i) =>{
//     console.log(i)
//     setBudgetItems(prevBudgetItems => {
//       return [...prevBudgetItems]
//     })
// }

// function deleteBudgetItem(i){
//   console.log(i)
//   budgetItems.splice(i, 1)
//   setBudgetItems(prevBudgetItems => {
    
//     return [...prevBudgetItems]
//   })
// }


  return (
    <div className="app">
      {/* <button onClick={checkState}>Check State</button> */}
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
        setBudgetItems={setBudgetItems}
        />
      </div>
    </div>
  );
}

export default App;

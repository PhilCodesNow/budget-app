import { useState, useRef, useEffect } from 'react';
import './App.css';
import Output from "./Output";
import CategoryList from "./CategoryList";
import Header from "./Header";
import { v4 as uuidv4 } from 'uuid';


const LOCAL_STORAGE_KEY = 'budgetApp.categories'



function App() {
  
  const budgetItemRef = useRef()
  const budgetItemPriceRef = useRef()
  const [budgetItems, setBudgetItems] = useState([])
  const [currentItemNameValue, setCurrentItemNameValue] = useState([])
  const [currentItemPriceValue, setCurrentItemPriceValue] = useState([])

  const newCategoryRef = useRef()
  const [budgetCategories, setBudgetCategories] = useState([])

  useEffect(() => {
    const categoryJSON = localStorage.getItem(LOCAL_STORAGE_KEY)
    if(categoryJSON != null) setBudgetCategories(JSON.parse(categoryJSON))
  }, [])

  useEffect(() =>{
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(budgetCategories))
  }, [budgetCategories])

  useEffect(() =>{
    console.log(budgetCategories)
  },[budgetCategories])

  function handleItemNameInputChange(e) {
    setCurrentItemNameValue(e.target.value)
    console.log(`name: ${currentItemNameValue}`)
  }

  function handleItemPriceInputChange(e) {
    setCurrentItemPriceValue(e.target.value)
    console.log(`price: ${currentItemPriceValue}`)
  }

  function handleNewItemSubmit(id){
    let arrayIndex = budgetCategories.findIndex(budgetCategory => budgetCategory.id === id)
    let newArray = budgetCategories
    let oldItems = newArray[arrayIndex].items
    newArray[arrayIndex].items = [...oldItems, {name: currentItemNameValue, price: currentItemPriceValue}]
    // newArray[arrayIndex].items[...prevItems, 'item this']
    setBudgetCategories([...newArray])
  }


  // function handleAddBudgetItem(categoryId, categoryName, categoryItems) {
  //   console.log('hit here 1')
  //   const budgetCategoriesIndex = budgetCategories.findIndex(category => category.id === categoryId)
  //   console.log(`index ${budgetCategoriesIndex}`)
  //   const itemName = budgetItemRef.current.value
  //   const itemPrice = budgetItemPriceRef.current.value
  //   if ((itemName === '') || (itemPrice === '')) return
  //   console.log('hit here 2')
  //   let newArray = budgetCategories
  //   newArray[budgetCategoriesIndex] = {id: categoryId, name: categoryName, items: [{itemName: itemName, itemPrice: itemPrice}]}
  //   console.log('hit here 3')
  //   setBudgetCategories(prevBudgetCategories => {
  //     return [...newArray]
  //   })
  //   budgetItemRef.current.value = null
  //   budgetItemPriceRef.current.value = null
  // }

  function handleAddBudgetCategory() {
    const category = newCategoryRef.current.value
    if(category === '') return
   setBudgetCategories(prevCategories => {
    // localStorage.setItem('localStorageBudgetCategories', [...prevCategories, {name: category, items: 'items'}])
    return [...prevCategories, {id: uuidv4(), name: category, items: []}]
    
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
            // handleAddBudgetItem={handleAddBudgetItem} 
            budgetCategories={budgetCategories}
            handleAddBudgetCategory={handleAddBudgetCategory}
            setBudgetCategories={setBudgetCategories}
            handleItemNameInputChange={handleItemNameInputChange}
            handleItemPriceInputChange={handleItemPriceInputChange}
            handleNewItemSubmit={handleNewItemSubmit}
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

import react, { useState } from 'react';
import './App.css';
import Output from "./Output";
import Input from "./Input";
import Header from "./Header";



function App() {


function checkState() {
  console.log('check state')
  budgetItems = budgetItems + 'budget item'
  console.log(budgetItems)
}


const [budgetItems, setBudgetItems] = useState([]);
  return (
    <div className="app">
      <button onClick={checkState}>Check State</button>
      <div className="app__header">
        <Header />
      </div>
      
      <div className="app__body">
        <Input />
        <Output />
      </div>
    </div>
  );
}

export default App;

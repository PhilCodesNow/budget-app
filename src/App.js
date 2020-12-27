import react, { useState } from 'react';
import './App.css';
import Output from "./Output";
import Input from "./Input";
import Header from "./Header";





function App() {

  const [budgetItems, setBudgetItems] = useState(['house', 'rent', 'gas', 'food'])
  return (
    <div className="app">
      <div className="app__header">
        <Header />
      </div>
      
      <div className="app__body">
        <Input budgetItems={budgetItems}/>
        <Output budgetItems={budgetItems}/>
      </div>
    </div>
  );
}

export default App;


import './App.css';
import Output from "./Output";
import Input from "./Input";
import Header from "./Header";

// from mac



function App() {
  return (
    <div className="app">
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

import React from 'react';
import './App.css';
import Counter from './components/Counter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
    
      <Counter initialValue ={0} step={1}/>
      <Counter initialValue ={0} step={2}/>
      <Counter initialValue ={1} step={3}/>

      </header>
    </div>
  );
}

export default App;

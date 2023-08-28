import logo from './logo.svg';
import './App.css';
import React from 'react';
import Main from './Main';
import ProductFrom from './components/ProductFrom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ProductFrom/>
      </header>
    </div>
  );
}

export default App;

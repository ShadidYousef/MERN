import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Main from './Main';
import Detail from './components/Detail';
import Update from './components/Update';
import ProductList from './components/ProductList';
function App() {
    return (
    <div className="App"> 
    
    <Routes>
    <Route element={<ProductList/>} path="/product" />
    <Route element={<Detail/>} path="/product/:id" />
    <Route element={<Update/>} path="/product/:id/edit"/>
    </Routes>
    
    
    
    
    </div>
        
 );   
}
export default App;

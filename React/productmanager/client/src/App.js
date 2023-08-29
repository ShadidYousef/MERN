import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Main from './Main';
import Detail from './components/Detail';
function App() {
    return (
    <div className="App"> 
    
    <Routes>
    <Route element={<Main/>} path="/product/" />
    <Route element={<Detail/>} path="/product/:id" />
    </Routes>
    
    
    
    
    </div>
        
 );   
}
export default App;

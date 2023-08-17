import logo from './logo.svg';
import './App.css'; 
import Nothome from './components/Nothome'
import Realhome from './components/Realhome'
import Realnothome from './components/Realnothome'

import {
  Routes,
  Route,
  Link
} from "react-router-dom"; 

function App() {
  return (
    <div>
      <h1>Hello World</h1>
      <Routes>
        <Route path="/home" element={<Nothome />}/>
        <Route path="/:something" element={<Realhome />}/>
        <Route path="/:something/:color/:backgroud" element={<Realnothome />}/>
      </Routes>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import Tabs from './components/Tabs';
import Details from './components/Details';
import { useState } from 'react';

function App() {
  const arr=[{label:"Yousef",content:"226"},{label:"Osama", content:"117"}, {label:"Ahmad", content:"338"}, {label:"Akram", content:"449"}]

  const [tab, setTab] = useState({});
  const assignTab = tab => setTab(tab); 
  return (
    <div className="App">
      <Tabs array={arr} assignTab={ assignTab }/>
      <Details tab= {tab}/>
    </div>
  );
}

export default App;

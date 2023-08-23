import './App.css';
import { useState } from 'react';
import TodoList from './components/TodoList';
import Todo from './components/Todo';


function App() {
  const [lists , setLists] = useState([])
  const [crtList , setCrtList] = useState("")

  const handleList = (newList) => {
    setCrtList(newList)
  }


  return (
    <div className="App">
      <header className="App-header">
        <TodoList lists = {lists} setCrtList ={handleList}/>
        <Todo lists = {lists} crtList = {crtList} />
      </header>
    </div>
  );
}


export default App;

import React,{useState,useEffect} from 'react';
import './App.css';
//importing components
import Form from './components/form';
import TodoList from './components/todoList';

function App() {
  
  //states
  const [inputText, setInputText] = useState("");
  const [todos,setTodos] = useState([]);
  const [status,setStatus] = useState('all');
  const [filter,setFilter] = useState([]);
  
  //Functions
  const filterHandler = () => {
    switch(status) {
      case 'completed':
        setFilter(todos.filter((todo) =>todo.completed ===true))
        break;
      case 'incompleted':
        setFilter(todos.filter((todo) =>todo.completed ===false))
        break;
      default:
        setFilter(todos);
        break;
    }
  }
  
const getLocalTodos = () => {
  if(localStorage.getItem('todos') ===null) {
    localStorage.setItem('todos',JSON.stringify([]))
  }
  else{
    let todoLocal = JSON.parse(localStorage.getItem('todos'))
    setTodos(todoLocal)
  }
}
//run once 
useEffect(() => {
  getLocalTodos();
},[])
  //save to local
  const saveLocalTodos = () => {
    localStorage.setItem('todos',JSON.stringify(todos))
  }
  //useEffect
  useEffect(()=> {
    filterHandler();
    saveLocalTodos();
  },[todos,status])
  return (
    <div className='header-container'>
      <div className='header'>
        <h1>Todo List</h1>
      </div>
      <Form  setStatus={setStatus} inputText={inputText} todos ={todos} setTodos = {setTodos} setInputText = {setInputText} />
      <TodoList filter = {filter} setTodos={setTodos} todos = {todos}/>
    </div>
  )
}

export default App;

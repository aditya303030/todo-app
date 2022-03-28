import React from "react";
import '../App.css';

const Form = ({setInputText,inputText,todos,setTodos, setStatus}) => {
  const inputTextHandler = (e) => {
    console.log(e.target.value)
    setInputText(e.target.value)
  }
  const submittodoHandler = (e) => {
    e.preventDefault()
    setTodos([
      ...todos,{text:inputText, completed:false,id:Math.random()*1000}
    ]);
    setInputText("");
  }

  const statusHandler = (e) => {
    setStatus(e.target.value)
  } 

  return (
    <form className="todo-form">
      <input value={inputText} onChange = {inputTextHandler} type="text" className="todo-input" />
      <button onClick={submittodoHandler} className="todo-button" type="submit">
        <i className="fas fa-plus-square" ></i>
      </button>
      <div className="select">
        <select name="todos" onChange={statusHandler} className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="incompleted">Incompleted</option>
        </select>
      </div>
    </form>
  );
}

export default Form;
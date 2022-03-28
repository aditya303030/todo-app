import React from "react";
import Todo from "./todo";

const TodoList = ({todos,setTodos,filter}) => {
  return (
    <div className="todo-contaiener">
      <ul className="todo-list">
        {filter.map((todo) => (
          <Todo filter = {filter} setTodos={setTodos} todo = {todo} todos = {todos} key = {todo.id} text = {todo.text}/>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
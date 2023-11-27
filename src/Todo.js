import React, { useState } from 'react';
import  './Greet.css';
function Todo() {
  const [list, setList] = useState([]);
  const [input, setInput] = useState('');
  const addTodo = (todo) => {
    const newTodo = {
      id: Math.random(),
      todo: todo,
    };
    setList([...list, newTodo]);
    setInput('');
  };
  const deleteTodo = (id) => {
    const newList = list.filter((todo) => todo.id !== id);

    setList(newList);
  };
  return (
    <div>
      <h1 className="hello">Add Your Todo List</h1>
      <input
        className="todo-input"
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      ></input>
      <button className="todo-button" onClick={() => addTodo(input)}>
        Add
      </button>
      <div className="todo-e">
        {list.map((todo) => (
          <p className="come" key={todo.id}>
            {todo.todo}
            <button className="delete" onClick={() => deleteTodo(todo.id)}>
              Delete
            </button>
          </p>
        ))}
      </div>
    </div>
  );
}

export default Todo;

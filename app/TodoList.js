"use client"
import React, { useState } from 'react';

function TodoList() {
  const [inputValue, setInputValue] = useState('');
  const [todos, setTodos] = useState([
  	
  ]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() !== '') {
      setTodos([...todos, inputValue]);
      setInputValue('');
    }
  };

  const handleRemoveTodo = (indexToRemove) => {
    const updatedTodos = todos.filter((_, index) => index !== indexToRemove);
    setTodos(updatedTodos);
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input className="enter_text"
          type="text"
          placeholder="Enter text"
          value={inputValue}
          onChange={handleInputChange}
        />
        <button type="submit">Add Item</button>
      </form>
      <ul>
        {todos.map((todo, index) => (
          <div key={index}>
            <span>{todo}</span>
            <button onClick={() => handleRemoveTodo(index)}>Remove</button>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;


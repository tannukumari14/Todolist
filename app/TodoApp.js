import React, { useState } from 'react';

function TodoApp() {
  // Model: State to manage todo items
  const [todos, setTodos] = useState([]);
  
  // Controller: Function to add a new todo item to the Model
  const addTodo = (text) => {
    setTodos([...todos, { text, completed: false }]);
  };

  // View: Render the user interface
  return (
    <div>
      <h1>Todo App</h1>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo.text}
           <button onClick={() =>>
				  {todo.completed ? 'Undo' : 'Complete'}}
		   </button>

          </li>
        ))}
      </ul>
      <input type="text" placeholder="Enter text" />
   	  <button onClick={() => handleCompleteTodo(index)}>
  			{todo.completed ? 'Undo' : 'Complete'}
	  </button>


    </div>
  );
}

export default TodoApp;


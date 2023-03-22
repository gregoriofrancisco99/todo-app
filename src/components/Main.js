import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

import './../style/main.scss';
import './../style/controller.scss';

import database from './../data/data.json';
import { ItemsList } from './ItemsList';
import { FilterButton } from "./FilterButton";

export function Main() {
  // Extracting LocalStorage to App
  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem('todos')));
  
  // Check if LocalStorage data is not null or empty
  if(!todos || todos.length === 0) {
    localStorage.setItem("todos", JSON.stringify(database));
    setTodos(JSON.parse(localStorage.getItem('todos')));
  }
  
  
  const [data, setData] = useState(todos);
  
  // Watch and update the changes in the todos list
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(data));
  }, [data]);

  // Filter functionality
  const filterTodos = (status) => {
    const filteredTodos = database.filter((todo) => {
      return todo.completed === status;
    });
    setData(filteredTodos);
  }
  // Filter options creation
  const buttons = [...new Set(database.map((todo => {
    return todo.completed ? 'Completed' : 'Active';
  })))];
  buttons.unshift('All');
  
  // Create and add new tasks to the list
  function handleNewTask(value) {
    const newTask = {
      id: uuidv4(),
      task: value,
      completed: false
    }
    
    setData(prevData => [...prevData, newTask]);
  }

  const clearComplete = () => {
      const toCompleteOnly = data.filter((todo) => !todo.completed);
      console.log(toCompleteOnly);
      setData(toCompleteOnly);
  };

  // Counter functionality
  let counter = 0;
  data.map((item) => (!item.completed ? counter++ : null));
  
  function handleSubmit(event) {
    event.preventDefault();
    const value = event.target[0].value;

    if(value !== '') {
      handleNewTask(value);

      event.target[0].value = ''
     } else { 
      alert('Your text is empty');
    }
  }
  
  return (
    <main>
      <form onSubmit={handleSubmit}>
        <div id="textField">
          <input 
            type="text" 
            name="newTodo" 
            id="newTodo" 
          />
          <label htlmFor="task">Create a new todo...</label>
        </div>

        <ItemsList data={data} setData={setData} />
        
      </form>
      <div id="controller">
        <p id="itemsCounter">{counter} items left</p>
        <div id="filter">
          {
            buttons.map((category) => (
              <FilterButton category={category} filterTodos={filterTodos} />
            ))
          }
        </div>
        <button 
          id="clearComplete" 
          onClick={clearComplete}
        >Clear Completed</button>
      </div>
    </main>
  );
}
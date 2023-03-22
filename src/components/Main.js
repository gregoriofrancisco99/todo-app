import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import './../style/main.scss';
import './../style/controller.scss';

import database from './../data/data.json';
import { ItemsList } from './ItemsList';
import { FilterButton } from "./FilterButton";

export function Main() {
  const [data, setData] = useState(database);

  const filterTodos = (status) => {
    const filteredTodos = database.filter((todo) => {
      return todo.completed === status;
    });
    setData(filteredTodos);
  }
  const buttons = [...new Set(database.map((todo => {
    return todo.completed ? 'Completed' : 'Active';
  })))];
  buttons.unshift('All');

  function handleNewTask(value) {
    const newTask = {
      id: uuidv4(),
      task: value,
      completed: false
    }

    setData(prevData => [...prevData, newTask]);
  }
  
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
  
  const clearComplete = () => {
      const toCompleteOnly = data.filter((todo) => !todo.completed);
      console.log(toCompleteOnly);
      setData(toCompleteOnly);
  };

  
  let counter = 0;
  data.map((item) => (!item.completed ? counter++ : null));
  
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

        <ItemsList data = {data} setData={setData} />
        
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
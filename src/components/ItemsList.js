export function ItemsList({ data, setData}) {
  
  const toggleTodo = (id) => {
    const newTodos = data.map((todo) => {
      if(todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setData(newTodos);
  };

const handleClick = (id) => {
  const input = document.querySelector(`input[name="task ${id}"]`);
  input.checked = !input.checked;
  toggleTodo(id);
}
  return (
    <ul id="itemsList">
      {
        data.map((todo) => (
            <li className={`listItem ${(todo.completed ? "done" : "undone")}`} key={todo.id}>
              <input 
                type="checkbox" 
                checked={todo.completed}
                onChange={() => {toggleTodo(todo.id)}}
                name={`task ${todo.id}`}
              />
              <label htlmFor={`task ${todo.id}`} onClick={() => handleClick(todo.id)}>{todo.task}</label>
            </li>
        ))
      }
    </ul>
  );
};
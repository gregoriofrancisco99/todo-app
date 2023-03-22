export function FilterButton ({ filterTodos, category }) {
  return (
    <button 
    className="filter"
    onClick={() => filterTodos(category === 'Completed' ? true : category === 'All' ? undefined: false)}
    >{category}</button>
  )
}
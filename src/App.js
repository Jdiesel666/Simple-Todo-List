import React, { useEffect, useState } from 'react';
import './App.css';

const removeIcon = <svg t="1603088503107" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1152" width="200" height="200"><path d="M689.257 279.687l-95.113 0c-4.745-41.142-39.749-73.208-82.146-73.208-42.392 0-77.393 32.064-82.139 73.208l-95.118 0c-38.493 0-69.803 31.321-69.803 69.811l0 3.581c0 29.413 18.316 54.591 44.116 64.848l0 329.782c0 38.493 31.314 69.811 69.804 69.811l266.283 0c38.49 0 69.802-31.322 69.802-69.811l0-329.781c25.799-10.26 44.116-35.436 44.116-64.848l0-3.581c0-38.493-31.313-69.813-69.802-69.813zM512 239.587c24.112 0 44.238 17.283 48.692 40.1l-97.375 0c4.452-22.819 24.579-40.1 48.682-40.1zM681.838 747.709c0 20.239-16.465 36.705-36.697 36.705l-266.283 0c-20.23 0-36.697-16.469-36.697-36.705l0-324.818 339.677 0 0 324.818zM725.953 353.08c0 20.239-16.465 36.705-36.697 36.705l-354.514 0c-20.23 0-36.697-16.467-36.697-36.705l0-3.581c0-20.239 16.465-36.705 36.697-36.705l354.515 0c20.23 0 36.697 16.467 36.697 36.705l0 3.581zM423.251 742.074c9.142 0 16.553-7.414 16.553-16.553l0-186.382c0-9.141-7.412-16.554-16.553-16.554s-16.553 7.415-16.553 16.554l0 186.382c-0.002 9.142 7.41 16.553 16.552 16.553zM512 742.074c9.143 0 16.554-7.415 16.554-16.553l0-186.382c0-9.141-7.415-16.554-16.554-16.554-9.142 0-16.553 7.415-16.553 16.554l0 186.382c0 9.142 7.41 16.553 16.552 16.553zM600.749 742.074c9.142 0 16.552-7.414 16.552-16.553l0-186.382c0-9.141-7.412-16.554-16.552-16.554-9.143 0-16.553 7.415-16.553 16.554l0 186.382c-0.002 9.142 7.414 16.553 16.553 16.553z" p-id="1153" fill="#ffffff"></path></svg>
const completeIcon = <svg t="1603424168268" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1675" width="200" height="200"><path d="M499.7587 800.00032 184.85566 474.771097l80.721463-65.702398 182.094268 145.004535c74.617441-90.096994 240.284575-268.907473 468.845131-411.111219l19.241226 45.057195C725.971791 383.722428 554.202683 659.205667 499.7587 800.00032L499.7587 800.00032 499.7587 800.00032zM894.33329 417.391249c7.199982 29.791513 11.047614 60.889789 11.047614 92.89369 0 217.60197-176.406732 394.009725-394.018935 394.009725-217.604016 0-394.013819-176.411849-394.013819-394.009725 0-217.60811 176.408779-394.017912 394.013819-394.017912 54.121642 0 105.691157 10.921747 152.634306 30.66644L663.996275 92.050486c-47.605228-17.377786-99.013061-26.861788-152.634306-26.861788-245.815545 0-445.092148 199.276602-445.092148 445.096241 0 245.810429 199.276602 445.087031 445.092148 445.087031 245.820662 0 445.095217-199.276602 445.095217-445.087031 0-31.858592-3.354398-62.932308-9.717316-92.89369L894.33329 417.391249 894.33329 417.391249zM894.33329 417.391249" p-id="1676" fill="#ffffff"></path></svg>
const incompleteIcon = <svg t="1603424230722" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2440" width="200" height="200"><path d="M512 64a448.128 448.128 0 0 0 0 896 446.976 446.976 0 0 0 381.056-212.288c18.56-30.08 0-48.768-30.016-67.392-30.08-18.624-60.16-30.08-78.784 0A318.976 318.976 0 0 1 512 832a320 320 0 0 1 0-640c35.328 0 40.448-30.72 40.448-66.048S547.328 64 512 64z m447.68 469.568c6.784-177.92-84.672-327.616-220.224-407.616-30.464-17.92-47.104 1.92-65.088 32.384-17.92 30.4-30.464 59.904 0 77.824A319.744 319.744 0 0 1 832 512c0 35.328 33.664 40.576 61.056 52.864 27.328 12.288 65.28 3.968 66.624-31.296z" fill="#ffffff" p-id="2441"></path></svg>

const INIT_TODOS = [
  {
    text: 'Learn about React',
    isComplete: false
  },
  {
    text: 'Live a healthy lifestyle',
    isComplete: false
  },
  {
    text: 'Build todo app',
    isComplete: false
  }
];

function Todo({ todo, removeTodo, completeTodo, index }) {
  return (
    <div 
      className="todo"
      onClick={() => completeTodo(index)}
    > 
      <div 
        className="tasks"
        style ={{
          textDecoration: todo.isComplete ? 'line-through' : ''
        }}
      >
        {todo.isComplete ? completeIcon : incompleteIcon}
        {todo.text}
      </div>
      <a className="remove" href="#!" onClick={(e) => removeTodo(e, index)}>
        {removeIcon} 
      </a>
    </div>
  )
}

function TodoForm({ addTodo }) {
  const[value, setValue] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value || !value.replace(/\s/g, '').length) {
      return;
    }
    addTodo(value);
    setValue('');
  }
  return (
    <form onSubmit={handleSubmit}>
      <input 
        value={value} 
        className="input" 
        onChange={(e) => setValue(e.target.value)}  
      />
    </form>
  )
}

function App() {
  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem('todos')) || INIT_TODOS);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));  
  }, [todos]);
  

  const addTodo = text => {
    const newTodos = [{ text }, ...todos];
    setTodos(newTodos);
  };

  const removeTodo = (e, index) => {
    e.preventDefault();              // prevents the default action the browser makes on that event
    e.stopPropagation();             // stops the event from bubbling up the event chain
    const newTodos = [...todos];
    newTodos.splice(index, 1);       // splice remove the number of element from array starting with element at index
    setTodos(newTodos);
  };

  const completeTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isComplete = true;
    setTodos(newTodos);
  };

  return (
    <div className="App">
      <div className="todo-list">
        <TodoForm addTodo={addTodo} />
        {
          todos.map((todo, index) => (
            <Todo 
              index={index} 
              removeTodo={removeTodo} 
              completeTodo={completeTodo}
              key={todo.text}
              todo={todo} 
            />
          ))
        }
      </div>
    </div>
  );
}

export default App;

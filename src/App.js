import React, { useState } from "react";
import "./App.css";
import { v4 as uuidv4 } from 'uuid';


const AddTodo = ({ addTodo }) => {
  const [title, setTitle] = React.useState('')
  const handleSubmit = e => {
    e.preventDefault()
    if (!title) {
      return
    }
    const todo = {
      title,
      isCompleted: false,
      id: uuidv4(),
      date: Date.now()
    }
    addTodo(todo)
    setTitle('')
  }
return (
    <form className="form" onSubmit={handleSubmit}>
      <input 
        className="form__input" 
        type="text" 
        name="title"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <button className="form__button" type="submit">ADD</button>
    </form>
  )
}

const Todos = ({ todos, completeTodo, deleteTodo }) => {  
  return (
    <ul className="todos">
      {todos.map((todo, i) => (
        <li 
          className={todo.isCompleted ? 'todos__item completed' : 'todos__item'} 
          key={i}
        >
          <box-icon 
            onClick={() => completeTodo(todo.id)}
            name={todo.isCompleted ? 'checkbox-checked' : 'checkbox'}
            color="white"  
          />
          <span>{todo.title}</span>
          <box-icon 
            name="trash-alt" 
            color="white" 
            onClick={() => deleteTodo(todo.id)}
          />
        </li>
      ))}
    </ul>
  )
}

const App = () => {
  const [todos, setTodos] = React.useState([])
  
  const addTodo = todo => setTodos([...todos, todo])
  
  const completeTodo = id => {
    const newTodos = todos.map(todo => {
      return todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
    })
    setTodos(newTodos)
  }
  
  const deleteTodo = id => setTodos(todos.filter(todo => todo.id !== id))
  
  return (
    <div className="container">
      <h1 className="title">Todo List</h1>
      <AddTodo addTodo={addTodo} />
      <Todos todos={todos} completeTodo={completeTodo} deleteTodo={deleteTodo} />
    </div>
  )
}
export default App;

// todoState = {
//   content: 'asdf',
//   
// }
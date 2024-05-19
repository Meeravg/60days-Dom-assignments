import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App () {
  const [todos, setTodos] = useState([])
  const [newTodo, setNewTodo] = useState('')

  function handleAddTodo (e) {
    e.preventDefault()
    if (newTodo !== '') {
      setTodos([...todos, { text: newTodo, completed: false }])
      setNewTodo('')
    }
  }

  function handleToggleComplete (index) {
    const updatedTodos = [...todos]
    updatedTodos[index].completed = !updatedTodos[index].completed
    setTodos(updatedTodos)
  }

  function handleDeleteTodo (index) {
    const updatedTodos = todos.filter((el, i) => i !== index)
    setTodos(updatedTodos)
  }

  return (
    <>
      <div>
        <h1> Add Todo </h1>
        <form onSubmit={handleAddTodo}>
          <input
            type='text'
            value={newTodo}
            onChange={e => setNewTodo(e.target.value)}
            placeholder='Add a todo'
          />
          <button type='submit'>Add</button>
        </form>
        <ul>
          <div className='todo-cont'>
            <h1 style={{ textAlign: 'center' }}>Todo List</h1>
            {todos.map((todo, index) => (
              <li key={index} className={'todo-item '}>
                <span>{todo.text}</span>
                <input
                  type='checkbox'
                  checked={todo.completed}
                  onChange={() => handleToggleComplete(index)}
                />
                <button onClick={() => handleDeleteTodo(index)}>Delete</button>
              </li>
            ))}
          </div>
        </ul>
      </div>
    
    </>
  )
}

export default App

import React, { useState } from 'react'
import styled from 'styled-components'
import List from '../components/List'
import './App.css'

const StyledInput = styled.input`
  background-color: rgba(255,255,255,0.25);
  border: 0;
  font-size: 32px;
  color: #eee;
  padding: 0 10px;
  line-height: 50px;
  width: 100%;
`

export default function App() {
  const [todos, setTodos] = useState([])
  const [todosDone, setTodosDone] = useState([])
  const [newTodo, setNewTodo] = useState('')

  const handleSubmit = event => {
    event.preventDefault()
    if (!newTodo) return

    const addNewTodo = {
      name: newTodo,
      isComplete: false
    }

    setTodos([addNewTodo, ...todos])
    setNewTodo('')
  }

  const handleChange = event => {
    setNewTodo(event.target.value)
  }

  const handleListClick = todo => {
    // Set current todo to isComplete status
    todo.isComplete = true

    // Remove todo that is isComplete
    let filteredTodos = todos.filter(function (todo) {
      return todo.isComplete === false;
    });

    // Updating State
    setTodos([...filteredTodos])
    setTodosDone([todo, ...todosDone])
  }

  const handleListDoneClick = todoDone => {
    // Set current todo to incomplete status
    todoDone.isComplete = false

    // Remove todo that is incomplete
    let filteredTodosDone = todosDone.filter(function (todoDone) {
      return todoDone.isComplete === true;
    });

    setTodos([todoDone, ...todos])
    setTodosDone([...filteredTodosDone])
  }

  return (
    <div className="app-page">
      <div className="app-container">
        <div className="app">
          <form onSubmit={handleSubmit}>
            <StyledInput placeholder="Add New Todo..." value={newTodo} onChange={handleChange} />
          </form>
          <List todos={todos} onListClick={handleListClick} />
          <List todos={todosDone} onListClick={handleListDoneClick} />
        </div>
      </div>
    </div>
  )
}

import React, { useState } from 'react'
import styled from 'styled-components'
import './App.css'


const StyledInput = styled.input`
  background-color: rgba(255,255,255,0.25);
  border: 0;
  border-radius: 5px 5px 0 0;
  font-size: 32px;
  color: #eee;
  padding: 0 10px;
  line-height: 50px;
  width: 400px;
`
const StyledList = styled.div`
  width: 400px;

  div {
    background-color: rgba(255,255,255,0.25);
    cursor: pointer;
    line-height: 50px;
    margin-top: 1px;
    text-align: left;
    padding: 0 10px;
  }
  div:last-child {
    border-radius: 0 0 5px 5px;
  }
`
const StyledListDone = styled(StyledList)`
  div {
    background-color: rgba(255,255,255,0.15);
    color: #999;
  }
`


export default function App() {
  const [todos, setTodos] = useState([])
  const [todosDone, setTodosDone] = useState([])
  const [newTodo, setNewTodo] = useState({name: '', completed: false})


  function handleSubmit(event) {
    event.preventDefault()
    console.log("Adding:", newTodo)
    setTodos([newTodo, ...todos])
    setNewTodo({
      name: '',
      completed: false
    })
  }

  function handleChange(event) {
    setNewTodo({
      name: event.target.value,
      completed: false,
    })
  }


  const List = (props) => {
    if (props.todos.name === '') { return '' }

    function handleClick(todo) {
      // Set current todo to complete status
      todo.completed = true

      // Remove todo that is completed
      let filteredTodos = todos.filter(function (todo) {
        return todo.completed === false;
      });

      // Logging
      console.log('List:', todos)
      console.log('Filtered List', filteredTodos)

      // Updating State
      setTodos([...filteredTodos])
      setTodosDone([todo, ...todosDone])
    }

    return (
      <StyledList>
        {props.todos.map((todo, index) => (
          <div key={index} onClick={() => handleClick(todo)}>{todo.name} (Completed: {todo.completed.toString()})</div>
          ))}
      </StyledList>
    )
  }

  const ListDone = (props) => {
    if (props.todosDone.name === '') { return '' }

    function handleClick(todoDone) {
      // Set current todo to incomplete status
      todoDone.completed = false

      // Remove todo that is incomplete
      let filteredTodosDone = todosDone.filter(function (todoDone) {
        return todoDone.completed === true;
      });

      // Logging
      console.log('ListDone:', todosDone)
      console.log('Filtered ListDone', filteredTodosDone)

      setTodos([todoDone, ...todos])
      setTodosDone([...filteredTodosDone])
    }

    return (
      <StyledListDone>
        {props.todosDone.map((todoDone, index) => (
          <div key={index} onClick={() => handleClick(todoDone)}>{todoDone.name} (Completed: {todoDone.completed.toString()})</div>
        ))}
      </StyledListDone>
    )
  }

  // console.log("New Todo State:", newTodo)

  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit={handleSubmit}>
          <StyledInput placeholder="Add New Todo..." value={newTodo.name} onChange={handleChange} />
        </form>
        <List todos={todos} />
        <ListDone todosDone={todosDone} />
      </header>
    </div>
  )
}

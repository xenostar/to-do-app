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
  i {
    margin-right: 10px;
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
  const [newTodo, setNewTodo] = useState({name: '', complete: false})


  function handleSubmit(event) {
    event.preventDefault()
    console.log("Adding:", newTodo)
    setTodos([newTodo, ...todos])
    setNewTodo({
      name: '',
      complete: false
    })
  }

  function handleChange(event) {
    setNewTodo({
      name: event.target.value,
      complete: false,
    })
  }


  const List = (props) => {
    if (props.todos.name === '') { return '' }

    function handleClick(todo) {
      // Set current todo to complete status
      todo.complete = true

      // Remove todo that is complete
      let filteredTodos = todos.filter(function (todo) {
        return todo.complete === false;
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
          <div key={index} onClick={() => handleClick(todo)}><i class="far fa-square"></i>{todo.name}</div>
        ))}
      </StyledList>
    )
  }

  const ListDone = (props) => {
    if (props.todosDone.name === '') { return '' }

    function handleClick(todoDone) {
      // Set current todo to incomplete status
      todoDone.complete = false

      // Remove todo that is incomplete
      let filteredTodosDone = todosDone.filter(function (todoDone) {
        return todoDone.complete === true;
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
          <div key={index} onClick={() => handleClick(todoDone)}><i class="far fa-check-square"></i>{todoDone.name}</div>
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

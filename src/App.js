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
  const [newTodo, setNewTodo] = useState('')


  function handleSubmit(event) {
    event.preventDefault()
    // console.log("Adding:", newTodo)
    setTodos([newTodo, ...todos])
    setNewTodo('')
  }

  function handleChange(event) {
    setNewTodo(event.target.value)
  }


  const List = (props) => {
    if (props.todos === '') { return '' }

    function handleClick(todo, index) {
      console.log(index)
      setTodos('')
      setTodosDone([todo, ...todosDone])
    }

    return (
      <StyledList>
        {props.todos.map((todo, index) => (
          <div key={index} onClick={() => handleClick(todo, index)}>{todo}</div>
          ))}
      </StyledList>
    )
  }

  const ListDone = (props) => {
    if (props.todosDone === '') { return '' }

    function handleClick(todoDone, index) {
      console.log(index)
      setTodos([todoDone, ...todos])
      setTodosDone('')
    }

    return (
      <StyledListDone>
        {props.todosDone.map((todoDone, index) => (
          <div key={index} onClick={() => handleClick(todoDone, index)}>{todoDone}</div>
        ))}
      </StyledListDone>
    )
  }


  // console.log("New Todo State:", newTodo)

  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit={handleSubmit}>
          <StyledInput placeholder="Add New Todo..." value={newTodo} onChange={handleChange} />
        </form>
        <List todos={todos} />
        <ListDone todosDone={todosDone} />
      </header>
    </div>
  )
}

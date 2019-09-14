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
    line-height: 50px;
    margin-top: 1px;
    text-align: left;
    padding: 0 10px;
  }
  div:last-child {
    border-radius: 0 0 5px 5px;
  }
`

let List = (props) => {
  if (props.todos == '') {
    return ''
  }
  return (
    <StyledList>
      {props.todos.map((todo, index) => (
        <div key={index}>{todo}</div>
      ))}
    </StyledList>
  )
}

function App() {
  const [todos, setTodos]     = useState([])
  const [newTodo, setNewTodo] = useState('')

  console.log("New Todo State:", newTodo)

  return (
    <div className="App">
      <header className="App-header">
        <form
          onSubmit={ event => {
            event.preventDefault()
            console.log("Adding:", newTodo)
            setTodos([newTodo, ...todos])
            setNewTodo('')
          }
        }>
          <StyledInput
            value={ newTodo }
            placeholder="Add New Todo..."
            onChange={ event => setNewTodo(event.target.value) }
          />
        </form>
        <List todos={ todos } />
      </header>
    </div>
  )
}

export default App

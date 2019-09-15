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
    color: #444;
  }
`




const List = (props) => {
  if (props.todos === '') { return '' }

  let handleClick = () => {

  }

  return (
    <StyledList>
      {props.todos.map((todo, index) => (
        <div key={index} onClick={ () => { console.log(index) } }>{todo}</div>
      ))}
    </StyledList>
  )
}

const ListDone = (props) => {
  if (props.todosDone === '') { return '' }

  return (
    <StyledListDone>
      {props.todosDone.map((todoDone, index) => (
        <div key={index}>{todoDone}</div>
      ))}
    </StyledListDone>
  )
}



function App() {
  const [todos, setTodos] = useState([])
  const [todosDone, setTodosDone] = useState(['Done'])
  const [newTodo, setNewTodo] = useState('')

  let handleSubmit = (event) => {
    event.preventDefault()
    // console.log("Adding:", newTodo)
    setTodos([newTodo, ...todos])
    setNewTodo('')
  }

  // console.log("New Todo State:", newTodo)

  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit={handleSubmit}>
          <StyledInput value={ newTodo } placeholder="Add New Todo..." onChange={ event => setNewTodo(event.target.value) } />
        </form>
        <List todos={ todos } />
        <ListDone todosDone={ todosDone } />
      </header>
    </div>
  )
}

export default App

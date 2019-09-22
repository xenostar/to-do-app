import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons'
import { faSquare } from '@fortawesome/free-regular-svg-icons'
import styled from 'styled-components'
import './App.css'

// import ListDone from '../components/ListDone'

const StyledInput = styled.input`
  background-color: rgba(255,255,255,0.25);
  border: 0;
  font-size: 32px;
  color: #eee;
  padding: 0 10px;
  line-height: 50px;
  width: 100%;
`
const StyledList = styled.div`
  div {
    background-color: rgba(255,255,255,0.25);
    cursor: pointer;
    margin-top: 1px;
    padding: 12px;
  }
  svg {
    margin-right: 12px;
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


  const handleSubmit = event => {
    event.preventDefault()

    if (!newTodo.name) return

    console.log("Adding:", newTodo)

    setTodos([newTodo, ...todos])
    setNewTodo({
      name: '',
      complete: false
    })
  }

  const handleChange = event => {
    setNewTodo({
      name: event.target.value,
      complete: false,
    })
  }


  const List = props => {
    useEffect(() => {
      console.log('I will only run once');
    }, []);

    if (props.todos.name === '') { return '' }

    const handleClick = todo => {
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
          <div key={index} onClick={() => handleClick(todo)}><FontAwesomeIcon icon={faSquare} />{todo.name}</div>
        ))}
      </StyledList>
    )
  }

  const ListDone = props => {
    if (props.todosDone.name === '') { return '' }

    const handleClick = todoDone => {
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
          <div key={index} onClick={() => handleClick(todoDone)}><FontAwesomeIcon icon={faCheckSquare} />{todoDone.name}</div>
        ))}
      </StyledListDone>
    )
  }


  // console.log("New Todo State:", newTodo)


  return (
    <div className="app-page">
      <div className="app-container">
        <div className="app">
          <form onSubmit={handleSubmit}>
            <StyledInput placeholder="Add New Todo..." value={newTodo.name} onChange={handleChange} />
          </form>
          <List todos={todos} />
          <ListDone todos={todos} todosDone={todosDone} />
        </div>
      </div>
    </div>
  )
}

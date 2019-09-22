import React, { useState } from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquare } from '@fortawesome/free-regular-svg-icons'

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

export default function List(props) {
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

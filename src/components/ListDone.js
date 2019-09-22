import React, { useState } from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons'

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

export default function ListDone(props) {
  const [todos, setTodos] = useState(props.todos)
  const [todosDone, setTodosDone] = useState(props.todosDone)

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

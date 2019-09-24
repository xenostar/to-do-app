import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquare } from '@fortawesome/free-regular-svg-icons'
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons'

const StyledList = styled.div`
  div {
    cursor: pointer;
    margin-top: 1px;
    padding: 12px;
  }
  div.complete {
    background-color: rgba(255,255,255,0.15);
    color: #999;
  }
  div.incomplete {
    background-color: rgba(255,255,255,0.25);
  }
  svg {
    margin-right: 12px;
  }
`

export default function List({ todos, onListClick }) {
  if (todos.name === '') { return '' }

  return (
    <StyledList>
      {todos.map((todo, index) => (
        <div className={todo.isComplete ? 'complete' : 'incomplete'} key={index} onClick={() => onListClick(todo)}>
          <FontAwesomeIcon icon={todo.isComplete ? faCheckSquare : faSquare} />
          {todo.name}
        </div>
      ))}
    </StyledList>
  )
}

import React from 'react'

const Person = ({ person, handleClick }) => {

  return (
    <li>{person.name} {person.number} <button onClick={handleClick}>delete</button> </li>
  )
}

export default Person
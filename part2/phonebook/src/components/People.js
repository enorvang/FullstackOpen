import React from 'react'
import Person from './Person'

const People = ({ people }) => people.map(person => <Person key={person.name} person={person} />)

export default People
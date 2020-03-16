import React from 'react'
import Person from './Person'

const People = ({ people, deleteEntry }) => people.map((person, i) => <Person key={i} person={person} deleteEntry={deleteEntry} />)

export default People
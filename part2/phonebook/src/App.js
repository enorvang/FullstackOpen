import React, { useState } from 'react'
import People from './components/People'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'



const App = (props) => {
  const [ persons, setPersons] = useState(props.people) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ filter, setFilter ] = useState('')


  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const displayPeople = (filter.length === 0)
  ? persons
  : persons.filter(p => p.name.toLowerCase().includes(filter.toLowerCase()))


  const addNewEntry = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber
    }

    if(persons.some(p => p.name === newName)){
      alert(`${newNumber} already exists`)
    }else {
      setPersons(persons.concat(personObject))
      setNewName('')
      setNewNumber('')
    }
  }
  

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={handleFilterChange}/>
      <h3>Add new</h3>
      <PersonForm addNewEntry={addNewEntry} newName={newName} handleNameChange={handleNameChange} 
        newNumber={newNumber} handleNumberChange={handleNumberChange}/>
       
      <h2>Numbers</h2>
      <People people={displayPeople} />
    </div>
  )
}

export default App
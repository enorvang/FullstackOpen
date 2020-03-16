import React, { useState, useEffect } from 'react'
import Person from './components/Person'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'
import Notification from './components/Notification'
import peopleService from './services/peopleServices'


const App = () => {
  const [people, setPeople] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')
  const [notificationMessage, setNotificationMessage] = useState(null)

  useEffect(() => {
    peopleService
      .getAll()
      .then(initialPeople => {
        setPeople(initialPeople)
      })
  }, [])

  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const peopleToDisplay = (filter.length === 0)
    ? people
    : people.filter(p => p.name.toLowerCase().includes(filter.toLowerCase()))

  const displayPeople = () => peopleToDisplay.map((person, i) => {
    return (
      <Person key={i} person={person} handleClick={() => deleteEntry(person.id)} />
    )
  })

  const notify = text => {
    setNotificationMessage(text)
    setTimeout(() => {
      setNotificationMessage(null)
    }, 5000)
  }

  const addNewEntry = (event) => {
    event.preventDefault()

    const person = {
      name: newName,
      number: newNumber
    }
    if (people.some(p => p.number === newNumber)) {
      notify(`Error, ${newNumber} already exists`)

    } else if (people.some(p => p.name === newName)) {

      if (window.confirm(`${newName} is already added to the phonebook. Do you want to replace replace the old phone number with a new one?`)) {
        updateEntry(person)
      }

    } else {
      peopleService
        .create(person)
        .then(returnedPerson => {
          setPeople(people.concat(returnedPerson))
          setNewName('')
          setNewNumber('')
          notify(`Added ${person.name}`)
        })

    }
  }



  const updateEntry = (person) => {
    const personToUpdate = people.find(p => p.name === person.name)
    const id = personToUpdate.id
    const changedPerson = { ...personToUpdate, number: person.number }

    peopleService
      .update(id, changedPerson)
      .then(returnedPerson => {
        setPeople(people.map(person => person.id !== id ? person : returnedPerson))
        notify(`Updated ${changedPerson.name}`)
      })
      .catch(error => {
        notify(`Error, ${personToUpdate.name} does not exist on the server`)
      })
  }

  const deleteEntry = id => {
    const personToDelete = people.find(p => p.id === id)
    if (window.confirm(`Do you really want to delete ${personToDelete.name} ?`)) {
      peopleService
        .deleteEntry(id)
        .then(returned => {
          notify(`Deleted ${personToDelete.name}`)
        })
        .catch(error => {
          notify(`Error, ${personToDelete.name} does not exist on the server`)
        })
      setPeople(people.filter(p => p.id !== id))
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={notificationMessage} />
      <Filter filter={handleFilterChange} />

      <h3>Add new</h3>
      <PersonForm addNewEntry={addNewEntry} newName={newName} handleNameChange={handleNameChange}
        newNumber={newNumber} handleNumberChange={handleNumberChange} />
      <h2>Numbers</h2>
      {displayPeople()}
    </div>
  )
}

export default App
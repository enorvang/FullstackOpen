import React, { useState, useEffect } from 'react'
import peopleService from "./services/peopleServices"
import People from './components/People'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'


const App = () => {
    const [people, setPeople] = useState([])
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
    const [filter, setFilter] = useState('')

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

    const displayPeople = (filter.length === 0)
        ? people
        : people.filter(p => p.name.toLowerCase().includes(filter.toLowerCase()))


    const addNewEntry = (event) => {
        event.preventDefault()
        const personObject = {
            name: newName,
            number: newNumber
        }
        if (people.some(p => p.name === newName)) {
            alert(`${newNumber} already exists`)
        } else {

            peopleService
                .create(personObject)
                .then(returnedPerson => {
                    setPeople(people.concat(returnedPerson))
                    setNewName("")
                    setNewNumber("")
                })
        }
    }


        return (
            <div>
                <h2>Phonebook</h2>
                <Filter filter={handleFilterChange} />

                <h3>Add new</h3>
                <PersonForm addNewEntry={addNewEntry} newName={newName} handleNameChange={handleNameChange}
                    newNumber={newNumber} handleNumberChange={handleNumberChange} />

                <h2>Numbers</h2>
                <People people={displayPeople} />
            </div>
        )
    }

    export default App
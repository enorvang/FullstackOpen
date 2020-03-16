import React, { useState, useEffect } from "react"
import People from "./components/People"
import PersonForm from "./components/PersonForm"
import Filter from "./components/Filter"
import peopleService from "./services/peopleServices"


const App = () => {
    const [people, setPeople] = useState([])
    const [newName, setNewName] = useState("")
    const [newNumber, setNewNumber] = useState("")
    const [filter, setFilter] = useState("")

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
        const person = {
            name: newName,
            number: newNumber
        }
        if (people.some(p => p.number === newNumber)) {
            alert(`${newNumber} already exists`)

        } else if (people.some(p => p.name === newName)) {

            if (window.confirm(`${newName} is already added to the phonebook. Do you want to replace replace the old phone number with a new one?`)) {
                const personToUpdate = people.find(p => p.name === newName)
                const id = personToUpdate.id
                const changedPerson = { ...personToUpdate, number: newNumber }

                peopleService
                    .update(id, changedPerson)
                    .then(returnedPerson => {
                        setPeople(people.map(person => person.id !== id ? person : returnedPerson))
                    })
            }

        } else {
            peopleService
                .create(person)
                .then(returnedPerson => {
                    setPeople(people.concat(returnedPerson))
                    setNewName("")
                    setNewNumber("")
                })
                .catch(error => {
                    console.log(error.response)

                })
        }
    }

    const deleteEntry = id => {
        const personToDelete = people.find(p => p.id === id)
        if (window.confirm(`Do you really want to delete ${personToDelete.name} ?`)) {
            peopleService
                .deleteEntry(id)
                .then(returned => {
                    console.log(`Deleted ${personToDelete.name}`)
                })
                .catch(error => {
                    alert(`${personToDelete.name} was already deleted`)
                })
            setPeople(people.filter(p => p.id !== id))
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
            <People people={displayPeople} deleteEntry={deleteEntry} />
        </div>
    )
}

export default App
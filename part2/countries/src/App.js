import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchField from './components/SearchField'
import CountryList from './components/CountryList'
import Country from './components/Country'

const App = () => {
    const [countries, setCountries] = useState([])
    const [filter, setFilter] = useState('')

    useEffect(() => {
        axios
            .get('https://restcountries.eu/rest/v2/all')
            .then(response => {
                setCountries(response.data)
            })
    }, [])


    const handleFilterChange = (event) => {
        setFilter(event.target.value)
    }

    const countriesToShow = (filter.length === 0)
        ? countries
        : countries.filter(c => c.name.toLowerCase().includes(filter.toLowerCase()))

    const display = () => {

        if (filter.length === 0) {
            return;

        } else if (countriesToShow.length >= 10) {
            return (
                <div>Too many matches, specify your search</div>
            )

        } else if (countriesToShow.length === 1) {
            return (
                <Country country={countriesToShow[0]} />
            )

        } else {
            return (
                <CountryList countries={countriesToShow} />
            )

        }
    }

    return (
        <div>
            <SearchField filter={handleFilterChange} />
            {display()}
        </div>
    )
}

export default App;

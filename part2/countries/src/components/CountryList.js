import React, {useState} from 'react'
import Country from './Country'

const CountryList = ({ countries }) => {
    const [ countryIndex, setCountryIndex ] = useState(null)

    if(countryIndex != null) {
        return (
        <Country country={countries[countryIndex]}/>
        )
    }
    
    return (
        countries
            .map((country, i) =>
                <li key={i}>
                    {country.name} <button onClick={() => setCountryIndex(i)}>show</button>
                </li>)
    )
}
export default CountryList
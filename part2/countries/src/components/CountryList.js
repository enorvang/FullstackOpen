import React from 'react'

const CountryList = ({ countries }) => {
    
    return (
        countries
            .map((country, i) =>
                <li key={i}>
                    {country.name}
                </li>)
    )
}
export default CountryList
import React from 'react'
import Weather from './Weather'

const Country = ({ country }) => {
    return (
        <div>
            <h1>{country.name}</h1>
            <p>
                capital {country.capital}<br/>
                population {country.population}
            </p>
            <h3>languages</h3>
            <ul>
                {country.languages.map((lang, i) => 
                    <li key={i}>
                        {lang.name}
                    </li>
                )}
            </ul>
            <img src={country.flag} alt="flag" width="10%"/>
            <Weather country={country} />
        </div>
    )
}

export default Country
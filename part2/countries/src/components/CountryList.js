import React from 'react'

const Country = ({ countries }) => {
    if(countries.length >= 10){
        return (
            <div>Too many matches, specify your filter</div>
        )
    }
    else {
        return (
            countries
                .map((country, i) => 
                    <li key={i}>
                        {country.name}
                    </li>
                )
        )
    }
}

export default Country
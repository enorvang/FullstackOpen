import React from 'react';

const SearchField = ({ filter }) => {
    return (
        <div>Search: <input type="search" name="search" onChange={filter} /></div>
    )
}

export default SearchField
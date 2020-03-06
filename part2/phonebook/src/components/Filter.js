import React from 'react'

const Filter = ({ filter }) => {
    return (
      <div>Filter: <input type="search" name="filter" onChange={filter} /></div>
    )
  }

  export default Filter
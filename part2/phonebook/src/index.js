import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

const people = [
  {
    name: "Espen Norvang",
    number: "91863395"
  },
  {
    name: "Morten Sund",
    number: "12345678"
  },
  {
    name: "Ingrid Thorkildsen",
    number: "45200328"
  },
  {
    name: "Jonas Solhaug",
    number: "43243243"
  }

]

ReactDOM.render(
  <App people={people}/>,
  document.getElementById('root')
)

export default App
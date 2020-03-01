import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ( {handleClick, text }) => <button onClick={handleClick}>{text}</button>
const Header = ( {text} ) => <h1>{text}</h1>

const Statistics = (props) => {
  let value = props.value
  if(isNaN(value)){
    value = 0
  }
  return (
          <tr>
            <td>{props.text}</td> 
            <td>{value}</td> 
            <td>{props.percentage}</td>
          </tr>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [hasFeedback, setHasfeedback] = useState(false)
  const headerText = 'give feedback'
  const statsText = 'statistics'
  let total = good + neutral + bad
  let average = (good + (neutral * 0) + (bad * -1) ) / total
  let percentagePositive = (good / total) * 100

  const handleGoodClick = () => {
    setGood(good + 1)
    setHasfeedback(true)
  }

  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
    setHasfeedback(true)

  }

  const handleBadClick = () => {
    setBad(bad + 1)
    setHasfeedback(true)
  }

  return (
    <div>
      <Header text={headerText}/>
      <Button handleClick={handleGoodClick} text='good'/>
      <Button handleClick={handleNeutralClick} text='neutral'/>
      <Button handleClick={handleBadClick} text='bad'/>
      <Header text={statsText}/>
      <table>
        <tbody>
      <Statistics text="good" value={good} />
      <Statistics text="neutral" value={neutral} />
      <Statistics text="bad" value={bad} />
      <Statistics text="total" value={total} />
      <Statistics text="average" value={average} />
      <Statistics text="positive" value={percentagePositive} />
        </tbody>
      </table>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)
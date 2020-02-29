import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ( {handleClick, text }) => <button onClick={handleClick}>{text}</button>
const Header = ( {text} ) => <h1>{text}</h1>
const Statistics = (props) => {
  let good = props.good
  let neutral = props.neutral
  let bad = props.bad
  let total = good + neutral + bad
  let average = (good + (neutral * 0) + (bad * -1) ) / total
  let percentagePositive = (good / total) * 100
  if(!props.hasFeedback){
    return (
      <div>
        No feedback given
      </div>
    )
  }else {
    return (
      <div>
        good {good} <br/>
        neutral {neutral} <br/>
        bad {bad} <br/>
        total {total} <br/>
        average {average} <br/>
        positive {percentagePositive} %<br/>
      </div>
    )
  }
}

const App = () => {
  // save clicks of each button to own state
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
      <Statistics hasFeedback={hasFeedback} good={good} neutral={neutral} bad={bad}/>
      
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)
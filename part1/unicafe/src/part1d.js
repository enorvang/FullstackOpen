import React, { useState } from 'react'
import ReactDOM from 'react-dom'
/*
const Display = ({ counter }) => <div>{counter}</div>
const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>

const App1 = (props) => {
    const [ counter, setCounter ] = useState(0)
    const setToValue = (value) => setCounter(value)

   

      
    return (
      <div>
        <Display counter={counter}/>
        <Button onClick={() => setToValue(counter + 1)} text='plus'/>
        <Button onClick={() => setToValue(counter - 1 )} text='minus'/>
        <Button onClick={() => setToValue(0)} text='reset' />
    </div>
    )
  }
*/
  const History = (props) => {
    if(props.allClicks.length === 0){
      return (
        <div>
          the app is used by pressing the buttons
        </div>
      )
    }

    return (
      <div>
        button press history: {props.allClicks.join(' ')}
      </div>
    )
  }
  
const Button = ({ handleClick, text }) => <button onClick={handleClick}>{text}</button>
const Display = props => <div>{props.value}</div>

  const App2 = (props) => {
    const [left, setLeft] = useState(0)
    const [right, setRight] = useState(0)
    const [allClicks, setAll] = useState([])
    const [value, setValue] = useState(10)

    const resetBoth = () => {
      setLeft(0)
      setRight(0)
      setAll([])
    }

    const handleLeftClick = () => {
      setAll(allClicks.concat('L'))
      setLeft(left + 1)
    }

    const handleRightClick = () => {
      setAll(allClicks.concat('R'))
      setRight(right + 1)
    }

    const setToValue = (newValue) => {
      setValue(newValue)
    }

    return (
      <div>
        <div>
          {left}
          <Button handleClick={handleLeftClick} text='left'/>
          <Button handleClick={handleRightClick} text='right'/>
          {right}
          <Button handleClick={resetBoth} text='reset'/>
        </div>
        <History allClicks={allClicks}/>
        <p></p>
        <div>
        <Button handleClick={() => setToValue(1000)} text='thousand'/>
        <Button handleClick={() => setToValue(value + 1)} text='increment'/>
        <Button handleClick={() => setToValue(0)} text='reset'/>
        <Display value={value}/>
        </div>
      </div>
      
    )
  }

  ReactDOM.render(<App2 />, document.getElementById('root'))
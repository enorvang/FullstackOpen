import React, { useState } from 'react'
import ReactDOM from 'react-dom'
const Header = ( {text} ) => <h1>{text}</h1>
const Button = ( {handleClick, text }) => <button onClick={handleClick}>{text}</button>

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Uint8Array(props.anecdotes.length))
  let highestVotedIndex = votes.indexOf(Math.max(...votes))

  const generateRandomAnecdote = () => {
     setSelected(Math.floor(Math.random() * props.anecdotes.length))
  }

  const handleVote = () => {
    const copy = [...votes]
    copy[selected] += 1
    setVotes(copy)
  }

  const animals = [
      { name: "Espen", species: "dog"},
      { name: "Ingrid", species: "dog"},
      { name: "Morten", species: "giraffe"},
      { name: "Hanna", species: "apekatt"}
  ]


  return (
    <div>
        <Header text='Anecdote of the day'/>
        {props.anecdotes[selected]} <br/>
        has {votes[selected]} votes <br/>
        <Button handleClick={handleVote} text='vote'/>
        <Button handleClick={generateRandomAnecdote} text='next anecdote'/> <br/>
        <Header text='Anecdote with most votes'/>
        {props.anecdotes[highestVotedIndex]} <br/>
        has {votes[highestVotedIndex]} votes
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)
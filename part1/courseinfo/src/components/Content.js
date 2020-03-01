import React from "react"
import Part from "./Part"

const Content = (props) => {

    const { parts } = props
    
    const rows = () => parts.map(part => 
        <Part key={part.id} name={part.name} exercises={part.exercises}/>
    )
    const exercises = parts.map(p => p.exercises)
    const sum = exercises.reduce((a, b) => a + b, 0)
    
    return (
        <div>
            {rows()}
            <p>total of {sum} exercises</p>
        </div>
    )
}

export default Content
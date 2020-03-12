import React from "react"
import Part from "./Part"

const Content = (props) => {

    const { parts } = props
    
    const rows = () => parts.map(part => 
        <Part key={part.id} name={part.name} exercises={part.exercises}/>
    )
    
    const sum = parts.reduce((a, b) => a + b.exercises, 0)
    
    return (
        <div>
            {rows()}
            <p>total of {sum} exercises</p>
        </div>
    )
}

export default Content
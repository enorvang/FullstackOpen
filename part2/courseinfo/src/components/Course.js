import React from "react"
import Header from "./Header"
import Content from "./Content"

const Course = ({ course }) => {
    
    const { name } = course
    const { parts } = course
    
    return (
        <div>
            <Header text={name} />
            <Content parts={parts}/>
        </div>
    )
}

export default Course
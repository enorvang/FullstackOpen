import React from 'react'
import Course from './components/Course'

const App = ({ courses }) => {

    const displayedCourses = () => courses.map(course =>
        <Course key={course.id} course={course}/>
        )
    return (
      <div>
        {displayedCourses()}
      </div>
    )
  }

export default App
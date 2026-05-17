import React from 'react'
import { useParams } from 'react-router-dom'

const courses=[
  {id:1, title:"Javascript", teacher:"Gevorg"},
  {id:2, title:"Css Basics", teacher:"Ani"},
  {id:3, title:"Python", teacher:"Davit"},
  {id:4, title:"SQL/PHP", teacher:"Anna"},
  {id:5, title:"HTML/CSS", teacher:"Armen"}
  ]
const CourseDetails = () => {
    const {id}=useParams()
    const selectedcourse=courses.find((sel)=>sel.id===Number(id))
  return (
    <div>
    <h2>{selectedcourse.title}</h2>
    <h3>Teacher:{selectedcourse.teacher}</h3>
    </div>
  )
}

export default CourseDetails
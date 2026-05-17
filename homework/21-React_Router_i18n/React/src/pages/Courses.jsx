import React from 'react'
import CourseCard from '../components/CourseCard'
import LanguageSwitcher from '../components/LanguageSwitcher'
import { changeLanguage } from 'i18next'

const Courses = () => {
const courses=[
  {id:1, title:"Javascript", teacher:"Gevorg"},
  {id:2, title:"Css Basics", teacher:"Ani"},
  {id:3, title:"Python", teacher:"Davit"},
  {id:4, title:"SQL/PHP", teacher:"Anna"},
  {id:5, title:"HTML/CSS", teacher:"Armen"}
  ]
  return (
    <>
    <h1>Courses</h1>
    {courses.map((course)=>(
<CourseCard key={course.id} {...course}/>
    )
  )
    }
    </>
  )
}

export default Courses
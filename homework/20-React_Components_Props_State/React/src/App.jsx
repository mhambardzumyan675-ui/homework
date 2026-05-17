import {useState} from 'react'
import StudentForm from './components/StudentForm/StudentForm'
import StudentList from './components/StudentList/StudentList'

const App = () => {

const [students,setStudents]=useState([])

const colors=["red","blue","yellow","green","orange"]

const addStudents=(studentsData)=>{

const randomColor=colors[Math.floor(Math.random()*colors.length)]
const newStudent={
  id:Date.now(),
  ...studentsData,
  color:randomColor,
}
setStudents([...students,newStudent])
}
const deletedStudents=(id)=>{
const filteredStudents=students.filter((student)=>(student.id!==id))

setStudents(filteredStudents)
}


  return (
    <div>
    <StudentForm addStudents={addStudents}/>
    <StudentList students={students} onDelete={deletedStudents}/> 
    </div>
  )
}
export default App
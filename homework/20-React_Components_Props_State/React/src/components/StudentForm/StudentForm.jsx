import {useState} from 'react'
import "./StudentForm.css"

const StudentForm = ({addStudents}) => {

  const [name,setName]=useState("")
  const [age,setAge]=useState("")
  const [profession,setProfession]=useState("")

  const handleSubmit=(e)=>{
    e.preventDefault()
  
  const newStudent={
    name,
    age,
    profession,
  }
  addStudents(newStudent)
  setName("")
  setAge("")
  setProfession("")  
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" required placeholder="Name" value={name} onChange={(e)=>setName(e.target.value)}></input>
      <input type="number" required placeholder="Age"  min="15" max="30" value={age} onChange={(e)=>setAge(e.target.value)}></input>
      <select required  value={profession} onChange={(e)=>setProfession(e.target.value)}>
        <option value="" disabled>Choose profession</option>
  <option>Frontend</option>
  <option>Backend</option>
  <option>Cybersecurity</option>
  <option>Full-Stack</option>
  <option>Software Engineer</option>
      </select>
<button type="submit" >Add Student</button>
    </form>
  )
}

export default StudentForm
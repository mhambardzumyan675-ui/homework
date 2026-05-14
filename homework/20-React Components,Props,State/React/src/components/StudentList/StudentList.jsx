import StudentCard from "../StudentCard/StudentCard"
import "./StudentList.css"

const StudentList = ({students,onDelete}) => {
  return (
    <div >
{students.map((student)=>(
<StudentCard
key={student.id}
id={student.id}
name={student.name}
age={student.age}
profession={student.profession}
color={student.color}
onDelete={onDelete}
/>
))}
    </div>
  )
}

export default StudentList
import "./StudentCard.css" 

const StudentCard = ({
    id,
    name,
    age,
    profession,
    color,
    onDelete,
}) => {
  return (
    <div style={{backgroundColor:color}}>
        <h2>Name:{name}</h2>
        <p>Age:{age}</p>
        <p>Profession:{profession}</p>
 <button onClick={()=>onDelete(id)}>
  Delete</button>
    </div>
  )
}

export default StudentCard
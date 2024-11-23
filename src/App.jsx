/* eslint-disable react/jsx-key */
import { useState } from "react";

function App() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

// Submit  functionalities
  function handleSubmit(e) {
    e.preventDefault(); 
    const newTask = {
      id: Math.trunc(Math.random() * 10000),
      task: task, 
      isSelected: false,
    };
    setTasks([...tasks, newTask]); 
    setTask('');
    
  }
  // Delete Functionalities
  function Delete(id){
    let deleteTasks=tasks.filter((e)=>e.id!=id)
      
      setTasks(deleteTasks)
    
  }
  // Edit Functionalities
  // function Edit(id){
  //   let editedTask=tasks.map((e)=>{
  //     if(e.id==id){
        
  //     }
  //   })

  // }
   

  return (
    <>
      <div style={{ backgroundColor: "purple", padding: "10px" }}>
        <input
          type="text"
          placeholder="Write your task here"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button onClick={handleSubmit}>ADD</button>
      </div>
      {
        tasks.map((e) => (
          <div
           
            style={{ height: "100px", width: "100px", border: "2px solid black", margin: "10px" }}
          >
            <div>{e.task}</div>
            <button onClick={()=>Delete(e.id)} >Delete</button>
            <button>Edit</button>
          </div>
        ))
      }
    </>
  );
}

export default App;
